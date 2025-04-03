import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Map data with state information
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
  "nevada": {
    name: "Nevada",
    cities: ["Las Vegas", "Reno", "Carson City"],
    image: "https://images.unsplash.com/photo-1581351721010-8cf859cb14a4?q=80&w=1470&auto=format&fit=crop"
  }
};

const SimpleUSAMap = () => {
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
    <div className="w-full py-12 bg-[#111827] rounded-lg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explora Estados Unidos Interactivamente
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Pasa el cursor sobre cualquier estado para ver información detallada y haz clic para explorar más.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 glass-card p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10">
          {/* Map Container */}
          <div className="w-full lg:w-2/3 h-[400px] overflow-hidden relative rounded-lg">
            <div className="absolute inset-0 bg-gradient-to-b from-miami-turquoise/20 to-miami-coral/20"></div>
            <svg
              viewBox="0 0 959 593"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g>
                {/* Florida */}
                <path
                  id="florida"
                  d="M759.8,439.1l2.6,7.6l2.2,9.5l4.5,8.2l4.1,3.5l1.9,5.1l-0.5,5.4l-2.9,5.7l-0.5,5.1l-4.2,1l-1.8,2.2l-1.2,7.6l-2.4,8.5 l1.7,6l-0.4,10.5l-4.9,5.4l-3.8,6l-2.8,6.3l-4.3,8l-1.2,6.3l-0.8,6.6l-3.6,5.7l-1.6,5.7l-3.3,4.4l-2,2.9l1.3,8.2l-3.3,4.2l-3,5.2 l-4.8,1.2l-2.5,3.2l-3.4,1.5l-1.3,3.5l2.8,6.7l-1.4,4.5l-3.6,0.5l-1.6,3.8l0.3,2.7l-2.4,1l-0.3,2.7l-5.4,4.9l-2.5,3.2l-6.4-1.8 l-8.5-0.5l-7.3,1l-8.3,5.3l-10.3,1.5l-11,1.3l-6.7,0.2l-11.3,2.9l-6.3-0.8l-5.5,1.8l-12.4,2.1l-6.5-2.8l-2.5-3.7l-2.2-1l2.1-1.8 l-0.1-4.8l2.5-1.5l3.9-0.5l3-2.7l0.1-4.3l-6.7-0.5l-2.5-1.9l-4.2-1.5l-1.1-0.5l-5.8-0.7l2.1-2.9l4.8-0.5l3.1-2.5l3.8-0.3l2.5-3.4 l1.3-3.2l3.9-0.3l2.1-3.1l-0.4-5.8l1.3-1.1l6.2,0.8l2.9-1.3l3-2.4l2.5-0.9l2.5-1l1.5-1.5l2.5-3l3.2-0.9l2.2-3.2l2.8-1.3l2.5-3.6 l2.2-1.3l2.3-1.6l2.6-2.4l3.1-1l4.9-1.9l3.9-3.6l3.9-3.7l2.1-4l4.6-4.2l1-3.9l1-3.4l2.1-5h0.9l-0.1-2h-1.6l-0.7-3.4l-3.7-1.4 l-1.7,2.4l-0.8-0.6l1.7-2.8l-0.1-1.5l-2.6-0.2l-4-0.9l-0.2,1.8l-1.5-0.6l-3.7,2.2l-2.9,1.3l-4.2,0.9l-3.1,0.4l-1.7,1.5l-2.5-0.1 l-1.7-1.4l-0.2-2.8l0.8-0.5l-1.9-7.2l-3.5-8.1l-5.2-9.1l-1.7-4.3l1.4-4.1L759.8,439.1z"
                  className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "florida" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                  onMouseEnter={() => handleMouseEnter("florida")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("florida")}
                />
                
                {/* Texas */}
                <path
                  id="texas"
                  d="M417.9,466.4l11.9,0.7l12,0.5l0.7-11.6l0.7-11.1l0.8-12.7l0.3-8.2l3.4-23.3l1.3-11.2l0.5-11.1l0.8-10.4l0.8-10.7 l0.8-9.3l4.7,0.1l7.1,0.2l10.9,0.5l12.8,0.5l14.1,0.9l13.7,0.5l0.4,5.1l0.1,8.3l0.6,9.3l0.9,3.2l2.4,2.9l1.3,3.2l2.2,0.7l3,0.8 l1.9-8.8l0.5-9.9l1.3-10.2l0.5-10.2l0.5-7.4l1.7-1.9l2-0.7l1.1-0.7l0.8-4.1l3.9,0.5l2.9,1.9l2.9-0.5l1.4,1.4l2.9-0.5h0.3l1-1.7 l5.7,2.6l5.2,1.8l1.2-1.3l5.2,0.7l5.3-0.6l4.1,0.2l3.7,0.7l4,0.7l1.3,2l4.9,0.9l2.2,2.3l4.1,0.7l4,1.5l2.8-4l1.1-5.4l2.9-0.7 l1.3-1.9l0.6-3.1l0.7-0.8l0.1-2.9l5.3-3.2l2.6,0.4l3.8-0.7l3.2-0.2l3.8,0.9l2.6,2.8l2.8-0.7l2.7,1.2l2.3,4.1l1.8,0.9l1.6-0.7 l3,0.4l2.3,3.2l0.1,2l5.1,0.5l2.1-0.8l2.9-2.2l-2.3-3.3l0.2-2.5l2.5-2.7l1.8-0.8l2.8,1l2.5,2.2l0.5,3.3l1.8,3.9l-1.5,1.8l2.7,1.3 l1.4,2l-0.3,4.2l-1.5,3.3l0.5,3l5.2,4l2,1.1l2.5-1.4l0.2-2.2l1-3.8h2.1l2.5-1.1l1.8-1.9l1.4,0.8l0.7,3.8l3.7,1.9l2.5,0.4l2.3-0.6 l1-1.5l3.8-0.5l1.7-0.9l1-2.2l1.4-0.5h3.3l1.6,1.5l3.2-0.2v-1.1l3.2-2.6l1.6,0.8l1.4-1.5h2.7l0.7-1.5l1.5-0.5l0.6,0.8l2-2l5-0.3 l0.8-1.9l-0.8-2l1-2l2.3-0.5l0.5-1.8l1.4,1.4l3.4,0.5l-0.5,1.8l3.8,0.8l1-0.1l0.5-3.6l1-0.5l-0.8-2.2l1.2-4.2l0.5-4.9l-0.7-3.5 l8-54.8l0.3-1.9l5.7,0.7l5.3,0.9l5,0.7l5.4,0.4l5.5,0.3l5.6,0.1l5.1-0.1l0.5,2l0.3,5.2l0.5,8.2l0.4,9.4l0.2,5.8l0.5,5.7l0.5,6.9 l0.7,6.1l0.5,4.1l0.8,6.6l1,6.4l0.9,5l1.1,4.5l0.7,6.1l0.3,1.9l0.7,5l1.3,4.5l1.8,4.8l0.9,4.8l0.4,5.6l-3.6,0.1l-9.6-0.5l-12-0.5 l-4.9-0.5l-6.5-0.1l-12-1.5l-13.5-0.3l-10-0.5l-13.5-1.1l-10.2-0.5l-1,31.9l-0.5,19.5l-0.3,15.2l-0.5,12.6l-0.8,18.8l-0.5,6 l-1.9,0.8l-2.3-1.8l-1.6,0.3l-0.5,0.7l-2.7,0.2l-0.6,1.9l0.7,4.6l-2.1,2.5l-1.8-0.2l-0.3,2.4l-2.9,2.1l-0.3,3.1l-0.6,0.6l0.7,2.4 l-0.5,3l-1.1,1.1l-0.8,2.3l-2.3,2.3l-1,0.1l-0.6,8.9l-0.5,4.7l-3.2,6.1l-2.4,3.7l-2.6,2.4l-3.9,2.3l-5.4,0.9l-11.9,0.7l-5.3,0.7 l-5.7,0.9l-6.6,0.8h-5.9l-0.3,5.8l-12.9,0.9l-7.8,0.7l-10.2,0.5l-11.9,0.3l-7.5-0.1l-14.2-2.1l-7.3-1.3l-10.7-2.6L417.9,466.4z"
                  className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "texas" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                  onMouseEnter={() => handleMouseEnter("texas")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("texas")}
                />
                
                {/* California */}
                <path
                  id="california"
                  d="M139.4,386.8l3.3-0.9l3-2.2l0.3-7l0.5-2.1l0.3-2.5l-2.1-1l-1.6-2.2l-2.1-3.7l-2.2-4.8l-2.8-4.8l-1.3-3.9l-0.5-4.8 l-0.9-3.5l-2.9-5.5l-1.1-5.5l-0.3-4.9l1.3-3.8l7-10.2l7.5-8.4l5.3-7.5l1.1-1.3l4.7-8.5l7.3-8.1l5.1-3.3l0.8,0.1l2.1-1.3l-0.9-1 l2.9-3.7l3.5-1.9l0.9-1.6l0.5-2.5l-0.8-2.1l-1.5-0.8l-0.9-2.5l0.5-2.5l1.7-1l3.3-0.5l2.4-1.1l0.3-1.6l-2-3.2l-2.7-2.1l0.5-6.2 l-3.5-2.5l-1.7-2.8l-5.7-15.6l-3.2-7.8l-1-7.6l1.8-6.8l0.5-2.9l-0.6-3.3l0.7-3.2l1.7-4.9l7.5-10.4l1-5.3l1.6-8.5l0.5-3.1l3.5-5.2 l1.1-5.2v-9.5l0.7-1.8l-1-2.5l-5.7-2.1l-3.2-2.6l-3.2-3.5l-4.1-3.5l-3.2-5.7l-4.8-10.3l-2.5-7.9l-2.2-3.9l-5.1-7.1l-3.1-6.5 l-2.2-2.5l-2.5-1.5l-0.5-2.2l1.1-3.6l-0.2-3.5l-1.5-2.7l-5.1-4.9l-10.3-10.4l-7.6-6.2l-2.5-2.3l-6.5-8.2l-8.5-3.5l-1.3-2.3L85,58 l-1.5-4.2l-13.8,4.1l-21.9,8.5L36,72.7L25.4,78L16,82.8l-4.6,0.5l-12.1,1.3l-10.3,2.2L0,147.2l0.5,12.4l1,7.2l2.7,12.3L5,184v3 l-1.3,1l-0.2,2.2l-1,3.5l-3.9,5.6l-1.9,0.2l-1.9,7.3l-0.5,4.2l0.2,3.5l-1.1,2.8l1.6,3.5l2.9,3l3.5,1.8l2.2,4.3l0.4,3.2l-0.4,6.5 l0.3,8.2l7,31.6l24.8,35.6L139.4,386.8z"
                  className={`hover:fill-miami-coral hover:stroke-white stroke-2 cursor-pointer ${hoveredState === "california" ? "fill-miami-coral" : "fill-miami-turquoise/70"}`}
                  onMouseEnter={() => handleMouseEnter("california")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("california")}
                />
                
                {/* New York */}
                <path
                  id="new-york"
                  d="M822.2,177.3l0.8-1.1l2.4-1.1l1.8-1.8l1.1-0.5l2-2.9l1.8-1.6l1.9-0.5l1.9-0.5l0.5-0.5l1.5-2.6l0.5-1.5v-1.5l-1.5-4.3 l2.9-1.8l4.4-1.5l4-1.3l3.2-0.4l2.5-1.9l2.6-2.8l3.1-6.5l0.5-6.2l-0.8-1.6l-1.3-1l-4-0.8l-4.8-2.1l-3.9-1l-0.5-5.9l-2.6-0.8 l-0.6-2.6l-8.1-2.3l-7.6-1.5l-4.5-1.5l-2.9-1.9h-2.1l-1.1-0.5l-0.5-4.5l1.6-1.5l0.3-2.9l-1.6-1l-1.6,1.1l-1.6-1.1l-6.9,5.4 l-2.1-0.6l-2.7-15.1l-1.8-1.1v-2.3l-1.1-2.3l-2.6-0.6l-4.8-0.8l-0.8-1.5h-2.6l-0.2-2.6l-2.1-1.5L788,73l-2.1-4.4l-1.8-1l-1.6,1 l-4-1.9l-5.3-5.7l-4-1.5l-3.1-0.5l-2.7,1.3l-0.2,1.3l-3.9,0.2l-2.3,2.3l-1.9,1.8l-1.5,0.8l-4.1,3.6l-9,2.3l-1.8-1l0.8-1l0.8-1.5 l2.5-4.8l0.2-1.8l-1.1-1.6l-2.7-0.3l-5.3-3.6l-3.1-0.2l-5-2.6L727,49l-1-1.1l-0.2-3.2L724,40l-0.5-8.2l3.6-3.1l5.2-1.3l-0.6-2.9 l-1.8-2.4v-4.5l-17.4,3.8l-1.5,2.4l-2.3,2.4l-7.9,8.7l-7.3,3.6l-2.3,0.5l-2.1,2.4l-3.1,2.4l-0.8,2.3l-1.5,0.5l-2.6,0.2l-0.5,0.5 l1.1,0.5l1.6,1.5l0.3,1.1l-1.6,1.5v1l1.6,1.6l0.3,3.1l0.5,4.5l-2.3,1l-0.3,0.5v0.5l-4.8,1.9l-6.5,4.5l-5.6,2.6l-5.1,3.3l-1.3-0.5 l-0.3-3.6l-1.3-0.3l-1.6,1.3l-3.9,0.2l-2.3-0.3l-7.6,3.6l-3.1,2.6l-3.9,2.1h-2.9l-0.5-0.8l-1.6-0.3l-0.5-2.6l0.3-2.4l0.3-2.1 l-1.3-2.1v-1.1l-0.6-2.3l-2.9-0.6l0.8,1.3v1.1l-1.3,2.1v2.3l0.5,1.1l-0.8,1.8l-1.6,1l0.6,3.1v1.1l2.1,2.6l2.1,3.6l2.1,2.3 l0.8,0.5l0.5,0.8l-0.5,1h1.1l3.6-0.3l1.5-1.3l1.5,0.3l0.8-0.5l0.5,0.8l-0.8,1.3l1.6,1.5l1.3-0.8h1.1l0.8,0.8l0.3,2.1l-0.3,0.5l2.9,1 l4.4-0.5l3.6-0.5l2.6-0.3l1.8,1.3l1.6,0.3l1.5-1.3l5.5,1.6l0.8-0.8l1.8-2.1l1-0.8l-0.3-1.8l1.3-1l1-1.3l0.5-1.8l1.5-2.1v-1 l2.6-0.5h2.9l2.6,1.3l0.8-1.8l3.4-2.3l3.9-1.5l4.7-0.3l1.3,0.5l9.2,0.5l5.5,3.9l1.8,0.5l1.3,0.3l-0.3,1.5l1.5,2.3l2.3,2.5l0.8,0.3 l2.9-3.1l1-0.5l1.5-1.5l2.3-2.1l1-1.8l0.5-1.6l-0.8-1.3l0.3-1.3v-2.3l-1.8-3.1l0.3-1.6l-0.6-5.5l1-3.6l-0.3-1l1.5-0.8L723,46 l1.6-0.3l0.3-0.8l1-0.3l2.3,0.3l7.9-3.9l3.1-0.8l2.8-1.3l-0.8-0.6l-0.3-1.5l-0.3-1.8l0.8-0.8l2.1-0.5l1.8-1.3l5.2-0.3l2.1-0.6 l0.3-1.5l1.5-0.3l2.1,0.3l2.3-1.3l1.5-0.3l1.3-0.8l1-0.3l1.3-1.6v-1.5l2.1-0.5l1.9-2.5l-0.3-1.8l-2.4-1.3l-0.5-1.6l0.5-1.5l2.3-1 l0.3-1.1l1.9-0.8l0.8,0.5l0.3,2.1l1,0.5l1.5-1l1.3,0.3l0.8,0.5l0.3,0.8h1l2.3-1.3l0.5-1.9l2.8-0.8l1.3-0.3l1-0.8l0.8,0.8h0.8 l0.3-1.1l0.5-1.5l2.5,0.3l0.5-1.1l-0.8-1l0.8-0.5l1.6,0.5l1-1.1l-1.3-1l-0.5-1.6l-0.3-1.3l2.3,0.3l1.9-1.8l1.8-1l-0.3-0.8l0.5-1.9 l4.5-1.6l2.4-1.9l3.6-3.7l2.6-3.2l0.3-3.4l-0.8-0.8l-0.3-2.7l1-3.9l3.1-6l0.8-4.3l-0.3-3.6v-5.7l-5.5,0.5l-6.5,0.8l-4.2,0.8 l-7.9,1.6l-7.6,1l-7.5,1l-2.6,0.3l-6.5,0.9l-13.1,2.4l2.6,16.5l2.1,9.9l-0.5,5.7v8.1l-0.8,9.1l-0.3,3.4l-3.4,3.9l-2.2,7.5 l-1.1,5.5
