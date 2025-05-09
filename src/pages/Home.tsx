
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Globe, Calendar, Info, Hotel, Camera, Coffee, Utensils } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import SimpleUSAMap from "@/components/SimpleUSAMap";

const Home = () => {
  const navigate = useNavigate();
  const [selectedState, setSelectedState] = useState("");
  
  const popularStates = [
    {
      id: "florida",
      name: "Florida",
      description: "Playas paradisíacas, parques temáticos y una vibrante vida nocturna",
      image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "california",
      name: "California",
      description: "Desde Hollywood hasta Silicon Valley, pasando por viñedos y playas",
      image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1364&auto=format&fit=crop"
    },
    {
      id: "new-york",
      name: "New York",
      description: "La Gran Manzana, museos de clase mundial y una escena cultural única",
      image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "texas",
      name: "Texas",
      description: "Desde rodeos hasta metrópolis modernas, el estado de la estrella solitaria",
      image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop"
    },
    {
      id: "hawaii",
      name: "Hawaii",
      description: "Paraíso tropical con playas de arena volcánica y naturaleza impresionante",
      image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop"
    },
    {
      id: "nevada",
      name: "Nevada",
      description: "Desde Las Vegas hasta el desierto, entretenimiento y paisajes imponentes",
      image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop"
    }
  ];
  
  const allStates = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", 
    "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", 
    "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", 
    "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", 
    "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota", "Ohio", "Oklahoma", 
    "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", 
    "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"
  ];

  const travelExperiences = [
    {
      title: "Playas de Ensueño",
      description: "Descubre las mejores playas de Estados Unidos, desde la costa este hasta la oeste",
      icon: <Camera />,
      path: "/playas"
    },
    {
      title: "Aventuras en la Naturaleza",
      description: "Parques nacionales y reservas naturales para los amantes del aire libre",
      icon: <MapPin />,
      path: "/info"
    },
    {
      title: "Gastronomía Local",
      description: "Un recorrido por los sabores más auténticos de cada estado",
      icon: <Utensils />,
      path: "/gastronomia"
    },
    {
      title: "Hospedaje Premium",
      description: "Las mejores opciones de alojamiento para todos los presupuestos",
      icon: <Hotel />,
      path: "/info"
    }
  ];

  const handleStateSelect = (value: string) => {
    setSelectedState(value);
  };

  const navigateToState = (stateId: string = selectedState) => {
    if (stateId) {
      navigate(`/state/${stateId.toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  return (
    <div className="mt-16 usa-futuristic-bg">
      {/* Hero Section */}
      <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932&auto=format&fit=crop)" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Descubre los <span className="text-miami-coral">Estados Unidos</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Explora los 50 estados, desde sus playas paradisíacas hasta sus imponentes montañas y vibrantes ciudades
              </p>
              
              <div className="bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg max-w-2xl mx-auto mb-8 glass-card">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-grow">
                    <Select onValueChange={handleStateSelect} value={selectedState}>
                      <SelectTrigger className="w-full h-12 bg-white/20 text-white border-white/30">
                        <SelectValue placeholder="Selecciona un estado" />
                      </SelectTrigger>
                      <SelectContent>
                        {allStates.map((state) => (
                          <SelectItem key={state} value={state.toLowerCase().replace(/\s+/g, '-')}>
                            {state}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button 
                    className="bg-miami-coral hover:bg-white hover:text-miami-coral text-white h-12 px-8"
                    onClick={() => navigateToState()}
                    disabled={!selectedState}
                  >
                    <Search className="w-5 h-5 mr-2" />
                    Explorar
                  </Button>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button 
                  className="bg-miami-coral hover:bg-white hover:text-miami-coral text-white px-8 py-6 text-lg"
                  onClick={() => navigate('/info')}
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Información general
                </Button>
                <Button 
                  className="bg-transparent hover:bg-white hover:text-miami-turquoise border-2 border-white text-white px-8 py-6 text-lg"
                  onClick={() => navigate('/registro')}
                >
                  Planificar Visita
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Interactive Map Section */}
      <section className="py-16 bg-[#1B2034] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-radial from-miami-turquoise to-transparent"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <Globe className="inline-block h-12 w-12 text-miami-coral mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Explora Estados Unidos Interactivamente
            </h2>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Descubre cada estado haciendo clic en el mapa. Conoce sus ciudades principales
              y explora en detalle las maravillas que ofrece cada uno.
            </p>
          </div>
          
          <SimpleUSAMap />
        </div>
      </section>
      
      {/* Popular Destinations Section */}
      <section className="py-16 bg-miami-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Globe className="inline-block h-12 w-12 text-miami-coral mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Destinos Populares
            </h2>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Explora algunos de los estados más visitados de los Estados Unidos, cada uno con su cultura única, 
              atracciones y paisajes impresionantes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularStates.map((state, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer h-80"
                onClick={() => navigate(`/state/${state.id}`)}
                style={{
                  backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.7)), url(${state.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                <div className="h-full flex flex-col justify-between p-6">
                  <div className="bg-miami-turquoise p-3 rounded-full w-fit">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="mt-auto text-white">
                    <h3 className="text-2xl font-bold mb-2 text-center">
                      {state.name}
                    </h3>
                    <p className="text-center mb-4 text-white/90">
                      {state.description}
                    </p>
                    <Button 
                      className="w-full bg-white/20 hover:bg-white backdrop-blur-sm text-white border border-white hover:text-miami-turquoise"
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/state/${state.id}`);
                      }}
                    >
                      Explorar
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Travel Experiences Section - NEW */}
      <section className="py-16 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Experiencias de Viaje Inolvidables
            </h2>
            <div className="w-24 h-1 bg-miami-coral mx-auto mb-6"></div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Descubre una variedad de experiencias únicas que harán de tu visita a Estados Unidos una aventura inolvidable.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {travelExperiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 rounded-xl hover:shadow-xl transition-all hover:-translate-y-2 cursor-pointer bg-white/5"
                onClick={() => navigate(exp.path)}
              >
                <div className="bg-gradient-to-br from-miami-coral to-miami-turquoise p-4 rounded-full w-fit mx-auto mb-4">
                  {exp.icon}
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">{exp.title}</h3>
                <p className="text-gray-300 text-center">{exp.description}</p>
                <div className="mt-4 text-center">
                  <Button 
                    variant="outline" 
                    className="border-miami-coral text-miami-coral hover:bg-miami-coral hover:text-white"
                    onClick={() => navigate(exp.path)}
                  >
                    Descubrir
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Travel Tips Section - NEW */}
      <section className="py-16 bg-miami-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Info className="inline-block h-12 w-12 text-miami-coral mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Consejos para Viajeros
            </h2>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Información útil para planificar tu viaje a Estados Unidos
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Calendar className="h-12 w-12 text-miami-coral mb-4" />
              <h3 className="text-xl font-bold mb-2">Mejor Época para Viajar</h3>
              <p className="text-gray-600">La primavera (abril-junio) y el otoño (septiembre-noviembre) ofrecen temperaturas agradables y menos turistas en la mayoría de los destinos.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Coffee className="h-12 w-12 text-miami-coral mb-4" />
              <h3 className="text-xl font-bold mb-2">Cultura y Costumbres</h3>
              <p className="text-gray-600">La propina es una costumbre importante en EEUU. En restaurantes, se espera una propina del 15-20% del total de la cuenta.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
              <Info className="h-12 w-12 text-miami-coral mb-4" />
              <h3 className="text-xl font-bold mb-2">Documentación</h3>
              <p className="text-gray-600">Asegúrate de tener un pasaporte válido y verificar los requisitos de visa según tu país de origen antes de planificar tu viaje.</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <Button 
              className="bg-miami-coral hover:bg-miami-turquoise text-white px-6 py-3 text-lg"
              onClick={() => navigate('/info')}
            >
              Más consejos de viaje
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-miami-turquoise to-miami-coral text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Estás listo para explorar los Estados Unidos?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Registra tu visita ahora y obtén recomendaciones personalizadas para aprovechar al máximo tu estancia.
          </p>
          <Button 
            className="bg-white text-miami-turquoise hover:bg-miami-sand hover:text-miami-coral px-8 py-6 text-lg"
            onClick={() => navigate('/registro')}
          >
            Registrar mi visita
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
