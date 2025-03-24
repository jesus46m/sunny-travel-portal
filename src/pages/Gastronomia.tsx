
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ChevronDown, Star, MapPin, 
  Clock, Phone, Utensils, Filter, Search, X,
  Coffee, Wine, Beef, Fish
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Gastronomia = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTipo, setSelectedTipo] = useState<string | null>(null);
  const [selectedCiudad, setSelectedCiudad] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  const ciudades = [
    "Miami", "New York", "Los Angeles", "Chicago", "New Orleans", "San Francisco", "Las Vegas", "Boston", "Seattle"
  ];

  const restaurantes = [
    // Miami
    {
      nombre: "Versailles Restaurant",
      ciudad: "Miami",
      tipo: "cubana",
      ubicacion: "3555 SW 8th St, Miami",
      descripcion: "El restaurante cubano más famoso de Miami, conocido por su auténtica comida y ambiente animado.",
      imagen: "https://images.unsplash.com/photo-1554679665-f5537f187268?q=80&w=1287&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.5,
      telefono: "+1 (305) 444-0240",
      horario: "8:00 AM - 1:00 AM",
      caracteristicas: ["Comida cubana", "Sándwiches", "Café cubano", "Postres"]
    },
    {
      nombre: "Joe's Stone Crab",
      ciudad: "Miami",
      tipo: "mariscos",
      ubicacion: "11 Washington Ave, Miami Beach",
      descripcion: "Restaurante icónico famoso por sus cangrejos de piedra y otros mariscos frescos.",
      imagen: "https://images.unsplash.com/photo-1579631542720-3a87824835cd?q=80&w=1287&auto=format&fit=crop",
      precio: "$$$$",
      puntuacion: 4.7,
      telefono: "+1 (305) 673-0365",
      horario: "11:30 AM - 2:00 PM, 5:00 PM - 10:00 PM",
      caracteristicas: ["Cangrejo de piedra", "Mariscos", "Vistas al mar", "Elegante"]
    },
    // New York
    {
      nombre: "Katz's Delicatessen",
      ciudad: "New York",
      tipo: "americana",
      ubicacion: "205 E Houston St, New York",
      descripcion: "Famoso deli neoyorquino con más de 130 años de historia, conocido por su pastrami y ambiente único.",
      imagen: "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=1471&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.6,
      telefono: "+1 (212) 254-2246",
      horario: "8:00 AM - 10:30 PM",
      caracteristicas: ["Sándwiches", "Deli", "Icónico", "Pastrami"]
    },
    {
      nombre: "Le Bernardin",
      ciudad: "New York",
      tipo: "francesa",
      ubicacion: "155 W 51st St, New York",
      descripcion: "Restaurante con 3 estrellas Michelin, especializado en mariscos de la más alta calidad.",
      imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$$",
      puntuacion: 4.9,
      telefono: "+1 (212) 554-1515",
      horario: "5:30 PM - 10:30 PM",
      caracteristicas: ["Alta cocina", "Michelin", "Mariscos", "Elegante"]
    },
    // Los Angeles
    {
      nombre: "Grand Central Market",
      ciudad: "Los Angeles",
      tipo: "mercado gastronómico",
      ubicacion: "317 S Broadway, Los Angeles",
      descripcion: "Mercado histórico con docenas de puestos de comida que representan la diversidad culinaria de LA.",
      imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1574&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.7,
      telefono: "+1 (213) 624-2378",
      horario: "8:00 AM - 10:00 PM",
      caracteristicas: ["Diverso", "Casual", "Histórico", "Internacional"]
    },
    {
      nombre: "Nobu Malibu",
      ciudad: "Los Angeles",
      tipo: "japonesa",
      ubicacion: "22706 Pacific Coast Hwy, Malibu",
      descripcion: "Elegante restaurante japonés con vistas espectaculares al océano Pacífico.",
      imagen: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1525&auto=format&fit=crop",
      precio: "$$$$",
      puntuacion: 4.8,
      telefono: "+1 (310) 317-9140",
      horario: "12:00 PM - 11:00 PM",
      caracteristicas: ["Sushi", "Vista al mar", "Celebridades", "Fusion"]
    },
    // Chicago
    {
      nombre: "Alinea",
      ciudad: "Chicago",
      tipo: "molecular",
      ubicacion: "1723 N Halsted St, Chicago",
      descripcion: "Restaurante revolucionario con 3 estrellas Michelin conocido por su gastronomía molecular y presentaciones artísticas.",
      imagen: "https://images.unsplash.com/photo-1530541845970-5cff36ffdaf6?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$$",
      puntuacion: 4.9,
      telefono: "+1 (312) 867-0110",
      horario: "5:00 PM - 10:00 PM",
      caracteristicas: ["Michelin", "Innovador", "Experiencia", "Arte culinario"]
    },
    {
      nombre: "Lou Malnati's Pizzeria",
      ciudad: "Chicago",
      tipo: "italiana",
      ubicacion: "439 N Wells St, Chicago",
      descripcion: "Legendaria pizzería de Chicago, famosa por su auténtica deep-dish pizza desde 1971.",
      imagen: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.7,
      telefono: "+1 (312) 828-9800",
      horario: "11:00 AM - 11:00 PM",
      caracteristicas: ["Deep dish", "Tradicional", "Familiar", "Icónico"]
    },
    // New Orleans
    {
      nombre: "Commander's Palace",
      ciudad: "New Orleans",
      tipo: "cajun/creole",
      ubicacion: "1403 Washington Ave, New Orleans",
      descripcion: "Institución culinaria de Nueva Orleans, sirviendo refinada cocina cajun y creole desde 1893.",
      imagen: "https://images.unsplash.com/photo-1478145787956-7a5d4010a3e7?q=80&w=1534&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.8,
      telefono: "+1 (504) 899-8221",
      horario: "11:30 AM - 9:00 PM",
      caracteristicas: ["Histórico", "Elegante", "Creole", "Jazz brunch"]
    },
    {
      nombre: "Café du Monde",
      ciudad: "New Orleans",
      tipo: "café",
      ubicacion: "800 Decatur St, New Orleans",
      descripcion: "Icónico café al aire libre conocido por sus beignets espolvoreados con azúcar y café con chicoria.",
      imagen: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1470&auto=format&fit=crop",
      precio: "$",
      puntuacion: 4.6,
      telefono: "+1 (504) 525-4544",
      horario: "24 horas",
      caracteristicas: ["Beignets", "Café", "Histórico", "Icónico"]
    },
    // San Francisco
    {
      nombre: "Swan Oyster Depot",
      ciudad: "San Francisco",
      tipo: "mariscos",
      ubicacion: "1517 Polk St, San Francisco",
      descripcion: "Establecimiento centenario que sirve los mejores mariscos frescos en un ambiente informal con barra.",
      imagen: "https://images.unsplash.com/photo-1534437829740-62aafbe999fd?q=80&w=1587&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.7,
      telefono: "+1 (415) 673-1101",
      horario: "10:30 AM - 5:30 PM",
      caracteristicas: ["Mariscos frescos", "Informal", "Histórico", "Barra"]
    },
    {
      nombre: "Tartine Manufactory",
      ciudad: "San Francisco",
      tipo: "panadería/café",
      ubicacion: "595 Alabama St, San Francisco",
      descripcion: "Panadería artesanal y restaurante aclamado por sus panes, pasteles y platos creativos.",
      imagen: "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=1472&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.6,
      telefono: "+1 (415) 757-0007",
      horario: "8:00 AM - 5:00 PM",
      caracteristicas: ["Panadería", "Café", "Brunch", "Artesanal"]
    },
    // Boston
    {
      nombre: "Union Oyster House",
      ciudad: "Boston",
      tipo: "mariscos",
      ubicacion: "41 Union St, Boston",
      descripcion: "El restaurante en funcionamiento continuo más antiguo de Estados Unidos, sirviendo mariscos de Nueva Inglaterra desde 1826.",
      imagen: "https://images.unsplash.com/photo-1565239356628-56c70c341ce9?q=80&w=1421&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.5,
      telefono: "+1 (617) 227-2750",
      horario: "11:00 AM - 9:30 PM",
      caracteristicas: ["Histórico", "Mariscos", "Tradicional", "Sopa de almejas"]
    },
    {
      nombre: "Mike's Pastry",
      ciudad: "Boston",
      tipo: "pastelería",
      ubicacion: "300 Hanover St, Boston",
      descripcion: "Famosa pastelería italiana en el North End de Boston, conocida por sus cannoli y dulces italianos tradicionales.",
      imagen: "https://images.unsplash.com/photo-1603532648955-039310d9ed75?q=80&w=1587&auto=format&fit=crop",
      precio: "$",
      puntuacion: 4.7,
      telefono: "+1 (617) 742-3050",
      horario: "8:00 AM - 10:00 PM",
      caracteristicas: ["Cannoli", "Italiano", "Tradicional", "Postres"]
    }
  ];

  const iconosPorTipo: Record<string, JSX.Element> = {
    "cubana": <Coffee className="w-4 h-4 mr-1" />,
    "mariscos": <Fish className="w-4 h-4 mr-1" />,
    "americana": <Beef className="w-4 h-4 mr-1" />,
    "francesa": <Wine className="w-4 h-4 mr-1" />,
    "mercado gastronómico": <Utensils className="w-4 h-4 mr-1" />,
    "japonesa": <Utensils className="w-4 h-4 mr-1" />,
    "molecular": <Utensils className="w-4 h-4 mr-1" />,
    "italiana": <Utensils className="w-4 h-4 mr-1" />,
    "cajun/creole": <Utensils className="w-4 h-4 mr-1" />,
    "café": <Coffee className="w-4 h-4 mr-1" />,
    "panadería/café": <Coffee className="w-4 h-4 mr-1" />,
    "pastelería": <Utensils className="w-4 h-4 mr-1" />
  };

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

    if (selectedCiudad) {
      resultados = resultados.filter(restaurante => restaurante.ciudad === selectedCiudad);
    }

    return resultados;
  };

  const resultadosFiltrados = filtrarRestaurantes();

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="pt-20 pb-12 usa-futuristic-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center text-white/80 hover:text-miami-coral"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a inicio
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Gastronomía en Estados Unidos
            </h1>
            <div className="w-24 h-1 bg-miami-coral mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Descubre la rica diversidad culinaria de Estados Unidos, desde la comida cajun de Nueva Orleans 
              hasta la innovadora escena gastronómica de San Francisco y los clásicos restaurantes de Nueva York.
            </p>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12 glass-card">
          <img 
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop" 
            alt="Gastronomía en Estados Unidos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Un Festín de Sabores</h2>
              <p className="text-lg opacity-90">
                Estados Unidos es un crisol de culturas culinarias, con opciones para todos los gustos 
                y presupuestos, desde restaurantes con estrellas Michelin hasta puestos de comida callejera.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cities Tabs */}
        <Tabs defaultValue="todas" className="mb-8">
          <TabsList className="w-full max-w-4xl mx-auto mb-6 overflow-x-auto flex justify-start p-1 bg-white/10 backdrop-blur-md rounded-lg">
            <TabsTrigger value="todas" className="text-sm px-4">
              Todas las ciudades
            </TabsTrigger>
            {ciudades.map((ciudad) => (
              <TabsTrigger key={ciudad} value={ciudad} className="text-sm px-4">
                {ciudad}
              </TabsTrigger>
            ))}
          </TabsList>
          
          <TabsContent value="todas">
            <div className="mb-4">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Descubre la gastronomía por toda la nación</h3>
                <p className="text-white/80 mt-2">
                  Explora los mejores restaurantes de cada ciudad en Estados Unidos
                </p>
              </div>
              
              {/* Search and Filter */}
              <div className="flex flex-col md:flex-row items-center justify-between mb-8">
                <div className="relative w-full md:w-1/2">
                  <input
                    type="text"
                    placeholder="Buscar restaurantes..."
                    className="w-full px-10 py-2 border rounded-md focus:ring-miami-coral focus:border-miami-coral bg-white/10 backdrop-blur-md text-white border-white/20"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {searchTerm && (
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white"
                      onClick={() => setSearchTerm("")}
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/60" />
                </div>
                
                <Button 
                  variant="outline"
                  className="mt-4 md:mt-0 flex items-center border-white/20 text-white"
                  onClick={toggleFilters}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar por tipo de cocina
                </Button>
              </div>
              
              {/* Filters */}
              {showFilters && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8 p-4 glass-card rounded-md shadow-md"
                >
                  <h3 className="text-lg font-semibold text-white mb-3">Tipos de cocina</h3>
                  <div className="flex flex-wrap gap-2">
                    {tiposDeCocina.map((tipo) => (
                      <Button
                        key={tipo}
                        variant={selectedTipo === tipo ? "default" : "outline"}
                        className={selectedTipo === tipo ? "bg-miami-coral text-white" : "border-white/20 text-white"}
                        onClick={() => setSelectedTipo(selectedTipo === tipo ? null : tipo)}
                      >
                        {iconosPorTipo[tipo] || <Utensils className="w-4 h-4 mr-1" />}
                        {tipo}
                      </Button>
                    ))}
                  </div>
                </motion.div>
              )}
              
              {/* Restaurant Listings */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                {resultadosFiltrados.map((restaurante, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
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
                      <div className="absolute top-4 left-4 bg-miami-coral/90 rounded-full px-3 py-1 text-white text-xs font-medium">
                        {restaurante.ciudad}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="mb-2">
                        <h3 className="text-xl font-bold text-white">{restaurante.nombre}</h3>
                        <div className="flex items-center text-white/70 mt-1">
                          <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                          <span className="text-sm truncate">{restaurante.ubicacion}</span>
                        </div>
                      </div>
                      
                      <p className="text-white/80 mb-4 line-clamp-3">{restaurante.descripcion}</p>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {restaurante.caracteristicas.map((caract, i) => (
                          <span 
                            key={i} 
                            className="bg-miami-turquoise/30 text-white text-xs px-3 py-1 rounded-full"
                          >
                            {caract}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-white/70">
                          <Clock className="w-4 h-4 mr-1" />
                          <span className="text-sm">{restaurante.horario}</span>
                        </div>
                        <div className="text-miami-coral font-medium">{restaurante.precio}</div>
                      </div>
                      
                      <div className="flex items-center mt-4">
                        <Phone className="w-4 h-4 mr-2 text-miami-coral" />
                        <a 
                          href={`tel:${restaurante.telefono}`} 
                          className="text-miami-coral hover:text-white"
                        >
                          {restaurante.telefono}
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </TabsContent>
          
          {ciudades.map((ciudad) => (
            <TabsContent key={ciudad} value={ciudad}>
              <div className="mb-4">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Gastronomía en {ciudad}</h3>
                  <p className="text-white/80 mt-2">
                    Descubre los mejores restaurantes y experiencias culinarias en {ciudad}
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                  {restaurantes
                    .filter(r => r.ciudad === ciudad)
                    .map((restaurante, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="glass-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
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
                          <div className="mb-2">
                            <h3 className="text-xl font-bold text-white">{restaurante.nombre}</h3>
                            <div className="flex items-center text-white/70 mt-1">
                              <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                              <span className="text-sm truncate">{restaurante.ubicacion}</span>
                            </div>
                          </div>
                          
                          <p className="text-white/80 mb-4 line-clamp-3">{restaurante.descripcion}</p>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {restaurante.caracteristicas.map((caract, i) => (
                              <span 
                                key={i} 
                                className="bg-miami-turquoise/30 text-white text-xs px-3 py-1 rounded-full"
                              >
                                {caract}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-white/70">
                              <Clock className="w-4 h-4 mr-1" />
                              <span className="text-sm">{restaurante.horario}</span>
                            </div>
                            <div className="text-miami-coral font-medium">{restaurante.precio}</div>
                          </div>
                          
                          <div className="flex items-center mt-4">
                            <Phone className="w-4 h-4 mr-2 text-miami-coral" />
                            <a 
                              href={`tel:${restaurante.telefono}`} 
                              className="text-miami-coral hover:text-white"
                            >
                              {restaurante.telefono}
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
        
        {/* Regional Specialties */}
        <div className="glass-card rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Especialidades Regionales de EE.UU.</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <div className="w-8 h-8 rounded-full bg-miami-coral flex items-center justify-center mr-2">
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                Sureste
              </h3>
              <p className="text-white/80 mb-3">
                Descubre la cocina sureña con sus barbacoas, pollo frito, gumbo, jambalaya y shrimp & grits.
              </p>
              <div className="text-miami-coral font-medium text-sm">
                Prueba en: Nueva Orleans, Charleston, Atlanta
              </div>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <div className="w-8 h-8 rounded-full bg-miami-coral flex items-center justify-center mr-2">
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                Noreste
              </h3>
              <p className="text-white/80 mb-3">
                Región conocida por sus mariscos, sopa de almejas, sandwich de langosta, bagels y pizza estilo Nueva York.
              </p>
              <div className="text-miami-coral font-medium text-sm">
                Prueba en: Nueva York, Boston, Filadelfia
              </div>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <div className="w-8 h-8 rounded-full bg-miami-coral flex items-center justify-center mr-2">
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                Medio Oeste
              </h3>
              <p className="text-white/80 mb-3">
                Hogar de la pizza deep dish, hot dogs de Chicago, queso wisconsin y comida de granjas.
              </p>
              <div className="text-miami-coral font-medium text-sm">
                Prueba en: Chicago, Detroit, Milwaukee
              </div>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2 flex items-center">
                <div className="w-8 h-8 rounded-full bg-miami-coral flex items-center justify-center mr-2">
                  <Utensils className="w-4 h-4 text-white" />
                </div>
                Costa Oeste
              </h3>
              <p className="text-white/80 mb-3">
                Conocida por su cocina farm-to-table, comida fusión, tacos, vinos y mariscos frescos.
              </p>
              <div className="text-miami-coral font-medium text-sm">
                Prueba en: San Francisco, Los Ángeles, Portland
              </div>
            </div>
          </div>
        </div>
        
        {/* Food Festivals */}
        <div className="glass-card rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Festivales Gastronómicos Destacados</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop" 
                  alt="Festival" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">Food & Wine Classic</h3>
                <p className="text-white/60 text-sm">Aspen, Colorado - Junio</p>
                <p className="text-white/80 mt-1 text-sm">
                  Uno de los eventos gastronómicos más prestigiosos con chefs de renombre mundial, catas de vino y demostraciones culinarias.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1587&auto=format&fit=crop" 
                  alt="Festival" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">New Orleans Food & Wine Experience</h3>
                <p className="text-white/60 text-sm">Nueva Orleans, Luisiana - Mayo</p>
                <p className="text-white/80 mt-1 text-sm">
                  Festival que celebra la rica tradición culinaria de Nueva Orleans con más de 250 restaurantes participantes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1576867757603-05b134ebc379?q=80&w=1470&auto=format&fit=crop" 
                  alt="Festival" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">Taste of Chicago</h3>
                <p className="text-white/60 text-sm">Chicago, Illinois - Julio</p>
                <p className="text-white/80 mt-1 text-sm">
                  El festival gastronómico al aire libre más grande del mundo, con restaurantes locales, food trucks y música en vivo.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                <img 
                  src="https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=1587&auto=format&fit=crop" 
                  alt="Festival" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-white">NYC Wine & Food Festival</h3>
                <p className="text-white/60 text-sm">Nueva York, Nueva York - Octubre</p>
                <p className="text-white/80 mt-1 text-sm">
                  Evento que reúne a las mejores personalidades culinarias del mundo para apoyar la lucha contra el hambre.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para un viaje gastronómico por Estados Unidos?</h2>
          <p className="mb-6">Descubre los mejores restaurantes y planifica tu experiencia culinaria</p>
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
