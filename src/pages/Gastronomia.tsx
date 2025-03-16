import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, 
  Utensils, 
  MapPin, 
  Clock, 
  Phone, 
  Globe, 
  ChefHat, 
  DollarSign,
  Star
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Gastronomia = () => {
  const navigate = useNavigate();
  const [selectedRestaurant, setSelectedRestaurant] = useState<number | null>(null);
  const [cuisineFilter, setCuisineFilter] = useState<string>("todos");

  const restaurantes = [
    {
      nombre: "Versailles Restaurant",
      tipo: "cubana",
      ubicacion: "3555 SW 8th St, Miami",
      descripcion: "Icónico restaurante cubano conocido como 'La Casa de la Cocina Cubana'. Famoso por sus sándwiches cubanos y cafecitos.",
      imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1470&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.7,
      telefono: "+1 (305) 444-0240",
      horario: "8:00 AM - 1:00 AM",
      sitio_web: "http://www.versaillesrestaurant.com",
      platos_destacados: ["Sándwich cubano", "Ropa vieja", "Pollo a la plancha", "Arroz con frijoles"]
    },
    {
      nombre: "Joe's Stone Crab",
      tipo: "mariscos",
      ubicacion: "11 Washington Ave, Miami Beach",
      descripcion: "Institución de Miami Beach fundada en 1913, famosa por sus patas de cangrejo de piedra durante la temporada de octubre a mayo.",
      imagen: "https://images.unsplash.com/photo-1559742811-822873691df8?q=80&w=1374&auto=format&fit=crop",
      precio: "$$$$",
      puntuacion: 4.8,
      telefono: "+1 (305) 673-0365",
      horario: "11:30 AM - 10:00 PM",
      sitio_web: "https://www.joesstonecrab.com",
      platos_destacados: ["Stone crabs con mostaza", "Bisque de langosta", "Key lime pie", "Jumbo hash browns"]
    },
    {
      nombre: "Mandolin Aegean Bistro",
      tipo: "mediterranea",
      ubicacion: "4312 NE 2nd Ave, Miami",
      descripcion: "Encantador restaurante al aire libre que sirve cocina turca y griega en un entorno que recuerda a las islas griegas.",
      imagen: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.6,
      telefono: "+1 (305) 576-6066",
      horario: "12:00 PM - 11:00 PM",
      sitio_web: "http://www.mandolinmiami.com",
      platos_destacados: ["Ensalada griega", "Köfte", "Pescado a la parrilla", "Tzatziki"]
    },
    {
      nombre: "KYU",
      tipo: "asiatica",
      ubicacion: "251 NW 25th St, Miami",
      descripcion: "Restaurante de moda en Wynwood que combina técnicas asiáticas con barbacoa americana, en un espacio industrial chic.",
      imagen: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1574&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.7,
      telefono: "+1 (786) 577-0150",
      horario: "12:00 PM - 11:00 PM",
      sitio_web: "https://www.kyurestaurants.com",
      platos_destacados: ["Costillas cortas coreanas", "Pollo frito de miso", "Arroz frito con cangrejo", "Helado de coco"]
    },
    {
      nombre: "La Mar by Gastón Acurio",
      tipo: "peruana",
      ubicacion: "500 Brickell Key Dr, Miami",
      descripcion: "Restaurante del célebre chef peruano Gastón Acurio, con vistas a la bahía de Biscayne y ceviche de clase mundial.",
      imagen: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1470&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.5,
      telefono: "+1 (305) 913-8358",
      horario: "12:00 PM - 11:00 PM",
      sitio_web: "https://www.mandarinoriental.com/miami/fine-dining/la-mar-by-gaston-acurio",
      platos_destacados: ["Ceviche clásico", "Causa limeña", "Lomo saltado", "Pisco sour"]
    },
    {
      nombre: "Cafe La Trova",
      tipo: "cubana",
      ubicacion: "971 SW 8th St, Miami",
      descripcion: "Restaurante cubano y bar de cócteles dirigido por el famoso barman Julio Cabrera, con música en vivo y ambiente auténtico.",
      imagen: "https://images.unsplash.com/photo-1514537099923-4c9f65c87583?q=80&w=1574&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.8,
      telefono: "+1 (786) 615-4379",
      horario: "4:00 PM - 12:00 AM",
      sitio_web: "https://www.cafelatrova.com",
      platos_destacados: ["Empanadas de picadillo", "Arroz con pollo", "Daiquirí", "Cubano sandwich"]
    },
    {
      nombre: "Boia De",
      tipo: "italiana",
      ubicacion: "5205 NE 2nd Ave, Miami",
      descripcion: "Pequeño restaurante italiano con estrella Michelin que sirve platos creativos en un ambiente íntimo y acogedor.",
      imagen: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1932&auto=format&fit=crop",
      precio: "$$$",
      puntuacion: 4.9,
      telefono: "+1 (305) 967-8866",
      horario: "5:00 PM - 10:00 PM",
      sitio_web: "https://www.boiade.com",
      platos_destacados: ["Tortelli de conejo", "Tartar de atún", "Gnocchi", "Tiramisú"]
    },
    {
      nombre: "Coyo Taco",
      tipo: "mexicana",
      ubicacion: "2300 NW 2nd Ave, Miami",
      descripcion: "Taquería casual y de moda en Wynwood con ingredientes frescos y un bar secreto de mezcal en la parte trasera.",
      imagen: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?q=80&w=1480&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.5,
      telefono: "+1 (305) 573-8228",
      horario: "11:00 AM - 3:00 AM",
      sitio_web: "https://www.coyotaco.com",
      platos_destacados: ["Tacos al pastor", "Guacamole", "Esquites", "Margaritas"]
    },
    {
      nombre: "Garcia's Seafood Grille & Fish",
      tipo: "mariscos",
      ubicacion: "398 NW North River Dr, Miami",
      descripcion: "Restaurante familiar junto al río con pescados y mariscos frescos capturados diariamente por su propia flota.",
      imagen: "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=1374&auto=format&fit=crop",
      precio: "$$",
      puntuacion: 4.6,
      telefono: "+1 (305) 375-0765",
      horario: "11:00 AM - 9:00 PM",
      sitio_web: "http://www.garciasmiami.com",
      platos_destacados: ["Paella", "Pescado frito entero", "Camarones al ajillo", "Ceviche fresco"]
    }
  ];

  const cocinas = [
    { value: "todos", label: "Todas las cocinas" },
    { value: "cubana", label: "Cubana" },
    { value: "mariscos", label: "Mariscos" },
    { value: "mediterranea", label: "Mediterránea" },
    { value: "asiatica", label: "Asiática" },
    { value: "peruana", label: "Peruana" },
    { value: "italiana", label: "Italiana" },
    { value: "mexicana", label: "Mexicana" }
  ];

  const restaurantesFiltrados = cuisineFilter === "todos" 
    ? restaurantes 
    : restaurantes.filter(r => r.tipo === cuisineFilter);

  const renderEstrellas = (puntuacion: number) => {
    const estrellas = [];
    const puntuacionRedondeada = Math.round(puntuacion);
    
    for (let i = 1; i <= 5; i++) {
      estrellas.push(
        <Star 
          key={i} 
          className={`w-4 h-4 ${i <= puntuacionRedondeada ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
        />
      );
    }
    
    return <div className="flex space-x-1">{estrellas}</div>;
  };
  
  const renderPrecio = (precio: string) => {
    const dolares = [];
    const maxDolares = 4;
    
    for (let i = 1; i <= maxDolares; i++) {
      dolares.push(
        <DollarSign 
          key={i} 
          className={`w-4 h-4 ${i <= precio.length ? "text-miami-coral" : "text-gray-300"}`} 
        />
      );
    }
    
    return <div className="flex">{dolares}</div>;
  };

  return (
    <div className="pt-20 pb-12 bg-miami-sand min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Descubre la vibrante escena culinaria de Miami, una fusión de sabores 
              caribeños, latinoamericanos e internacionales que deleitan todos los paladares.
            </p>
          </div>
        </div>
        
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1574&auto=format&fit=crop" 
            alt="Gastronomía en Miami" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Sabores de Miami</h2>
              <p className="text-lg opacity-90">
                De la cocina cubana tradicional a los mariscos frescos y la alta gastronomía 
                internacional, Miami ofrece experiencias culinarias para todos los gustos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-6 mb-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-2">Restaurantes Recomendados</h2>
              <p className="text-gray-600">Descubre los mejores lugares para comer en Miami</p>
            </div>
            
            <div className="w-full md:w-64">
              <Select value={cuisineFilter} onValueChange={setCuisineFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Filtrar por cocina" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Tipo de cocina</SelectLabel>
                    {cocinas.map((cocina) => (
                      <SelectItem key={cocina.value} value={cocina.value}>
                        {cocina.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {restaurantesFiltrados.map((restaurante, index) => (
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
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-2">
                  {renderEstrellas(restaurante.puntuacion)}
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{restaurante.nombre}</h3>
                  <div className="flex items-center">
                    {renderPrecio(restaurante.precio)}
                  </div>
                </div>
                
                <div className="flex items-center text-gray-500 mb-3">
                  <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span className="text-sm">{restaurante.ubicacion}</span>
                </div>
                
                <div className="mb-3">
                  <span className="inline-block bg-miami-sand text-gray-800 text-xs px-3 py-1 rounded-full">
                    {cocinas.find(c => c.value === restaurante.tipo)?.label}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4">{restaurante.descripcion}</p>
                
                <Button 
                  className="w-full bg-miami-turquoise hover:bg-miami-coral text-white"
                  onClick={() => setSelectedRestaurant(selectedRestaurant === index ? null : index)}
                >
                  {selectedRestaurant === index ? "Ver menos" : "Ver más información"}
                </Button>
                
                {selectedRestaurant === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-miami-turquoise mr-2 flex-shrink-0" />
                        <span>Horario: {restaurante.horario}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="w-5 h-5 text-miami-turquoise mr-2 flex-shrink-0" />
                        <span>Teléfono: {restaurante.telefono}</span>
                      </div>
                      <div className="flex items-center">
                        <Globe className="w-5 h-5 text-miami-turquoise mr-2 flex-shrink-0" />
                        <a 
                          href={restaurante.sitio_web} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-miami-turquoise hover:underline"
                        >
                          Visitar sitio web
                        </a>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <ChefHat className="w-5 h-5 text-miami-turquoise mr-2" />
                        Platos destacados:
                      </h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {restaurante.platos_destacados.map((plato, i) => (
                          <li key={i} className="flex items-center">
                            <Utensils className="w-4 h-4 text-miami-coral mr-1 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{plato}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            La cultura gastronómica de Miami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-miami-turquoise mb-3">Influencias culinarias</h3>
              <p className="text-gray-700 mb-4">
                La gastronomía de Miami está profundamente influenciada por las culturas caribeñas y latinoamericanas, 
                especialmente la cubana, pero también incorpora elementos de la cocina peruana, venezolana, 
                colombiana, haitiana y de otras partes del mundo.
              </p>
              <p className="text-gray-700">
                Esta fusión única de sabores, junto con el acceso a mariscos frescos y productos locales, 
                ha creado una escena gastronómica vibrante y en constante evolución que atrae a chefs 
                de renombre mundial.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-miami-turquoise mb-3">Experiencias culinarias imperdibles</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Utensils className="w-5 h-5 text-miami-coral mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Café cubano:</strong> Prueba el auténtico cafecito cubano en la Calle Ocho.</span>
                </li>
                <li className="flex items-start">
                  <Utensils className="w-5 h-5 text-miami-coral mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Stone crabs:</strong> Un manjar local de temporada, mejor disfrutado con salsa de mostaza.</span>
                </li>
                <li className="flex items-start">
                  <Utensils className="w-5 h-5 text-miami-coral mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Food trucks:</strong> Explora Wynwood para encontrar food trucks con comidas creativas y asequibles.</span>
                </li>
                <li className="flex items-start">
                  <Utensils className="w-5 h-5 text-miami-coral mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-700"><strong>Ceviche:</strong> Prueba las múltiples variaciones de este plato fresco de pescado en los restaurantes peruanos.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para una aventura gastronómica en Miami?</h2>
          <p className="mb-6">Planifica tu visita y prepara tu paladar para sabores inolvidables</p>
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
