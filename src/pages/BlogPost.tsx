
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Tag, User, ArrowLeft, Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { toast } from "sonner";
import RatingStars from "@/components/RatingStars";
import { useAuth } from "@/hooks/useAuth";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  published_at: string;
  category: string;
  tags: string[];
  cover_image: string;
  slug: string; // Added the missing slug property
  author: {
    full_name: string;
  } | null;
}

interface AverageRating {
  average_rating: number;
  total_ratings: number;
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);
  const [averageRating, setAverageRating] = useState<AverageRating | null>(null);
  const [userRating, setUserRating] = useState<number | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data, error } = await supabase
          .from('blog_posts')
          .select(`
            *,
            author:author_id(full_name)
          `)
          .eq('slug', slug)
          .eq('is_published', true)
          .single();

        if (error) throw error;

        setPost(data as unknown as BlogPost);
        
        // Fetch related posts from the same category
        if (data) {
          fetchRelatedPosts(data.category, data.id);
          fetchRatings(data.id);
          if (user) {
            fetchUserRating(data.id);
          }
        }
        
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blog post:", error);
        setLoading(false);
        toast.error("No se pudo cargar el artículo");
        navigate("/blog");
      }
    };

    if (slug) {
      fetchPost();
    }
  }, [slug, navigate, user]);

  const fetchRelatedPosts = async (category: string, currentPostId: string) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select(`
          *,
          author:author_id(full_name)
        `)
        .eq('category', category)
        .eq('is_published', true)
        .neq('id', currentPostId)
        .limit(3);

      if (error) throw error;

      setRelatedPosts(data as unknown as BlogPost[]);
    } catch (error) {
      console.error("Error fetching related posts:", error);
    }
  };

  const fetchRatings = async (postId: string) => {
    try {
      const { data, error } = await supabase
        .from('destination_ratings')
        .select('*')
        .eq('destination_type', 'blog')
        .eq('destination_id', postId)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is the error code for no rows returned
        throw error;
      }

      if (data) {
        setAverageRating(data as unknown as AverageRating);
      }
    } catch (error) {
      console.error("Error fetching ratings:", error);
    }
  };

  const fetchUserRating = async (postId: string) => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('ratings')
        .select('rating')
        .eq('destination_type', 'blog')
        .eq('destination_id', postId)
        .eq('user_id', user.id)
        .single();

      if (error && error.code !== 'PGRST116') { // PGRST116 is the error code for no rows returned
        throw error;
      }

      if (data) {
        setUserRating(data.rating);
      }
    } catch (error) {
      console.error("Error fetching user rating:", error);
    }
  };

  const handleRating = async (rating: number) => {
    if (!user) {
      toast.error("Debes iniciar sesión para calificar");
      return;
    }

    if (!post) return;

    try {
      // Check if user has already rated this post
      const { data: existingRating, error: checkError } = await supabase
        .from('ratings')
        .select('id')
        .eq('destination_type', 'blog')
        .eq('destination_id', post.id)
        .eq('user_id', user.id)
        .single();

      if (checkError && checkError.code !== 'PGRST116') {
        throw checkError;
      }

      let ratingResult;
      
      if (existingRating) {
        // Update existing rating
        ratingResult = await supabase
          .from('ratings')
          .update({ 
            rating, 
            updated_at: new Date().toISOString() 
          })
          .eq('id', existingRating.id);
      } else {
        // Insert new rating
        ratingResult = await supabase
          .from('ratings')
          .insert({ 
            user_id: user.id,
            destination_type: 'blog',
            destination_id: post.id,
            rating
          });
      }

      if (ratingResult.error) throw ratingResult.error;

      setUserRating(rating);
      fetchRatings(post.id);
      toast.success("¡Gracias por tu valoración!");
    } catch (error: any) {
      console.error("Error submitting rating:", error);
      toast.error("Error al guardar tu valoración");
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-12"></div>
          <div className="h-96 bg-gray-200 rounded mb-8"></div>
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold">Artículo no encontrado</h2>
        <Button 
          className="mt-4 bg-miami-coral hover:bg-miami-turquoise"
          onClick={() => navigate("/blog")}
        >
          <ArrowLeft className="mr-2" />
          Volver al blog
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Button 
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/blog")}
      >
        <ArrowLeft className="mr-2" />
        Volver al blog
      </Button>
      
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        
        <div className="flex flex-wrap items-center text-gray-500 mb-8 gap-4">
          <div className="flex items-center">
            <User size={18} className="mr-2" />
            <span>{post.author?.full_name || "Autor Desconocido"}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={18} className="mr-2" />
            <span>{format(new Date(post.published_at), 'PP', {locale: es})}</span>
          </div>
          <div className="flex items-center">
            <Tag size={18} className="mr-2" />
            <span>{post.category}</span>
          </div>
          {averageRating && (
            <div className="flex items-center">
              <Star size={18} className="mr-2 text-yellow-500" />
              <span>{averageRating.average_rating} ({averageRating.total_ratings} valoraciones)</span>
            </div>
          )}
        </div>
        
        <div className="rounded-lg overflow-hidden mb-8">
          <img 
            src={post.cover_image || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932"} 
            alt={post.title}
            className="w-full h-80 object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        
        <div className="border-t border-gray-200 pt-6 mb-12">
          <div className="flex flex-col items-center mb-6">
            <h3 className="text-xl font-semibold mb-4">¿Te gustó este artículo?</h3>
            <RatingStars 
              rating={userRating || 0} 
              onRating={handleRating} 
              size={30}
              editable={!!user}
            />
            {!user && (
              <p className="text-sm text-gray-500 mt-2">
                Inicia sesión para calificar este artículo
              </p>
            )}
          </div>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {relatedPosts.length > 0 && (
          <div className="border-t border-gray-200 pt-8">
            <h3 className="text-2xl font-bold mb-6">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map(relatedPost => (
                <div 
                  key={relatedPost.id} 
                  className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => navigate(`/blog/${relatedPost.slug}`)}
                >
                  <div className="h-40 overflow-hidden">
                    <img 
                      src={relatedPost.cover_image || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932"} 
                      alt={relatedPost.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold mb-2 line-clamp-2">{relatedPost.title}</h4>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar size={14} className="mr-1" />
                      <span>{format(new Date(relatedPost.published_at), 'PP', {locale: es})}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPost;
