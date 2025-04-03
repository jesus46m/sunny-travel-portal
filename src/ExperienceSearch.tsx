
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Filter } from "lucide-react";

interface ExperienceSearchProps {
  categories: Array<{id: string, name: string}>;
  states: Array<{id: string, name: string}>;
  onSearch: (params: {
    term: string;
    category?: string;
    state?: string;
  }) => void;
  isSearching?: boolean;
}

const ExperienceSearch = ({ 
  categories, 
  states, 
  onSearch,
  isSearching = false 
}: ExperienceSearchProps) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(undefined);
  const [selectedState, setSelectedState] = useState<string | undefined>(undefined);
  const [filtersVisible, setFiltersVisible] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({
      term: searchTerm,
      category: selectedCategory,
      state: selectedState
    });
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory(undefined);
    setSelectedState(undefined);
    onSearch({ term: "", category: undefined, state: undefined });
  };

  return (
    <div className="mb-8">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="text"
              placeholder="Buscar experiencias..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <Button
            type="button"
            variant="outline"
            className="md:w-auto"
            onClick={() => setFiltersVisible(!filtersVisible)}
          >
            <Filter className="mr-2 h-4 w-4" />
            Filtros
          </Button>
          
          <Button 
            type="submit" 
            className="bg-miami-coral hover:bg-miami-turquoise"
            disabled={isSearching}
          >
            <Search className="mr-2 h-4 w-4" />
            Buscar
          </Button>
        </div>
        
        {filtersVisible && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Categoría
              </label>
              <Select 
                value={selectedCategory} 
                onValueChange={setSelectedCategory}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todas las categorías" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todas las categorías</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category.id} value={category.id}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Estado
              </label>
              <Select 
                value={selectedState} 
                onValueChange={setSelectedState}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Todos los estados" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="">Todos los estados</SelectItem>
                  {states.map(state => (
                    <SelectItem key={state.id} value={state.id}>
                      {state.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="md:col-span-2">
              <Button 
                type="button" 
                variant="ghost" 
                className="text-gray-500"
                onClick={clearFilters}
              >
                Limpiar filtros
              </Button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExperienceSearch;
