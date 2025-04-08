
export interface StateInfo {
  name: string;
  description: string;
  heroImage: string;
  cities: {
    name: string;
    description: string;
    image?: string;
  }[];
  attractions: {
    name: string;
    location: string;
    description: string;
    image?: string;
    rating?: number;
  }[];
  food: {
    name: string;
    description: string;
    type: "dish" | "restaurant" | "specialty";
    image?: string;
  }[];
  climate: {
    bestTimeToVisit: string;
    averageTemperature: string;
    rainySeasons?: string;
  };
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface StateData {
  [key: string]: StateInfo;
}

export const validStateIds = [
  "alabama",
  "alaska",
  "arizona", 
  "california", 
  "colorado",
  "florida",
  "georgia",
  "hawaii", 
  "new-york",
  "texas",
  "nevada"
];

export const statesData: StateData = {
  "california": {
    name: "California",
    description: "California, el estado dorado, ofrece una mezcla única de paisajes impresionantes, desde las playas de la costa del Pacífico hasta las montañas de Sierra Nevada. Hogar de Hollywood, Silicon Valley y la mundialmente famosa región vinícola de Napa Valley, California combina innovación tecnológica, cultura diversa y belleza natural. Las ciudades como Los Ángeles y San Francisco atraen a millones de turistas anualmente con sus icónicos puentes, barrios históricos y escena gastronómica vibrante.",
    heroImage: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1364&auto=format&fit=crop",
    cities: [
      {
        name: "Los Ángeles",
        description: "La Ciudad de los Ángeles, centro del entretenimiento mundial y hogar de Hollywood, ofrece playas espectaculares, museos de clase mundial y un clima soleado durante todo el año.",
        image: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "San Francisco",
        description: "Conocida por el icónico Golden Gate Bridge, los tranvías históricos y sus empinadas colinas, San Francisco ofrece una rica experiencia cultural, arquitectura única y excelente gastronomía.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932&auto=format&fit=crop"
      },
      {
        name: "San Diego",
        description: "Ciudad costera con clima perfecto durante todo el año, famosa por sus playas, el zoológico de San Diego y el histórico Gaslamp Quarter.",
        image: "https://images.unsplash.com/photo-1538689529882-59891f0599ee?q=80&w=1587&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Parque Nacional Yosemite",
        location: "Sierra Nevada",
        description: "Uno de los parques nacionales más impresionantes, con cascadas majestuosas, acantilados de granito y secuoyas gigantes.",
        image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?q=80&w=1633&auto=format&fit=crop",
        rating: 4.9
      },
      {
        name: "Golden Gate Bridge",
        location: "San Francisco",
        description: "Puente colgante icónico que conecta San Francisco con el condado de Marin, ofrece vistas espectaculares de la bahía.",
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=1932&auto=format&fit=crop",
        rating: 4.8
      },
      {
        name: "Disneyland",
        location: "Anaheim",
        description: "El parque temático original de Disney, conocido como 'El lugar más feliz de la Tierra', ofrece diversión para toda la familia.",
        image: "https://images.unsplash.com/photo-1590144662036-33bf0ebd2c7f?q=80&w=1587&auto=format&fit=crop",
        rating: 4.7
      }
    ],
    food: [
      {
        name: "Tacos Californianos",
        description: "Una fusión de cocina mexicana tradicional con influencias californianas, a menudo incluyen aguacate y ingredientes frescos locales.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "In-N-Out Burger",
        description: "Cadena de comida rápida icónica de California, conocida por sus hamburguesas frescas y su menú secreto.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1561758033-48d52648ae8b?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Vinos de Napa Valley",
        description: "La región vinícola más famosa de Estados Unidos, productora de vinos de clase mundial, especialmente Cabernet Sauvignon y Chardonnay.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1568213816046-0a8e0e26531e?q=80&w=1470&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Primavera (abril-junio) y otoño (septiembre-noviembre) ofrecen temperaturas agradables y menos turistas.",
      averageTemperature: "Varía según la región: costa 15-21°C, interior 18-35°C, desiertos 20-40°C en verano.",
      rainySeasons: "Invierno (diciembre-febrero) es la temporada de lluvias, especialmente en el norte."
    },
    faqs: [
      {
        question: "¿Cuál es la mejor manera de desplazarse por California?",
        answer: "Alquilar un coche es la opción más conveniente para explorar California, especialmente si planeas visitar múltiples ciudades o parques nacionales. Las principales ciudades como Los Ángeles y San Francisco también cuentan con transporte público."
      },
      {
        question: "¿Cuánto tiempo se necesita para visitar California adecuadamente?",
        answer: "Para una experiencia completa, se recomienda al menos 10-14 días. Esto te permitirá visitar las principales ciudades, disfrutar de algunas playas y explorar parques naturales como Yosemite."
      },
      {
        question: "¿Es costoso viajar a California?",
        answer: "California puede ser un destino costoso, especialmente en ciudades como San Francisco y en zonas turísticas. Sin embargo, hay opciones para todos los presupuestos, incluyendo hostales, restaurantes económicos y actividades gratuitas como senderismo y visitas a playas."
      }
    ]
  },
  "florida": {
    name: "Florida",
    description: "Florida, conocido como el 'Estado del Sol', es un paraíso tropical famoso por sus playas de arena blanca, parques temáticos de clase mundial y su vibrante cultura. Desde los Everglades hasta Miami Beach, Florida ofrece experiencias únicas que combinan naturaleza exuberante con entretenimiento moderno. Su clima cálido durante todo el año, vida marina diversa y una rica mezcla de influencias culturales hacen de Florida un destino atractivo para millones de visitantes anualmente.",
    heroImage: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop",
    cities: [
      {
        name: "Miami",
        description: "Ciudad cosmopolita conocida por sus playas de arena blanca, vida nocturna vibrante, arquitectura Art Deco y fuerte influencia latina.",
        image: "https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Orlando",
        description: "Capital mundial de los parques temáticos, hogar de Walt Disney World, Universal Studios y muchas otras atracciones familiares.",
        image: "https://images.unsplash.com/photo-1575089776834-8be34696ffb9?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Key West",
        description: "La más meridional de las islas de Florida Keys, conocida por sus puestas de sol espectaculares, arquitectura caribeña y ambiente relajado.",
        image: "https://images.unsplash.com/photo-1589793907316-f94025b46850?q=80&w=1374&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Walt Disney World",
        location: "Orlando",
        description: "El complejo de entretenimiento más visitado del mundo, con cuatro parques temáticos, dos parques acuáticos y numerosos hoteles y restaurantes.",
        image: "https://images.unsplash.com/photo-1524008339620-a49b195e42f4?q=80&w=1373&auto=format&fit=crop",
        rating: 4.8
      },
      {
        name: "Parque Nacional Everglades",
        location: "Sur de Florida",
        description: "Vasto humedal subtropical que alberga una biodiversidad única, incluyendo caimanes, manatíes y cientos de especies de aves.",
        image: "https://images.unsplash.com/photo-1569419047567-c028efcfb75a?q=80&w=1370&auto=format&fit=crop",
        rating: 4.6
      },
      {
        name: "South Beach",
        location: "Miami",
        description: "Playa icónica conocida por su arena blanca, agua turquesa, edificios Art Deco y ambiente vibrante.",
        image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop",
        rating: 4.5
      }
    ],
    food: [
      {
        name: "Cubano Sandwich",
        description: "Sándwich de jamón, cerdo asado, queso suizo, pepinillos y mostaza en pan cubano, prensado y tostado.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1528597788073-3bf9d57cedc3?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Joe's Stone Crab",
        description: "Restaurante icónico de Miami conocido por su especialidad en cangrejo de piedra, servido con una salsa especial.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1603359071582-fc182db9a6be?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Key Lime Pie",
        description: "Postre tradicional de los Florida Keys, hecho con jugo de lima, yemas de huevo y leche condensada en una base de galleta.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?q=80&w=1470&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "De noviembre a abril, cuando el clima es más seco y menos húmedo, con temperaturas agradables.",
      averageTemperature: "Temperaturas promedio entre 18-32°C durante todo el año, con veranos calurosos y húmedos.",
      rainySeasons: "Temporada de lluvias de mayo a octubre, que coincide con la temporada de huracanes."
    },
    faqs: [
      {
        question: "¿Cuándo es la mejor época para visitar los parques temáticos de Orlando?",
        answer: "Para evitar multitudes, los mejores momentos son de mediados de enero a mediados de febrero, y de septiembre a mediados de noviembre (excepto durante el fin de semana del Día de Acción de Gracias)."
      },
      {
        question: "¿Es seguro nadar en playas de Florida considerando los tiburones?",
        answer: "Aunque Florida tiene poblaciones de tiburones, los ataques son extremadamente raros. Las playas monitoreadas por socorristas son muy seguras y estos profesionales alertan a los bañistas si detectan actividad inusual."
      },
      {
        question: "¿Qué debo saber sobre la temporada de huracanes en Florida?",
        answer: "La temporada oficial de huracanes va de junio a noviembre, con mayor actividad entre agosto y octubre. Si planeas viajar durante estos meses, considera contratar un seguro de viaje que cubra cancelaciones por huracanes."
      }
    ]
  },
  "texas": {
    name: "Texas",
    description: "Texas, el segundo estado más grande de EE. UU., es conocido por su espíritu independiente, rico patrimonio cultural y vastos paisajes. Desde las ciudades modernas como Houston y Austin hasta las históricas misiones de San Antonio, Texas ofrece una mezcla única de tradición occidental, innovación tecnológica y diversidad cultural. El estado destaca por su auténtica cocina Tex-Mex, la música country y blues, y una hospitalidad sin igual.",
    heroImage: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop",
    cities: [
      {
        name: "Houston",
        description: "La ciudad más grande de Texas, centro de la industria espacial con la NASA, museos de clase mundial y una escena gastronómica diversa.",
        image: "https://images.unsplash.com/photo-1542642839-83eedbc63186?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Austin",
        description: "Capital del estado y ciudad conocida por su vibrante escena musical, cultura creativa y el lema 'Keep Austin Weird'.",
        image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop"
      },
      {
        name: "San Antonio",
        description: "Ciudad histórica, hogar de El Álamo y del famoso River Walk, con una fuerte herencia española y mexicana.",
        image: "https://images.unsplash.com/photo-1535666669445-e8c15cd2e7d9?q=80&w=1336&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "El Álamo",
        location: "San Antonio",
        description: "Sitio histórico de la famosa batalla de 1836, símbolo de la independencia de Texas.",
        image: "https://images.unsplash.com/photo-1558117484-807ea678c9d8?q=80&w=1469&auto=format&fit=crop",
        rating: 4.6
      },
      {
        name: "Space Center Houston",
        location: "Houston",
        description: "Centro oficial de visitantes del Centro Espacial Johnson de la NASA, ofrece exhibiciones sobre la exploración espacial.",
        image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1480&auto=format&fit=crop",
        rating: 4.7
      },
      {
        name: "Big Bend National Park",
        location: "Oeste de Texas",
        description: "Parque nacional que abarca un vasto desierto, cañones montañosos y el río Grande, perfecto para senderismo y observación de estrellas.",
        image: "https://images.unsplash.com/photo-1599231091459-bc932f013882?q=80&w=1384&auto=format&fit=crop",
        rating: 4.8
      }
    ],
    food: [
      {
        name: "BBQ Texano",
        description: "Carnes ahumadas a fuego lento, especialmente pecho de res, costillas y salchichas, servidas con salsas especiales.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Tex-Mex",
        description: "Fusión de cocina mexicana y texana, incluye platillos como fajitas, nachos, queso y enchiladas.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1611250188496-e966043a0629?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Franklin Barbecue",
        description: "Legendario restaurante de Austin, considerado uno de los mejores lugares de BBQ en EE. UU., famoso por su pecho de res.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1518618507214-61b7fa9e8db4?q=80&w=1470&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Primavera (marzo-mayo) y otoño (septiembre-noviembre) ofrecen temperaturas más moderadas.",
      averageTemperature: "Varía según la región: norte 7-35°C, centro 10-38°C, sur (cercano a México) 15-40°C.",
      rainySeasons: "Mayo y junio son los meses más lluviosos, con posibilidad de tormentas severas."
    },
    faqs: [
      {
        question: "¿Qué tan grande es Texas en comparación con otros estados?",
        answer: "Texas es el segundo estado más grande de EE. UU. después de Alaska. Es tan grande que es mayor que muchos países, incluyendo Alemania, Francia y Japón. Viajar de un extremo a otro puede tomar más de 12 horas en coche."
      },
      {
        question: "¿Qué festivales o eventos no debería perderme en Texas?",
        answer: "Texas tiene varios eventos emblemáticos incluyendo South by Southwest (SXSW) y Austin City Limits en Austin, el Rodeo de Houston, el Festival de Música de Kerrville y el State Fair of Texas en Dallas, uno de los más grandes del país."
      },
      {
        question: "¿Es cierto que los texanos son realmente tan amigables como se dice?",
        answer: "Sí, Texas es conocido por su hospitalidad sureña. Los texanos suelen ser abiertos, amables y dispuestos a ayudar a los visitantes. No es inusual que los desconocidos entablen conversación o que los vecinos se ayuden entre sí."
      }
    ]
  },
  "new-york": {
    name: "New York",
    description: "El estado de Nueva York, mucho más que solo la Gran Manzana, abarca desde impresionantes cataratas hasta viñedos premiados y las montañas Adirondack. La ciudad de Nueva York deslumbra con sus rascacielos, Broadway y museos de clase mundial, mientras que las regiones rurales ofrecen paisajes pintorescos, historia colonial y comunidades artísticas vibrantes. Este contraste de experiencias urbanas y naturales hace de Nueva York un destino completo y diverso.",
    heroImage: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop",
    cities: [
      {
        name: "New York City",
        description: "La ciudad más poblada de EE. UU., centro financiero y cultural global, conocida por sus icónicos rascacielos, Broadway, Central Park y barrios diversos.",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Buffalo",
        description: "Segunda ciudad más grande del estado, ubicada cerca de las Cataratas del Niágara, con arquitectura histórica y famosa por sus alitas de pollo.",
        image: "https://images.unsplash.com/photo-1602770306247-4278bf08d00d?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Rochester",
        description: "Ciudad en la orilla del lago Ontario, conocida por sus festivales, museos y vida cultural activa.",
        image: "https://images.unsplash.com/photo-1613190096424-261cabe1c606?q=80&w=1374&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Estatua de la Libertad",
        location: "New York Harbor",
        description: "Monumento icónico que simboliza la libertad y la democracia, regalo de Francia a los Estados Unidos.",
        image: "https://images.unsplash.com/photo-1605130284535-11dd9eedc48a?q=80&w=1470&auto=format&fit=crop",
        rating: 4.7
      },
      {
        name: "Cataratas del Niágara",
        location: "Niagara Falls",
        description: "Espectaculares cataratas en la frontera entre EE. UU. y Canadá, una de las maravillas naturales más visitadas del mundo.",
        image: "https://images.unsplash.com/photo-1564507004663-b6dfb3c824d5?q=80&w=1471&auto=format&fit=crop",
        rating: 4.9
      },
      {
        name: "Central Park",
        location: "Manhattan, NYC",
        description: "Enorme parque urbano que ofrece espacios verdes, lagos, senderos y numerosas actividades recreativas en medio de Manhattan.",
        image: "https://images.unsplash.com/photo-1534270804882-6b5048b1c1fc?q=80&w=1742&auto=format&fit=crop",
        rating: 4.8
      }
    ],
    food: [
      {
        name: "Pizza de New York",
        description: "Rebanadas grandes y finas que se pueden doblar para comer, una tradición culinaria de la ciudad.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Katz's Delicatessen",
        description: "Icónico restaurante de NYC conocido por sus sándwiches de pastrami, escenario de famosas escenas de películas.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1566847438217-76e82d383f84?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Bagels con salmón ahumado",
        description: "Desayuno clásico neoyorquino: bagel con queso crema, salmón ahumado, cebolla roja, alcaparras y eneldo.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1592321675774-3de57f3ee0dc?q=80&w=1374&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "De abril a junio o de septiembre a noviembre, cuando el clima es agradable y hay menos turistas.",
      averageTemperature: "Varía según la estación: primavera 10-20°C, verano 22-30°C, otoño 10-20°C, invierno -5-5°C.",
      rainySeasons: "Las precipitaciones están distribuidas a lo largo del año, con más lluvias en primavera."
    },
    faqs: [
      {
        question: "¿Cuántos días se necesitan para visitar la ciudad de Nueva York?",
        answer: "Para una primera visita, se recomiendan al menos 5-7 días para ver las principales atracciones de Manhattan y quizás explorar algunos barrios de Brooklyn. Para una experiencia más completa incluyendo museos y teatros, considere 10 días."
      },
      {
        question: "¿Cuál es la mejor forma de desplazarse por la ciudad de Nueva York?",
        answer: "El metro es la forma más eficiente y económica de moverse por NYC. Funciona las 24 horas y llega a casi todas las zonas de la ciudad. Caminar también es una excelente opción para distancias cortas, especialmente en Manhattan."
      },
      {
        question: "¿Vale la pena visitar otras partes del estado fuera de la ciudad de Nueva York?",
        answer: "Absolutamente. Las Cataratas del Niágara, las montañas Adirondack, la región vinícola de Finger Lakes y los pueblos históricos del Valle del Hudson ofrecen experiencias completamente diferentes a la ciudad y muestran la diversidad del estado."
      }
    ]
  },
  "hawaii": {
    name: "Hawaii",
    description: "Hawái, el único estado insular de EE. UU., es un paraíso tropical en el Pacífico formado por ocho islas principales. Conocido por sus playas de arena blanca, negra y hasta verde, volcanes activos, selvas exuberantes y cultura polinesia, Hawái ofrece una experiencia única que combina aventura, relajación y riqueza cultural. Su clima cálido durante todo el año, biodiversidad única y el espíritu 'Aloha' hacen de este archipiélago un destino soñado.",
    heroImage: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop",
    cities: [
      {
        name: "Honolulu",
        description: "Capital del estado ubicada en la isla de Oahu, combina una metrópolis moderna con playas paradisíacas como Waikiki.",
        image: "https://images.unsplash.com/photo-1573991458006-3701997c6d8f?q=80&w=1587&auto=format&fit=crop"
      },
      {
        name: "Lahaina",
        description: "Histórica ciudad ballenera en Maui, ahora un destino turístico popular con galerías de arte, restaurantes y vista a las ballenas jorobadas.",
        image: "https://images.unsplash.com/photo-1542259009477-d625272157b7?q=80&w=1332&auto=format&fit=crop"
      },
      {
        name: "Hilo",
        description: "Ciudad principal de la Isla Grande, conocida por sus jardines, cascadas, mercados locales y proximidad al Parque Nacional de los Volcanes.",
        image: "https://images.unsplash.com/photo-1594398956217-95d7d4a4d8d6?q=80&w=1476&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Parque Nacional de los Volcanes",
        location: "Isla Grande",
        description: "Hogar del activo volcán Kilauea, ofrece paisajes lunares, tubos de lava y vistas espectaculares de la actividad volcánica.",
        image: "https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?q=80&w=1374&auto=format&fit=crop",
        rating: 4.9
      },
      {
        name: "Road to Hana",
        location: "Maui",
        description: "Carretera escénica con 600 curvas y 54 puentes que ofrece impresionantes vistas de la costa, cascadas y selvas tropicales.",
        image: "https://images.unsplash.com/photo-1567342663858-9fc922acabad?q=80&w=1374&auto=format&fit=crop",
        rating: 4.7
      },
      {
        name: "Pearl Harbor",
        location: "Oahu",
        description: "Sitio histórico que conmemora el ataque de 1941 que llevó a EE. UU. a la Segunda Guerra Mundial, incluye varios monumentos y museos.",
        image: "https://images.unsplash.com/photo-1562644474-a78470cd5cdb?q=80&w=1421&auto=format&fit=crop",
        rating: 4.6
      }
    ],
    food: [
      {
        name: "Poke",
        description: "Plato tradicional hawaiano de pescado crudo marinado, generalmente atún, con condimentos como salsa de soya, cebolla verde y algas.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1563950708942-db5d9dcca7a7?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Luau",
        description: "Festín tradicional hawaiano que incluye kalua pig (cerdo cocinado en un horno subterráneo), poi, lomi salmon y entretenimiento cultural.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1526761122248-c31c872b354d?q=80&w=1373&auto=format&fit=crop"
      },
      {
        name: "Helena's Hawaiian Food",
        description: "Restaurante premiado en Honolulu que sirve auténtica comida hawaiana desde 1946, famoso por su pipikaula (carne seca).",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1660392598490-a8a3c96c6fec?q=80&w=1374&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Abril-mayo y septiembre-octubre ofrecen buen clima, menos turistas y precios más bajos.",
      averageTemperature: "Temperaturas constantes durante todo el año: costa 24-30°C, áreas elevadas 10-21°C.",
      rainySeasons: "Noviembre a marzo es la temporada más lluviosa, aunque los chaparrones suelen ser breves."
    },
    faqs: [
      {
        question: "¿Cuál es la mejor isla para visitar en Hawái?",
        answer: "Cada isla tiene su encanto: Oahu para una mezcla de ciudad y playa, Maui para lunas de miel y experiencias de lujo, Kauai para naturaleza impresionante, y la Isla Grande para aventura y volcanes. Para primeros visitantes, una combinación de Oahu y Maui es recomendable."
      },
      {
        question: "¿Es caro visitar Hawái?",
        answer: "Hawái es uno de los destinos más caros de EE. UU. debido a los costos de alojamiento, comida y actividades. Sin embargo, hay opciones para diferentes presupuestos, como condominios con cocina para ahorrar en comidas, visitar en temporada baja y aprovechar las actividades gratuitas como senderismo y playas."
      },
      {
        question: "¿Necesito alquilar un coche en Hawái?",
        answer: "Es altamente recomendable alquilar un coche en todas las islas excepto quizás en Oahu, donde el transporte público es bastante bueno. Para explorar completamente las islas y acceder a playas remotas, parques nacionales y senderos, un coche es casi indispensable."
      }
    ]
  },
  "nevada": {
    name: "Nevada",
    description: "Nevada, conocido como 'El Estado de la Plata', es famoso por Las Vegas y su incesante entretenimiento, pero ofrece mucho más allá del Strip. Vastos desiertos, lagos alpinos, pueblos fantasma y paisajes extraterrestres definen este estado de contrastes. Nevada combina la emoción de casinos de clase mundial con la tranquilidad de espectaculares parques estatales, ofreciendo experiencias únicas para todo tipo de viajeros.",
    heroImage: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop",
    cities: [
      {
        name: "Las Vegas",
        description: "Capital mundial del entretenimiento y los casinos, con hoteles temáticos espectaculares, shows de clase mundial y vida nocturna sin igual.",
        image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Reno",
        description: "Conocida como 'La pequeña Las Vegas', combina casinos con proximidad a Lake Tahoe y oportunidades de recreación al aire libre.",
        image: "https://images.unsplash.com/photo-1591462942752-56408aa3fe79?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Carson City",
        description: "Capital del estado con un encanto histórico, museos interesantes y cercana a Lake Tahoe y las montañas de Sierra Nevada.",
        image: "https://images.unsplash.com/photo-1569416078500-3857b00616f8?q=80&w=1470&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "The Strip",
        location: "Las Vegas",
        description: "Icónica avenida de 6.8 km repleta de casinos, hoteles temáticos, restaurantes de celebridades y atracciones espectaculares.",
        image: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?q=80&w=1740&auto=format&fit=crop",
        rating: 4.8
      },
      {
        name: "Valle del Fuego",
        location: "Cerca de Las Vegas",
        description: "Parque estatal con formaciones de arenisca roja, petroglifos antiguos y paisajes que parecen de otro planeta.",
        image: "https://images.unsplash.com/photo-1597111603947-cdff43e79644?q=80&w=1470&auto=format&fit=crop",
        rating: 4.7
      },
      {
        name: "Lago Tahoe",
        location: "Sierra Nevada",
        description: "Lago alpino de aguas cristalinas que ofrece actividades durante todo el año, desde esquí en invierno hasta navegación en verano.",
        image: "https://images.unsplash.com/photo-1538938304102-83bb38cb4f4c?q=80&w=1374&auto=format&fit=crop",
        rating: 4.9
      }
    ],
    food: [
      {
        name: "Buffets de Las Vegas",
        description: "Experiencia culinaria icónica de la ciudad, ofreciendo una variedad impresionante de opciones gastronómicas bajo un mismo techo.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1566417713940-fe7c737a9ef2?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Prime Rib",
        description: "Especialidad de Nevada, especialmente en los casinos; una pieza generosa de carne asada lentamente y servida jugosa.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1558030006-450675393462?q=80&w=1469&auto=format&fit=crop"
      },
      {
        name: "Hell's Kitchen",
        description: "Restaurante de Gordon Ramsay en Las Vegas, conocido por platos como su Wellington de ternera y risotto de langosta.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Primavera (marzo-mayo) y otoño (septiembre-noviembre) ofrecen temperaturas moderadas.",
      averageTemperature: "Extremos considerables: verano 35-45°C en el desierto, invierno puede bajar a -7°C, especialmente en el norte.",
      rainySeasons: "Precipitaciones escasas, con más posibilidad de lluvia en invierno y tormentas ocasionales en verano."
    },
    faqs: [
      {
        question: "¿Hay más que hacer en Las Vegas además de jugar en los casinos?",
        answer: "Absolutamente. Las Vegas ofrece espectáculos de primer nivel, restaurantes de chefs famosos, compras de lujo, museos únicos como el Neon Museum y Mob Museum, y está cerca de atracciones naturales como Red Rock Canyon, el Gran Cañón y el Valle de la Muerte."
      },
      {
        question: "¿Cuándo es el mejor momento para visitar Las Vegas?",
        answer: "La primavera (marzo-mayo) y el otoño (septiembre-noviembre) ofrecen el clima más agradable. El verano es extremadamente caluroso (con temperaturas de hasta 45°C) pero los precios de los hoteles suelen ser más bajos. Los fines de semana y durante grandes convenciones los precios aumentan significativamente."
      },
      {
        question: "¿Qué opciones hay para explorar la naturaleza en Nevada?",
        answer: "Nevada tiene paisajes sorprendentemente diversos. Además del Valle del Fuego y Lake Tahoe, puedes visitar Great Basin National Park, Red Rock Canyon, Valley of Fire State Park, y el Area de Conservación Nacional del Lago Mead. El estado tiene excelentes oportunidades para senderismo, escalada, observación de estrellas y fotografía de paisajes."
      }
    ]
  },
  "arizona": {
    name: "Arizona",
    description: "Arizona, tierra de contrastes, alberga uno de los tesoros naturales más impresionantes del mundo: el Gran Cañón. Este estado del suroeste combina desiertos pintorescos, formaciones rocosas espectaculares y antiguas culturas nativas americanas con modernas ciudades como Phoenix y Tucson. Su clima soleado durante todo el año, paisajes como de otro planeta y rica historia lo convierten en un destino fascinante para los amantes de la naturaleza, la aventura y la cultura.",
    heroImage: "https://images.unsplash.com/photo-1558645836-e44122a743ee?q=80&w=1740&auto=format&fit=crop",
    cities: [
      {
        name: "Phoenix",
        description: "Capital y ciudad más grande de Arizona, ofrece una mezcla de cultura urbana, excelentes restaurantes y proximidad a aventuras en el desierto.",
        image: "https://images.unsplash.com/photo-1550236520-7050f3582da0?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Tucson",
        description: "Ciudad con rica herencia hispana y nativa americana, rodeada por montañas y hogar del Parque Nacional Saguaro.",
        image: "https://images.unsplash.com/photo-1551525212-a1f4e1e2e0e8?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Sedona",
        description: "Conocida por sus formaciones de roca roja y energía espiritual, es un paraíso para excursionistas, artistas y buscadores espirituales.",
        image: "https://images.unsplash.com/photo-1602088693770-867518e50a9b?q=80&w=1617&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Gran Cañón",
        location: "Norte de Arizona",
        description: "Una de las siete maravillas naturales del mundo, este cañón masivo tallado por el río Colorado ofrece vistas impresionantes.",
        image: "https://images.unsplash.com/photo-1575527048208-933d8bf74239?q=80&w=1470&auto=format&fit=crop",
        rating: 5.0
      },
      {
        name: "Monumento Nacional Antelope Canyon",
        location: "Page",
        description: "Espectacular cañón de ranura conocido por sus paredes ondulantes y rayos de luz que penetran desde arriba.",
        image: "https://images.unsplash.com/photo-1602088113060-dea8cf04430c?q=80&w=1374&auto=format&fit=crop",
        rating: 4.9
      },
      {
        name: "Desierto de Sonora",
        location: "Sur de Arizona",
        description: "Uno de los desiertos más diversos del mundo, hogar del icónico cactus saguaro y una sorprendente variedad de vida silvestre.",
        image: "https://images.unsplash.com/photo-1580785692949-7b5c7cd3a4d9?q=80&w=1373&auto=format&fit=crop",
        rating: 4.7
      }
    ],
    food: [
      {
        name: "Chimichanga",
        description: "Burrito frito que supuestamente se inventó en Arizona, relleno de carne, frijoles y queso, cubierto con salsa y crema agria.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1578160112054-954a67602b88?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Cocina Navajo",
        description: "Platos tradicionales como el pan frito navajo, a menudo servido con chile verde o como base para los 'tacos navajos'.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1592040048761-96d74242b8c3?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Pizzeria Bianco",
        description: "Legendaria pizzería en Phoenix, considerada una de las mejores de EE. UU., dirigida por el chef Chris Bianco, ganador del premio James Beard.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1470&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Primavera (marzo-mayo) y otoño (septiembre-noviembre) ofrecen temperaturas moderadas ideales para actividades al aire libre.",
      averageTemperature: "Varía significativamente por altitud: Phoenix y desiertos 25-45°C en verano, 10-20°C en invierno; áreas montañosas mucho más frescas.",
      rainySeasons: "Dos temporadas de monzones: invierno (diciembre-marzo) con lluvias suaves y verano (julio-septiembre) con tormentas intensas."
    },
    faqs: [
      {
        question: "¿Cuál es la mejor época para visitar el Gran Cañón?",
        answer: "La primavera (abril-junio) y el otoño (septiembre-octubre) ofrecen el mejor clima. El verano es muy caluroso y concurrido, mientras que el invierno puede traer nieve, especialmente en el borde norte, que cierra de octubre a mayo."
      },
      {
        question: "¿Es seguro hacer senderismo en el desierto de Arizona?",
        answer: "El senderismo es seguro si se toman precauciones adecuadas: llevar suficiente agua (al menos 1 galón por persona al día en verano), protección solar, sombrero, ropa adecuada, informar a alguien de tu ruta y llevar un teléfono y/o GPS. Evita caminar durante las horas más calurosas del día en verano."
      },
      {
        question: "¿Qué comunidades nativas americanas puedo visitar en Arizona?",
        answer: "Arizona alberga 22 tribus nativas americanas. La Nación Navajo, la reserva de los Hopi, la comunidad de los Apache y el pueblo Havasupai cerca del Gran Cañón ofrecen oportunidades para conocer sus culturas. Muchas tienen centros culturales, visitas guiadas o festivales abiertos al público."
      }
    ]
  },
  "colorado": {
    name: "Colorado",
    description: "Colorado, conocido como 'El Estado Centenario', es famoso por las majestuosas Montañas Rocosas que dominan su paisaje. Desde picos nevados y lagos alpinos hasta cañones profundos y mesetas áridas, Colorado ofrece una diversidad geográfica impresionante. Capital del esquí en invierno y paraíso para excursionistas en verano, el estado combina aventuras al aire libre con ciudades vibrantes como Denver y Boulder. Su cultura cervecera artesanal, música en vivo y espíritu relajado completan la experiencia de este estado de alta montaña.",
    heroImage: "https://images.unsplash.com/photo-1602705169259-fec1eb128f1e?q=80&w=1740&auto=format&fit=crop",
    cities: [
      {
        name: "Denver",
        description: "La capital, conocida como 'La Ciudad a una Milla de Altura', combina una escena urbana vibrante con fácil acceso a las montañas.",
        image: "https://images.unsplash.com/photo-1582990202350-61d6246cbd39?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Colorado Springs",
        description: "Ciudad a los pies de las Montañas Rocosas, famosa por sus formaciones rocosas en Garden of the Gods y la academia de la fuerza aérea.",
        image: "https://images.unsplash.com/photo-1674580186632-73469d56be6e?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Boulder",
        description: "Ciudad universitaria con fuerte enfoque en vida saludable, actividades al aire libre y cultura progresista.",
        image: "https://images.unsplash.com/photo-1600007283728-22abc97b9318?q=80&w=1587&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Parque Nacional de las Montañas Rocosas",
        location: "Norte de Colorado",
        description: "Uno de los parques nacionales más visitados, con picos alpinos, vida silvestre abundante y más de 300 millas de senderos.",
        image: "https://images.unsplash.com/photo-1602705169259-fec1eb128f1e?q=80&w=1740&auto=format&fit=crop",
        rating: 4.9
      },
      {
        name: "Garden of the Gods",
        location: "Colorado Springs",
        description: "Parque público con formaciones espectaculares de arenisca roja contra el telón de fondo de Pikes Peak.",
        image: "https://images.unsplash.com/photo-1570143675316-51a19f90a943?q=80&w=1470&auto=format&fit=crop",
        rating: 4.8
      },
      {
        name: "Aspen",
        location: "Montañas Rocosas",
        description: "Famoso resort de esquí y destino de lujo, también ofrece actividades durante todo el año y paisajes espectaculares.",
        image: "https://images.unsplash.com/photo-1575573333701-c41259559bfa?q=80&w=1470&auto=format&fit=crop",
        rating: 4.7
      }
    ],
    food: [
      {
        name: "Bison Burger",
        description: "Hamburguesa hecha con carne de bisonte, una alternativa más magra y sostenible a la carne de res convencional.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1536510233921-8e5043fce771?q=80&w=1471&auto=format&fit=crop"
      },
      {
        name: "Cerveza artesanal",
        description: "Colorado es conocido como 'el estado de la cerveza', con más de 400 cervecerías y eventos como el Great American Beer Festival.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "The Fort",
        description: "Restaurante histórico cerca de Denver especializado en cocina del Viejo Oeste, incluyendo carne de caza, truchas y platillos inspirados en recetas nativas americanas.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1469&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Verano (junio-agosto) para senderismo y actividades al aire libre; invierno (diciembre-marzo) para esquí y deportes de nieve.",
      averageTemperature: "Muy variable según altitud: Denver 0-32°C, áreas montañosas mucho más frías con temperaturas bajo cero en invierno.",
      rainySeasons: "Las tardes de verano (julio-agosto) a menudo traen tormentas eléctricas en las montañas; invierno trae nieve abundante en elevaciones altas."
    },
    faqs: [
      {
        question: "¿Cómo afecta la altitud a los visitantes en Colorado?",
        answer: "El mal de altura puede afectar a algunos visitantes, especialmente en elevaciones por encima de 2.400 metros. Los síntomas incluyen dolores de cabeza, náuseas y fatiga. Para minimizarlos, mantente hidratado, limita el alcohol, come carbohidratos, y aclimatate gradualmente pasando un día o dos en Denver antes de subir a altitudes mayores."
      },
      {
        question: "¿Cuáles son las mejores estaciones de esquí de Colorado?",
        answer: "Colorado tiene varias estaciones de clase mundial. Vail y Aspen son las más prestigiosas y lujosas. Breckenridge y Steamboat son excelentes para familias. Para los que buscan menos multitudes, considera Telluride o Crested Butte. La mayoría de estaciones operan de noviembre a abril, con mejores condiciones de nieve generalmente en enero y febrero."
      },
      {
        question: "¿Qué debo saber sobre la marihuana recreativa en Colorado?",
        answer: "La marihuana recreativa es legal en Colorado para adultos mayores de 21 años, pero hay regulaciones. No se puede consumir en público, no se puede llevar a parques nacionales (que son propiedad federal), y conducir bajo su influencia es ilegal. Los turistas pueden comprar en dispensarios legales, pero no pueden llevarla fuera del estado."
      }
    ]
  },
  "alabama": {
    name: "Alabama",
    description: "Alabama, conocido como el 'Estado del Corazón de Dixie', ofrece una fascinante combinación de historia profunda, hospitalidad sureña y belleza natural. Desde las playas de arena blanca de la costa del Golfo hasta las colinas boscosas del norte, Alabama sorprende con su diversidad paisajística. El estado jugó un papel crucial en el movimiento por los derechos civiles y conserva un rico patrimonio cultural, evidente en su música soul, blues y country, así como en su legendaria cocina sureña que satisface hasta los paladares más exigentes.",
    heroImage: "https://images.unsplash.com/photo-1578309992456-c4f4cb28de0b?q=80&w=1740&auto=format&fit=crop",
    cities: [
      {
        name: "Birmingham",
        description: "Mayor ciudad del estado, con rico patrimonio industrial y protagonismo en el movimiento por los derechos civiles, ahora con vibrante escena gastronómica y cultural.",
        image: "https://images.unsplash.com/photo-1626908613482-837d7cd64118?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Montgomery",
        description: "Capital del estado y cuna de la Confederación, posteriormente centro del movimiento por los derechos civiles con el boicot de autobuses liderado por Rosa Parks.",
        image: "https://images.unsplash.com/photo-1630964245787-763d1debfa1c?q=80&w=1740&auto=format&fit=crop"
      },
      {
        name: "Mobile",
        description: "Ciudad portuaria histórica con arquitectura colonial, carnaval de Mardi Gras más antiguo de EE. UU. y hermosos jardines.",
        image: "https://images.unsplash.com/photo-1593199896100-1d7e5f4fa72e?q=80&w=1374&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Playas de Gulf Shores y Orange Beach",
        location: "Costa del Golfo",
        description: "Kilómetros de playas de arena blanca, aguas cristalinas turquesa y abundantes opciones de recreación y vida silvestre.",
        image: "https://images.unsplash.com/photo-1594335034276-c6e2d43201be?q=80&w=1470&auto=format&fit=crop",
        rating: 4.7
      },
      {
        name: "Instituto de Derechos Civiles de Birmingham",
        location: "Birmingham",
        description: "Museo conmovedor que documenta la lucha por los derechos civiles en Alabama y Estados Unidos.",
        image: "https://images.unsplash.com/photo-1516421417223-d114c97aad2a?q=80&w=1374&auto=format&fit=crop",
        rating: 4.9
      },
      {
        name: "U.S. Space & Rocket Center",
        location: "Huntsville",
        description: "El museo de cohetes y artefactos espaciales más grande del mundo, con exhibiciones interactivas y el Space Camp.",
        image: "https://images.unsplash.com/photo-1454789548928-9efd52dc4031?q=80&w=1480&auto=format&fit=crop",
        rating: 4.8
      }
    ],
    food: [
      {
        name: "BBQ sureño",
        description: "Especialidad del estado, particularmente el cerdo ahumado lentamente con salsas a base de vinagre o mostaza.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?q=80&w=1365&auto=format&fit=crop"
      },
      {
        name: "Pollo frito con panecillos y salsa de crema",
        description: "Plato tradicional sureño, servido con acompañamientos como puré de patatas, maíz y judías verdes.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Dreamland Bar-B-Que",
        description: "Legendario restaurante comenzó en Tuscaloosa en 1958, famoso por sus costillas y su salsa distintiva.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1614398751058-eb2e0bf63e53?q=80&w=1470&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Primavera (marzo-mayo) y otoño (septiembre-noviembre) ofrecen temperaturas agradables y menos humedad.",
      averageTemperature: "Veranos calientes y húmedos (26-35°C), inviernos suaves (7-15°C) con ocasionales olas de frío.",
      rainySeasons: "La lluvia está distribuida durante todo el año, con tormentas más frecuentes en invierno y verano. Huracanes pueden afectar la costa entre junio y noviembre."
    },
    faqs: [
      {
        question: "¿Cuándo es mejor visitar las playas de Alabama?",
        answer: "La mejor época es de abril a octubre. El verano (junio-agosto) ofrece temperaturas ideales para nadar pero también es la temporada más concurrida y cara. La primavera y el otoño ofrecen clima agradable y menos multitudes. Evita la temporada de huracanes (junio-noviembre) si es posible."
      },
      {
        question: "¿Qué lugares históricos relacionados con los derechos civiles debo visitar?",
        answer: "Alabama tiene varios sitios históricos fundamentales: el Instituto de Derechos Civiles en Birmingham, el Museo Legacy en Montgomery, la Iglesia Bautista de la Calle 16th en Birmingham (sitio de un bombardeo racista en 1963), y el Edmund Pettus Bridge en Selma, lugar de la famosa marcha de 1965."
      },
      {
        question: "¿Cuál es la mejor manera de experimentar la música de Alabama?",
        answer: "Alabama tiene una rica tradición musical. Visita los estudios FAME y Muscle Shoals Sound en Muscle Shoals, donde grabaron artistas como Aretha Franklin y los Rolling Stones. Para música en vivo, explora bares y clubes en Birmingham, Mobile y Tuscaloosa, especialmente los que ofrecen blues, country y southern rock."
      }
    ]
  },
  "alaska": {
    name: "Alaska",
    description: "Alaska, el estado más grande y menos densamente poblado de los Estados Unidos, es una tierra de superlativos: glaciares masivos, montañas imponentes (incluyendo el Denali, el pico más alto de Norteamérica), y vida silvestre abundante. Conocida como 'La Última Frontera', Alaska ofrece una experiencia verdaderamente salvaje con sus extensos bosques boreales, tundra ártica y más de 54,000 kilómetros de costa accidentada. El sol de medianoche en verano y las auroras boreales en invierno añaden un toque mágico a este territorio extremo pero increíblemente hermoso.",
    heroImage: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1744&auto=format&fit=crop",
    cities: [
      {
        name: "Anchorage",
        description: "La ciudad más grande de Alaska, combina las comodidades urbanas con un fácil acceso a la naturaleza salvaje, incluidos avistamientos de osos y ballenas.",
        image: "https://images.unsplash.com/photo-1540431047218-203254f13d5c?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Juneau",
        description: "Capital del estado accesible solo por aire o mar, rodeada de montañas, glaciares y el famoso Glaciar Mendenhall.",
        image: "https://images.unsplash.com/photo-1627686853816-cc83af846066?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Fairbanks",
        description: "Ciudad en el interior de Alaska, puerta de entrada al Círculo Polar Ártico y uno de los mejores lugares para ver auroras boreales.",
        image: "https://images.unsplash.com/photo-1564633936883-3d63c27484cd?q=80&w=1740&auto=format&fit=crop"
      }
    ],
    attractions: [
      {
        name: "Parque Nacional Denali",
        location: "Alaska central",
        description: "Hogar del monte Denali (anteriormente McKinley), el pico más alto de Norteamérica, con paisajes impresionantes y abundante vida silvestre.",
        image: "https://images.unsplash.com/photo-1504280317859-8d1a6137e977?q=80&w=1469&auto=format&fit=crop",
        rating: 4.9
      },
      {
        name: "Glaciar Mendenhall",
        location: "Cerca de Juneau",
        description: "Espectacular glaciar accesible por carretera, con senderos para caminatas y centro de visitantes.",
        image: "https://images.unsplash.com/photo-1567698557172-990e246d85d6?q=80&w=1374&auto=format&fit=crop",
        rating: 4.8
      },
      {
        name: "Bahía de los Glaciares",
        location: "Sureste de Alaska",
        description: "Parque nacional con impresionantes glaciares marinos y vida silvestre, mejor explorado en cruceros y excursiones en kayak.",
        image: "https://images.unsplash.com/photo-1531913223931-b0d3198229ee?q=80&w=1374&auto=format&fit=crop",
        rating: 4.9
      }
    ],
    food: [
      {
        name: "Salmón salvaje de Alaska",
        description: "Pescado fresco y de calidad superior, preparado de diversas formas: ahumado, a la parrilla, en sopa o crudo en platos nativos.",
        type: "specialty",
        image: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?q=80&w=1470&auto=format&fit=crop"
      },
      {
        name: "Cangrejo real de Alaska",
        description: "Delicadeza local, especialmente las enormes patas de cangrejo hervidas y servidas con mantequilla clarificada.",
        type: "dish",
        image: "https://images.unsplash.com/photo-1559734840-f9509ee5677f?q=80&w=1374&auto=format&fit=crop"
      },
      {
        name: "Simon & Seafort's",
        description: "Restaurante histórico en Anchorage con vistas panorámicas, especializado en mariscos frescos locales y carnes de primera calidad.",
        type: "restaurant",
        image: "https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?q=80&w=1374&auto=format&fit=crop"
      }
    ],
    climate: {
      bestTimeToVisit: "Verano (junio-agosto) para temperaturas más cálidas y días muy largos; invierno (diciembre-marzo) para auroras boreales y deportes de invierno.",
      averageTemperature: "Varía extremadamente: verano 10-21°C en el sur, 7-18°C en el interior; invierno puede alcanzar -40°C en el interior.",
      rainySeasons: "El sureste (como Juneau) es lluvioso durante todo el año; el interior es relativamente seco con nevada en invierno."
    },
    faqs: [
      {
        question: "¿Cuándo se pueden ver las auroras boreales en Alaska?",
        answer: "Las auroras boreales o luces del norte son más visibles durante los meses de oscuridad (septiembre a abril), especialmente en noches despejadas. Fairbanks es uno de los mejores lugares para verlas debido a su ubicación bajo el 'anillo auroral' y su clima relativamente seco. La mejor hora para observarlas es generalmente entre las 10 PM y las 2 AM."
      },
      {
        question: "¿Cuál es la mejor manera de viajar por Alaska?",
        answer: "Debido al tamaño de Alaska y su infraestructura limitada, a menudo se requiere una combinación de métodos de transporte. Los cruceros son populares para explorar el Paso Interior en el sureste. Para el interior, los trenes escénicos, avionetas y RVs (autocaravanas) son opciones comunes. Muchas áreas remotas solo son accesibles en avión, por lo que los 'flightseeing tours' (vuelos turísticos) son una experiencia única y necesaria."
      },
      {
        question: "¿Qué tipo de vida silvestre puedo ver en Alaska?",
        answer: "Alaska ofrece algunas de las mejores oportunidades del mundo para observar vida silvestre. Puedes ver osos (pardos, negros y polares), alces, caribúes, lobos, ballenas (jorobadas, orcas, belugas), focas, leones marinos, nutrias marinas, águilas calvas y muchas especies de aves. El Parque Nacional Denali y los fiordos costeros son excelentes lugares para avistamientos. Para maximizar tus posibilidades, considera contratar un guía especializado."
      }
    ]
  }
};

