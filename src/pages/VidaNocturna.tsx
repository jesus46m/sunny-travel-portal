
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
      ubicacion: "South Beach",
      descripcion: "Uno de los clubes nocturnos más famosos de Miami, conocido por su ambiente de lujo y sus destacados DJs internacionales.",
      imagen: "https://images.unsplash.com/photo-1578736641330-3155e606cd40?q=80&w=1664&auto=format&fit=crop",
      puntuacion: 4.7,
      caracteristicas: ["DJs Internacionales", "Ambiente VIP", "Servicio de botella", "Celebridades"]
    },
    {
      nombre: "E11EVEN",
      ubicacion: "Downtown Miami",
      descripcion: "Club abierto las 24 horas que combina música electrónica, espectáculos en vivo y una experiencia gastronómica de alta gama.",
      imagen: "https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1470&auto=format&fit=crop",
      puntuacion: 4.8,
      caracteristicas: ["24 Horas", "Espectáculos", "Restaurante", "Terraza"]
    },
    {
      nombre: "Story Nightclub",
      ubicacion: "South Beach",
      descripcion: "Club de alta energía con una impresionante tecnología audiovisual y los mejores DJs electrónicos del mundo.",
      imagen: "https://images.unsplash.com/photo-1485872299829-c673f5194813?q=80&w=1460&auto=format&fit=crop",
      puntuacion: 4.5,
      caracteristicas: ["Música Electrónica", "Sistema de sonido avanzado", "Pista de baile", "Ambiente joven"]
    },
    {
      nombre: "Basement Miami",
      ubicacion: "Miami Beach",
      descripcion: "Club único que incluye una pista de hielo y una pista de bolos, además de un club con música underground.",
      imagen: "https://images.unsplash.com/photo-1519671017201-2b5f6f7c70e3?q=80&w=1430&auto=format&fit=crop",
      puntuacion: 4.6,
      caracteristicas: ["Pista de hielo", "Bolos", "Música alternativa", "Experiencia multisensorial"]
    },
    {
      nombre: "Ball & Chain",
      ubicacion: "Little Havana",
      descripcion: "Lugar histórico con música latina en vivo, salsa y un ambiente auténticamente cubano en el corazón de Little Havana.",
      imagen: "https://images.unsplash.com/photo-1507833423370-a126b89d394b?q=80&w=1490&auto=format&fit=crop",
      puntuacion: 4.4,
      caracteristicas: ["Música latina", "Historia", "Mojitos", "Pista de baile exterior"]
    },
    {
      nombre: "Club Space",
      ubicacion: "Downtown Miami",
      descripcion: "Legendario club con sesiones maratónicas de música electrónica y una famosa terraza donde bailar bajo el amanecer de Miami.",
      imagen: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1374&auto=format&fit=crop",
      puntuacion: 4.9,
      caracteristicas: ["Terraza", "Música techno", "Sesiones largas", "Amanecer"]
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
              Vida Nocturna en Miami
            </h1>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descubre la vibrante escena de clubes y bares de Miami, desde exclusivos clubs de South Beach 
              hasta los auténticos bares con sabor latino de Little Havana.
            </p>
          </div>
        </div>
        
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1430&auto=format&fit=crop" 
            alt="Vida nocturna de Miami" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">La Ciudad que Nunca Duerme</h2>
              <p className="text-lg opacity-90">
                Miami ofrece una de las escenas nocturnas más vibrantes y diversas de Estados Unidos, 
                con opciones para todos los gustos y presupuestos.
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
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
                  <h3 className="text-xl font-bold text-gray-900">{club.nombre}</h3>
                  <div className="flex items-center text-gray-500">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="text-sm">{club.ubicacion}</span>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{club.descripcion}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {club.caracteristicas.map((caract, i) => (
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
                  onClick={() => setSelectedClub(selectedClub === index ? null : index)}
                >
                  {selectedClub === index ? "Ver menos" : "Ver más información"}
                </Button>
                
                {selectedClub === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gray-200"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Horario: 11PM - 5AM (Jueves a Domingo)</span>
                      </div>
                      <div className="flex items-center">
                        <Music className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Música: EDM, Hip-Hop, Reggaeton</span>
                      </div>
                      <div className="flex items-center">
                        <Wine className="w-5 h-5 text-miami-turquoise mr-2" />
                        <span>Precio bebidas: $$$</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <ChevronDown className="w-6 h-6 text-miami-turquoise mr-2" />
            Consejos para disfrutar la vida nocturna en Miami
          </h2>
          
          <div className="space-y-4">
            <p className="text-gray-700">
              <span className="font-semibold">👔 Código de vestimenta:</span> Los clubes más exclusivos tienen un código de vestimenta estricto. Viste elegante para evitar problemas en la entrada.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">⏰ Horarios:</span> La fiesta comienza tarde en Miami. La mayoría de los clubes no se llenan hasta después de la medianoche.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">💰 Reservaciones:</span> Para una mejor experiencia, considera reservar una mesa con anticipación, especialmente durante la temporada alta.
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">🚕 Transporte:</span> Utiliza servicios de rideshare o taxis para moverte con seguridad. Evita conducir si has consumido alcohol.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Listo para vivir la noche de Miami?</h2>
          <p className="mb-6">Planifica tu visita y descubre la energía de la vida nocturna de Miami</p>
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
