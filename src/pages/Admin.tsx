
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, Mail, User, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

// Mock data interface for visitor records
interface Visita {
  id: number;
  nombre: string;
  email: string;
  fecha_visita: Date;
  actividades: string[];
  comentarios?: string;
  fecha_registro: Date;
}

const Admin = () => {
  const [visitas, setVisitas] = useState<Visita[]>([]);
  const [filteredVisitas, setFilteredVisitas] = useState<Visita[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const visitasPerPage = 5;
  const [isLoading, setIsLoading] = useState(true);
  
  // Mock fetch data function (in a real app, this would be an API call)
  useEffect(() => {
    const fetchVisitas = async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock data
      const mockVisitas: Visita[] = [
        {
          id: 1,
          nombre: "Carlos Rodríguez",
          email: "carlos@example.com",
          fecha_visita: new Date(2023, 11, 15),
          actividades: ["playa", "restaurantes", "vida-nocturna"],
          comentarios: "Viajo con mi familia, somos 4 personas. Nos interesa hospedarnos cerca de South Beach.",
          fecha_registro: new Date(2023, 10, 5)
        },
        {
          id: 2,
          nombre: "María González",
          email: "maria@example.com",
          fecha_visita: new Date(2023, 11, 20),
          actividades: ["compras", "museos"],
          comentarios: "Es mi primera vez en Miami, busco recomendaciones de lugares no turísticos.",
          fecha_registro: new Date(2023, 10, 8)
        },
        {
          id: 3,
          nombre: "Juan Pérez",
          email: "juan@example.com",
          fecha_visita: new Date(2024, 0, 10),
          actividades: ["playa", "excursiones"],
          fecha_registro: new Date(2023, 10, 12)
        },
        {
          id: 4,
          nombre: "Ana Torres",
          email: "ana@example.com",
          fecha_visita: new Date(2024, 1, 5),
          actividades: ["restaurantes", "museos", "compras"],
          comentarios: "Viajo por trabajo pero tendré algunos días libres para conocer la ciudad.",
          fecha_registro: new Date(2023, 10, 15)
        },
        {
          id: 5,
          nombre: "Luis Morales",
          email: "luis@example.com",
          fecha_visita: new Date(2024, 2, 15),
          actividades: ["playa", "vida-nocturna"],
          fecha_registro: new Date(2023, 10, 18)
        },
        {
          id: 6,
          nombre: "Carmen Jiménez",
          email: "carmen@example.com",
          fecha_visita: new Date(2024, 2, 22),
          actividades: ["excursiones", "museos"],
          comentarios: "Me interesa conocer los Everglades y museos de arte.",
          fecha_registro: new Date(2023, 10, 20)
        },
        {
          id: 7,
          nombre: "Roberto Sánchez",
          email: "roberto@example.com",
          fecha_visita: new Date(2024, 3, 5),
          actividades: ["compras", "restaurantes"],
          fecha_registro: new Date(2023, 10, 25)
        }
      ];
      
      setVisitas(mockVisitas);
      setFilteredVisitas(mockVisitas);
      setIsLoading(false);
    };
    
    fetchVisitas();
  }, []);
  
  // Handle search
  useEffect(() => {
    const results = visitas.filter(visita => 
      visita.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      visita.email.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredVisitas(results);
    setCurrentPage(1); // Reset to first page when searching
  }, [searchTerm, visitas]);
  
  // Pagination logic
  const indexOfLastVisita = currentPage * visitasPerPage;
  const indexOfFirstVisita = indexOfLastVisita - visitasPerPage;
  const currentVisitas = filteredVisitas.slice(indexOfFirstVisita, indexOfLastVisita);
  
  const totalPages = Math.ceil(filteredVisitas.length / visitasPerPage);
  
  const goToNextPage = () => setCurrentPage(prev => Math.min(prev + 1, totalPages));
  const goToPrevPage = () => setCurrentPage(prev => Math.max(prev - 1, 1));
  
  // Format activities for display
  const getActividadLabel = (id: string) => {
    const mapping: { [key: string]: string } = {
      "playa": "Playa y actividades acuáticas",
      "compras": "Compras y moda",
      "restaurantes": "Gastronomía y restaurantes",
      "museos": "Museos y cultura",
      "vida-nocturna": "Vida nocturna",
      "excursiones": "Excursiones y tours"
    };
    return mapping[id] || id;
  };

  return (
    <div className="pt-20 pb-12 bg-miami-sand min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Panel de Administración
          </h1>
          <p className="text-gray-700">
            Gestiona las visitas registradas a Miami
          </p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            <Input
              placeholder="Buscar por nombre o email..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Filter size={16} />
              <span>Filtrar</span>
            </Button>
            
            <Button variant="outline" size="sm" className="flex items-center gap-1">
              <Calendar size={16} />
              <span>Fecha</span>
            </Button>
          </div>
        </div>
        
        {/* Visits List */}
        <div className="space-y-4 mb-6">
          {isLoading ? (
            // Loading state
            <div className="text-center py-12">
              <div className="animate-spin w-8 h-8 border-4 border-miami-turquoise border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="text-gray-600">Cargando registros de visitas...</p>
            </div>
          ) : currentVisitas.length > 0 ? (
            // Visits list
            currentVisitas.map(visita => (
              <Card key={visita.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center">
                        <User className="w-5 h-5 mr-2 text-miami-coral" />
                        {visita.nombre}
                      </CardTitle>
                      <CardDescription className="flex items-center mt-1">
                        <Mail className="w-4 h-4 mr-2 text-gray-400" />
                        {visita.email}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <span className="text-sm text-gray-500">
                        Registro: {format(visita.fecha_registro, "dd MMM yyyy", { locale: es })}
                      </span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Fecha de visita</h4>
                      <p className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2 text-miami-turquoise" />
                        {format(visita.fecha_visita, "dd MMMM yyyy", { locale: es })}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Actividades de interés</h4>
                      <div className="flex flex-wrap gap-2">
                        {visita.actividades.map(actividad => (
                          <Badge key={actividad} variant="outline" className="bg-miami-sand">
                            {getActividadLabel(actividad)}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {visita.comentarios && (
                    <div className="mt-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Comentarios</h4>
                      <p className="text-gray-700 bg-gray-50 p-3 rounded-md">
                        {visita.comentarios}
                      </p>
                    </div>
                  )}
                  
                  <div className="mt-4 flex justify-end gap-2">
                    <Button variant="outline" size="sm">Ver detalles</Button>
                    <Button variant="outline" size="sm" className="text-miami-coral border-miami-coral hover:bg-miami-coral hover:text-white">
                      Contactar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))
          ) : (
            // No results
            <Card>
              <CardContent className="text-center py-12">
                <p className="text-gray-500 mb-2">No se encontraron registros que coincidan con la búsqueda.</p>
                {searchTerm && (
                  <Button variant="outline" size="sm" onClick={() => setSearchTerm("")}>
                    Limpiar búsqueda
                  </Button>
                )}
              </CardContent>
            </Card>
          )}
        </div>
        
        {/* Pagination */}
        {filteredVisitas.length > 0 && (
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Mostrando {indexOfFirstVisita + 1}-{Math.min(indexOfLastVisita, filteredVisitas.length)} de {filteredVisitas.length} registros
            </p>
            <div className="flex items-center gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={goToPrevPage} 
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </Button>
              <span className="text-sm">
                Página {currentPage} de {totalPages}
              </span>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={goToNextPage} 
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;
