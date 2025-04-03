
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Calendar, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { es } from "date-fns/locale";

interface Experience {
  id: string;
  title: string;
  description: string;
  state_id: string;
  image_url: string | null;
  price_range: string | null;
  created_at: string;
  category: {
    name: string;
  } | null;
  average_rating?: number;
  total_ratings?: number;
}

interface RelatedExperiencesProps {
  category?: string;
  stateId?: string;
  currentId?: string;
  limit?: number;
}

const RelatedExperiences = ({ 
  category, 
  stateId, 
  currentId, 
  limit = 3 
}: RelatedExperiencesProps) => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        let query = supabase
          .from('experiences')
          .select(`
            *,
            category:category_id(name),
            average_rating:destination_ratings(average_rating),
            total_ratings:destination_ratings(total_ratings)
          `);

        // Apply filters if provided
        if (stateId) {
          query = query.eq('state_id', stateId);
        }
        
        if (currentId) {
          query = query.neq('id', currentId);
        }

        query = query.limit(limit);

        const { data, error } = await query;

        if (error) throw error;

        // Filter by category if provided (we do this client-side since category is nested)
        let filteredData = data as unknown as Experience[];
        if (category && filteredData.length > 0) {
          filteredData = filteredData.filter(exp => 
            exp.category?.name.toLowerCase() === category.toLowerCase()
          );
        }

        setExperiences(filteredData);
      } catch (error) {
        console.error("Error fetching related experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, [category, stateId, currentId, limit]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Array.from({ length: limit }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-48 bg-gray-200 rounded-t-lg"></div>
            <CardContent className="p-4">
              <div className="h-6 bg-gray-200 rounded mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </CardContent>
            <CardFooter>
              <div className="h-10 bg-gray-200 rounded w-full"></div>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }

  if (experiences.length === 0) {
    return null;
  }

  return (
    <div className="mt-8">
      <h3 className="text-2xl font-bold mb-6">Experiencias relacionadas</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {experiences.map(experience => (
          <Card 
            key={experience.id} 
            className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => navigate(`/experience/${experience.id}`)}
          >
            <div className="h-48 overflow-hidden">
              <img 
                src={experience.image_url || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932"} 
                alt={experience.title}
                className="w-full h-full object-cover transition-transform hover:scale-105"
              />
            </div>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="bg-miami-turquoise/20 text-miami-turquoise text-xs px-2 py-1 rounded-full">
                  {experience.category?.name || "Sin categoría"}
                </span>
                {experience.average_rating && (
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm">{experience.average_rating.toFixed(1)}</span>
                  </div>
                )}
              </div>
              <h4 className="font-bold text-lg mb-2 line-clamp-1">{experience.title}</h4>
              <div className="flex items-center text-gray-500 text-sm mb-2">
                <MapPin className="w-4 h-4 mr-1" />
                <span>{experience.state_id}</span>
              </div>
              <p className="text-gray-600 text-sm line-clamp-2">{experience.description}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center text-gray-500 text-xs">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{format(new Date(experience.created_at), 'PP', {locale: es})}</span>
                </div>
                {experience.price_range && (
                  <span className="text-miami-coral font-medium">{experience.price_range}</span>
                )}
              </div>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mt-6 text-center">
        <Button 
          onClick={() => navigate('/experiences')}
          variant="outline" 
          className="border-miami-coral text-miami-coral hover:bg-miami-coral hover:text-white"
        >
          Ver todas las experiencias
        </Button>
      </div>
    </div>
  );
};

export default RelatedExperiences;
