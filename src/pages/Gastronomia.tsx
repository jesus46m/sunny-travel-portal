import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ChevronDown, Star, MapPin, 
  Clock, Phone, Utensils, Filter, Search, X
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Gastronomia = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const restaurantes = [
    {
      nombre: "Versailles Restaurant",
      tipo: "cubana",
      ubicacion: "3555 SW 8th St, Miami",
      descripcion: "El restaurante cubano más famoso de Miami, conocido por su auténtica comida y ambiente animado.",
      imagen: "https://images.unsplash.com/photo-1600891722990-398f9853692d?q=80&w=1470&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.5,
      telefono: "+1 (305) 444-0240",
      horario: "8:00 AM - 1:00 AM",
      caracteristicas: ["Comida cubana", "Sándwiches", "Café cubano", "Postres"]
    },
    {
      nombre: "Joe's Stone Crab",
      tipo: "mariscos",
      ubicacion: "11 Washington Ave, Miami Beach",
      descripcion: "Restaurante icónico famoso por sus cangrejos de piedra y otros mariscos frescos.",
      imagen: "https://images.unsplash.com/photo-1625936625413-2895ef999a19?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$$",
      puntuacion: 4.7,
      telefono: "+1 (305) 673-0365",
      horario: "11:30 AM - 2:00 PM, 5:00 PM - 10:00 PM",
      caracteristicas: ["Cangrejo de piedra", "Mariscos", "Vistas al mar", "Elegante"]
    },
    {
      nombre: "KYU",
      tipo: "asiática",
      ubicacion: "251 NW 25th St, Miami",
      descripcion: "Restaurante de cocina asiática a la parrilla con un ambiente moderno y platos innovadores.",
      imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.6,
      telefono: "+1 (786) 577-0150",
      horario: "6:00 PM - 11:00 PM",
      caracteristicas: ["Parrilla", "Asiática", "Cócteles", "Ambiente moderno"]
    },
    {
      nombre: "Coyo Taco",
      tipo: "mexicana",
      ubicacion: "2300 NW 2nd Ave, Miami",
      descripcion: "Taquería popular con tacos auténticos, ingredientes frescos y un ambiente informal.",
      imagen: "https://images.unsplash.com/photo-1559947851-15b4aed94035?q=80&w=1470&auto=format&fit=crop",
      precio: "$",
      puntuacion: 4.4,
      telefono: "+1 (305) 573-8226",
      horario: "11:00 AM - 12:00 AM",
      caracteristicas: ["Tacos", "Mexicana", "Informal", "Cerveza"]
    },
    {
      nombre: "Cafe La Trova",
      tipo: "cubana",
      ubicacion: "971 SW 8th St, Miami",
      descripcion: "Restaurante cubano y bar de cócteles dirigido por el famoso barman Julio Cabrera, con música en vivo y ambiente auténtico.",
      imagen: "https://images.unsplash.com/photo-1525610553991-2bede1a236e2?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.8,
      telefono: "+1 (786) 615-4379",
      horario: "5:00 PM - 1:00 AM",
      caracteristicas: ["Cócteles", "En vivo", "Cubano", "Tapas"]
    },
    {
      nombre: "Zuma",
      tipo: "japonesa",
      ubicacion: "270 Biscayne Blvd Way, Miami",
      descripcion: "Restaurante japonés de lujo con vistas al río Miami, conocido por su sushi y platos a la parrilla.",
      imagen: "https://images.unsplash.com/photo-1579456876936-517dacd5d8a8?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$$",
      puntuacion: 4.9,
      telefono: "+1 (305) 577-0277",
      horario: "12:00 PM - 3:00 PM, 6:00 PM - 11:00 PM",
      caracteristicas: ["Sushi", "Japonesa", "Vistas al río", "Elegante"]
    }
  ];

  const tiposDeCocina = [...new Set(restaurantes.map(restaurante => restaurante.tipo))];

  const filtrarRestaurantes = () => {
    let resultados = restaurantes;

    if (searchTerm) {
      resultados = resultados.filter(restaurante =>
        restaurante.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        restaurante.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedTipo) {
      resultados = resultados.filter(restaurante => restaurante.tipo === selectedTipo);
    }

    return resultados;
  };

  const resultadosFiltrados = filtrarRestaurantes();

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="pt-20 pb-12 bg-miami-sand min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center text-gray-600 hover:text-miami-turquoise"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a inicio
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
              Gastronomía en Miami
            </h1>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre los sabores de Miami, desde la auténtica cocina cubana de Little Havana 
              hasta los mariscos frescos de South Beach y la alta cocina de Brickell.
            </p>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1517248135469-4fe796d42e23?q=80&w=1470&auto=format&fit=crop" 
            alt="Gastronomía en Miami" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Un Festín de Sabores</h2>
              <p className="text-lg opacity-90">
                Miami es un crisol de culturas culinarias, con opciones para todos los gustos 
                y presupuestos, desde restaurantes de lujo hasta puestos de comida callejera.
              </p>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div className="relative w-full md:w-1/2">
            <input
              type="text"
              placeholder="Buscar restaurantes..."
              className="w-full px-4 py-2 border rounded-md focus:ring-miami-turquoise focus:border-miami-turquoise"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1/2 -translate-y-1/2"
                onClick={() => setSearchTerm("")}
              >
                <X className="w-4 h-4" />
              </Button>
            )}
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
          
          <Button 
            variant="outline"
            className="mt-4 md:mt-0 flex items-center"
            onClick={toggleFilters}
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtrar
          </Button>
        </div>
        
        {/* Filters */}
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8 p-4 bg-white rounded-md shadow-md"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Tipos de cocina</h3>
            <div className="flex flex-wrap gap-2">
              {tiposDeCocina.map((tipo) => (
                <Button
                  key={tipo}
                  variant={selectedTipo === tipo ? "default" : "outline"}
                  className={selectedTipo === tipo ? "bg-miami-turquoise text-white" : ""}
                  onClick={() => setSelectedTipo(selectedTipo === tipo ? null : tipo)}
                >
                  {tipo}
                </Button>
              ))}
            </div>
          </motion.div>
        )}
        
        {/* Restaurants grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {resultadosFiltrados.map((restaurante, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img 
                  src={restaurante.imagen} 
                  alt={restaurante.nombre} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{restaurante.puntuacion}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{restaurante.nombre}</h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{restaurante.ubicacion}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{restaurante.descripcion}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {restaurante.caracteristicas.map((caract, i) => (
                    <span 
                      key={i} 
                      className="bg-miami-sand text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {caract}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500">
                    <Clock className="w-4 h-4 mr-1" />
                    <span className="text-sm">{restaurante.horario}</span>
                  </div>
                  <div className="text-gray-500 font-medium">{restaurante.precio}</div>
                </div>
                
                <div className="flex items-center mt-4">
                  <Phone className="w-4 h-4 mr-2 text-miami-turquoise" />
                  <a 
                    href={`tel:${restaurante.telefono}`} 
                    className="text-miami-turquoise hover:text-miami-coral"
                  >
                    {restaurante.telefono}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para saborear Miami?</h2>
          <p className="mb-6">Descubre los mejores restaurantes y planifica tu experiencia gastronómica</p>
          <Button 
            className="bg-white text-miami-turquoise hover:bg-miami-sand hover:text-miami-coral"
            onClick={() => navigate('/registro')}
          >
            Registrar mi visita
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Gastronomia;
