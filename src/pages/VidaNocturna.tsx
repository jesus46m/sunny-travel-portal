
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Star, MapPin, Clock, Music, Wine } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const VidaNocturna = () => {
  const navigate = useNavigate();
  const [selectedClub, setSelectedClub] = useState<number | null>(null);

  const clubes = [
    {
      nombre: "LIV Miami",
      ubicacion: "Miami, Florida",
      descripcion: "Uno de los clubes nocturnos más famosos de Miami, conocido por su ambiente de lujo y sus destacados DJs internacionales.",
      imagen: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?q=80&w=1664&auto=format&fit=crop",
      puntuacion: 4.7,
      caracteristicas: ["DJs Internacionales", "Ambiente VIP", "Servicio de botella", "Celebridades"]
    },
    {
      nombre: "Marquee",
      ubicacion: "Las Vegas, Nevada",
      descripcion: "Club icónico de Las Vegas con increíbles espectáculos de luces, DJs de clase mundial y cabinas VIP de lujo.",
      imagen: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1430&auto=format&fit=crop",
      puntuacion: 4.8,
      caracteristicas: ["Pool party", "DJs famosos", "Ambiente exclusivo", "Sistema de luces"]
    },
    {
      nombre: "1 OAK",
      ubicacion: "Nueva York, NY",
      descripcion: "Club exclusivo en Manhattan conocido por atraer a celebridades y por su ambiente sofisticado y elegante.",
      imagen: "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=1460&auto=format&fit=crop",
      puntuacion: 4.6,
      caracteristicas: ["Celebridades", "Diseño elegante", "Coctelería premium", "Hip-hop"]
    },
    {
      nombre: "Exchange LA",
      ubicacion: "Los Ángeles, California",
      descripcion: "Ubicado en el histórico edificio de la Bolsa de Valores, es el epicentro de la música electrónica en Los Ángeles.",
      imagen: "https://images.unsplash.com/photo-1519671017201-2b5f6f7c70e3?q=80&w=1430&auto=format&fit=crop",
      puntuacion: 4.5,
      caracteristicas: ["Edificio histórico", "Música EDM", "Sistema de sonido", "Luz y láser"]
    },
    {
      nombre: "The Continental Club",
      ubicacion: "Austin, Texas",
      descripcion: "Legendario club de música en vivo donde se puede disfrutar de auténtico blues, rock y country tejano.",
      imagen: "https://images.unsplash.com/photo-1483393458019-411bc6bd104e?q=80&w=1471&auto=format&fit=crop",
      puntuacion: 4.7,
      caracteristicas: ["Música en vivo", "Blues", "Rock", "Historia musical"]
    },
    {
      nombre: "Foundation Nightclub",
      ubicacion: "Seattle, Washington",
      descripcion: "Principal club de música electrónica de Seattle, con un sistema de sonido de primera categoría y atmósfera única.",
      imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop",
      puntuacion: 4.5,
      caracteristicas: ["Bass music", "Dubstep", "Escena local", "Luces LED"]
    }
  ];

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
    <div className="pt-20 pb-12 min-h-screen bg-[url('https://images.unsplash.com/photo-1525971977657-e47c43b62368?q=80&w=1770&auto=format&fit=crop')] bg-fixed bg-cover bg-center before:content-[''] before:absolute before:inset-0 before:bg-black/60 before:z-[-1] relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/70 animate-pulse z-[-1]"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Vida Nocturna en Estados Unidos
            </h1>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Descubre la vibrante escena de clubes y bares de Estados Unidos, desde exclusivos clubes de Las Vegas 
              hasta los auténticos bares de jazz en Nueva Orleans y los rascacielos de Nueva York.
            </p>
          </div>
        </div>
        
        {/* Spinner animation */}
        <div className="flex justify-center mb-12">
          <div className="w-16 h-16 border-4 border-miami-coral border-t-miami-turquoise rounded-full animate-spin"></div>
        </div>
        
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12 backdrop-blur-sm bg-white/10 p-2">
          <img 
            src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1470&auto=format&fit=crop" 
            alt="Vida nocturna en Estados Unidos" 
            className="w-full h-full object-cover rounded-lg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">La Nación que Nunca Duerme</h2>
              <p className="text-lg opacity-90">
                Estados Unidos ofrece una de las escenas nocturnas más diversas del mundo, 
                con estilos únicos en cada ciudad y para todos los gustos.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {clubes.map((club, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-white/20"
            >
              <div className="relative h-56">
                <img 
                  src={club.imagen} 
                  alt={club.nombre} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{club.puntuacion}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-white">{club.nombre}</h3>
                  <div className="flex items-center text-white/80">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{club.ubicacion}</span>
                  </div>
                </div>
                
                <p className="text-white/90 mb-4">{club.descripcion}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {club.caracteristicas.map((caract, i) => (
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
                  onClick={() => setSelectedClub(selectedClub === index ? null : index)}
                >
                  {selectedClub === index ? "Ver menos" : "Ver más información"}
                </Button>
                
                {selectedClub === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-white/20"
                  >
                    <div className="space-y-3 text-white/90">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Horario: 10PM - 4AM (Jueves a Domingo)</span>
                      </div>
                      <div className="flex items-center">
                        <Music className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Música: Varía según la ciudad y el club</span>
                      </div>
                      <div className="flex items-center">
                        <Wine className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Precio bebidas: $$ - $$$$</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white/10 backdrop-blur-md rounded-xl shadow-lg p-8 mb-12 border border-white/20">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ChevronDown className="w-6 h-6 text-miami-turquoise mr-2" />
            Consejos para disfrutar la vida nocturna en Estados Unidos
          </h2>
          
          <div className="space-y-4 text-white/90">
            <p>
              <span className="font-semibold">👔 Código de vestimenta:</span> Varía enormemente según la ciudad y el lugar. En Las Vegas y Nueva York, los clubes de lujo tienen códigos estrictos, mientras que otras ciudades son más relajadas.
            </p>
            <p>
              <span className="font-semibold">⏰ Horarios:</span> La hora de cierre varía según las leyes locales. En ciudades como Nueva York, los bares cierran a las 4 am, mientras que en otras ciudades pueden cerrar a las 2 am.
            </p>
            <p>
              <span className="font-semibold">💰 Precios:</span> El costo de la vida nocturna varía considerablemente. Las ciudades como Las Vegas, Nueva York y Miami tienden a ser más caras.
            </p>
            <p>
              <span className="font-semibold">🚕 Transporte:</span> Planifica cómo regresar al hotel. Utiliza servicios de rideshare o taxis para moverte con seguridad.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para vivir la noche americana?</h2>
          <p className="mb-6">Planifica tu visita y descubre la energía de la vida nocturna en Estados Unidos</p>
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

export default VidaNocturna;
