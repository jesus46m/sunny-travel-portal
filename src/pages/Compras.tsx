import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ShoppingBag, DollarSign, MapPin, Clock, Tag, Info } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

const Compras = () => {
  const navigate = useNavigate();
  const [openDetailIndex, setOpenDetailIndex] = useState<number | null>(null);

  // Datos de centros comerciales y tiendas por categoría de presupuesto
  const tiendas = {
    exclusivas: [
      {
        nombre: "Bal Harbour Shops",
        ubicacion: "9700 Collins Ave, Bal Harbour",
        descripcion: "Centro comercial de lujo al aire libre con boutiques de alta gama como Chanel, Gucci, Prada y Valentino.",
        imagen: "https://images.unsplash.com/photo-1555529669-97a2b4320f02?q=80&w=1470&auto=format&fit=crop",
        horario: "11:00 AM - 7:00 PM",
        rango_precio: "$$$$",
        sitio_web: "https://www.balharbourshops.com",
        destacado: ["Servicio personal de compras", "Valet parking", "Restaurantes gourmet"]
      },
      {
        nombre: "Design District",
        ubicacion: "Miami Design District",
        descripcion: "Barrio dedicado a moda innovadora, diseño, arte y arquitectura con tiendas como Louis Vuitton, Dior y Fendi.",
        imagen: "https://images.unsplash.com/photo-1530697841724-5f5ce7216395?q=80&w=1470&auto=format&fit=crop",
        horario: "12:00 PM - 8:00 PM",
        rango_precio: "$$$$",
        sitio_web: "https://www.miamidesigndistrict.net",
        destacado: ["Galerías de arte", "Arquitectura moderna", "Instalaciones artísticas"]
      },
      {
        nombre: "Brickell City Centre",
        ubicacion: "701 S Miami Ave, Miami",
        descripcion: "Centro comercial de lujo moderno con Saks Fifth Avenue y boutiques de alta gama en el corazón financiero de Miami.",
        imagen: "https://images.unsplash.com/photo-1579171900502-36e0b5883530?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$$",
        sitio_web: "https://www.brickellcitycentre.com",
        destacado: ["Arquitectura sostenible", "Restaurantes de alta cocina", "Cine de lujo"]
      }
    ],
    moderadas: [
      {
        nombre: "Aventura Mall",
        ubicacion: "19501 Biscayne Blvd, Aventura",
        descripcion: "Uno de los centros comerciales más grandes de EE.UU. con una mezcla de tiendas de lujo y marcas accesibles.",
        imagen: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?q=80&w=1374&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://www.aventuramall.com",
        destacado: ["Slide Tower - tobogán de 9 pisos", "Área de juegos para niños", "Más de 300 tiendas"]
      },
      {
        nombre: "Dadeland Mall",
        ubicacion: "7535 N Kendall Dr, Miami",
        descripcion: "Centro comercial tradicional con buena mezcla de tiendas departamentales y boutiques.",
        imagen: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://www.simon.com/mall/dadeland-mall",
        destacado: ["Macy's más grande de Florida", "Restaurantes con terrazas", "Fácil acceso en metro"]
      },
      {
        nombre: "Dolphin Mall",
        ubicacion: "11401 NW 12th St, Miami",
        descripcion: "Centro comercial tipo outlet con más de 240 tiendas, restaurantes y opciones de entretenimiento.",
        imagen: "https://images.unsplash.com/photo-1580850963861-1871bd35be57?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://www.dolphinmall.com",
        destacado: ["Precios outlet", "Gran food court", "Cine y bolera"]
      }
    ],
    economicas: [
      {
        nombre: "Bayside Marketplace",
        ubicacion: "401 Biscayne Blvd, Miami",
        descripcion: "Centro comercial al aire libre junto a la bahía con tiendas, restaurantes y entretenimiento.",
        imagen: "https://images.unsplash.com/photo-1603902790190-ea3f5dbc1f5e?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 10:00 PM",
        rango_precio: "$ - $$",
        sitio_web: "https://www.baysidemarketplace.com",
        destacado: ["Vistas a la bahía", "Cruceros turísticos", "Entretenimiento en vivo"]
      },
      {
        nombre: "Miami International Mall",
        ubicacion: "1455 NW 107th Ave, Doral",
        descripcion: "Centro comercial familiar con buena variedad de tiendas nacionales a precios accesibles.",
        imagen: "https://images.unsplash.com/photo-1611232658409-0d98127f237f?q=80&w=1470&auto=format&fit=crop",
        horario: "11:00 AM - 8:00 PM",
        rango_precio: "$ - $$",
        sitio_web: "https://www.simon.com/mall/miami-international-mall",
        destacado: ["Ambiente familiar", "Eventos comunitarios", "Buena opción para compras básicas"]
      },
      {
        nombre: "Flamingo Plaza Hialeah",
        ubicacion: "901 E 10th Ave, Hialeah",
        descripcion: "Centro de tiendas de segunda mano y liquidaciones donde se pueden encontrar verdaderas gangas.",
        imagen: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?q=80&w=1470&auto=format&fit=crop",
        horario: "9:00 AM - 6:00 PM",
        rango_precio: "$",
        sitio_web: "https://flamingoplazahialeah.com",
        destacado: ["Ropa vintage", "Grandes descuentos", "Tesoros ocultos"]
      }
    ]
  };

  const toggleDetail = (index: number) => {
    setOpenDetailIndex(openDetailIndex === index ? null : index);
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
              Compras en Miami
            </h1>
            <div className="w-24 h-1 bg-miami-turquoise mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Desde boutiques de lujo hasta outlets con grandes descuentos, Miami ofrece 
              experiencias de compra para todos los gustos y presupuestos.
            </p>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12">
          <img 
            src="https://images.unsplash.com/photo-1545150665-c20774dbf00a?q=80&w=1470&auto=format&fit=crop" 
            alt="Compras en Miami" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Paraíso de Compras</h2>
              <p className="text-lg opacity-90">
                Miami es reconocido mundialmente como un destino de compras de primer nivel, 
                con opciones que van desde grandes centros comerciales hasta boutiques exclusivas.
              </p>
            </div>
          </div>
        </div>
        
        {/* Tabs by budget */}
        <Tabs defaultValue="moderadas" className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Explora por presupuesto</h2>
            <p className="text-gray-600">Selecciona según tu presupuesto para encontrar las mejores opciones</p>
          </div>
          
          <TabsList className="grid grid-cols-3 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="economicas" className="flex items-center justify-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>Económicas</span>
            </TabsTrigger>
            <TabsTrigger value="moderadas" className="flex items-center justify-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <DollarSign className="w-4 h-4" />
              <span className="ml-1">Moderadas</span>
            </TabsTrigger>
            <TabsTrigger value="exclusivas" className="flex items-center justify-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <DollarSign className="w-4 h-4" />
              <DollarSign className="w-4 h-4" />
              <span className="ml-1">Exclusivas</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="economicas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {tiendas.economicas.map((tienda, index) => renderTiendaCard(tienda, index))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="moderadas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {tiendas.moderadas.map((tienda, index) => renderTiendaCard(tienda, index + 3))}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="exclusivas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {tiendas.exclusivas.map((tienda, index) => renderTiendaCard(tienda, index + 6))}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        {/* Tips section */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Info className="w-6 h-6 text-miami-turquoise mr-2" />
            Consejos para compras en Miami
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-miami-sand/50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Temporada de rebajas</h3>
              <p className="text-gray-700">
                Las mejores épocas para aprovechar descuentos son después de Navidad, durante el Black Friday (noviembre), 
                y en las liquidaciones de verano (julio-agosto).
              </p>
            </div>
            
            <div className="bg-miami-sand/50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Tax-free shopping</h3>
              <p className="text-gray-700">
                Florida tiene un impuesto a las ventas del 7%, pero algunos artículos están exentos. 
                Los turistas internacionales pueden solicitar la devolución del impuesto en algunos casos.
              </p>
            </div>
            
            <div className="bg-miami-sand/50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Transporte</h3>
              <p className="text-gray-700">
                Considera alquilar un coche si visitarás varios centros comerciales. 
                El Metrorail conecta con algunos malls como Dadeland, pero no llega a todos.
              </p>
            </div>
            
            <div className="bg-miami-sand/50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2">Compras sin estrés</h3>
              <p className="text-gray-700">
                Visita los centros comerciales entre semana y en las mañanas para evitar 
                las multitudes, especialmente durante la temporada alta turística.
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Lista para tu aventura de compras en Miami?</h2>
          <p className="mb-6">Planifica tu visita y prepárate para descubrir las mejores ofertas</p>
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

  // Helper function to render store cards
  function renderTiendaCard(tienda: any, index: number) {
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
      >
        <div className="relative h-48">
          <img 
            src={tienda.imagen} 
            alt={tienda.nombre} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-white/90 rounded-full px-3 py-1 flex items-center">
            <span className="font-medium text-miami-turquoise">{tienda.rango_precio}</span>
          </div>
        </div>
        
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <h3 className="text-xl font-bold text-gray-900">{tienda.nombre}</h3>
          </div>
          
          <div className="flex items-center text-gray-500 mb-3">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm">{tienda.ubicacion}</span>
          </div>
          
          <p className="text-gray-600 mb-4">{tienda.descripcion}</p>
          
          <div className="flex items-center text-gray-500 mb-4">
            <Clock className="w-4 h-4 mr-1" />
            <span className="text-sm">{tienda.horario}</span>
          </div>
          
          <Button 
            className="w-full bg-miami-turquoise hover:bg-miami-coral text-white"
            onClick={() => toggleDetail(index)}
          >
            {openDetailIndex === index ? "Ver menos" : "Ver más información"}
          </Button>
          
          {openDetailIndex === index && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4 pt-4 border-t border-gray-200"
            >
              <h4 className="font-semibold text-gray-900 mb-2">Destacado:</h4>
              <ul className="space-y-2 mb-4">
                {tienda.destacado.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center">
                    <Tag className="w-4 h-4 text-miami-turquoise mr-2 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={tienda.sitio_web} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-miami-turquoise hover:text-miami-coral"
              >
                <span>Visitar sitio web</span>
                <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
              </a>
            </motion.div>
          )}
        </div>
      </motion.div>
    );
  }
};

export default Compras;
