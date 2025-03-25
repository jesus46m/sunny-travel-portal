
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

// Datos de los estados
const stateData = {
  "alabama": {
    name: "Alabama",
    cities: ["Birmingham", "Montgomery", "Mobile"],
    image: "https://images.unsplash.com/photo-1578309992456-c4f4cb28de0b?q=80&w=1740&auto=format&fit=crop"
  },
  "alaska": {
    name: "Alaska",
    cities: ["Anchorage", "Juneau", "Fairbanks"],
    image: "https://images.unsplash.com/photo-1503095396549-807759245b35?q=80&w=1744&auto=format&fit=crop"
  },
  "arizona": {
    name: "Arizona",
    cities: ["Phoenix", "Tucson", "Sedona"],
    image: "https://images.unsplash.com/photo-1558645836-e44122a743ee?q=80&w=1740&auto=format&fit=crop"
  },
  "california": {
    name: "California",
    cities: ["Los Angeles", "San Francisco", "San Diego"],
    image: "https://images.unsplash.com/photo-1506146332389-18140dc7b2fb?q=80&w=1364&auto=format&fit=crop"
  },
  "colorado": {
    name: "Colorado",
    cities: ["Denver", "Colorado Springs", "Boulder"],
    image: "https://images.unsplash.com/photo-1602705169259-fec1eb128f1e?q=80&w=1740&auto=format&fit=crop"
  },
  "florida": {
    name: "Florida",
    cities: ["Miami", "Orlando", "Tampa"],
    image: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?q=80&w=1470&auto=format&fit=crop"
  },
  "georgia": {
    name: "Georgia",
    cities: ["Atlanta", "Savannah", "Athens"],
    image: "https://images.unsplash.com/photo-1575931953324-fcac7094999e?q=80&w=1740&auto=format&fit=crop"
  },
  "hawaii": {
    name: "Hawaii",
    cities: ["Honolulu", "Lahaina", "Hilo"],
    image: "https://images.unsplash.com/photo-1505852679233-d9fd70aff56d?q=80&w=1470&auto=format&fit=crop"
  },
  "new-york": {
    name: "New York",
    cities: ["New York City", "Buffalo", "Rochester"],
    image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1470&auto=format&fit=crop"
  },
  "texas": {
    name: "Texas",
    cities: ["Houston", "Dallas", "Austin"],
    image: "https://images.unsplash.com/photo-1531218150217-54595bc2b934?q=80&w=1428&auto=format&fit=crop"
  },
  // Datos para más estados pueden ser añadidos aquí
};

