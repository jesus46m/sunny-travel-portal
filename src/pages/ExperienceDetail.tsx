
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, Clock, MapPin, Tag, User, Star, DollarSign } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import RatingStars from "@/components/RatingStars";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  icon: string | null;
}

interface Experience {
  id: string;
  title: string;
  description: string;
  state_id: string;
  image_url: string | null;
  price_range: string | null;
  category: Category;
}

interface AverageRating {
  average_rating: number;
  total_ratings: number;
}

interface RelatedExperience {
  id: string;
  title: string;
  image_url: string | null;
  state_id: string;
}

const ExperienceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [experience, setExperience] = useState<Experience | null>(null);
  const [relatedExperiences, setRelatedExperiences] = useState<RelatedExperience[]>([]);
  const [averageRating, setAverageRating] = useState<AverageRating | null>(null);
  const [userRating, setUserRating] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [stateName, setStateName] = useState("");

  const stateData = [
    { id: "alabama", name: "Alabama" },
    { id: "alaska", name: "Alaska" },
    { id: "arizona", name: "Arizona" },
    { id: "arkansas", name: "Arkansas" },
    { id: "california", name: "California" },
    { id: "colorado", name: "Colorado" },
    { id: "connecticut", name: "Connecticut" },
    { id: "delaware", name: "Delaware" },
    { id: "florida", name: "Florida" },
    { id: "georgia", name: "Georgia" },
    { id: "hawaii", name: "Hawaii" },
    { id: "idaho", name: "Idaho" },
    { id: "illinois", name: "Illinois" },
    { id: "new-york", name: "New York" },
    { id: "texas", name: "Texas" },
    { id: "washington", name: "Washington" }
  ];

  useEffect(() => {
    if (!id) return;
    
    const fetchExperience = async () => {
      try {
        const { data, error } = await supabase
          .from('experiences')
          .select(`
            *,
            category:category_id(*)
          `)
          .eq('id', id)
          .single();
          
        if (error) throw error;
        
        setExperience(data as unknown as Experience);
        
        // Find state name
        const state = stateData.find(s => s.id === data.state_id);
        if (state) {
          setStateName(state.name);
        }
        
        // Fetch ratings
        fetchRatings(data.id);
        
        // Fetch user rating if logged in
        if (user) {
          fetchUserRating(data.id);
        }
        
        // Fetch related experiences
        fetchRelatedExperiences(data.category_id, data.id);
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching experience:', error);
        setLoading(false);
        toast.error("No se pudo cargar la experiencia");
        navigate("/experiences");
      }
    };
    
    fetchExperience();
  }, [id, navigate, user]);
  
  const fetchRatings = async (experienceId: string) => {
    try {
      const { data, error } = await supabase
        .from('destination_ratings')
        .select('*')
        .eq('destination_type', 'experience')
        .eq('destination_id', experienceId)
        .single();
        
      if (error && error.code !== 'PGRST116') { // PGRST116 is the error code for no rows returned
        throw error;
      }
      
      if (data) {
        setAverageRating(data as unknown as AverageRating);
      }
    } catch (error) {
      console.error('Error fetching ratings:', error);
    }
  };
  
  const fetchUserRating = async (experienceId: string) => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('ratings')
        .select('rating')
        .eq('destination_type', 'experience')
        .eq('destination_id', experienceId)
        .eq('user_id', user.id)
        .single();
        
      if (error && error.code !== 'PGRST116') {
        throw error;
      }
      
      if (data) {
        setUserRating(data.rating);
      }
    } catch (error) {
      console.error('Error fetching user rating:', error);
    }
  };
  
  const fetchRelatedExperiences = async (categoryId: string, currentId: string) => {
    try {
      const { data, error } = await supabase
        .from('experiences')
        .select('id, title, image_url, state_id')
        .eq('category_id', categoryId)
        .neq('id', currentId)
        .limit(3);
        
      if (error) throw error;
      
      setRelatedExperiences(data as RelatedExperience[]);
    } catch (error) {
      console.error('Error fetching related experiences:', error);
    }
  };
  
  const handleRating = async (rating: number) => {
    if (!user) {
      toast.error("Debes iniciar sesión para calificar");
      return;
    }
    
    if (!experience) return;
    
    try {
      // Check if user has already rated this experience
      const { data: existingRating, error: checkError } = await supabase
        .from('ratings')
        .select('id')
        .eq('destination_type', 'experience')
        .eq('destination_id', experience.id)
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
            destination_type: 'experience',
            destination_id: experience.id,
            rating
          });
      }
      
      if (ratingResult.error) throw ratingResult.error;
      
      setUserRating(rating);
      fetchRatings(experience.id);
      toast.success("¡Gracias por tu valoración!");
    } catch (error: any) {
      console.error('Error submitting rating:', error);
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

  if (!experience) {
    return (
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold">Experiencia no encontrada</h2>
        <Button 
          className="mt-4 bg-miami-coral hover:bg-miami-turquoise"
          onClick={() => navigate("/experiences")}
        >
          <ArrowLeft className="mr-2" />
          Volver a experiencias
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Button 
        variant="ghost"
        className="mb-6"
        onClick={() => navigate("/experiences")}
      >
        <ArrowLeft className="mr-2" />
        Volver a experiencias
      </Button>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="rounded-lg overflow-hidden mb-6">
            <img 
              src={experience.image_url || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932"} 
              alt={experience.title}
              className="w-full h-80 object-cover"
            />
          </div>
          
          <h1 className="text-3xl font-bold mb-4">{experience.title}</h1>
          
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center text-gray-600">
              <MapPin size={18} className="mr-1 text-miami-coral" />
              <span>{stateName}</span>
            </div>
            
            <div className="flex items-center text-gray-600">
              <Tag size={18} className="mr-1 text-miami-coral" />
              <span>{experience.category.name}</span>
            </div>
            
            {experience.price_range && (
              <div className="flex items-center text-gray-600">
                <DollarSign size={18} className="mr-1 text-miami-coral" />
                <span>{experience.price_range}</span>
              </div>
            )}
          </div>
          
          <div className="prose max-w-none mb-8">
            <p className="text-gray-700">{experience.description}</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-xl font-semibold mb-4">¿Has visitado este lugar?</h3>
            <div className="flex items-center gap-4">
              <RatingStars 
                rating={userRating} 
                onRating={handleRating} 
                editable={!!user} 
                size={28}
              />
              
              {averageRating && (
                <span className="text-sm text-gray-500">
                  ({averageRating.average_rating.toFixed(1)}/5, {averageRating.total_ratings} valoraciones)
                </span>
              )}
              
              {!user && (
                <span className="text-sm text-gray-500">
                  Inicia sesión para calificar
                </span>
              )}
            </div>
          </div>
          
          {relatedExperiences.length > 0 && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Experiencias relacionadas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedExperiences.map(related => (
                  <Card 
                    key={related.id}
                    className="overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                    onClick={() => navigate(`/experience/${related.id}`)}
                  >
                    <div className="h-40 overflow-hidden">
                      <img 
                        src={related.image_url || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932"} 
                        alt={related.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-medium">{related.title}</h4>
                      <div className="flex items-center text-sm text-gray-500 mt-1">
                        <MapPin size={14} className="mr-1" />
                        {stateData.find(s => s.id === related.state_id)?.name || related.state_id}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="lg:col-span-1">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Reservar esta experiencia</h3>
              <p className="text-gray-600 mb-6">Esta es una demostración. En una aplicación real, aquí podrías incluir un formulario de reserva.</p>
              <Button className="w-full bg-miami-coral hover:bg-miami-turquoise mb-4">
                Reservar ahora
              </Button>
              <div className="text-sm text-gray-500 text-center">
                Función de demostración - no hace reservas reales
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ExperienceDetail;
