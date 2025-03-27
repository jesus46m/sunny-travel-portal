
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import RatingStars from "@/components/RatingStars";
import { useAuth } from "@/hooks/useAuth";
import { toast } from "sonner";

interface Photo {
  id: string;
  title: string;
  description: string | null;
  image_url: string;
  state_id: string;
}

interface GalleryProps {
  stateId: string;
}

interface DestinationRating {
  average_rating: number;
  total_ratings: number;
}

const StateGallery = ({ stateId }: GalleryProps) => {
  const { user } = useAuth();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [averageRating, setAverageRating] = useState<DestinationRating | null>(null);
  const [userRating, setUserRating] = useState<number>(0);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery_photos')
          .select('*')
          .eq('state_id', stateId)
          .order('uploaded_at', { ascending: false });
          
        if (error) throw error;
        
        setPhotos(data as Photo[]);
        setLoading(false);
        
        // Fetch average rating for the state
        fetchStateRating();
        
        // If user is logged in, fetch their rating
        if (user) {
          fetchUserRating();
        }
      } catch (error) {
        console.error('Error fetching photos:', error);
        setLoading(false);
      }
    };
    
    fetchPhotos();
  }, [stateId, user]);
  
  const fetchStateRating = async () => {
    try {
      const { data, error } = await supabase
        .from('destination_ratings')
        .select('*')
        .eq('destination_type', 'state')
        .eq('destination_id', stateId)
        .single();
        
      if (error && error.code !== 'PGRST116') { // PGRST116 is the error code for no rows returned
        throw error;
      }
      
      if (data) {
        setAverageRating(data as unknown as DestinationRating);
      }
    } catch (error) {
      console.error('Error fetching state rating:', error);
    }
  };
  
  const fetchUserRating = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('ratings')
        .select('rating')
        .eq('destination_type', 'state')
        .eq('destination_id', stateId)
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
  
  const handleRating = async (rating: number) => {
    if (!user) {
      toast.error("Debes iniciar sesión para calificar");
      return;
    }
    
    try {
      // Check if user has already rated this state
      const { data: existingRating, error: checkError } = await supabase
        .from('ratings')
        .select('id')
        .eq('destination_type', 'state')
        .eq('destination_id', stateId)
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
            destination_type: 'state',
            destination_id: stateId,
            rating
          });
      }
      
      if (ratingResult.error) throw ratingResult.error;
      
      setUserRating(rating);
      fetchStateRating();
      toast.success("¡Gracias por tu valoración!");
    } catch (error: any) {
      console.error('Error submitting rating:', error);
      toast.error("Error al guardar tu valoración");
    }
  };

  const openPhotoModal = (photo: Photo, index: number) => {
    setSelectedPhoto(photo);
    setCurrentIndex(index);
  };

  const closePhotoModal = () => {
    setSelectedPhoto(null);
  };

  const nextPhoto = () => {
    if (photos.length > 0) {
      const newIndex = (currentIndex + 1) % photos.length;
      setCurrentIndex(newIndex);
      setSelectedPhoto(photos[newIndex]);
    }
  };

  const prevPhoto = () => {
    if (photos.length > 0) {
      const newIndex = (currentIndex - 1 + photos.length) % photos.length;
      setCurrentIndex(newIndex);
      setSelectedPhoto(photos[newIndex]);
    }
  };

  if (loading) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Galería de fotos</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Skeleton key={item} className="aspect-square rounded-md" />
          ))}
        </div>
      </div>
    );
  }

  if (photos.length === 0) {
    return (
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Galería de fotos</h2>
        <div className="text-center py-12 bg-gray-50 rounded-md">
          <p className="text-gray-500">No hay fotos disponibles para este estado</p>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Galería de fotos</h2>
        <div className="flex items-center gap-3">
          {averageRating && (
            <div className="flex items-center">
              <RatingStars rating={averageRating.average_rating} editable={false} size={18} />
              <span className="ml-2 text-sm text-gray-500">
                ({averageRating.average_rating.toFixed(1)}, {averageRating.total_ratings} votos)
              </span>
            </div>
          )}
        </div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {photos.map((photo, index) => (
          <div 
            key={photo.id} 
            className="aspect-square rounded-md overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
            onClick={() => openPhotoModal(photo, index)}
          >
            <img 
              src={photo.image_url} 
              alt={photo.title} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      <div className="mt-6 flex justify-center">
        <div className="flex flex-col items-center">
          <p className="mb-2 font-medium">¿Te gusta este destino?</p>
          <RatingStars 
            rating={userRating} 
            onRating={handleRating} 
            editable={!!user} 
          />
          {!user && (
            <p className="text-sm text-gray-500 mt-2">Inicia sesión para calificar</p>
          )}
        </div>
      </div>

      <Dialog open={!!selectedPhoto} onOpenChange={(open) => !open && closePhotoModal()}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-black/90">
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute top-2 right-2 z-10 text-white hover:bg-black/20 rounded-full"
              onClick={closePhotoModal}
            >
              <X />
            </Button>
            
            <div className="relative flex justify-center items-center h-[80vh]">
              {selectedPhoto && (
                <img 
                  src={selectedPhoto.image_url} 
                  alt={selectedPhoto.title} 
                  className="max-h-full max-w-full object-contain"
                />
              )}
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  prevPhoto();
                }}
              >
                <ArrowLeft />
              </Button>
              
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/20 rounded-full"
                onClick={(e) => {
                  e.stopPropagation();
                  nextPhoto();
                }}
              >
                <ArrowRight />
              </Button>
            </div>
            
            {selectedPhoto && selectedPhoto.title && (
              <div className="bg-black/70 p-4 absolute bottom-0 w-full text-white">
                <h3 className="font-bold text-lg">{selectedPhoto.title}</h3>
                {selectedPhoto.description && (
                  <p className="text-gray-300 text-sm">{selectedPhoto.description}</p>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default StateGallery;
