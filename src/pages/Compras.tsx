
import { useState } from "react";
import { motion } from "framer-motion";
import { 
  ArrowLeft, ShoppingBag, DollarSign, MapPin, 
  Clock, Tag, Info, ShoppingCart, Truck, 
  CreditCard, SearchIcon
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Compras = () => {
  const navigate = useNavigate();
  const [openDetailIndex, setOpenDetailIndex] = useState<number | null>(null);
  const [selectedCity, setSelectedCity] = useState<string>("todas");
  const [searchTerm, setSearchTerm] = useState("");

  // Ciudades disponibles
  const ciudades = [
    "New York", "Los Angeles", "Chicago", "Miami", "Las Vegas", 
    "San Francisco", "Orlando", "Boston", "Seattle", "Washington DC"
  ];

  // Datos de centros comerciales y tiendas por categoría de presupuesto
  const tiendas = {
    exclusivas: [
      {
        nombre: "Rodeo Drive",
        ciudad: "Los Angeles",
        ubicacion: "Beverly Hills, Los Angeles",
        descripcion: "Icónica zona de compras de lujo en Beverly Hills con boutiques de alto nivel como Gucci, Prada, Louis Vuitton y Chanel.",
        imagen: "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 8:00 PM",
        rango_precio: "$$$$",
        sitio_web: "https://rodeodrive-bh.com",
        destacado: ["Boutiques de lujo", "Experiencia VIP", "Arquitectura icónica", "Celebrity spotting"]
      },
      {
        nombre: "Fifth Avenue",
        ciudad: "New York",
        ubicacion: "Fifth Avenue, Manhattan, New York",
        descripcion: "Una de las calles comerciales más caras del mundo, con tiendas emblemáticas como Saks Fifth Avenue, Bergdorf Goodman y Tiffany & Co.",
        imagen: "https://images.unsplash.com/photo-1526559289237-0616eaef26da?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 7:00 PM",
        rango_precio: "$$$$",
        sitio_web: "https://www.fifthavenue.nyc",
        destacado: ["Tiendas icónicas", "Joyerías de lujo", "Decoraciones navideñas", "Fashion Week"]
      },
      {
        nombre: "The Shops at Crystals",
        ciudad: "Las Vegas",
        ubicacion: "3720 Las Vegas Blvd S, Las Vegas",
        descripcion: "Centro comercial de arquitectura vanguardista en Las Vegas con las marcas de lujo más exclusivas.",
        imagen: "https://images.unsplash.com/photo-1596627118228-6d78b94a7326?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 11:00 PM",
        rango_precio: "$$$$",
        sitio_web: "https://www.simon.com/mall/the-shops-at-crystals",
        destacado: ["Arquitectura única", "Exclusivo", "Arte público", "Restaurantes gourmet"]
      },
      {
        nombre: "Bal Harbour Shops",
        ciudad: "Miami",
        ubicacion: "9700 Collins Ave, Bal Harbour",
        descripcion: "Centro comercial de lujo al aire libre con boutiques de alta gama como Chanel, Gucci, Prada y Valentino.",
        imagen: "https://images.unsplash.com/photo-1555529669-97a2b4320f02?q=80&w=1470&auto=format&fit=crop",
        horario: "11:00 AM - 7:00 PM",
        rango_precio: "$$$$",
        sitio_web: "https://www.balharbourshops.com",
        destacado: ["Servicio personal de compras", "Valet parking", "Restaurantes gourmet", "Ambiente tropical"]
      },
      {
        nombre: "Union Square",
        ciudad: "San Francisco",
        ubicacion: "Union Square, San Francisco",
        descripcion: "Principal distrito de compras de San Francisco con tiendas exclusivas, hoteles de lujo y galerías de arte.",
        imagen: "https://images.unsplash.com/photo-1445307806294-bff7f67ff225?q=80&w=1474&auto=format&fit=crop",
        horario: "10:00 AM - 8:00 PM",
        rango_precio: "$$$",
        sitio_web: "https://www.visitunionsquaresf.com",
        destacado: ["Neiman Marcus", "Saks Fifth Avenue", "Eventos culturales", "Holiday tree"]
      }
    ],
    moderadas: [
      {
        nombre: "Mall of America",
        ciudad: "Minneapolis",
        ubicacion: "60 E Broadway, Bloomington, MN",
        descripcion: "El centro comercial más grande de Estados Unidos con más de 500 tiendas, parque de atracciones y acuario.",
        imagen: "https://images.unsplash.com/photo-1568834215542-560fb4bd32df?q=80&w=1374&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://www.mallofamerica.com",
        destacado: ["Nickelodeon Universe", "SEA LIFE Aquarium", "Lego Store", "Más de 500 tiendas"]
      },
      {
        nombre: "The Grove",
        ciudad: "Los Angeles",
        ubicacion: "189 The Grove Dr, Los Angeles",
        descripcion: "Popular centro comercial al aire libre con fuentes danzantes, tranvía y arquitectura estilo art deco.",
        imagen: "https://images.unsplash.com/photo-1555529669-97a2b4320f02?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://thegrovela.com",
        destacado: ["Farmers Market", "Apple Store", "Fuentes danzantes", "Celebrity sightings"]
      },
      {
        nombre: "Water Tower Place",
        ciudad: "Chicago",
        ubicacion: "835 N Michigan Ave, Chicago",
        descripcion: "Icónico centro comercial vertical en la Magnificent Mile de Chicago con 8 pisos de tiendas.",
        imagen: "https://images.unsplash.com/photo-1582128877078-95ae61d70ab5?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://www.shopwatertower.com",
        destacado: ["American Girl Place", "Macy's", "Arquitectura única", "Magnificent Mile"]
      },
      {
        nombre: "Aventura Mall",
        ciudad: "Miami",
        ubicacion: "19501 Biscayne Blvd, Aventura",
        descripcion: "Uno de los centros comerciales más grandes de EE.UU. con una mezcla de tiendas de lujo y marcas accesibles.",
        imagen: "https://images.unsplash.com/photo-1568834215542-560fb4bd32df?q=80&w=1374&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://www.aventuramall.com",
        destacado: ["Slide Tower - tobogán de 9 pisos", "Área de juegos para niños", "Más de 300 tiendas", "Arte público"]
      },
      {
        nombre: "King of Prussia Mall",
        ciudad: "Philadelphia",
        ubicacion: "160 N Gulph Rd, King of Prussia",
        descripcion: "El centro comercial más grande de la costa este con más de 450 tiendas y 40 restaurantes.",
        imagen: "https://images.unsplash.com/photo-1568834215542-560fb4bd32df?q=80&w=1374&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$ - $$$",
        sitio_web: "https://www.simon.com/mall/king-of-prussia",
        destacado: ["Nordstrom", "Neiman Marcus", "Área de lujo", "Food Court premium"]
      }
    ],
    economicas: [
      {
        nombre: "Woodbury Common Premium Outlets",
        ciudad: "New York",
        ubicacion: "498 Red Apple Ct, Central Valley, NY",
        descripcion: "El outlet más famoso de Nueva York con más de 220 tiendas de marcas con descuentos de hasta 65%.",
        imagen: "https://images.unsplash.com/photo-1568388941606-a7145cb96735?q=80&w=1474&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$ - $$",
        sitio_web: "https://www.premiumoutlets.com/outlet/woodbury-common",
        destacado: ["Descuentos en marcas de lujo", "Shuttle desde Manhattan", "Food Hall", "Puma, Nike, Calvin Klein"]
      },
      {
        nombre: "Citadel Outlets",
        ciudad: "Los Angeles",
        ubicacion: "100 Citadel Dr, Los Angeles",
        descripcion: "El único outlet del centro de Los Ángeles, con arquitectura de estilo antiguo castillo y grandes descuentos.",
        imagen: "https://images.unsplash.com/photo-1603902790190-ea3f5dbc1f5e?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$ - $$",
        sitio_web: "https://www.citadeloutlets.com",
        destacado: ["Arquitectura única", "Cerca del downtown", "Descuentos todo el año", "Coach, Tommy Hilfiger"]
      },
      {
        nombre: "Fashion Outlets of Chicago",
        ciudad: "Chicago",
        ubicacion: "5220 Fashion Outlets Way, Rosemont",
        descripcion: "Outlet de dos niveles cerca del aeropuerto O'Hare con más de 130 tiendas de diseñador.",
        imagen: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$ - $$",
        sitio_web: "https://www.fashionoutletsofchicago.com",
        destacado: ["Cerca del aeropuerto", "Gucci outlet", "Servicios Premium", "Instalaciones modernas"]
      },
      {
        nombre: "Sawgrass Mills",
        ciudad: "Miami",
        ubicacion: "12801 W Sunrise Blvd, Sunrise, FL",
        descripcion: "El outlet más grande de Estados Unidos con más de 350 tiendas y una zona de lujo 'The Colonnade'.",
        imagen: "https://images.unsplash.com/photo-1603902790190-ea3f5dbc1f5e?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$ - $$",
        sitio_web: "https://www.simon.com/mall/sawgrass-mills",
        destacado: ["The Colonnade área de lujo", "Super Target", "GameWorks", "Descuentos todo el año"]
      },
      {
        nombre: "Las Vegas North Premium Outlets",
        ciudad: "Las Vegas",
        ubicacion: "875 S Grand Central Pkwy, Las Vegas",
        descripcion: "Centro comercial outlet al aire libre cerca del downtown con más de 145 tiendas.",
        imagen: "https://images.unsplash.com/photo-1611232658409-0d98127f237f?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$ - $$",
        sitio_web: "https://www.premiumoutlets.com/outlet/las-vegas-north",
        destacado: ["Cerca del Strip", "Burberry outlet", "Coach", "Michael Kors"]
      }
    ],
    mercados: [
      {
        nombre: "Chelsea Market",
        ciudad: "New York",
        ubicacion: "75 9th Ave, New York",
        descripcion: "Mercado gastronómico y de compras en una antigua fábrica de galletas Nabisco en Manhattan.",
        imagen: "https://images.unsplash.com/photo-1567027757540-7b572280fa22?q=80&w=1470&auto=format&fit=crop",
        horario: "7:00 AM - 9:00 PM",
        rango_precio: "$$",
        sitio_web: "https://www.chelseamarket.com",
        destacado: ["Food hall", "Artesanía local", "Productos gourmet", "Historia industrial"]
      },
      {
        nombre: "Pike Place Market",
        ciudad: "Seattle",
        ubicacion: "85 Pike St, Seattle",
        descripcion: "Histórico mercado público de Seattle con pescaderías, artesanías locales y el primer Starbucks.",
        imagen: "https://images.unsplash.com/photo-1571396867416-62d58984f343?q=80&w=1470&auto=format&fit=crop",
        horario: "9:00 AM - 6:00 PM",
        rango_precio: "$$",
        sitio_web: "https://www.pikeplacemarket.org",
        destacado: ["Lanzamiento de pescados", "First Starbucks", "Flores frescas", "Productos locales"]
      },
      {
        nombre: "Faneuil Hall Marketplace",
        ciudad: "Boston",
        ubicacion: "4 S Market St, Boston",
        descripcion: "Mercado histórico y centro comercial con tiendas, restaurantes y espectáculos callejeros.",
        imagen: "https://images.unsplash.com/photo-1558620540-46416f9cea4e?q=80&w=1470&auto=format&fit=crop",
        horario: "10:00 AM - 9:00 PM",
        rango_precio: "$$",
        sitio_web: "https://www.faneuilhallmarketplace.com",
        destacado: ["Historia colonial", "Quincy Market", "Food court", "Entretenimiento callejero"]
      },
      {
        nombre: "Grand Central Market",
        ciudad: "Los Angeles",
        ubicacion: "317 S Broadway, Los Angeles",
        descripcion: "Mercado histórico de comida y tiendas artesanales en el centro de Los Ángeles operando desde 1917.",
        imagen: "https://images.unsplash.com/photo-1554306297-0c86e837d24b?q=80&w=1470&auto=format&fit=crop",
        horario: "8:00 AM - 10:00 PM",
        rango_precio: "$$",
        sitio_web: "https://www.grandcentralmarket.com",
        destacado: ["Food hall multicultural", "Productores locales", "Cervecerías artesanales", "Historia de LA"]
      }
    ]
  };

  const filtrarTiendas = (categoria: keyof typeof tiendas) => {
    let resultado = tiendas[categoria];
    
    // Filtrar por ciudad si se ha seleccionado una
    if (selectedCity !== "todas") {
      resultado = resultado.filter(tienda => tienda.ciudad === selectedCity);
    }
    
    // Filtrar por término de búsqueda
    if (searchTerm) {
      resultado = resultado.filter(tienda => 
        tienda.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tienda.descripcion.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tienda.ciudad.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    return resultado;
  };

  const toggleDetail = (index: number) => {
    setOpenDetailIndex(openDetailIndex === index ? null : index);
  };

  return (
    <div className="pt-20 pb-12 usa-futuristic-bg text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
              Compras en Estados Unidos
            </h1>
            <div className="w-24 h-1 bg-miami-coral mx-auto mb-6"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Descubre el paraíso de las compras: desde lujosas boutiques en Rodeo Drive hasta outlets 
              con grandes descuentos y mercados históricos con productos locales.
            </p>
          </div>
        </div>
        
        {/* Hero image */}
        <div className="relative h-80 md:h-96 lg:h-[500px] rounded-xl overflow-hidden mb-12 glass-card">
          <img 
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1470&auto=format&fit=crop" 
            alt="Compras en Estados Unidos" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-8">
            <div className="text-white max-w-2xl">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Destino de Compras por Excelencia</h2>
              <p className="text-lg opacity-90">
                Estados Unidos ofrece experiencias de compra incomparables: desde centros comerciales 
                de clase mundial hasta tiendas emblemáticas, outlets y boutiques exclusivas.
              </p>
            </div>
          </div>
        </div>
        
        {/* Search and Filter */}
        <div className="glass-card rounded-xl p-6 mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
            <div className="relative w-full md:w-1/2">
              <input
                type="text"
                placeholder="Buscar tiendas, centros comerciales..."
                className="w-full px-10 py-3 rounded-md bg-white/10 border border-white/20 text-white focus:border-miami-coral focus:ring-1 focus:ring-miami-coral"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60" />
            </div>
            
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="w-full md:w-64 bg-white/10 border-white/20 text-white">
                <SelectValue placeholder="Filtrar por ciudad" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="todas">Todas las ciudades</SelectItem>
                {ciudades.map((ciudad) => (
                  <SelectItem key={ciudad} value={ciudad}>{ciudad}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div className="text-white/80 text-sm">
            {searchTerm || selectedCity !== "todas" ? (
              <p>Mostrando resultados filtrados. {searchTerm && `Búsqueda: "${searchTerm}". `}
                {selectedCity !== "todas" && `Ciudad: ${selectedCity}.`}
              </p>
            ) : (
              <p>Explora todas las opciones de compras en Estados Unidos, filtradas por categoría.</p>
            )}
          </div>
        </div>
        
        {/* Tabs by budget */}
        <Tabs defaultValue="moderadas" className="mb-12">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-3">Explora por categoría</h2>
            <p className="text-white/80">Selecciona según tu presupuesto e interés para encontrar las mejores opciones de compras</p>
          </div>
          
          <TabsList className="grid grid-cols-4 w-full max-w-2xl mx-auto mb-8 bg-white/10 p-1 rounded-xl">
            <TabsTrigger value="economicas" className="flex items-center justify-center">
              <DollarSign className="w-4 h-4 mr-1" />
              <span>Outlets</span>
            </TabsTrigger>
            <TabsTrigger value="moderadas" className="flex items-center justify-center">
              <ShoppingBag className="w-4 h-4 mr-1" />
              <span>Malls</span>
            </TabsTrigger>
            <TabsTrigger value="exclusivas" className="flex items-center justify-center">
              <CreditCard className="w-4 h-4 mr-1" />
              <span>Lujo</span>
            </TabsTrigger>
            <TabsTrigger value="mercados" className="flex items-center justify-center">
              <ShoppingCart className="w-4 h-4 mr-1" />
              <span>Mercados</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="economicas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white">Outlets y Descuentos</h3>
                <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                  Encuentra las mejores marcas con descuentos de hasta 70% en estos destinos de compras económicas.
                </p>
              </div>
              
              {filtrarTiendas("economicas").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtrarTiendas("economicas").map((tienda, index) => renderTiendaCard(tienda, index))}
                </div>
              ) : (
                <div className="text-center py-12 glass-card rounded-xl">
                  <ShoppingBag className="w-16 h-16 mx-auto text-white/30 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No hay resultados</h3>
                  <p className="text-white/70">No se encontraron outlets que coincidan con tu búsqueda.</p>
                </div>
              )}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="moderadas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white">Centros Comerciales</h3>
                <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                  Explora los mejores centros comerciales de Estados Unidos con una amplia variedad de tiendas para todos los gustos.
                </p>
              </div>
              
              {filtrarTiendas("moderadas").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtrarTiendas("moderadas").map((tienda, index) => renderTiendaCard(tienda, index + 100))}
                </div>
              ) : (
                <div className="text-center py-12 glass-card rounded-xl">
                  <ShoppingBag className="w-16 h-16 mx-auto text-white/30 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No hay resultados</h3>
                  <p className="text-white/70">No se encontraron centros comerciales que coincidan con tu búsqueda.</p>
                </div>
              )}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="exclusivas">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white">Compras de Lujo</h3>
                <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                  Descubre los destinos más exclusivos para compras de lujo con las marcas más prestigiosas del mundo.
                </p>
              </div>
              
              {filtrarTiendas("exclusivas").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtrarTiendas("exclusivas").map((tienda, index) => renderTiendaCard(tienda, index + 200))}
                </div>
              ) : (
                <div className="text-center py-12 glass-card rounded-xl">
                  <CreditCard className="w-16 h-16 mx-auto text-white/30 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No hay resultados</h3>
                  <p className="text-white/70">No se encontraron tiendas de lujo que coincidan con tu búsqueda.</p>
                </div>
              )}
            </motion.div>
          </TabsContent>
          
          <TabsContent value="mercados">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-center mb-8">
                <h3 className="text-xl font-bold text-white">Mercados y Food Halls</h3>
                <p className="text-white/80 mt-2 max-w-2xl mx-auto">
                  Visita estos icónicos mercados donde encontrarás productos locales, artesanías únicas y experiencias gastronómicas.
                </p>
              </div>
              
              {filtrarTiendas("mercados").length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filtrarTiendas("mercados").map((tienda, index) => renderTiendaCard(tienda, index + 300))}
                </div>
              ) : (
                <div className="text-center py-12 glass-card rounded-xl">
                  <ShoppingCart className="w-16 h-16 mx-auto text-white/30 mb-4" />
                  <h3 className="text-xl font-medium text-white mb-2">No hay resultados</h3>
                  <p className="text-white/70">No se encontraron mercados que coincidan con tu búsqueda.</p>
                </div>
              )}
            </motion.div>
          </TabsContent>
        </Tabs>
        
        {/* Shopping Calendar */}
        <div className="glass-card rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Info className="w-6 h-6 text-miami-coral mr-2" />
            Calendario de Compras en EE.UU.
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Black Friday</h3>
              <p className="text-white/80">
                <span className="text-miami-coral font-medium">Noviembre (día después de Acción de Gracias)</span>
              </p>
              <p className="text-white/80 mt-2">
                El día de compras más importante del año con descuentos masivos en todas las tiendas y centros comerciales.
              </p>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Cyber Monday</h3>
              <p className="text-white/80">
                <span className="text-miami-coral font-medium">Lunes después de Black Friday</span>
              </p>
              <p className="text-white/80 mt-2">
                Grandes descuentos online en todas las tiendas y retailers principales, ideal para compras desde cualquier lugar.
              </p>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Rebajas de Verano</h3>
              <p className="text-white/80">
                <span className="text-miami-coral font-medium">Julio - Agosto</span>
              </p>
              <p className="text-white/80 mt-2">
                Grandes descuentos en ropa y artículos de temporada, perfectos para comprar con anticipación.
              </p>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Back to School</h3>
              <p className="text-white/80">
                <span className="text-miami-coral font-medium">Agosto - Septiembre</span>
              </p>
              <p className="text-white/80 mt-2">
                Descuentos en electrónica, material escolar y ropa antes del inicio del año académico.
              </p>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Rebajas Post-Navidad</h3>
              <p className="text-white/80">
                <span className="text-miami-coral font-medium">26 de Diciembre - Enero</span>
              </p>
              <p className="text-white/80 mt-2">
                Liquidación de inventario navideño y grandes descuentos en muchas categorías de productos.
              </p>
            </div>
            
            <div className="bg-miami-turquoise/20 p-5 rounded-lg">
              <h3 className="font-semibold text-white mb-2">Prime Day</h3>
              <p className="text-white/80">
                <span className="text-miami-coral font-medium">Julio (fecha variable)</span>
              </p>
              <p className="text-white/80 mt-2">
                Evento de ventas exclusivo de Amazon con ofertas increíbles en miles de productos.
              </p>
            </div>
          </div>
        </div>
        
        {/* Shopping Tips */}
        <div className="glass-card rounded-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
            <Info className="w-6 h-6 text-miami-coral mr-2" />
            Consejos para compras en Estados Unidos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Tarjetas de crédito e impuestos</h3>
                <p className="text-white/80 text-sm">
                  Lleva tarjetas de crédito internacionales y recuerda que los precios mostrados generalmente no incluyen 
                  impuestos, que varían por estado (desde 0% en estados como Oregon hasta 9.5% en otros).
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                <Truck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Envíos y equipaje</h3>
                <p className="text-white/80 text-sm">
                  Considera enviar tus compras grandes al hotel o mediante servicios de envío internacional. Verifica las 
                  regulaciones de aduanas de tu país para saber qué puedes llevar en tu equipaje.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Horarios y temporadas</h3>
                <p className="text-white/80 text-sm">
                  Los centros comerciales suelen abrir de 10AM a 9PM. Evita comprar durante fines de semana festivos como 
                  Memorial Day o Labor Day, cuando las tiendas están más concurridas.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="w-5 h-5 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Programas de fidelidad</h3>
                <p className="text-white/80 text-sm">
                  Regístrate en programas de fidelidad de las tiendas que planeas visitar, incluso como turista. 
                  Muchos ofrecen descuentos inmediatos del 10-15% en tu primera compra.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gradient-to-r from-miami-turquoise to-miami-coral rounded-xl shadow-lg p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">¿Lista para tu aventura de compras en Estados Unidos?</h2>
          <p className="mb-6">Planifica tu visita y prepárate para descubrir las mejores ofertas y experiencias de compra</p>
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
        transition={{ duration: 0.3, delay: (index % 10) * 0.1 }}
        className="glass-card rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all"
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
          <div className="absolute top-4 left-4 bg-miami-coral/90 rounded-full px-3 py-1 text-white text-xs font-medium">
            {tienda.ciudad}
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-2">
            <h3 className="text-xl font-bold text-white">{tienda.nombre}</h3>
          </div>
          
          <div className="flex items-center text-white/70 mb-3">
            <MapPin className="w-4 h-4 mr-1 flex-shrink-0" />
            <span className="text-sm">{tienda.ubicacion}</span>
          </div>
          
          <p className="text-white/80 mb-4 line-clamp-3">{tienda.descripcion}</p>
          
          <div className="flex items-center text-white/70 mb-4">
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
              className="mt-4 pt-4 border-t border-white/20"
            >
              <h4 className="font-semibold text-white mb-2">Destacado:</h4>
              <ul className="space-y-2 mb-4">
                {tienda.destacado.map((feature: string, i: number) => (
                  <li key={i} className="flex items-center">
                    <Tag className="w-4 h-4 text-miami-coral mr-2 flex-shrink-0" />
                    <span className="text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href={tienda.sitio_web} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-miami-coral hover:text-white"
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
