
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Avatar } from "@/components/ui/avatar";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Comment {
  id: string;
  user_id: string;
  content: string;
  created_at: string;
  user: {
    full_name: string;
    avatar_url: string;
  } | null;
}

interface BlogCommentsProps {
  postId: string;
  comments: Comment[];
  onNewComment: () => void;
}

const BlogComments = ({ postId, comments, onNewComment }: BlogCommentsProps) => {
  const { user } = useAuth();
  const [newComment, setNewComment] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitComment = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user) {
      toast.error("Debes iniciar sesión para comentar");
      return;
    }

    if (!newComment.trim()) {
      toast.error("El comentario no puede estar vacío");
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('blog_comments')
        .insert({
          post_id: postId,
          user_id: user.id,
          content: newComment.trim()
        });

      if (error) throw error;
      
      setNewComment("");
      toast.success("Comentario añadido con éxito");
      onNewComment();
    } catch (error: any) {
      console.error("Error adding comment:", error);
      toast.error("No se pudo añadir el comentario");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mt-12">
      <h3 className="text-2xl font-bold mb-6">Comentarios ({comments.length})</h3>
      
      {user && (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <Textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Escribe tu comentario..."
            className="mb-4"
          />
          <Button 
            type="submit" 
            className="bg-miami-coral hover:bg-miami-turquoise"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Publicar comentario"}
          </Button>
        </form>
      )}
      
      {!user && (
        <div className="bg-gray-50 p-4 rounded-md mb-8 text-center">
          <p className="text-gray-600">
            Inicia sesión para dejar un comentario
          </p>
        </div>
      )}
      
      {comments.length > 0 ? (
        <div className="space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-200 pb-6">
              <div className="flex items-center mb-3">
                <Avatar className="h-10 w-10 mr-3">
                  <img 
                    src={comment.user?.avatar_url || "https://api.dicebear.com/7.x/initials/svg?seed=" + comment.user?.full_name} 
                    alt={comment.user?.full_name || "Usuario"}
                  />
                </Avatar>
                <div>
                  <p className="font-medium">{comment.user?.full_name || "Usuario anónimo"}</p>
                  <p className="text-sm text-gray-500">
                    {new Date(comment.created_at).toLocaleDateString('es-ES', { 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </p>
                </div>
              </div>
              <p className="text-gray-700">{comment.content}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-8 bg-gray-50 rounded-md">
          <p className="text-gray-500">No hay comentarios todavía. ¡Sé el primero en comentar!</p>
        </div>
      )}
    </div>
  );
};

export default BlogComments;
