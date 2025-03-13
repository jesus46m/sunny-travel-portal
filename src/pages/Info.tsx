
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Umbrella, Utensils, Ticket, Landmark, MapPin, Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const attractions = [
  {
    name: "South Beach",
    description: "Icónica playa con arena blanca, aguas turquesas y el famoso Ocean Drive.",
    image: "https://images.unsplash.com/photo-1572875198816-5f48845774e4?q=80&w=1528&auto=format&fit=crop",
    location: "South Beach, Miami Beach",
    time: "Abierto 24 horas",
    bestTime: "Temprano en la mañana o atardecer"
  },
  {
    name: "Wynwood Walls",
    description: "Museo al aire libre con impresionantes murales de artistas internacionales.",
    image: "https://images.unsplash.com/photo-1572989166914-1b0c4e7a75a6?q=80&w=1374&auto=format&fit=crop",
    location: "Wynwood, Miami",
    time: "10:30 AM - 7:00 PM",
    bestTime: "Entre semana por la tarde"
  },
  {
    name: "Vizcaya Museum & Gardens",
    description: "Mansión histórica con jardines impresionantes y vistas a la bahía.",
    image: "https://images.unsplash.com/photo-1596397249129-c7a8f4634419?q=80&w=1470&auto=format&fit=crop",
    location: "Coconut Grove, Miami",
    time: "9:30 AM - 4:30 PM (Cerrado los martes)",
    bestTime: "Por la mañana para evitar multitudes"
  }
];

const restaurants = [
  {
    name: "Joe's Stone Crab",
    description: "Restaurante icónico famoso por sus cangrejos y mariscos frescos.",
    image: "https://images.unsplash.com/photo-1599484090303-ec1c5e1452e6?q=80&w=1470&auto=format&fit=crop",
    location: "South Beach, Miami Beach",
    time: "5:00 PM - 10:00 PM",
    cuisine: "Mariscos"
  },
  {
    name: "Versailles",
    description: "El restaurante cubano más famoso de Miami con auténtica comida cubana.",
    image: "https://images.unsplash.com/photo-1628191139360-4083564d03fd?q=80&w=1470&auto=format&fit=crop",
    location: "Little Havana, Miami",
    time: "8:00 AM - 1:00 AM",
    cuisine: "Cubana"
  },
  {
    name: "Zuma",
    description: "Restaurante japonés de lujo con vista al río de Miami.",
    image: "https://images.unsplash.com/photo-1579456876936-517dacd5d8a8?q=80&w=1470&auto=format&fit=crop",
    location: "Downtown Miami",
    time: "12:00 PM - 11:00 PM",
    cuisine: "Japonesa contemporánea"
  }
];

const events = [
  {
    name: "Art Basel Miami",
    description: "Una de las ferias de arte contemporáneo más importantes del mundo.",
    image: "https://images.unsplash.com/photo-1575384043001-f37f476c21a5?q=80&w=1475&auto=format&fit=crop",
    location: "Miami Beach Convention Center",
    date: "Diciembre (anualmente)",
    type: "Arte y Cultura"
  },
  {
    name: "Miami Music Week",
    description: "Serie de eventos de música electrónica que culmina con Ultra Music Festival.",
    image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1470&auto=format&fit=crop",
    location: "Varios lugares en Miami",
    date: "Marzo (anualmente)",
    type: "Música"
  },
  {
    name: "Carnaval Miami",
    description: "Calle Ocho Festival, el festival de música latina más grande del mundo.",
    image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=1470&auto=format&fit=crop",
    location: "Little Havana, Miami",
    date: "Marzo (anualmente)",
    type: "Cultural"
  }
];

const Info = () => {
  const navigate = useNavigate();

  return (
    <div className="pt-20 pb-12 bg-miami-sand">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Información sobre Miami
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Todo lo que necesitas saber para planificar tu visita perfecta a la ciudad del sol.
          </p>
        </div>
        
        {/* Main Content */}
        <Tabs defaultValue="attractions" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-xl bg-white mb-8">
            <TabsTrigger value="attractions" className="data-[state=active]:bg-miami-turquoise data-[state=active]:text-white">
              <Umbrella className="w-4 h-4 mr-2" /> Atracciones
            </TabsTrigger>
            <TabsTrigger value="dining" className="data-[state=active]:bg-miami-turquoise data-[state=active]:text-white">
              <Utensils className="w-4 h-4 mr-2" /> Restaurantes
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-miami-turquoise data-[state=active]:text-white">
              <Ticket className="w-4 h-4 mr-2" /> Eventos
            </TabsTrigger>
          </TabsList>
          
          {/* Attractions Tab */}
          <TabsContent value="attractions" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {attractions.map((attraction, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-up">
                  <img 
                    src={attraction.image} 
                    alt={attraction.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{attraction.name}</h3>
                    <p className="text-gray-600 mb-4">{attraction.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-2 text-miami-coral" />
                      <span>{attraction.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2 text-miami-coral" />
                      <span>{attraction.time}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm font-medium text-gray-500">Mejor momento para visitar:</p>
                      <p className="text-miami-turquoise">{attraction.bestTime}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Dining Tab */}
          <TabsContent value="dining" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {restaurants.map((restaurant, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-up">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{restaurant.name}</h3>
                      <span className="bg-miami-coral text-white text-xs px-2 py-1 rounded-full">
                        {restaurant.cuisine}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{restaurant.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-2 text-miami-coral" />
                      <span>{restaurant.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-2 text-miami-coral" />
                      <span>{restaurant.time}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
          
          {/* Events Tab */}
          <TabsContent value="events" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover-up">
                  <img 
                    src={event.image} 
                    alt={event.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-semibold text-gray-900">{event.name}</h3>
                      <span className="bg-miami-turquoise text-white text-xs px-2 py-1 rounded-full">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{event.description}</p>
                    <div className="flex items-center text-gray-500 mb-2">
                      <MapPin className="w-4 h-4 mr-2 text-miami-coral" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500 mb-4">
                      <Calendar className="w-4 h-4 mr-2 text-miami-coral" />
                      <span>{event.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        {/* Tips Section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Consejos para visitar Miami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-miami-sand rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Mejor época para visitar</h3>
              <p className="text-gray-700">
                De diciembre a mayo es la temporada ideal, con clima seco y temperaturas agradables. 
                Evita el verano por el calor, la humedad y la temporada de huracanes.
              </p>
            </div>
            <div className="bg-miami-sand rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Transporte</h3>
              <p className="text-gray-700">
                Alquilar un coche es recomendable para moverse con facilidad. 
                También puedes usar Uber, Lyft o el sistema de transporte público Metrorail.
              </p>
            </div>
            <div className="bg-miami-sand rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Idioma</h3>
              <p className="text-gray-700">
                El español es ampliamente hablado en Miami, pero el inglés es el idioma oficial.
                La mayoría de locales hablan ambos idiomas.
              </p>
            </div>
            <div className="bg-miami-sand rounded-lg p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Presupuesto</h3>
              <p className="text-gray-700">
                Miami puede ser costoso, especialmente en zonas turísticas. 
                Planifica un presupuesto diario de al menos $150-200 USD por persona.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            ¿Listo para planificar tu visita?
          </h2>
          <Button 
            className="bg-miami-coral hover:bg-miami-turquoise text-white"
            onClick={() => navigate('/registro')}
          >
            Registra tu visita ahora
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Info;
