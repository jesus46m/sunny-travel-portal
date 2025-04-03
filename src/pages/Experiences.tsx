
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Star, Filter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import ExperienceSearch from "@/components/ExperienceSearch";

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
    id: string;
  } | null;
  average_rating?: number;
  total_ratings?: number;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

interface State {
  id: string;
  name: string;
}

const Experiences = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [searchParams, setSearchParams] = useState<{
    term: string;
    category: string | undefined;
    state: string | undefined;
  }>({
    term: "",
    category: undefined,
    state: undefined
  });

  // These would typically come from your database
  // For now, we'll hardcode some popular US states
  const popularStates = [
    { id: "florida", name: "Florida" },
    { id: "california", name: "California" },
    { id: "new-york", name: "New York" },
    { id: "texas", name: "Texas" },
    { id: "nevada", name: "Nevada" },
    { id: "hawaii", name: "Hawaii" }
  ];

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('experience_categories')
          .select('*')
          .order('name');

        if (error) throw error;
        
        setCategories(data as Category[]);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
    setStates(popularStates);
  }, []);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const { data, error } = await supabase
          .from('experiences')
          .select(`
            *,
            category:category_id(name, id)
          `)
          .order('created_at', { ascending: false });

        if (error) throw error;

        // Fetch ratings for each experience
        const experiencesWithRatings = await Promise.all(
          (data as Experience[]).map(async (experience) => {
            try {
              const { data: ratingData, error: ratingError } = await supabase
                .from('destination_ratings')
                .select('*')
                .eq('destination_type', 'experience')
                .eq('destination_id', experience.id)
                .single();

              if (ratingError && ratingError.code !== 'PGRST116') {
                throw ratingError;
              }

              if (ratingData) {
                return {
                  ...experience,
                  average_rating: ratingData.average_rating,
                  total_ratings: ratingData.total_ratings
                };
              }

              return experience;
            } catch (error) {
              console.error(`Error fetching ratings for experience ${experience.id}:`, error);
              return experience;
            }
          })
        );

        setExperiences(experiencesWithRatings);
        setFilteredExperiences(experiencesWithRatings);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching experiences:", error);
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  const handleSearch = (params: { term: string; category?: string; state?: string }) => {
    setSearchParams({
      term: params.term,
      category: params.category,
      state: params.state
    });
    
    let filtered = experiences;
    
    // Filter by search term
    if (params.term) {
      const term = params.term.toLowerCase();
      filtered = filtered.filter(exp => 
        exp.title.toLowerCase().includes(term) ||
        exp.description.toLowerCase().includes(term) ||
        (exp.category?.name.toLowerCase().includes(term))
      );
    }
    
    // Filter by category
    if (params.category) {
      filtered = filtered.filter(exp => exp.category?.id === params.category);
    }
    
    // Filter by state
    if (params.state) {
      filtered = filtered.filter(exp => exp.state_id.toLowerCase() === params.state.toLowerCase());
    }
    
    setFilteredExperiences(filtered);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Experiencias en Estados Unidos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre experiencias únicas en los diversos estados de USA, desde aventuras al aire libre hasta excursiones culturales
        </p>
      </div>

      {/* Search and filter section */}
      <ExperienceSearch 
        categories={categories} 
        states={states} 
        onSearch={handleSearch} 
        isSearching={loading} 
      />

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Card key={i} className="animate-pulse">
              <div className="h-64 bg-gray-200 rounded-t-lg"></div>
              <CardContent className="p-4">
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
              </CardContent>
              <CardFooter className="p-4">
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((experience) => (
            <Card 
              key={experience.id} 
              className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer h-full flex flex-col"
              onClick={() => navigate(`/experience/${experience.id}`)}
            >
              <div className="h-64 overflow-hidden">
                <img 
                  src={experience.image_url || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932"} 
                  alt={experience.title}
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                />
              </div>
              <CardContent className="p-4 flex-grow">
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
                <h3 className="font-bold text-lg mb-2">{experience.title}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span>{experience.state_id}</span>
                </div>
                <p className="text-gray-600 line-clamp-3">{experience.description}</p>
              </CardContent>
              <CardFooter className="p-4">
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
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">No se encontraron experiencias</h3>
          <p className="text-gray-500 mb-6">Prueba con otros filtros o consulta todas las experiencias disponibles</p>
          <Button 
            onClick={() => {
              setSearchParams({ term: "", category: undefined, state: undefined });
              setFilteredExperiences(experiences);
            }}
            className="bg-miami-coral hover:bg-miami-turquoise"
          >
            Ver todas las experiencias
          </Button>
        </div>
      )}
      
      {/* Categories section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Explorar por categoría</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map(category => (
            <Button
              key={category.id}
              variant="outline"
              className="h-auto py-6 flex flex-col items-center justify-center gap-2 hover:border-miami-coral hover:text-miami-coral"
              onClick={() => handleSearch({ term: "", category: category.id })}
            >
              <span className="text-lg font-medium">{category.name}</span>
            </Button>
          ))}
        </div>
      </div>
      
      {/* Popular destinations section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-center mb-8">Destinos populares</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {states.map(state => (
            <Button
              key={state.id}
              variant="outline"
              className="h-auto py-4 flex flex-col items-center justify-center gap-2 hover:border-miami-turquoise hover:text-miami-turquoise"
              onClick={() => handleSearch({ term: "", category: undefined, state: state.id })}
            >
              <span className="font-medium">{state.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiences;
