
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
      ubicacion: "Miami Beach",
      descripcion: "Famosa por su arena blanca, aguas turquesas y ambiente animado. Es el lugar perfecto para ver y ser visto.",
      imagen: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.8,
      caracteristicas: ["Restaurantes cerca", "Vida nocturna", "Deportes acuáticos", "Alquiler de sombrillas"]
    },
    {
      nombre: "Sunny Isles Beach",
      ubicacion: "Sunny Isles",
      descripcion: "Conocida como la Riviera de Florida, ofrece una experiencia más tranquila con menos multitudes que South Beach.",
      imagen: "https://images.unsplash.com/photo-1617859047452-8510bcf207fd?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.6,
      caracteristicas: ["Familiar", "Tranquila", "Hoteles de lujo", "Pesca"]
    },
    {
      nombre: "Bill Baggs Cape",
      ubicacion: "Key Biscayne",
      descripcion: "Hogar del famoso faro de Cape Florida, ofrece aguas cristalinas y excelentes oportunidades para practicar esnórquel.",
      imagen: "https://images.unsplash.com/photo-1484507175567-a114f764f78b?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.7,
      caracteristicas: ["Snorkel", "Ciclismo", "Parque estatal", "Histórico"]
    },
    {
      nombre: "Crandon Park",
      ubicacion: "Key Biscayne",
      descripcion: "Playa familiar con aguas tranquilas y poco profundas, perfecta para nadar y hacer picnic.",
      imagen: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.5,
      caracteristicas: ["Familiar", "Picnic", "Canchas de tenis", "Aguas tranquilas"]
    },
    {
      nombre: "Haulover Beach",
      ubicacion: "North Miami",
      descripcion: "Conocida por su sección opcional para nudistas y por ser una de las mejores playas para surfear en el área.",
      imagen: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=1649&auto=format&fit=crop",
      puntuacion: 4.3,
      caracteristicas: ["Surf", "Área nudista", "Parque para perros", "Kitesurf"]
    },
    {
      nombre: "Virginia Key Beach",
      ubicacion: "Key Biscayne",
      descripcion: "Playa histórica con un hermoso entorno natural y menos turistas, ideal para escapar de las multitudes.",
      imagen: "https://images.unsplash.com/photo-1484507175567-a114f764f78b?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.4,
      caracteristicas: ["Senderos", "Mountain bike", "Kitesurf", "Histórica"]
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
              Playas de Ensueño en Miami
            </h1>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre las mejores playas de Miami y sus alrededores, con arena blanca, 
              aguas cristalinas y un ambiente único que solo la Florida puede ofrecer.
            </p>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1374&auto=format&fit=crop" 
            alt="Playas de Miami" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Paraísos de Arena Blanca</h2>
              <p className="text-lg opacity-90">
                Miami cuenta con algunas de las playas más espectaculares de Estados Unidos, 
                ideales para relajarse, practicar deportes acuáticos o disfrutar del ambiente.
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
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
                  <h3 className="text-xl font-bold text-gray-900">{playa.nombre}</h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{playa.ubicacion}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{playa.descripcion}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {playa.caracteristicas.map((caract, i) => (
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
                  onClick={() => setSelectedPlaya(selectedPlaya === index ? null : index)}
                >
                  {selectedPlaya === index ? "Ver menos" : "Ver más información"}
                </Button>
                
                {selectedPlaya === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="space-y-3">
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
                        <span>Mejor época: Todo el año, especialmente de noviembre a abril</span>
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
            Consejos para visitar las playas de Miami
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">🌞 Protección solar:</span> El sol de Florida es intenso incluso en invierno. Usa protector solar de alto SPF, sombrero y gafas de sol.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">⏰ Mejor hora:</span> Para evitar multitudes, visita las playas temprano en la mañana o al atardecer, cuando además las temperaturas son más agradables.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">💰 Estacionamiento:</span> En South Beach y otras playas populares, el estacionamiento puede ser costoso. Considera usar transporte público o servicios de rideshare.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">🏊‍♂️ Seguridad:</span> Presta atención a las banderas de seguridad en las playas que indican las condiciones del agua y la presencia de medusas.
            </p>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para visitar estas playas paradisíacas?</h2>
          <p className="mb-6">Planifica tu visita a Miami y disfruta de sus maravillosas playas</p>
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
