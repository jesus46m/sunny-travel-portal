
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown, Star, MapPin, Building, Mountain, Camera } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";

const StateDetails = () => {
  const navigate = useNavigate();
  const { stateId } = useParams<{ stateId: string }>();
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const [stateData, setStateData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // En una aplicación real, aquí cargaríamos los datos del estado desde una API
    // Por ahora, utilizaremos datos estáticos basados en el stateId
    setLoading(true);
    
    const getStateData = () => {
      const states: { [key: string]: any } = {
        'florida': {
          name: 'Florida',
          nickname: 'El Estado del Sol',
          description: 'Florida es conocido por sus playas increíbles, parques temáticos y clima cálido durante todo el año.',
          image: 'https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop',
          cities: [
            {
              nombre: "Miami",
              descripcion: "Una ciudad vibrante con playas increíbles, vida nocturna y una rica cultura latina.",
              imagen: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1470&auto=format&fit=crop",
              puntuacion: 4.8,
              caracteristicas: ["Playas", "Vida nocturna", "Cultura", "Gastronomía"]
            },
            {
              nombre: "Orlando",
              descripcion: "Hogar de parques temáticos de clase mundial, incluido Walt Disney World y Universal Studios.",
              imagen: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9?q=80&w=1374&auto=format&fit=crop",
              puntuacion: 4.7,
              caracteristicas: ["Parques temáticos", "Atracciones", "Familiar", "Entretenimiento"]
            },
            {
              nombre: "Key West",
              descripcion: "El punto más meridional de los EE. UU. continental, conocido por sus atardeceres y ambiente relajado.",
              imagen: "https://images.unsplash.com/photo-1568552769312-c0f879a7d556?q=80&w=1467&auto=format&fit=crop",
              puntuacion: 4.6,
              caracteristicas: ["Atardeceres", "Historia", "Vida marina", "Relajación"]
            }
          ]
        },
        'california': {
          name: 'California',
          nickname: 'El Estado Dorado',
          description: 'California ofrece de todo, desde playas soleadas hasta montañas nevadas, viñedos y ciudades cosmopolitas.',
          image: 'https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1364&auto=format&fit=crop',
          cities: [
            {
              nombre: "Los Ángeles",
              descripcion: "La ciudad de las estrellas, hogar de Hollywood, hermosas playas y una vibrante escena cultural.",
              imagen: "https://images.unsplash.com/photo-1515896769750-31548aa180ed?q=80&w=1434&auto=format&fit=crop",
              puntuacion: 4.7,
              caracteristicas: ["Hollywood", "Playas", "Cultura", "Compras"]
            },
            {
              nombre: "San Francisco",
              descripcion: "Conocida por el puente Golden Gate, sus empinadas colinas y su rica diversidad cultural.",
              imagen: "https://images.unsplash.com/photo-1521747116042-5a810fda9664?q=80&w=1470&auto=format&fit=crop",
              puntuacion: 4.8,
              caracteristicas: ["Golden Gate", "Alcatraz", "Gastronomía", "Tecnología"]
            },
            {
              nombre: "San Diego",
              descripcion: "Disfruta del mejor clima del país, playas increíbles y el famoso Zoo de San Diego.",
              imagen: "https://images.unsplash.com/photo-1538400900025-e9647e8e5f56?q=80&w=1470&auto=format&fit=crop",
              puntuacion: 4.6,
              caracteristicas: ["Playas", "Zoo", "Clima", "Relajación"]
            }
          ]
        },
        'new-york': {
          name: 'New York',
          nickname: 'El Estado Imperio',
          description: 'New York ofrece desde la bulliciosa metrópolis de Nueva York hasta las tranquilas Catskills y las impresionantes Cataratas del Niágara.',
          image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop',
          cities: [
            {
              nombre: "Nueva York",
              descripcion: "La Gran Manzana, una metrópolis global con iconos como el Empire State, Times Square y Central Park.",
              imagen: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
              puntuacion: 4.9,
              caracteristicas: ["Skyscrapers", "Cultura", "Broadway", "Museos"]
            },
            {
              nombre: "Buffalo",
              descripcion: "Ubicada cerca de las Cataratas del Niágara, ofrece arquitectura histórica y cultura única.",
              imagen: "https://images.unsplash.com/photo-1609200572606-3be8b1005901?q=80&w=1470&auto=format&fit=crop",
              puntuacion: 4.5,
              caracteristicas: ["Cataratas", "Arquitectura", "Historia", "Gastronomía"]
            },
            {
              nombre: "Albany",
              descripcion: "La capital del estado con ricos museos, historia colonial y arquitectura impresionante.",
              imagen: "https://images.unsplash.com/photo-1633631459749-2560f1ff31de?q=80&w=1470&auto=format&fit=crop",
              puntuacion: 4.3,
              caracteristicas: ["Capital", "Historia", "Política", "Cultura"]
            }
          ]
        }
      };

      // Obtener el estado solicitado o usar Florida como predeterminado
      return states[stateId || 'florida'] || states['florida'];
    };

    const data = getStateData();
    setStateData(data);
    setLoading(false);
  }, [stateId]);

  // Si estamos cargando o no hay datos, mostramos un indicador de carga
  if (loading || !stateData) {
    return (
      <div className="pt-20 pb-12 bg-miami-sand min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-miami-coral mx-auto"></div>
          <p className="mt-4 text-gray-600">Cargando información del estado...</p>
        </div>
      </div>
    );
  }

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
              Descubre {stateData.name}
            </h1>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {stateData.description}
            </p>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12">
          <img 
            src={stateData.image} 
            alt={`Imagen de ${stateData.name}`} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{stateData.nickname}</h2>
              <p className="text-lg opacity-90">
                Explora las ciudades principales y descubre lo que {stateData.name} tiene para ofrecer.
              </p>
            </div>
          </div>
        </div>
        
        {/* Cities grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {stateData.cities.map((city: any, index: number) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-56">
                <img 
                  src={city.imagen} 
                  alt={city.nombre} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  <span className="font-medium">{city.puntuacion}</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{city.nombre}</h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{stateData.name}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{city.descripcion}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {city.caracteristicas.map((caract: string, i: number) => (
                    <span 
                      key={i} 
                      className="bg-miami-sand text-gray-800 text-xs px-3 py-1 rounded-full"
                    >
                      {caract}
                    </span>
                  ))}
                </div>
                
                <Button 
                  className="w-full bg-miami-turquoise hover:bg-miami-coral text-white"
                  onClick={() => setSelectedCity(selectedCity === index ? null : index)}
                >
                  {selectedCity === index ? "Ver menos" : "Ver más información"}
                </Button>
                
                {selectedCity === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Building className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Atracciones principales: Parques, museos, monumentos</span>
                      </div>
                      <div className="flex items-center">
                        <Mountain className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Espacios naturales cercanos</span>
                      </div>
                      <div className="flex items-center">
                        <Camera className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Puntos de interés fotográfico</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Consejos section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChevronDown className="w-6 h-6 text-miami-turquoise mr-2" />
            Consejos para visitar {stateData.name}
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">🌞 Mejor época para visitar:</span> Primavera y otoño suelen ofrecer el clima más agradable y menos turistas.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">🚗 Transporte:</span> Considera alquilar un coche para explorar cómodamente las distintas ciudades y atracciones.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">💰 Presupuesto:</span> Planifica con antelación para aprovechar descuentos en entradas y alojamiento.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">🏨 Alojamiento:</span> Reserva con anticipación, especialmente durante la temporada alta.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para visitar {stateData.name}?</h2>
          <p className="mb-6">Planifica tu visita y descubre todo lo que este increíble estado tiene para ofrecer</p>
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

export default StateDetails;
