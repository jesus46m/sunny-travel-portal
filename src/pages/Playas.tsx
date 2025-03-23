
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Star, MapPin, Waves, Umbrella, Sun } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Playas = () => {
  const navigate = useNavigate();
  const [selectedPlaya, setSelectedPlaya] = useState<number | null>(null);

  const playas = [
    {
      nombre: "South Beach",
      ubicacion: "Miami, Florida",
      descripcion: "Famosa por su arena blanca, aguas turquesas y ambiente animado. Es el lugar perfecto para ver y ser visto.",
      imagen: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.8,
      caracteristicas: ["Restaurantes cerca", "Vida nocturna", "Deportes acuáticos", "Alquiler de sombrillas"]
    },
    {
      nombre: "Venice Beach",
      ubicacion: "Los Ángeles, California",
      descripcion: "Conocida por su paseo marítimo, deportistas y artistas callejeros. Un lugar icónico para observar la cultura californiana.",
      imagen: "https://images.unsplash.com/photo-1605399611599-53c81f560181?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.6,
      caracteristicas: ["Skate park", "Artistas", "Tiendas", "Gimnasio al aire libre"]
    },
    {
      nombre: "Waikiki Beach",
      ubicacion: "Honolulu, Hawaii",
      descripcion: "Una de las playas más famosas del mundo, con imponentes vistas del Diamond Head y excelentes olas para surf.",
      imagen: "https://images.unsplash.com/photo-1545251142-f32339076e6d?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.9,
      caracteristicas: ["Surf", "Hoteles de lujo", "Volcán Diamond Head", "Cultura hawaiana"]
    },
    {
      nombre: "Cape Cod",
      ubicacion: "Massachusetts",
      descripcion: "Hermosas playas de arena blanca con dunas pintorescas y faros históricos en la costa atlántica.",
      imagen: "https://images.unsplash.com/photo-1509666537727-9154b6962292?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.7,
      caracteristicas: ["Faros", "Historia", "Naturaleza", "Mariscos"]
    },
    {
      nombre: "Coronado Beach",
      ubicacion: "San Diego, California",
      descripcion: "Playa de arena dorada con el icónico Hotel del Coronado como telón de fondo. Perfecta para familias.",
      imagen: "https://images.unsplash.com/photo-1605469237567-a83ebef8b70a?q=80&w=1287&auto=format&fit=crop",
      puntuacion: 4.8,
      caracteristicas: ["Familiar", "Hotel histórico", "Puestas de sol", "Deportes acuáticos"]
    },
    {
      nombre: "Clearwater Beach",
      ubicacion: "Florida",
      descripcion: "Arena blanca suave como el talco y aguas cristalinas en el Golfo de México. Ideal para avistamiento de delfines.",
      imagen: "https://images.unsplash.com/photo-1590523278191-304c566272c4?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.9,
      caracteristicas: ["Delfines", "Pesca", "Cruceros al atardecer", "Parque acuático"]
    }
  ];

  // Función para mostrar las estrellas según la puntuación
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

  return (
    <div className="pt-20 pb-12 min-h-screen bg-[url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=1713&auto=format&fit=crop')] bg-fixed bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/30 before:z-[-1] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 animate-pulse z-[-1]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            className="mb-4 flex items-center text-white hover:text-miami-turquoise"
            onClick={() => navigate('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a inicio
          </Button>
          
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Playas de Ensueño en Estados Unidos
            </h1>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Descubre las mejores playas de Estados Unidos, desde la costa este a la oeste, 
              con arenas blancas, aguas cristalinas y ambientes únicos para todos los gustos.
            </p>
          </div>
        </div>
        
        {/* Spinner animation */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-16 border-4 border-miami-turquoise border-t-miami-coral rounded-full animate-spin"></div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12 backdrop-blur-sm bg-white/10 p-2">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1473&auto=format&fit=crop" 
            alt="Playas de Estados Unidos" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Costas de América</h2>
              <p className="text-lg opacity-90">
                Estados Unidos cuenta con más de 95,000 millas de costa, ofreciendo 
                una increíble variedad de playas para todos los gustos y actividades.
              </p>
            </div>
          </div>
        </div>
        
        {/* Playas grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {playas.map((playa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-white/20"
            >
              <div className="relative h-56">
                <img 
                  src={playa.imagen} 
                  alt={playa.nombre} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{playa.puntuacion}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{playa.nombre}</h3>
                  <div className="flex items-center text-white/80">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{playa.ubicacion}</span>
                  </div>
                </div>
                
                <p className="text-white/90 mb-4">{playa.descripcion}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {playa.caracteristicas.map((caract, i) => (
                    <span 
                      key={i} 
                      className="bg-miami-turquoise/20 text-white text-xs px-3 py-1 rounded-full border border-miami-turquoise/30"
                    >
                      {caract}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-miami-turquoise hover:bg-miami-coral text-white"
                  onClick={() => setSelectedPlaya(selectedPlaya === index ? null : index)}
                >
                  {selectedPlaya === index ? "Ver menos" : "Ver más información"}
                </Button>
                
                {selectedPlaya === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white/20"
                  >
                    <div className="space-y-3 text-white/90">
                      <div className="flex items-center">
                        <Waves className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Condiciones del agua: Excelentes para nadar</span>
                      </div>
                      <div className="flex items-center">
                        <Umbrella className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Servicios: Alquiler de sombrillas y tumbonas</span>
                      </div>
                      <div className="flex items-center">
                        <Sun className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Mejor época: Varía según la ubicación</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Consejos section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ChevronDown className="w-6 h-6 text-miami-turquoise mr-2" />
            Consejos para visitar las playas de Estados Unidos
          </h2>
          
          <div className="space-y-4 text-white/90">
            <p>
              <span className="font-semibold">🌞 Protección solar:</span> El sol en Estados Unidos puede ser intenso, especialmente en el sur. Usa protector solar de alto SPF, sombrero y gafas de sol.
            </p>
            <p>
              <span className="font-semibold">🗺️ Planificación:</span> Las playas de EE.UU. pueden ser muy diferentes entre sí. Investiga sobre las características específicas de cada una antes de visitarla.
            </p>
            <p>
              <span className="font-semibold">🚗 Transporte:</span> En muchas zonas costeras de EE.UU., es recomendable tener un vehículo para desplazarse entre playas y atracciones cercanas.
            </p>
            <p>
              <span className="font-semibold">🏊‍♂️ Seguridad:</span> Presta atención a las banderas de seguridad y nada solo en zonas vigiladas por socorristas.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para visitar estas playas paradisíacas?</h2>
          <p className="mb-6">Planifica tu visita a Estados Unidos y disfruta de sus maravillosas costas</p>
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

export default Playas;
