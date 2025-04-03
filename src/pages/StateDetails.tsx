
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { MapPin, Calendar, Hotel, Utensils, Camera, Info } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import StateGallery from "@/components/StateGallery";
import Testimonials from "@/components/Testimonials";
import TravelFAQ from "@/components/TravelFAQ";

// Datos detallados de cada estado
const statesData = {
  "alabama": {
    name: "Alabama",
    description: "Alabama, ubicado en el sureste de los Estados Unidos, es conocido por su rica historia sureña, hermosos paisajes naturales y su vibrante herencia cultural. Desde las montañas Apalaches en el norte hasta las playas de arena blanca en el Golfo de México, Alabama ofrece una amplia gama de experiencias para los visitantes.",
    heroImage: "https://images.unsplash.com/photo-1578309992456-c4f4cb28de0b?q=80&w=1740&auto=format&fit=crop",
    cities: ["Birmingham", "Montgomery", "Mobile", "Huntsville", "Tuscaloosa"],
    attractions: [
      {
        name: "U.S. Space & Rocket Center",
        location: "Huntsville",
        description: "El museo espacial más grande del mundo, con exhibiciones de cohetes, logros espaciales y actividades interactivas."
      },
      {
        name: "Gulf Shores",
        location: "Gulf Shores",
        description: "Hermosas playas de arena blanca a lo largo del Golfo de México, ideales para relajarse y practicar deportes acuáticos."
      },
      {
        name: "Museo de Derechos Civiles de Birmingham",
        location: "Birmingham",
        description: "Dedicado al movimiento por los derechos civiles en los años 60, ofrece una mirada profunda a la historia."
      }
    ],
    food: ["Barbacoa sureña", "Mariscos frescos del Golfo", "Pastel de nuez pecana", "Pollo frito sureño"]
  },
  "alaska": {
    name: "Alaska",
    description: "Alaska, el estado más grande de los Estados Unidos, es una tierra de contrastes espectaculares, con vastos desiertos, montañas majestuosas, glaciares imponentes y una abundante vida silvestre. Como último estado en ser colonizado, Alaska mantiene un sentido de aventura y exploración que atrae a amantes de la naturaleza de todo el mundo.",
    heroImage: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1744&auto=format&fit=crop",
    cities: ["Anchorage", "Juneau", "Fairbanks", "Sitka", "Ketchikan"],
    attractions: [
      {
        name: "Parque Nacional Denali",
        location: "Interior de Alaska",
        description: "Hogar del Monte Denali, la montaña más alta de Norteamérica, y una increíble variedad de vida silvestre."
      },
      {
        name: "Glaciar Mendenhall",
        location: "Juneau",
        description: "Un impresionante glaciar accesible por carretera, con vistas panorámicas y rutas de senderismo."
      },
      {
        name: "Northern Lights",
        location: "Fairbanks",
        description: "Uno de los mejores lugares del mundo para ver la aurora boreal durante los meses de invierno."
      }
    ],
    food: ["Salmón salvaje de Alaska", "Cangrejo real", "Halibut fresco", "Carnes de caza silvestre"]
  },
  "arizona": {
    name: "Arizona",
    description: "Arizona, hogar del Gran Cañón, es un estado de extraordinaria belleza natural, caracterizado por sus vastos desiertos, cañones profundos y formaciones rocosas impresionantes. Con un clima soleado durante todo el año y un rico patrimonio nativo americano, Arizona ofrece experiencias únicas para los viajeros aventureros.",
    heroImage: "https://images.unsplash.com/photo-1558645836-e44122a743ee?q=80&w=1740&auto=format&fit=crop",
    cities: ["Phoenix", "Tucson", "Sedona", "Flagstaff", "Scottsdale"],
    attractions: [
      {
        name: "Gran Cañón",
        location: "Norte de Arizona",
        description: "Una de las maravillas naturales más impresionantes del mundo, con vistas panorámicas que te dejarán sin aliento."
      },
      {
        name: "Sedona",
        location: "Sedona",
        description: "Conocida por sus formaciones de roca roja y energía espiritual, es un paraíso para senderistas y buscadores espirituales."
      },
      {
        name: "Monumento Nacional Saguaro",
        location: "Tucson",
        description: "Protege los icónicos cactus saguaro, símbolos del desierto americano."
      }
    ],
    food: ["Cocina Tex-Mex", "Chiles verdes", "Comida Navajo", "Nopalitos"]
  },
  "california": {
    name: "California",
    description: "California, el estado dorado, ofrece una diversidad incomparable: desde playas de ensueño hasta montañas nevadas, desde el glamour de Hollywood hasta la innovación de Silicon Valley. Con su clima mediterráneo, vibrantes ciudades y una escena culinaria y vinícola de clase mundial, California representa el sueño americano para muchos visitantes.",
    heroImage: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1364&auto=format&fit=crop",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San José"],
    attractions: [
      {
        name: "Parque Nacional Yosemite",
        location: "Sierra Nevada",
        description: "Famoso por sus cascadas, secuoyas gigantes y formaciones de granito como El Capitán y Half Dome."
      },
      {
        name: "Golden Gate Bridge",
        location: "San Francisco",
        description: "El icónico puente rojo que se ha convertido en símbolo de San Francisco y California."
      },
      {
        name: "Disneyland",
        location: "Anaheim",
        description: "El primer parque temático de Disney, conocido como 'El lugar más feliz de la Tierra'."
      }
    ],
    food: ["Tacos de pescado de Baja", "Vinos de Napa Valley", "Ensalada Cobb", "Hamburguesa In-N-Out"]
  },
  "colorado": {
    name: "Colorado",
    description: "Colorado, conocido como el 'Estado Centenario', es famoso por las majestuosas Montañas Rocosas que atraen a esquiadores, excursionistas y amantes de la naturaleza durante todo el año. Con más de 300 días de sol al año, ciudades vibrantes y un auge en la cultura cervecera artesanal, Colorado ofrece el equilibrio perfecto entre aventura al aire libre y sofisticación urbana.",
    heroImage: "https://images.unsplash.com/photo-1602705169259-fec1eb128f1e?q=80&w=1740&auto=format&fit=crop",
    cities: ["Denver", "Colorado Springs", "Boulder", "Fort Collins", "Aspen"],
    attractions: [
      {
        name: "Parque Nacional de las Montañas Rocosas",
        location: "Estes Park",
        description: "Un paraíso alpino con más de 100 picos que superan los 3,000 metros y abundante vida silvestre."
      },
      {
        name: "Garden of the Gods",
        location: "Colorado Springs",
        description: "Impresionantes formaciones de arenisca roja con las montañas como telón de fondo."
      },
      {
        name: "Aspen/Vail",
        location: "Aspen/Vail",
        description: "Destinos de esquí de clase mundial con resorts de lujo y encantadores pueblos de montaña."
      }
    ],
    food: ["Bisonte", "Truchas de montaña", "Chiles verdes de Pueblo", "Cerveza artesanal local"]
  },
  "florida": {
    name: "Florida",
    description: "Florida, conocida como el 'Estado del Sol', es un paraíso tropical dentro de los Estados Unidos. Con más de 1,300 kilómetros de playas, parques temáticos de clase mundial y un clima cálido durante todo el año, Florida atrae a millones de visitantes en busca de diversión, relajación y aventuras únicas.",
    heroImage: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Key West"],
    attractions: [
      {
        name: "Walt Disney World",
        location: "Orlando",
        description: "El complejo de parques temáticos más visitado del mundo, con cuatro parques principales y numerosas atracciones."
      },
      {
        name: "Parque Nacional Everglades",
        location: "Sur de Florida",
        description: "Un vasto ecosistema subtropical con manglares, pantanos y una rica biodiversidad, incluyendo caimanes."
      },
      {
        name: "South Beach",
        location: "Miami",
        description: "Famosa playa con arquitectura Art Déco, vida nocturna vibrante y cultura latina."
      }
    ],
    food: ["Mariscos frescos", "Key Lime Pie", "Cocina cubana", "Naranjas frescas"]
  },
  "georgia": {
    name: "Georgia",
    description: "Georgia, el 'Estado del Melocotón', combina el encanto sureño tradicional con el dinamismo moderno de Atlanta. Con sus montañas en el norte, costas en el este y una rica historia que abarca desde la época colonial hasta el movimiento por los derechos civiles, Georgia ofrece una experiencia diversa y auténticamente sureña para los visitantes.",
    heroImage: "https://images.unsplash.com/photo-1575931953324-fcac7094999e?q=80&w=1740&auto=format&fit=crop",
    cities: ["Atlanta", "Savannah", "Athens", "Augusta", "Macon"],
    attractions: [
      {
        name: "Centro de CNN",
        location: "Atlanta",
        description: "Sede mundial de la cadena de noticias CNN, con tours que muestran cómo se produce la programación."
      },
      {
        name: "Distrito Histórico de Savannah",
        location: "Savannah",
        description: "Uno de los distritos históricos más grandes del país, con hermosas plazas, arquitectura y robles cubiertos de musgo español."
      },
      {
        name: "Centro Martin Luther King Jr.",
        location: "Atlanta",
        description: "Sitio histórico nacional que honra al líder de los derechos civiles, incluyendo su casa natal y tumba."
      }
    ],
    food: ["Melocotones de Georgia", "Pollo frito", "Grits", "Pastel de nuez pecana"]
  },
  "hawaii": {
    name: "Hawaii",
    description: "Hawaii, un archipiélago tropical en el Pacífico, es el único estado insular de EE.UU. y un destino de ensueño para viajeros de todo el mundo. Con volcanes activos, playas de arena negra y dorada, selvas tropicales y una cultura polinesia única, Hawaii ofrece un paraíso exótico con la comodidad y familiaridad de los Estados Unidos.",
    heroImage: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop",
    cities: ["Honolulu", "Lahaina", "Hilo", "Kailua-Kona", "Waimea"],
    attractions: [
      {
        name: "Parque Nacional de los Volcanes de Hawaii",
        location: "Isla de Hawaii (Big Island)",
        description: "Hogar del Kilauea, uno de los volcanes más activos del mundo, con impresionantes paisajes volcánicos."
      },
      {
        name: "Pearl Harbor",
        location: "Oahu",
        description: "Sitio histórico que conmemora el ataque de 1941 que llevó a EE.UU. a la Segunda Guerra Mundial."
      },
      {
        name: "Playa de Waikiki",
        location: "Honolulu",
        description: "La playa más famosa de Hawaii, perfecta para tomar el sol, nadar y aprender surf."
      }
    ],
    food: ["Poke", "Kalua pig", "Spam musubi", "Shave ice"]
  },
  "new-york": {
    name: "New York",
    description: "Nueva York, el 'Imperio State', es una potencia cultural y económica que ofrece una increíble diversidad de experiencias. Desde la icónica ciudad de Nueva York hasta las cataratas del Niágara y las serenas montañas Adirondack, este estado combina una energía urbana inigualable con magníficos paisajes naturales y una rica historia americana.",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
    cities: ["Nueva York", "Buffalo", "Rochester", "Syracuse", "Albany"],
    attractions: [
      {
        name: "Estatua de la Libertad",
        location: "Nueva York",
        description: "Símbolo icónico de la libertad y la democracia, situado en la isla Liberty en el puerto de Nueva York."
      },
      {
        name: "Cataratas del Niágara",
        location: "Niagara Falls",
        description: "Una de las maravillas naturales más impresionantes del mundo, en la frontera entre EE.UU. y Canadá."
      },
      {
        name: "Times Square",
        location: "Manhattan",
        description: "Intersección emblemática conocida por sus enormes carteles luminosos, teatros de Broadway y ambiente vibrante."
      }
    ],
    food: ["Pizza de Nueva York", "Bagels", "Cheesecake", "Pastrami en Katz's Deli"]
  },
  "texas": {
    name: "Texas",
    description: "Texas, el 'Estado de la Estrella Solitaria', es famoso por su tamaño, orgullo y espíritu independiente. Desde las modernas metrópolis hasta los paisajes desérticos y las históricas misiones, Texas ofrece una rica mezcla de cultura occidental, mexicana y sureña, junto con una impresionante variedad de entornos naturales y experiencias urbanas.",
    heroImage: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop",
    cities: ["Houston", "Dallas", "Austin", "San Antonio", "Fort Worth"],
    attractions: [
      {
        name: "El Álamo",
        location: "San Antonio",
        description: "Histórica misión española y sitio de la famosa batalla de 1836, símbolo del espíritu independiente de Texas."
      },
      {
        name: "Space Center Houston",
        location: "Houston",
        description: "Centro de visitantes del Centro Espacial Johnson de la NASA, con exhibiciones espaciales fascinantes."
      },
      {
        name: "Riverwalk",
        location: "San Antonio",
        description: "Paseo fluvial con restaurantes, tiendas y entretenimiento a lo largo del río San Antonio."
      }
    ],
    food: ["Barbacoa texana", "Tex-Mex", "Chili con carne", "Bistec"]
  },
  "nevada": {
    name: "Nevada",
    description: "Nevada, el 'Estado de la Plata', es conocido por sus contrastes extremos: desde el desierto abrasador hasta las montañas nevadas, desde Las Vegas, la capital mundial del entretenimiento, hasta vastos espacios abiertos y pueblos fantasmas. Con su cultura de juego legalizado, espectáculos de clase mundial y paisajes impresionantes, Nevada ofrece experiencias únicas para todo tipo de viajeros.",
    heroImage: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop",
    cities: ["Las Vegas", "Reno", "Carson City", "Henderson", "Sparks"],
    attractions: [
      {
        name: "Las Vegas Strip",
        location: "Las Vegas",
        description: "Famosa avenida con hoteles-casino temáticos, espectáculos y entretenimiento las 24 horas."
      },
      {
        name: "Lago Tahoe",
        location: "Sierra Nevada",
        description: "Uno de los lagos alpinos más hermosos de América, con aguas cristalinas y oportunidades para esquiar y navegar."
      },
      {
        name: "Valle de Fuego",
        location: "Overton",
        description: "Parque estatal con formaciones de arenisca roja de 150 millones de años y petroglifos antiguos."
      }
    ],
    food: ["Prime rib", "Buffets de lujo", "Shrimp cocktail", "Comida internacional de chef"]
  }
};

