
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  location: string;
  quote: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      name: "María González",
      location: "Madrid, España",
      quote: "Mi viaje a Nueva York fue increíble gracias a las recomendaciones de este portal. La información detallada sobre cada atracción y los mejores momentos para visitarlas me ahorraron tiempo y dinero.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1740&auto=format&fit=crop"
    },
    {
      name: "Juan Carlos Rodríguez",
      location: "Buenos Aires, Argentina",
      quote: "Recorrer la costa oeste de EEUU siguiendo los consejos de US Travel Portal fue una experiencia perfecta. Las rutas sugeridas para visitar los parques nacionales eran exactamente lo que buscábamos.",
      image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1740&auto=format&fit=crop"
    },
    {
      name: "Sofía Martínez",
      location: "Bogotá, Colombia",
      quote: "Viajar a Orlando con mis hijos fue mucho más sencillo de lo que esperaba gracias a esta web. Los consejos para visitar los parques temáticos fueron extremadamente útiles y nos ahorraron largas esperas.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1587&auto=format&fit=crop"
    }
  ];
  
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Lo que dicen nuestros viajeros</h2>
          <div className="mt-2 w-24 h-1 bg-miami-coral mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Descubre las experiencias de viajeros que han explorado Estados Unidos con nuestra ayuda
          </p>
        </div>
        
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 rounded-xl p-8 shadow-lg relative"
            >
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                <div className="h-20 w-20 rounded-full overflow-hidden border-4 border-white shadow-md">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              
              <div className="pt-10 text-center">
                <blockquote>
                  <p className="text-gray-600 italic mb-5">"{testimonial.quote}"</p>
                </blockquote>
                <div className="mt-2">
                  <div className="font-medium text-gray-900">{testimonial.name}</div>
                  <div className="text-miami-coral">{testimonial.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
