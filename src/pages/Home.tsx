
import { useState, useEffect } from "react";
import { Palmtree, Umbrella, ShoppingBag, Utensils, Music } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  const navigate = useNavigate();
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520466809213-7b9a56adcd45?q=80&w=1587&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1470&auto=format&fit=crop"
  ];
  
  const highlights = [
    { 
      title: "Playas de Ensueño", 
      description: "Disfruta de las famosas playas de arena blanca y aguas turquesas.", 
      icon: <Umbrella className="w-10 h-10 text-miami-turquoise" /> 
    },
    { 
      title: "Compras de Lujo", 
      description: "Explora tiendas exclusivas y centros comerciales de primer nivel.", 
      icon: <ShoppingBag className="w-10 h-10 text-miami-turquoise" /> 
    },
    { 
      title: "Gastronomía Internacional", 
      description: "Saborea la diversa oferta culinaria con influencias latinas y caribeñas.", 
      icon: <Utensils className="w-10 h-10 text-miami-turquoise" /> 
    },
    { 
      title: "Vida Nocturna Vibrante", 
      description: "Vive la energía de los mejores clubes y bares de South Beach.", 
      icon: <Music className="w-10 h-10 text-miami-turquoise" /> 
    }
  ];
  
  // Cycle through hero images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="mt-16">
      {/* Hero Section */}
      <div 
        className="relative h-screen bg-cover bg-center transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImage]})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white max-w-4xl px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Descubre la magia de <span className="text-miami-coral">Miami</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Playas paradisíacas, vida nocturna vibrante y experiencias inolvidables te esperan
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center">
                <Button 
                  className="bg-miami-coral hover:bg-miami-turquoise text-white px-8 py-6 text-lg"
                  onClick={() => navigate('/info')}
                >
                  Descubrir Miami
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
      
      {/* Welcome Section */}
      <section className="py-16 bg-miami-sand">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Palmtree className="inline-block h-12 w-12 text-miami-coral mb-4" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Bienvenido al Portal de Viajes a Miami
            </h2>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Miami es uno de los destinos turísticos más vibrantes de Estados Unidos, 
              conocido por sus hermosas playas, su diversa cultura y su animada vida nocturna.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 hover-up"
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 miami-gradient text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Estás listo para vivir la experiencia Miami?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Registra tu visita ahora y obtén recomendaciones personalizadas para aprovechar al máximo tu estancia.
          </p>
          <Button 
            className="bg-white text-miami-turquoise hover:bg-miami-coral hover:text-white px-8 py-6 text-lg"
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