const StateDetails = () => {
  const { stateId } = useParams<{ stateId: string }>();
  const [state, setState] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (stateId && statesData[stateId as keyof typeof statesData]) {
      setState(statesData[stateId as keyof typeof statesData]);
    } else {
      // Si no existe el estado, podríamos redirigir o mostrar un mensaje
      setState({
        name: "Estado no encontrado",
        description: "Lo sentimos, no encontramos información para el estado solicitado.",
        cities: [],
        attractions: [],
        food: []
      });
    }
    setLoading(false);
  }, [stateId]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin h-12 w-12 border-4 border-miami-coral border-t-transparent rounded-full"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* SEO */}
      <Helmet>
        <title>Descubre {state?.name} | USA Explorer</title>
        <meta name="description" content={`Explora ${state?.name}. Descubre sus atracciones turísticas, ciudades, gastronomía y mucho más.`} />
      </Helmet>

      {/* Hero Section */}
      <div 
        className="relative h-[60vh] bg-cover bg-center" 
        style={{ backgroundImage: `url(${state?.heroImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Descubre <span className="text-miami-coral">{state?.name}</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                {state?.description}
              </p>
              <Button 
                className="bg-miami-coral hover:bg-white hover:text-miami-coral text-white px-8 py-6 text-lg"
              >
                Planificar mi visita
              </Button>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
            <TabsTrigger value="overview">Vista General</TabsTrigger>
            <TabsTrigger value="attractions">Atracciones</TabsTrigger>
            <TabsTrigger value="cities">Ciudades</TabsTrigger>
            <TabsTrigger value="gallery">Galería</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-12">
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Sobre {state?.name}</h2>
                <p className="text-lg text-gray-700 mb-6">
                  {state?.description}
                </p>
                
                <h3 className="text-2xl font-semibold mb-4">Gastronomía Destacada</h3>
                <div className="flex flex-wrap gap-2">
                  {state?.food.map((item: string, idx: number) => (
                    <span 
                      key={idx} 
                      className="bg-miami-sand px-4 py-2 rounded-full flex items-center text-gray-800"
                    >
                      <Utensils className="h-4 w-4 mr-2 text-miami-coral" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-semibold mb-4">Ciudades Principales</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {state?.cities.map((city: string, idx: number) => (
                    <div 
                      key={idx} 
                      className="bg-white p-4 rounded-lg shadow-md flex items-center"
                    >
                      <MapPin className="h-5 w-5 text-miami-coral mr-3" />
                      <span className="font-medium">{city}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-miami-turquoise/10 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3 flex items-center">
                    <Info className="h-5 w-5 mr-2 text-miami-turquoise" />
                    Datos Interesantes
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="bg-miami-turquoise h-2 w-2 rounded-full mt-2 mr-2"></span>
                      <span>Capital: {state?.cities[0]}</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-miami-turquoise h-2 w-2 rounded-full mt-2 mr-2"></span>
                      <span>Mejor época para visitar: Primavera y Otoño</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-miami-turquoise h-2 w-2 rounded-full mt-2 mr-2"></span>
                      <span>Aeropuertos principales en {state?.cities[0]} y {state?.cities[1]}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-3xl font-bold mb-6">Testimonios de Viajeros</h2>
              <Testimonials stateId={stateId || ""} />
            </section>
          </TabsContent>
          
          <TabsContent value="attractions" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Atracciones Principales en {state?.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {state?.attractions.map((attraction: any, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-miami-turquoise/20 flex items-center justify-center">
                    <Camera className="h-16 w-16 text-miami-coral opacity-70" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{attraction.name}</h3>
                    <p className="text-sm text-miami-coral mb-3 flex items-center">
                      <MapPin className="h-4 w-4 mr-1" />
                      {attraction.location}
                    </p>
                    <p className="text-gray-600">{attraction.description}</p>
                    <Button className="mt-4 bg-miami-turquoise hover:bg-miami-coral">
                      Más información
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="cities" className="space-y-8">
            <h2 className="text-3xl font-bold mb-6">Ciudades para Explorar en {state?.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {state?.cities.map((city: string, idx: number) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="relative h-64 rounded-lg overflow-hidden group"
                >
                  <div 
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(https://source.unsplash.com/featured/?${city},city)` }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
                    <h3 className="text-2xl font-bold mb-2">{city}</h3>
                    <p className="text-center opacity-90">Explora la vibrante ciudad de {city} y descubre su cultura única.</p>
                    <Button className="mt-4 bg-white/20 hover:bg-white backdrop-blur-sm text-white border border-white/50 hover:text-miami-turquoise group-hover:translate-y-0 translate-y-2 opacity-0 group-hover:opacity-100 transition-all">
                      Descubrir {city}
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="gallery">
            <h2 className="text-3xl font-bold mb-6">Galería de {state?.name}</h2>
            <StateGallery stateId={stateId || ""} />
          </TabsContent>
          
          <TabsContent value="faq">
            <h2 className="text-3xl font-bold mb-6">Preguntas Frecuentes sobre {state?.name}</h2>
            <TravelFAQ stateId={stateId || ""} />
          </TabsContent>
        </Tabs>
      </div>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-miami-turquoise to-miami-coral text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para explorar {state?.name}?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Regístrate ahora y obtén recomendaciones personalizadas para tu visita a {state?.name}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              className="bg-white text-miami-turquoise hover:bg-miami-sand hover:text-miami-coral px-8 py-6 text-lg"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Planificar mi viaje
            </Button>
            <Button 
              className="bg-white/20 backdrop-blur-sm text-white border border-white hover:bg-white hover:text-miami-coral px-8 py-6 text-lg"
            >
              <Hotel className="mr-2 h-5 w-5" />
              Explorar alojamientos
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StateDetails;
