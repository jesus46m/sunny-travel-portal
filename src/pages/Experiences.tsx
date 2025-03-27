
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, MapPin, Star, Filter } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import RatingStars from "@/components/RatingStars";
import { useNavigate } from "react-router-dom";

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
  average_rating?: number;
  total_ratings?: number;
}

interface State {
  id: string;
  name: string;
}

const Experiences = () => {
  const navigate = useNavigate();
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [filteredExperiences, setFilteredExperiences] = useState<Experience[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [states, setStates] = useState<State[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedState, setSelectedState] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState<string | null>(null);

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
    const fetchCategories = async () => {
      try {
        const { data, error } = await supabase
          .from('experience_categories')
          .select('*')
          .order('name');
          
        if (error) throw error;
        
        setCategories(data as Category[]);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
    setStates(stateData.sort((a, b) => a.name.localeCompare(b.name)));
    
    const fetchExperiences = async () => {
      try {
        const { data, error } = await supabase
          .from('experiences')
          .select(`
            *,
            category:category_id(*)
          `)
          .order('title');
          
        if (error) throw error;
        
        // Get ratings for each experience
        const experiencesWithRatings = await Promise.all(
          data.map(async (experience) => {
            const { data: ratingData } = await supabase
              .from('destination_ratings')
              .select('*')
              .eq('destination_type', 'experience')
              .eq('destination_id', experience.id)
              .single();
              
            return {
              ...experience,
              average_rating: ratingData?.average_rating || 0,
              total_ratings: ratingData?.total_ratings || 0
            };
          })
        );
        
        setExperiences(experiencesWithRatings as Experience[]);
        setFilteredExperiences(experiencesWithRatings as Experience[]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching experiences:', error);
        setLoading(false);
      }
    };
    
    fetchExperiences();
  }, []);
  
  useEffect(() => {
    filterExperiences();
  }, [selectedCategory, selectedState, searchTerm, priceRange, experiences]);
  
  const filterExperiences = () => {
    let filtered = [...experiences];
    
    if (selectedCategory) {
      filtered = filtered.filter(exp => exp.category.id === selectedCategory);
    }
    
    if (selectedState) {
      filtered = filtered.filter(exp => exp.state_id === selectedState);
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(exp => 
        exp.title.toLowerCase().includes(term) || 
        exp.description.toLowerCase().includes(term)
      );
    }
    
    if (priceRange) {
      filtered = filtered.filter(exp => exp.price_range === priceRange);
    }
    
    setFilteredExperiences(filtered);
  };
  
  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value === "all" ? null : value);
  };
  
  const handleStateChange = (value: string) => {
    setSelectedState(value === "all" ? null : value);
  };
  
  const handlePriceRangeChange = (value: string) => {
    setPriceRange(value === "all" ? null : value);
  };
  
  const resetFilters = () => {
    setSelectedCategory(null);
    setSelectedState(null);
    setSearchTerm("");
    setPriceRange(null);
  };

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Experiencias en Estados Unidos</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre experiencias únicas en todo el país, desde aventuras en la naturaleza hasta tours gastronómicos
        </p>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-4">
          <div className="flex-grow relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input 
              type="text" 
              placeholder="Buscar experiencias..." 
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Select value={selectedCategory || "all"} onValueChange={handleCategoryChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categoría" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas las categorías</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={selectedState || "all"} onValueChange={handleStateChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                {states.map(state => (
                  <SelectItem key={state.id} value={state.id}>{state.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            
            <Select value={priceRange || "all"} onValueChange={handlePriceRangeChange}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Precio" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Cualquier precio</SelectItem>
                <SelectItem value="$">Económico ($)</SelectItem>
                <SelectItem value="$$">Moderado ($$)</SelectItem>
                <SelectItem value="$$$">Exclusivo ($$$)</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        
        <div className="flex justify-end">
          <Button variant="outline" onClick={resetFilters} className="flex items-center gap-2">
            <Filter size={16} />
            Restablecer filtros
          </Button>
        </div>
      </div>
      
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <Card key={i} className="animate-pulse">
              <div className="h-48 bg-gray-200 rounded-t-lg"></div>
              <CardHeader>
                <div className="h-6 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </CardHeader>
              <CardContent>
                <div className="h-16 bg-gray-200 rounded"></div>
              </CardContent>
              <CardFooter>
                <div className="h-10 bg-gray-200 rounded w-full"></div>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : filteredExperiences.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map(experience => (
            <Card key={experience.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img 
                  src={experience.image_url || "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932"} 
                  alt={experience.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg">{experience.title}</CardTitle>
                    <CardDescription className="flex items-center mt-1">
                      <MapPin size={14} className="mr-1" />
                      {states.find(s => s.id === experience.state_id)?.name || experience.state_id}
                    </CardDescription>
                  </div>
                  {experience.price_range && (
                    <span className="text-sm font-medium text-gray-700">
                      {experience.price_range}
                    </span>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-2">
                  <span className="bg-miami-coral text-white text-xs px-2 py-1 rounded mr-2">
                    {experience.category.name}
                  </span>
                  {typeof experience.average_rating === 'number' && (
                    <div className="flex items-center">
                      <Star size={14} className="text-yellow-400 mr-1" fill="currentColor" />
                      <span className="text-sm text-gray-600">
                        {experience.average_rating.toFixed(1)} ({experience.total_ratings})
                      </span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 line-clamp-3">{experience.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  className="w-full bg-miami-coral hover:bg-miami-turquoise"
                  onClick={() => navigate(`/experience/${experience.id}`)}
                >
                  Ver detalles
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-3">No se encontraron experiencias</h3>
          <p className="text-gray-500 mb-6">Intenta con otros filtros o criterios de búsqueda</p>
          <Button onClick={resetFilters} className="bg-miami-coral hover:bg-miami-turquoise">
            Restablecer filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default Experiences;
