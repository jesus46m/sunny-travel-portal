
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ChevronDown, Star, MapPin, 
  Building, Mountain, Camera, Calendar, 
  Compass, Utensils, Music, Plane 
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const StateDetails = () => {
  const navigate = useNavigate();
  const { stateId } = useParams<{ stateId: string }>();
  const [selectedCity, setSelectedCity] = useState<number | null>(null);
  const [stateData, setStateData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("cities");

  useEffect(() => {
    // En una aplicación real, aquí cargaríamos los datos del estado desde una API
    // Por ahora, utilizaremos datos estáticos basados en el stateId
    setLoading(true);
    
    const getStateData = () => {
      const states: { [key: string]: any } = {
        'florida': {
          name: 'Florida',
          nickname: 'El Estado del Sol',
          description: 'Florida es conocido por sus playas increíbles, parques temáticos y clima cálido durante todo el año. Este estado peninsular ofrece un paraíso tropical con destinos como Miami, Orlando y los Keys.',
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
          ],
          attractions: [
            {
              nombre: "Walt Disney World",
              descripcion: "El complejo turístico más visitado del mundo con cuatro parques temáticos principales.",
              imagen: "https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?q=80&w=1374&auto=format&fit=crop",
              ubicacion: "Orlando",
              tipo: "Parque temático"
            },
            {
              nombre: "Everglades National Park",
              descripcion: "Impresionante humedal subtropical y refugio de vida silvestre único en el país.",
              imagen: "https://images.unsplash.com/photo-1609002106373-bd77441ef5fd?q=80&w=1470&auto=format&fit=crop",
              ubicacion: "Sur de Florida",
              tipo: "Naturaleza"
            },
            {
              nombre: "South Beach",
              descripcion: "Famosa playa y distrito de arte deco con vibración internacional.",
              imagen: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop",
              ubicacion: "Miami",
              tipo: "Playa"
            }
          ],
          events: [
            {
              nombre: "Art Basel Miami",
              fechas: "Diciembre",
              descripcion: "Una de las ferias de arte contemporáneo más prestigiosas del mundo."
            },
            {
              nombre: "Ultra Music Festival",
              fechas: "Marzo",
              descripcion: "Festival de música electrónica de fama mundial que atrae a los mejores DJs."
            },
            {
              nombre: "Florida State Fair",
              fechas: "Febrero",
              descripcion: "Tradicional feria estatal con exhibiciones, comida y atracciones."
            }
          ]
        },
        'california': {
          name: 'California',
          nickname: 'El Estado Dorado',
          description: 'California ofrece de todo, desde playas soleadas hasta montañas nevadas, viñedos y ciudades cosmopolitas. Hogar de Hollywood, Silicon Valley y paisajes naturales espectaculares.',
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
          ],
          attractions: [
            {
              nombre: "Parque Nacional Yosemite",
              descripcion: "Impresionante parque nacional conocido por sus cascadas, secuoyas gigantes y formaciones rocosas.",
              imagen: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1587&auto=format&fit=crop",
              ubicacion: "Sierra Nevada",
              tipo: "Naturaleza"
            },
            {
              nombre: "Universal Studios Hollywood",
              descripcion: "Famoso parque temático y estudio de cine activo con recorridos y atracciones.",
              imagen: "https://images.unsplash.com/photo-1569406125624-98e904664b74?q=80&w=1470&auto=format&fit=crop",
              ubicacion: "Los Ángeles",
              tipo: "Parque temático"
            },
            {
              nombre: "Valle de Napa",
              descripcion: "Renombrada región vinícola con cientos de bodegas, restaurantes gourmet y paisajes panorámicos.",
              imagen: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop",
              ubicacion: "Norte de California",
              tipo: "Gastronomía"
            }
          ],
          events: [
            {
              nombre: "Coachella Music Festival",
              fechas: "Abril",
              descripcion: "Uno de los festivales de música y arte más grandes y famosos del mundo."
            },
            {
              nombre: "San Diego Comic-Con",
              fechas: "Julio",
              descripcion: "La convención de cómics y cultura pop más grande de Estados Unidos."
            },
            {
              nombre: "California State Fair",
              fechas: "Julio",
              descripcion: "Gran feria estatal con exhibiciones, conciertos y comida."
            }
          ]
        },
        'new-york': {
          name: 'New York',
          nickname: 'El Estado Imperio',
          description: 'New York ofrece desde la bulliciosa metrópolis de Nueva York hasta las tranquilas Catskills y las impresionantes Cataratas del Niágara. Un estado con historia, cultura y paisajes diversos.',
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
          ],
          attractions: [
            {
              nombre: "Cataratas del Niágara",
              descripcion: "Espectacular conjunto de cataratas en la frontera entre Estados Unidos y Canadá.",
              imagen: "https://images.unsplash.com/photo-1564041599236-9389c4c57e41?q=80&w=1404&auto=format&fit=crop",
              ubicacion: "Niagara Falls",
              tipo: "Naturaleza"
            },
            {
              nombre: "Central Park",
              descripcion: "Inmenso parque público en Manhattan, un oasis verde en medio de la ciudad.",
              imagen: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=1742&auto=format&fit=crop",
              ubicacion: "Nueva York",
              tipo: "Parque"
            },
            {
              nombre: "Metropolitan Museum of Art",
              descripcion: "Uno de los museos de arte más grandes y prestigiosos del mundo.",
              imagen: "https://images.unsplash.com/photo-1544260644-9c5bb41e1b44?q=80&w=1742&auto=format&fit=crop",
              ubicacion: "Nueva York",
              tipo: "Museo"
            }
          ],
          events: [
            {
              nombre: "New York Fashion Week",
              fechas: "Febrero y Septiembre",
              descripcion: "Uno de los eventos de moda más importantes del mundo."
            },
            {
              nombre: "New Year's Eve Ball Drop",
              fechas: "31 de Diciembre",
              descripcion: "Emblemática celebración de Año Nuevo en Times Square."
            },
            {
              nombre: "Tribeca Film Festival",
              fechas: "Abril",
              descripcion: "Prestigioso festival de cine fundado por Robert De Niro."
            }
          ]
        },
        'texas': {
          name: 'Texas',
          nickname: 'El Estado de la Estrella Solitaria',
          description: 'Texas, el segundo estado más grande del país, ofrece una combinación única de cultura del oeste americano, metrópolis modernas y una rica herencia multicultural que refleja su pasado como república independiente.',
          image: 'https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop',
          cities: [
            {
              nombre: "Houston",
              descripcion: "La ciudad más grande de Texas, hogar del Centro Espacial NASA y un importante centro cultural e industrial.",
              imagen: "https://images.unsplash.com/photo-1627339226726-d525d54536c0?q=80&w=1587&auto=format&fit=crop",
              puntuacion: 4.7,
              caracteristicas: ["Espacio", "Cultura", "Gastronomía", "Museos"]
            },
            {
              nombre: "Austin",
              descripcion: "Capital del estado y centro musical, conocida por su lema 'Keep Austin Weird' y su vibrante escena cultural.",
              imagen: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop",
              puntuacion: 4.8,
              caracteristicas: ["Música", "Tecnología", "Festivales", "Naturaleza"]
            },
            {
              nombre: "San Antonio",
              descripcion: "Ciudad histórica, hogar de El Álamo y el pintoresco River Walk, con fuerte influencia hispana.",
              imagen: "https://images.unsplash.com/photo-1556260756-e1b7f4648e35?q=80&w=1470&auto=format&fit=crop",
              puntuacion: 4.6,
              caracteristicas: ["Historia", "El Álamo", "River Walk", "Cultural"]
            }
          ],
          attractions: [
            {
              nombre: "El Álamo",
              descripcion: "Histórica misión española y sitio de la famosa batalla de 1836, símbolo de la identidad tejana.",
              imagen: "https://images.unsplash.com/photo-1570544820446-3d5d3f8a452d?q=80&w=1470&auto=format&fit=crop",
              ubicacion: "San Antonio",
              tipo: "Historia"
            },
            {
              nombre: "Space Center Houston",
              descripcion: "Centro oficial de visitantes del Centro Espacial Johnson de la NASA, con exhibiciones interactivas.",
              imagen: "https://images.unsplash.com/photo-1542222378-31dae14c7156?q=80&w=1470&auto=format&fit=crop",
              ubicacion: "Houston",
              tipo: "Ciencia"
            },
            {
              nombre: "Big Bend National Park",
              descripcion: "Impresionante parque nacional con paisajes desérticos, cañones y el río Bravo.",
              imagen: "https://images.unsplash.com/photo-1542224566-6e80f506d38f?q=80&w=1588&auto=format&fit=crop",
              ubicacion: "Oeste de Texas",
              tipo: "Naturaleza"
            }
          ],
          events: [
            {
              nombre: "South by Southwest (SXSW)",
              fechas: "Marzo",
              descripcion: "Festival anual de cine, música interactiva y conferencias en Austin."
            },
            {
              nombre: "State Fair of Texas",
              fechas: "Septiembre-Octubre",
              descripcion: "Una de las ferias estatales más grandes de EE.UU., con la famosa Texas Star Ferris Wheel."
            },
            {
              nombre: "Houston Livestock Show and Rodeo",
              fechas: "Febrero-Marzo",
              descripcion: "El rodeo más grande del mundo, con conciertos y exhibiciones ganaderas."
            }
          ]
        },
        'hawaii': {
          name: 'Hawaii',
          nickname: 'El Estado Aloha',
          description: 'Hawaii, un archipiélago tropical en el Pacífico, ofrece playas paradisíacas, volcanes activos, selvas exuberantes y una cultura polinesia única que da la bienvenida a los visitantes con el espíritu de "aloha".',
          image: 'https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop',
          cities: [
            {
              nombre: "Honolulu",
              descripcion: "Capital del estado en la isla de Oahu, hogar de la famosa playa de Waikiki y Pearl Harbor.",
              imagen: "https://images.unsplash.com/photo-1573468708857-df878458cada?q=80&w=1587&auto=format&fit=crop",
              puntuacion: 4.7,
              caracteristicas: ["Playas", "Historia", "Compras", "Cultura"]
            },
            {
              nombre: "Lahaina",
              descripcion: "Histórico pueblo ballenero en Maui, con encanto costero y espectaculares puestas de sol.",
              imagen: "https://images.unsplash.com/photo-1542359649-31e03cd4d909?q=80&w=1631&auto=format&fit=crop",
              puntuacion: 4.6,
              caracteristicas: ["Historia", "Arte", "Ballenas", "Oceáno"]
            },
            {
              nombre: "Hilo",
              descripcion: "Principal ciudad de la Isla Grande, con acceso al Parque Nacional de los Volcanes de Hawaii.",
              imagen: "https://images.unsplash.com/photo-1593847348372-6b62d36cbd7a?q=80&w=1587&auto=format&fit=crop",
              puntuacion: 4.5,
              caracteristicas: ["Volcanes", "Naturaleza", "Mercados", "Cascadas"]
            }
          ],
          attractions: [
            {
              nombre: "Parque Nacional de los Volcanes de Hawaii",
              descripcion: "Parque que alberga dos volcanes activos, incluido el Kilauea, uno de los más activos del mundo.",
              imagen: "https://images.unsplash.com/photo-1573991458006-3701997c6d8f?q=80&w=1587&auto=format&fit=crop",
              ubicacion: "Isla Grande",
              tipo: "Naturaleza"
            },
            {
              nombre: "Pearl Harbor National Memorial",
              descripcion: "Sitio histórico que conmemora el ataque de 1941 que llevó a EE.UU. a la Segunda Guerra Mundial.",
              imagen: "https://images.unsplash.com/photo-1590736704728-f4730bb30770?q=80&w=1376&auto=format&fit=crop",
              ubicacion: "Oahu",
              tipo: "Historia"
            },
            {
              nombre: "Carretera a Hana",
              descripcion: "Pintoresca carretera costera con curvas que ofrece vistas espectaculares, cascadas y playas.",
              imagen: "https://images.unsplash.com/photo-1558491304-5d5ae4ddf46e?q=80&w=1470&auto=format&fit=crop",
              ubicacion: "Maui",
              tipo: "Escénico"
            }
          ],
          events: [
            {
              nombre: "Merrie Monarch Festival",
              fechas: "Semana después de Pascua",
              descripcion: "Prestigioso festival de hula que celebra las tradiciones hawaianas."
            },
            {
              nombre: "Honolulu Festival",
              fechas: "Marzo",
              descripcion: "Celebración de la diversidad cultural del Pacífico con desfiles y eventos."
            },
            {
              nombre: "Aloha Festivals",
              fechas: "Septiembre",
              descripcion: "La mayor celebración cultural hawaiana con eventos en todas las islas."
            }
          ]
        }
      };

      // If the requested state exists, return it, otherwise provide a default
      const requestedState = stateId ? states[stateId] : null;
      
      if (requestedState) {
        return requestedState;
      } else {
        // Check if we can find a close match
        const normalizedStateId = stateId?.toLowerCase().replace(/-/g, ' ');
        for (const [key, state] of Object.entries(states)) {
          if (state.name.toLowerCase() === normalizedStateId) {
            return state;
          }
        }
        // If no match is found, return Florida as default
        return states['florida']; 
      }
    };

    const data = getStateData();
    setStateData(data);
    setLoading(false);
  }, [stateId]);

  // Si estamos cargando o no hay datos, mostramos un indicador de carga
  if (loading || !stateData) {
    return (
      <div className="pt-20 pb-12 usa-futuristic-bg min-h-screen flex items-center justify-center text-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-miami-coral border-t-transparent rounded-full animate-spin mx-auto pulse-glow"></div>
          <p className="mt-4 text-white/80">Cargando información del estado...</p>
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
          className={`w-4 h-4 ${i <= puntuacionRedondeada ? "text-yellow-400 fill-yellow-400" : "text-white/30"}`} 
        />
      );
    }
    
    return <div className="flex space-x-1">{estrellas}</div>;
  };

  return (
    <div className="pt-20 pb-12 usa-futuristic-bg min-h-screen text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Navigation */}
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
              Descubre {stateData.name}
            </h1>
            <div className="w-24 h-1 bg-miami-coral mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              {stateData.description}
            </p>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12 glass-card">
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
        
        {/* Tabs for different content */}
        <Tabs 
          defaultValue="cities" 
          className="mb-12"
          value={activeTab}
          onValueChange={setActiveTab}
        >
          <TabsList className="grid grid-cols-3 max-w-xl mx-auto bg-white/10 p-1 rounded-xl">
            <TabsTrigger value="cities" className="data-[state=active]:bg-miami-coral">
              <Building className="w-4 h-4 mr-2" />
              Ciudades
            </TabsTrigger>
            <TabsTrigger value="attractions" className="data-[state=active]:bg-miami-coral">
              <Camera className="w-4 h-4 mr-2" />
              Atracciones
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-miami-coral">
              <Calendar className="w-4 h-4 mr-2" />
              Eventos
            </TabsTrigger>
          </TabsList>
          
          {/* Cities Tab */}
          <TabsContent value="cities">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white">Principales Ciudades de {stateData.name}</h3>
              <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                Descubre las ciudades más emblemáticas y lo que cada una tiene para ofrecer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {stateData.cities.map((city: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-56">
                    <img 
                      src={city.imagen} 
                      alt={city.nombre} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center space-x-1">
                      <span className="font-medium">{city.puntuacion}</span>
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-white">{city.nombre}</h3>
                      <div className="flex items-center text-white/70">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="text-sm">{stateData.name}</span>
                      </div>
                    </div>
                    
                    <p className="text-white/80 mb-4 line-clamp-2">{city.descripcion}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {city.caracteristicas.map((caract: string, i: number) => (
                        <span 
                          key={i} 
                          className="bg-miami-turquoise/30 text-white text-xs px-3 py-1 rounded-full"
                        >
                          {caract}
                        </span>
                      ))}
                    </div>
                    
                    <div className="mb-4">
                      {renderEstrellas(city.puntuacion)}
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
                        className="mt-4 pt-4 border-t border-white/20"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center">
                            <Building className="w-5 h-5 text-miami-coral mr-2" />
                            <span>Atracciones principales: Monumentos, museos, parques</span>
                          </div>
                          <div className="flex items-center">
                            <Mountain className="w-5 h-5 text-miami-coral mr-2" />
                            <span>Espacios naturales cercanos</span>
                          </div>
                          <div className="flex items-center">
                            <Camera className="w-5 h-5 text-miami-coral mr-2" />
                            <span>Puntos de interés fotográfico</span>
                          </div>
                          <div className="flex items-center">
                            <Utensils className="w-5 h-5 text-miami-coral mr-2" />
                            <span>Escena gastronómica destacada</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          {/* Attractions Tab */}
          <TabsContent value="attractions">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white">Atracciones Principales en {stateData.name}</h3>
              <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                Desde maravillas naturales hasta atracciones culturales, descubre lo mejor que {stateData.name} tiene para ofrecer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stateData.attractions.map((attraction: any, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="relative h-48">
                    <img 
                      src={attraction.imagen} 
                      alt={attraction.nombre} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-miami-coral/90 rounded-full px-3 py-1 text-white text-xs font-medium">
                      {attraction.tipo}
                    </div>
                  </div>
                  
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-white mb-2">{attraction.nombre}</h3>
                    
                    <div className="flex items-center text-white/70 mb-3">
                      <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span className="text-sm">{attraction.ubicacion}</span>
                    </div>
                    
                    <p className="text-white/80 text-sm">{attraction.descripcion}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-10 glass-card p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Tipos de Atracciones en {stateData.name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-miami-turquoise/20 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center mb-3">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Atracciones Culturales</h4>
                  <p className="text-white/80 text-sm">
                    Museos, centros históricos, monumentos y espacios culturales que reflejan la historia y tradiciones del estado.
                  </p>
                </div>
                
                <div className="bg-miami-turquoise/20 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center mb-3">
                    <Mountain className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Naturaleza y Paisajes</h4>
                  <p className="text-white/80 text-sm">
                    Parques nacionales, reservas naturales, playas y espacios al aire libre para disfrutar de la belleza natural.
                  </p>
                </div>
                
                <div className="bg-miami-turquoise/20 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center mb-3">
                    <Music className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Entretenimiento</h4>
                  <p className="text-white/80 text-sm">
                    Parques temáticos, teatros, venues musicales y espacios de ocio para todas las edades y gustos.
                  </p>
                </div>
                
                <div className="bg-miami-turquoise/20 p-4 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center mb-3">
                    <Utensils className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-semibold text-white mb-2">Experiencias Gastronómicas</h4>
                  <p className="text-white/80 text-sm">
                    Rutas gastronómicas, mercados locales, bodegas y destinos para los amantes de la buena comida.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* Events Tab */}
          <TabsContent value="events">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white">Eventos Destacados en {stateData.name}</h3>
              <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                Planifica tu visita en torno a estos eventos especiales que muestran lo mejor de la cultura y tradiciones locales
              </p>
            </div>
            
            <div className="glass-card rounded-xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stateData.events.map((evento: any, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-miami-turquoise/20 p-5 rounded-lg hover:bg-miami-turquoise/30 transition-colors"
                  >
                    <Calendar className="w-8 h-8 text-miami-coral mb-3" />
                    <h4 className="text-lg font-bold text-white mb-1">{evento.nombre}</h4>
                    <p className="text-miami-coral text-sm font-medium mb-2">{evento.fechas}</p>
                    <p className="text-white/80 text-sm">{evento.descripcion}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-miami-turquoise/10 rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">Planificación de Viaje a {stateData.name}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                    <Compass className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Mejores Épocas para Visitar</h4>
                    <p className="text-white/80 text-sm">
                      La primavera y el otoño suelen ofrecer el clima más agradable para visitar {stateData.name}, 
                      con temperaturas moderadas y menos turistas que en temporada alta.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                    <Plane className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Cómo Llegar</h4>
                    <p className="text-white/80 text-sm">
                      {stateData.name} cuenta con varios aeropuertos internacionales bien conectados. 
                      Para explorar completamente el estado, se recomienda alquilar un vehículo.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                    <Calendar className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Duración Recomendada</h4>
                    <p className="text-white/80 text-sm">
                      Para una experiencia completa de {stateData.name}, recomendamos planificar una estancia 
                      de al menos 7-10 días que permita visitar las principales ciudades y atracciones.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                    <Building className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1">Alojamiento</h4>
                    <p className="text-white/80 text-sm">
                      {stateData.name} ofrece opciones para todos los presupuestos: desde hoteles boutique 
                      y resorts de lujo hasta alojamientos económicos y alquileres vacacionales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Estado de ánimo y consejos */}
        <div className="glass-card rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <ChevronDown className="w-6 h-6 text-miami-coral mr-2" />
            Consejos para visitar {stateData.name}
          </h2>
          
          <div className="space-y-4">
            <p className="text-white/80">
              <span className="font-semibold">🌞 Mejor época para visitar:</span> Primavera y otoño suelen ofrecer el clima más agradable y menos turistas.
            </p>
            <p className="text-white/80">
              <span className="font-semibold">🚗 Transporte:</span> Considera alquilar un coche para explorar cómodamente las distintas ciudades y atracciones.
            </p>
            <p className="text-white/80">
              <span className="font-semibold">💰 Presupuesto:</span> Planifica con antelación para aprovechar descuentos en entradas y alojamiento.
            </p>
            <p className="text-white/80">
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