const InteractiveMap = () => {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleMouseEnter = (stateId: string) => {
    setHoveredState(stateId);
  };

  const handleMouseLeave = () => {
    setHoveredState(null);
  };

  const handleStateClick = (stateId: string) => {
    navigate(`/state/${stateId}`);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Explora Estados Unidos Interactivamente
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">
          Descubre cada estado pasando el cursor sobre el mapa. Haz clic para explorar en detalle.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* Mapa SVG interactivo */}
        <div className="w-full lg:w-2/3 bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 shadow-2xl">
          <svg
            viewBox="0 0 959 593"
            className="w-full"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              {/* Estos son los paths SVG de estados clave - solo incluyo algunos para brevedad */}
              <path
                id="california"
                d="M75.4,364.3l4.6-1.5l1.8-1.8l0.5-2.5l-2.8-0.8l-1.1-2.1l-0.3-1.3l-3.3-3.3l-0.8-3.7l-1.3-1.8v-7.4l0.3-0.9l-1.1-1v-2 l5.5-3.2l-1.6-2.7l-0.8-4.3l2.1-2.5l2.1-4.2l1.3-4l-0.3-3.1l-2.4-0.8l-3.3-1.7l-0.5,0.1l-0.8-1.5l-4.7,0.5l-2.6,2.3l-1.6,0.5l-0.8,0.9 l-2.6,0.1l-1.1,0.9l-2,0.1l-2.4,2.2l-1.6,0.3l-0.8-1.2l-1-0.2l-3.7,0.2l-3.5,2l-1.5,0.2l-3.7-0.6l-3.2,0.8l-1.9-0.8l0.3-1.3 l-2.6-0.6l-1.4-1l-4.8,0.1l-0.8-1.6l-5.8-1.3l1.3-3.3l1.5-0.3l0.5-2.3l-0.5-2.2l-1.5-1.8l-3-2.1l0.9-4.1l0.5-5.8l-0.8-2.4l-1.9-2.1 l-2.8-1.3l0.3-4.8l-1.1-2.8l2-0.5l0.1-1.1l-0.7-0.3l1.4-1.1l1.3-3.5l3.5-1.2l1.8-1.5l1-1.8l1-5l0.7-1.1l0.2-1.6l-0.8-0.1l1.3-1.3 l1-3.2l2.3-0.1l1.7-1.8l-0.7-3l-2.4-2.1l6.2-9.3l0.4-7.5l2.3-3.3l0.1-0.5l2.1-2.5l-0.3-3.2l-1.4-2.9l-0.2-2.7l0.5-0.9l-0.5-3.5 l-0.5-0.8l0.9-3.1l-1.1-3.5l-2.1-0.8l-0.6-2.7l0.9-4.1l-0.5-3l-1.1-0.7l-1-4.6l-2.7-4.5l-1.1-2.6h-0.9l-0.9-5.1l-0.6-0.5l-0.1-2.5 l-0.9-2.2l-2.5-1.1l-4-10.7l0.2-6.3l0.9-3.5l2.5-5.2l1.2-10.9l-0.3-3.1l2.9-8.1l-1.1-2.7l2.1-5.5l2.1-2.3l3.9-0.8l4.8-4.4l1.6-5.3 l0.5-5.9l-1.8-5.5l0.4-2l2.7-2.2l0.4-1.1l0.1-3.6l-1.4-3l1.8-3.5l1.3-3.2h2.3l0.4-1.1l-0.7-2l3.5-8.5l2.4-0.9l4.4-6.7l4.9-5.5 l4.5-0.3l1.9,1.2v1.9l2.8,0.8l0.7-1.3l1.2,0.8l2.5-2.1l1.5,0.5l0.7,2.4l1.9,0.3l1.9-1.2l3.6,0.2l3.1-3.7l1-5.5l2.7-7.9l0.8-5.4 l2.3-2.5l18.6,2.6l27,3.2l2.3,0.5l11.4,13.9l21.4,25.9l5.1,6.2l-0.4,3.2l-1.6,1.6l-4.5,10.1l-2.8,4.2l-8.5,2.1l-3.1,2.5l-4.2,2.1 l-2,2.2l-1.6,0.3l-2.4,2.5l-2.4,5.5l-1.8,1.5l-1.6,2.4l-1,2.8l-3,3.5l0.2,2.8l2.6,0.5l1.8,0.9l1,2.5l-0.9,3.5l-1.6,1.5l-2.5-1 l-0.8-2.6h-0.8l-1,1l-2-1.5L212,93l-1.5,0.2l-3.5,3.8l-2.5,0.5l-0.5,1.8l-3.1,0.5l-1.9,1.5L195,106l-1.5,3.5l-1.5,1.1l-2.9,0.5 l-3.7-0.7l-0.8,1.6l-1,0.5l-1.5-0.5l-3,1.5l-2.1,0.3l-0.5,0.8l-2.5-1v-1.9l-0.7-0.3l-1,2.3l-2.6,0.5l-1.6,2.2l-2.5,0.1l-0.5,2.3 l0.5,2.2l-0.3,1.5l-3.5,2l-1.2-0.7l-1-2.7l-1.5-0.5l-0.5-1l-2.5,0.5l-4.8-1.3l-1.8-1.1l-4.5-0.3l-5.3,1.5l-4.9-0.3l-3.3-1.2 l-2.9,0.1l-3.8-1.3l-4.1-0.3l-2.5,2L98,118.5l-2.3,2.2l-2.5,6.3l-3.3,4.2l1.8,0.1l-0.1,2.1l-1.4,0.5v0.8l-2.4,1.5l-0.5,1.9 l-5.8,3.5l-0.5,2.9l0.8,2.8l1.8,2.3l2.5,0.5l4.5-2l1.9,1.5l1.3,1.5l2.3,0.2l0.8-0.7l2.3,1.8l1.5,2.5l2.3,0.3l1.9,1.5l-0.3,2.8 l-0.8,0.5l1.3,1.5l0.3,2.8l-1,1.8l-2.5-0.3l-1-1l-3.8,2l-1.3,2.2l-2.5,0.5l-1.5,0.8l-2,6.3l-0.5,3.2l-0.8,0.8l-1,3.3l-2.3,0.5 l-1.3-0.8l-0.8,1.3l-2.5-0.5l-0.3-1.5l-1.5,1l-0.5,1.5l-2.5,0.8l-1.5-0.5l-1.8,1.3v1.8l-4,2.5l-0.8,4l-1.1,0.5l-2,4l-0.5,1.8l0.5,3 l1.5,2.3l-0.5,2.5l-1.5,1.6l-0.5,2.3l-1.5,1l0.3,1l-0.3,1.5L75.4,364.3z"
                className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "california" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                onMouseEnter={() => handleMouseEnter("california")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStateClick("california")}
              />
              <path
                id="texas"
                d="M417.9,466.4l11.9,0.7l12,0.5l0.7-11.6l0.7-11.1l0.8-12.7l0.3-8.2l3.4-23.3l1.3-11.2l0.5-11.1l0.8-10.4l0.8-10.7 l0.8-9.3l4.7,0.1l7.1,0.2l10.9,0.5l12.8,0.5l14.1,0.9l13.7,0.5l0.4,5.1l0.1,8.3l0.6,9.3l0.9,3.2l2.4,2.9l1.3,3.2l2.2,0.7l3,0.8 l1.9-8.8l0.5-9.9l1.3-10.2l0.5-10.2l0.5-7.4l1.7-1.9l2-0.7l1.1-0.7l0.8-4.1l3.9,0.5l2.9,1.9l2.9-0.5l1.4,1.4l2.9-0.5h0.3l1-1.7 l5.7,2.6l5.2,1.8l1.2-1.3l5.2,0.7l5.3-0.6l4.1,0.2l3.7,0.7l4,0.7l1.3,2l4.9,0.9l2.2,2.3l4.1,0.7l4,1.5l2.8-4l1.1-5.4l2.9-0.7 l1.3-1.9l0.6-3.1l0.7-0.8l0.1-2.9l5.3-3.2l2.6,0.4l3.8-0.7l3.2-0.2l3.8,0.9l2.6,2.8l2.8-0.7l2.7,1.2l2.3,4.1l1.8,0.9l1.6-0.7 l3,0.4l2.3,3.2l0.1,2l5.1,0.5l2.1-0.8l2.9-2.2l-2.3-3.3l0.2-2.5l2.5-2.7l1.8-0.8l2.8,1l2.5,2.2l0.5,3.3l1.8,3.9l-1.5,1.8l2.7,1.3 l1.4,2l-0.3,4.2l-1.5,3.3l0.5,3l5.2,4l2,1.1l2.5-1.4l0.2-2.2l1-3.8h2.1l2.5-1.1l1.8-1.9l1.4,0.8l0.7,3.8l3.7,1.9l2.5,0.4l2.3-0.6 l1-1.5l3.8-0.5l1.7-0.9l1-2.2l1.4-0.5h3.3l1.6,1.5l3.2-0.2v-1.1l3.2-2.6l1.6,0.8l1.4-1.5h2.7l0.7-1.5l1.5-0.5l0.6,0.8l2-2l5-0.3 l0.8-1.9l-0.8-2l1-2l2.3-0.5l0.5-1.8l1.4,1.4l3.4,0.5l-0.5,1.8l3.8,0.8l1-0.1l0.5-3.6l1-0.5l-0.8-2.2l1.2-4.2l0.5-4.9l-0.7-3.5 l8-54.8l0.3-1.9l5.7,0.7l5.3,0.9l5,0.7l5.4,0.4l5.5,0.3l5.6,0.1l5.1-0.1l0.5,2l0.3,5.2l0.5,8.2l0.4,9.4l0.2,5.8l0.5,5.7l0.5,6.9 l0.7,6.1l0.5,4.1l0.8,6.6l1,6.4l0.9,5l1.1,4.5l0.7,6.1l0.3,1.9l0.7,5l1.3,4.5l1.8,4.8l0.9,4.8l0.4,5.6l-3.6,0.1l-9.6-0.5l-12-0.5 l-4.9-0.5l-6.5-0.1l-12-1.5l-13.5-0.3l-10-0.5l-13.5-1.1l-10.2-0.5l-1,31.9l-0.5,19.5l-0.3,15.2l-0.5,12.6l-0.8,18.8l-0.5,6 l-1.9,0.8l-2.3-1.8l-1.6,0.3l-0.5,0.7l-2.7,0.2l-0.6,1.9l0.7,4.6l-2.1,2.5l-1.8-0.2l-0.3,2.4l-2.9,2.1l-0.3,3.1l-0.6,0.6l0.7,2.4 l-0.5,3l-1.1,1.1l-0.8,2.3l-2.3,2.3l-1,0.1l-0.6,8.9l-0.5,4.7l-3.2,6.1l-2.4,3.7l-2.6,2.4l-3.9,2.3l-5.4,0.9l-11.9,0.7l-5.3,0.7 l-5.7,0.9l-6.6,0.8h-5.9l-0.3,5.8l-12.9,0.9l-7.8,0.7l-10.2,0.5l-11.9,0.3l-7.5-0.1l-14.2-2.1l-7.3-1.3l-10.7-2.6L417.9,466.4z"
                className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "texas" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                onMouseEnter={() => handleMouseEnter("texas")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStateClick("texas")}
              />
              <path
                id="florida"
                d="M759.8,439.1l2.6,7.6l2.2,9.5l4.5,8.2l4.1,3.5l1.9,5.1l-0.5,5.4l-2.9,5.7l-0.5,5.1l-4.2,1l-1.8,2.2l-1.2,7.6l-2.4,8.5 l1.7,6l-0.4,10.5l-4.9,5.4l-3.8,6l-2.8,6.3l-4.3,8l-1.2,6.3l-0.8,6.6l-3.6,5.7l-1.6,5.7l-3.3,4.4l-2,2.9l1.3,8.2l-3.3,4.2l-3,5.2 l-4.8,1.2l-2.5,3.2l-3.4,1.5l-1.3,3.5l2.8,6.7l-1.4,4.5l-3.6,0.5l-1.6,3.8l0.3,2.7l-2.4,1l-0.3,2.7l-5.4,4.9l-2.5,3.2l-6.4-1.8 l-8.5-0.5l-7.3,1l-8.3,5.3l-10.3,1.5l-11,1.3l-6.7,0.2l-11.3,2.9l-6.3-0.8l-5.5,1.8l-12.4,2.1l-6.5-2.8l-2.5-3.7l-2.2-1l2.1-1.8 l-0.1-4.8l2.5-1.5l3.9-0.5l3-2.7l0.1-4.3l-6.7-0.5l-2.5-1.9l-4.2-1.5l-1.1-0.5l-5.8-0.7l2.1-2.9l4.8-0.5l3.1-2.5l3.8-0.3l2.5-3.4 l1.3-3.2l3.9-0.3l2.1-3.1l-0.4-5.8l1.3-1.1l6.2,0.8l2.9-1.3l3-2.4l2.5-0.9l2.5-1l1.5-1.5l2.5-3l3.2-0.9l2.2-3.2l2.8-1.3l2.5-3.6 l2.2-1.3l2.3-1.6l2.6-2.4l3.1-1l4.9-1.9l3.9-3.6l3.9-3.7l2.1-4l4.6-4.2l1-3.9l1-3.4l2.1-5h0.9l-0.1-2h-1.6l-0.7-3.4l-3.7-1.4 l-1.7,2.4l-0.8-0.6l1.7-2.8l-0.1-1.5l-2.6-0.2l-4-0.9l-0.2,1.8l-1.5-0.6l-3.7,2.2l-2.9,1.3l-4.2,0.9l-3.1,0.4l-1.7,1.5l-2.5-0.1 l-1.7-1.4l-0.2-2.8l0.8-0.5l-1.9-7.2l-3.5-8.1l-5.2-9.1l-1.7-4.3l1.4-4.1L759.8,439.1z"
                className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "florida" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                onMouseEnter={() => handleMouseEnter("florida")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStateClick("florida")}
              />
              <path
                id="new-york"
                d="M822.2,177.3l0.8-1.1l2.4-1.1l1.8-1.8l1.1-0.5l2-2.9l1.8-1.6l1.9-0.5l1.9-0.5l0.5-0.5l1.5-2.6l0.5-1.5v-1.5l-1.5-4.3 l2.9-1.8l4.4-1.5l4-1.3l3.2-0.4l2.5-1.9l2.6-2.8l3.1-6.5l0.5-6.2l-0.8-1.6l-1.3-1l-4-0.8l-4.8-2.1l-3.9-1l-0.5-5.9l-2.6-0.8 l-0.6-2.6l-8.1-2.3l-7.6-1.5l-4.5-1.5l-2.9-1.9h-2.1l-1.1-0.5l-0.5-4.5l1.6-1.5l0.3-2.9l-1.6-1l-1.6,1.1l-1.6-1.1l-6.9,5.4 l-2.1-0.6l-2.7-15.1l-1.8-1.1v-2.3l-1.1-2.3l-2.6-0.6l-4.8-0.8l-0.8-1.5h-2.6l-0.2-2.6l-2.1-1.5L788,73l-2.1-4.4l-1.8-1l-1.6,1 l-4-1.9l-5.3-5.7l-4-1.5l-3.1-0.5l-2.7,1.3l-0.2,1.3l-3.9,0.2l-2.3,2.3l-1.9,1.8l-1.5,0.8l-4.1,3.6l-9,2.3l-1.8-1l0.8-1l0.8-1.5 l2.5-4.8l0.2-1.8l-1.1-1.6l-2.7-0.3l-5.3-3.6l-3.1-0.2l-5-2.6L727,49l-1-1.1l-0.2-3.2L724,40l-0.5-8.2l3.6-3.1l5.2-1.3l-0.6-2.9 l-1.8-2.4v-4.5l-17.4,3.8l-1.5,2.4l-2.3,2.4l-7.9,8.7l-7.3,3.6l-2.3,0.5l-2.1,2.4l-3.1,2.4l-0.8,2.3l-1.5,0.5l-2.6,0.2l-0.5,0.5 l1.1,0.5l1.6,1.5l0.3,1.1l-1.6,1.5v1l1.6,1.6l0.3,3.1l0.5,4.5l-2.3,1l-0.3,0.5v0.5l-4.8,1.9l-6.5,4.5l-5.6,2.6l-5.1,3.3l-1.3-0.5 l-0.3-3.6l-1.3-0.3l-1.6,1.3l-3.9,0.2l-2.3-0.3l-7.6,3.6l-3.1,2.6l-3.9,2.1h-2.9l-0.5-0.8l-1.6-0.3l-0.5-2.6l0.3-2.4l0.3-2.1 l-1.3-2.1v-1.1l-0.6-2.3l-2.9-0.6l0.8,1.3v1.1l-1.3,2.1v2.3l0.5,1.1l-0.8,1.8l-1.6,1l0.6,3.1v1.1l2.1,2.6l2.1,3.6l2.1,2.3 l0.8,0.5l0.5,0.8l-0.5,1h1.1l3.6-0.3l1.5-1.3l1.5,0.3l0.8-0.5l0.5,0.8l-0.8,1.3l1.6,1.5l1.3-0.8h1.1l0.8,0.8l0.3,2.1l-0.3,0.5l2.9,1 l4.4-0.5l3.6-0.5l2.6-0.3l1.8,1.3l1.6,0.3l1.5-1.3l5.5,1.6l0.8-0.8l1.8-2.1l1-0.8l-0.3-1.8l1.3-1l1-1.3l0.5-1.8l1.5-2.1v-1 l2.6-0.5h2.9l2.6,1.3l0.8-1.8l3.4-2.3l3.9-1.5l4.7-0.3l1.3,0.5l9.2,0.5l5.5,3.9l1.8,0.5l1.3,0.3l-0.3,1.5l1.5,2.3l2.3,2.5l0.8,0.3 l2.9-3.1l1-0.5l1.5-1.5l2.3-2.1l1-1.8l0.5-1.6l-0.8-1.3l0.3-1.3v-2.3l-1.8-3.1l0.3-1.6l-0.6-5.5l1-3.6l-0.3-1l1.5-0.8L723,46 l1.6-0.3l0.3-0.8l1-0.3l2.3,0.3l7.9-3.9l3.1-0.8l2.8-1.3l-0.8-0.6l-0.3-1.5l-0.3-1.8l0.8-0.8l2.1-0.5l1.8-1.3l5.2-0.3l2.1-0.6 l0.3-1.5l1.5-0.3l2.1,0.3l2.3-1.3l1.5-0.3l1.3-0.8l1-0.3l1.3-1.6v-1.5l2.1-0.5l1.9-2.5l-0.3-1.8l-2.4-1.3l-0.5-1.6l0.5-1.5l2.3-1 l0.3-1.1l1.9-0.8l0.8,0.5l0.3,2.1l1,0.5l1.5-1l1.3,0.3l0.8,0.5l0.3,0.8h1l2.3-1.3l0.5-1.9l2.8-0.8l1.3-0.3l1-0.8l0.8,0.8h0.8 l0.3-1.1l0.5-1.5l2.5,0.3l0.5-1.1l-0.8-1l0.8-0.5l1.6,0.5l1-1.1l-1.3-1l-0.5-1.6l-0.3-1.3l2.3,0.3l1.9-1.8l1.8-1l-0.3-0.8l0.5-1.9 l4.5-1.6l2.4-1.9l3.6-3.7l2.6-3.2l0.3-3.4l-0.8-0.8l-0.3-2.7l1-3.9l3.1-6l0.8-4.3l-0.3-3.6v-5.7l-5.5,0.5l-6.5,0.8l-4.2,0.8 l-7.9,1.6l-7.6,1l-7.5,1l-2.6,0.3l-6.5,0.9l-13.1,2.4l2.6,16.5l2.1,9.9l-0.5,5.7v8.1l-0.8,9.1l-0.3,3.4l-3.4,3.9l-2.2,7.5 l-1.1,5.5l-1.3,3.1l-0.5,7.4l-4.2,5.5l-0.5,3.9v4.9l-2.9,5.7l-0.5,1.8l-0.5,7.9l-1,3.6l-2.1,2.9l-1,6.2l0.3,2.3l-0.8,7.1L822.2,177.3z"
                className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "new-york" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                onMouseEnter={() => handleMouseEnter("new-york")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStateClick("new-york")}
              />
              <path 
                id="hawaii" 
                d="M295.5,585.2L297.5,583.0L300.5,582.0L302.5,580.0L304.5,580.0L307.5,578.0L307.0,576.0L305.0,576.0L302.0,575.0L300.5,577.0L298.0,578.0L295.5,578.0L292.5,577.0L293.0,580.0L295.5,585.2ZM318.9,562.0L315.0,562.0L313.0,563.0L309.5,562.0L308.0,562.0L308.0,564.0L310.0,565.0L313.0,565.0L317.0,563.0L318.9,562.0ZM268.0,598.0L269.0,594.0L276.0,590.0L276.0,586.0L272.0,584.0L268.0,584.0L266.0,583.0L263.0,586.0L260.0,587.0L259.0,590.0L261.0,593.0L261.0,595.0L264.0,598.0L268.0,598.0ZM235.0,542.0L240.1,538.0L240.0,535.0L235.0,536.0L230.0,540.0L227.0,544.0L230.0,544.0L235.0,542.0ZM370.0,650.0L376.0,647.0L384.0,643.0L387.0,638.0L385.0,634.0L381.0,632.0L376.0,631.0L371.0,631.0L367.0,634.0L363.0,635.0L362.0,639.0L365.0,644.0L370.0,650.0Z"
                className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "hawaii" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                onMouseEnter={() => handleMouseEnter("hawaii")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStateClick("hawaii")}
              />
              <path 
                id="alaska" 
                d="M192.1,375.1L181.3,353.2L184.4,353.8L194.1,338.9L175.6,333.6L168.8,334.4L162.5,335.5L157.3,338.7L161.3,341.8L156.2,341.9L146.3,347.9L156.6,348.6L161.1,347L166.4,351.7L166.3,358.1L173.7,370.4L177.9,371.6L177.8,376.1L183.2,379.6L177.9,381.4L171.2,379.8L169.3,381.6L169.5,386.4L176.6,387L183.1,387.7L183.8,391.5L193.3,397.1L201.1,397.9L206.8,394.8L215.2,389.8L217.4,391.2L221.6,390.3L222.9,387.1L226.6,384.3L231.6,388.1L237.7,389.1L238.5,385.1L235.1,383.2L232.4,380.6L230.6,379.2L231.3,374.7L232.8,372.3L236.8,372.6L237.9,373.5L238.5,374.8L242.5,374.7L245.3,373L242.1,370L237.9,370.7L233.5,369.4L230.7,367L228.1,366.5L227.2,364.9L225.9,364.5L222.2,364.9L220.5,364.5L219.3,363L218.5,361.2L217.9,358.4L216.4,356.5L213.2,354.2L211.7,352.4L210.9,348.8L210.3,345.5L209.7,343.2L206.9,341.9L205.1,340.7L199.8,341.5L197.7,343.5L194.9,344L192.3,342.8L190.4,337.6L189.3,337.3L189.3,340.4L190.7,341.4L192.1,343.5L192,345.7L191,345.9L190.1,344.7L189.2,344.8L189.2,342.7L187.9,340.5L187.2,339.6L186.2,341.1L187,341.9L186.8,342.8L185.1,343.1L185.1,342L183.2,340.9L181.8,340.2L180.5,339.1L179.8,338.4L178.2,338.5L177.5,337.7L176.3,336.4L175.5,334.8L174.4,334.3L174.6,331.9L172.4,330.7L171.5,329.5L170.8,329L169.5,327.8L167.5,327.2L165.5,327.9L164.9,329.1L164.8,330.7L161.9,331.8L161.1,332.8L161.3,333.6L163.3,334.7L159.9,336.8L157.9,337.5L156.8,335.9L153.9,336.3L150.3,335.5L145.2,336.8L143.3,337.9L138.9,338.6L137,339.8L134.7,339.6L132.1,337.3L130.3,336.3L126.2,336.3L125,335.5L121.5,334.8L118.9,335L118.1,334.3L115.9,334.7L113.1,334.7L111.8,334.1L105.7,334.9L103.1,333.9L102.7,332.8L100.5,333.5L99,332.5L95.5,332.8L93.9,334.2L92,334.5L90.6,337.3L87.9,337.6L85.9,336.3L83.7,336.3L82.9,337.2L80.1,338.1L79.7,340L77.1,342L77.2,344.4L76.1,347.4L74.3,347.4L72.9,349.7L67.3,348.7L65.4,349.2L64.1,351.3L61.4,351.1L60.5,349.9L59.3,349.8L58.3,351.5L58.2,353.1L57.1,353.7L56.2,353.1L55.2,351.4L53.9,353.8L53.4,356L51.2,356.5L50,357.6L49.5,359L48.5,359.5L48,358.4L47.2,354.2L46.7,352.7L45.2,353L44.3,354.2L43.4,357.7L41.9,360.6L40.2,363.5L39,363.7"
                className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "alaska" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                onMouseEnter={() => handleMouseEnter("alaska")}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleStateClick("alaska")}
              />
              {/* Se podrían añadir más estados según se requiera */}
            </g>
          </svg>
        </div>
        
        {/* Panel de información que muestra cuando pasas el cursor */}
        {hoveredState && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full lg:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-xl glass-card border border-white/10 shadow-lg"
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center text-white">
                <MapPin size={18} />
              </div>
              <h3 className="text-2xl font-bold ml-3 text-white">
                {stateData[hoveredState as keyof typeof stateData]?.name || "Estado"}
              </h3>
            </div>
            
            <div className="mb-4">
              <h4 className="text-white text-lg mb-2 font-semibold">Ciudades principales</h4>
              <div className="flex flex-wrap gap-2">
                {stateData[hoveredState as keyof typeof stateData]?.cities.map((city, idx) => (
                  <span key={idx} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                    {city}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative h-48 rounded-lg overflow-hidden mb-4">
              <img 
                src={stateData[hoveredState as keyof typeof stateData]?.image} 
                alt={stateData[hoveredState as keyof typeof stateData]?.name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                <h4 className="font-bold text-lg">Visita {stateData[hoveredState as keyof typeof stateData]?.name}</h4>
              </div>
            </div>
            
            <button 
              className="w-full py-3 bg-miami-coral hover:bg-miami-coral/80 text-white rounded-lg flex items-center justify-center transition-colors"
              onClick={() => handleStateClick(hoveredState)}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Explorar {stateData[hoveredState as keyof typeof stateData]?.name}
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default InteractiveMap;
