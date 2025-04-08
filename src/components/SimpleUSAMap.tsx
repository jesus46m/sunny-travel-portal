
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { statesData } from "@/types/states";

// Definir los estilos de colores para los estados
const defaultColor = "fill-miami-turquoise/70";
const hoverColor = "fill-miami-coral";
const strokeColor = "stroke-white stroke-2";

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
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "florida" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("florida")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("florida")}
                />
                
                {/* Texas */}
                <path
                  id="texas"
                  d="M417.9,466.4l11.9,0.7l12,0.5l0.7-11.6l0.7-11.1l0.8-12.7l0.3-8.2l3.4-23.3l1.3-11.2l0.5-11.1l0.8-10.4l0.8-10.7 l0.8-9.3l4.7,0.1l7.1,0.2l10.9,0.5l12.8,0.5l14.1,0.9l13.7,0.5l0.4,5.1l0.1,8.3l0.6,9.3l0.9,3.2l2.4,2.9l1.3,3.2l2.2,0.7l3,0.8 l1.9-8.8l0.5-9.9l1.3-10.2l0.5-10.2l0.5-7.4l1.7-1.9l2-0.7l1.1-0.7l0.8-4.1l3.9,0.5l2.9,1.9l2.9-0.5l1.4,1.4l2.9-0.5h0.3l1-1.7 l5.7,2.6l5.2,1.8l1.2-1.3l5.2,0.7l5.3-0.6l4.1,0.2l3.7,0.7l4,0.7l1.3,2l4.9,0.9l2.2,2.3l4.1,0.7l4,1.5l2.8-4l1.1-5.4l2.9-0.7 l1.3-1.9l0.6-3.1l0.7-0.8l0.1-2.9l5.3-3.2l2.6,0.4l3.8-0.7l3.2-0.2l3.8,0.9l2.6,2.8l2.8-0.7l2.7,1.2l2.3,4.1l1.8,0.9l1.6-0.7 l3,0.4l2.3,3.2l0.1,2l5.1,0.5l2.1-0.8l2.9-2.2l-2.3-3.3l0.2-2.5l2.5-2.7l1.8-0.8l2.8,1l2.5,2.2l0.5,3.3l1.8,3.9l-1.5,1.8l2.7,1.3 l1.4,2l-0.3,4.2l-1.5,3.3l0.5,3l5.2,4l2,1.1l2.5-1.4l0.2-2.2l1-3.8h2.1l2.5-1.1l1.8-1.9l1.4,0.8l0.7,3.8l3.7,1.9l2.5,0.4l2.3-0.6 l1-1.5l3.8-0.5l1.7-0.9l1-2.2l1.4-0.5h3.3l1.6,1.5l3.2-0.2v-1.1l3.2-2.6l1.6,0.8l1.4-1.5h2.7l0.7-1.5l1.5-0.5l0.6,0.8l2-2l5-0.3 l0.8-1.9l-0.8-2l1-2l2.3-0.5l0.5-1.8l1.4,1.4l3.4,0.5l-0.5,1.8l3.8,0.8l1-0.1l0.5-3.6l1-0.5l-0.8-2.2l1.2-4.2l0.5-4.9l-0.7-3.5 l8-54.8l0.3-1.9l5.7,0.7l5.3,0.9l5,0.7l5.4,0.4l5.5,0.3l5.6,0.1l5.1-0.1l0.5,2l0.3,5.2l0.5,8.2l0.4,9.4l0.2,5.8l0.5,5.7l0.5,6.9 l0.7,6.1l0.5,4.1l0.8,6.6l1,6.4l0.9,5l1.1,4.5l0.7,6.1l0.3,1.9l0.7,5l1.3,4.5l1.8,4.8l0.9,4.8l0.4,5.6l-3.6,0.1l-9.6-0.5l-12-0.5 l-4.9-0.5l-6.5-0.1l-12-1.5l-13.5-0.3l-10-0.5l-13.5-1.1l-10.2-0.5l-1,31.9l-0.5,19.5l-0.3,15.2l-0.5,12.6l-0.8,18.8l-0.5,6 l-1.9,0.8l-2.3-1.8l-1.6,0.3l-0.5,0.7l-2.7,0.2l-0.6,1.9l0.7,4.6l-2.1,2.5l-1.8-0.2l-0.3,2.4l-2.9,2.1l-0.3,3.1l-0.6,0.6l0.7,2.4 l-0.5,3l-1.1,1.1l-0.8,2.3l-2.3,2.3l-1,0.1l-0.6,8.9l-0.5,4.7l-3.2,6.1l-2.4,3.7l-2.6,2.4l-3.9,2.3l-5.4,0.9l-11.9,0.7l-5.3,0.7 l-5.7,0.9l-6.6,0.8h-5.9l-0.3,5.8l-12.9,0.9l-7.8,0.7l-10.2,0.5l-11.9,0.3l-7.5-0.1l-14.2-2.1l-7.3-1.3l-10.7-2.6L417.9,466.4z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "texas" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("texas")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("texas")}
                />
                
                {/* California */}
                <path
                  id="california"
                  d="M139.4,386.8l3.3-0.9l3-2.2l0.3-7l0.5-2.1l0.3-2.5l-2.1-1l-1.6-2.2l-2.1-3.7l-2.2-4.8l-2.8-4.8l-1.3-3.9l-0.5-4.8 l-0.9-3.5l-2.9-5.5l-1.1-5.5l-0.3-4.9l1.3-3.8l7-10.2l7.5-8.4l5.3-7.5l1.1-1.3l4.7-8.5l7.3-8.1l5.1-3.3l0.8,0.1l2.1-1.3l-0.9-1 l2.9-3.7l3.5-1.9l0.9-1.6l0.5-2.5l-0.8-2.1l-1.5-0.8l-0.9-2.5l0.5-2.5l1.7-1l3.3-0.5l2.4-1.1l0.3-1.6l-2-3.2l-2.7-2.1l0.5-6.2 l-3.5-2.5l-1.7-2.8l-5.7-15.6l-3.2-7.8l-1-7.6l1.8-6.8l0.5-2.9l-0.6-3.3l0.7-3.2l1.7-4.9l7.5-10.4l1-5.3l1.6-8.5l0.5-3.1l3.5-5.2 l1.1-5.2v-9.5l0.7-1.8l-1-2.5l-5.7-2.1l-3.2-2.6l-3.2-3.5l-4.1-3.5l-3.2-5.7l-4.8-10.3l-2.5-7.9l-2.2-3.9l-5.1-7.1l-3.1-6.5 l-2.2-2.5l-2.5-1.5l-0.5-2.2l1.1-3.6l-0.2-3.5l-1.5-2.7l-5.1-4.9l-10.3-10.4l-7.6-6.2l-2.5-2.3l-6.5-8.2l-8.5-3.5l-1.3-2.3L85,58 l-1.5-4.2l-13.8,4.1l-21.9,8.5L36,72.7L25.4,78L16,82.8l-4.6,0.5l-12.1,1.3l-10.3,2.2L0,147.2l0.5,12.4l1,7.2l2.7,12.3L5,184v3 l-1.3,1l-0.2,2.2l-1,3.5l-3.9,5.6l-1.9,0.2l-1.9,7.3l-0.5,4.2l0.2,3.5l-1.1,2.8l1.6,3.5l2.9,3l3.5,1.8l2.2,4.3l0.4,3.2l-0.4,6.5 l0.3,8.2l7,31.6l24.8,35.6L139.4,386.8z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "california" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("california")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("california")}
                />
                
                {/* New York */}
                <path
                  id="new-york"
                  d="M822.2,177.3l0.8-1.1l2.4-1.1l1.8-1.8l1.1-0.5l2-2.9l1.8-1.6l1.9-0.5l1.9-0.5l0.5-0.5l1.5-2.6l0.5-1.5v-1.5l-1.5-4.3 l2.9-1.8l4.4-1.5l4-1.3l3.2-0.4l2.5-1.9l2.6-2.8l3.1-6.5l0.5-6.2l-0.8-1.6l-1.3-1l-4-0.8l-4.8-2.1l-3.9-1l-0.5-5.9l-2.6-0.8 l-0.6-2.6l-8.1-2.3l-7.6-1.5l-4.5-1.5l-2.9-1.9h-2.1l-1.1-0.5l-0.5-4.5l1.6-1.5l0.3-2.9l-1.6-1l-1.6,1.1l-1.6-1.1l-6.9,5.4 l-2.1-0.6l-2.7-15.1l-1.8-1.1v-2.3l-1.1-2.3l-2.6-0.6l-4.8-0.8l-0.8-1.5h-2.6l-0.2-2.6l-2.1-1.5L788,73l-2.1-4.4l-1.8-1l-1.6,1 l-4-1.9l-5.3-5.7l-4-1.5l-3.1-0.5l-2.7,1.3l-0.2,1.3l-3.9,0.2l-2.3,2.3l-1.9,1.8l-1.5,0.8l-4.1,3.6l-9,2.3l-1.8-1l0.8-1l0.8-1.5 l2.5-4.8l0.2-1.8l-1.1-1.6l-2.7-0.3l-5.3-3.6l-3.1-0.2l-5-2.6L727,49l-1-1.1l-0.2-3.2L724,40l-0.5-8.2l3.6-3.1l5.2-1.3l-0.6-2.9 l-1.8-2.4v-4.5l-17.4,3.8l-1.5,2.4l-2.3,2.4l-7.9,8.7l-7.3,3.6l-2.3,0.5l-2.1,2.4l-3.1,2.4l-0.8,2.3l-1.5,0.5l-2.6,0.2l-0.5,0.5 l1.1,0.5l1.6,1.5l0.3,1.1l-1.6,1.5v1l1.6,1.6l0.3,3.1l0.5,4.5l-2.3,1l-0.3,0.5v0.5l-4.8,1.9l-6.5,4.5l-5.6,2.6l-5.1,3.3l-1.3-0.5 l-0.3-3.6l-1.3-0.3l-1.6,1.3l-3.9,0.2l-2.3-0.3l-7.6,3.6l-3.1,2.6l-3.9,2.1h-2.9l-0.5-0.8l-1.6-0.3l-0.5-2.6l0.3-2.4l0.3-2.1 l-1.3-2.1v-1.1l-0.6-2.3l-2.9-0.6l0.8,1.3v1.1l-1.3,2.1v2.3l0.5,1.1l-0.8,1.8l-1.6,1l0.6,3.1v1.1l2.1,2.6l2.1,3.6l2.1,2.3 l0.8,0.5l0.5,0.8l-0.5,1h1.1l3.6-0.3l1.5-1.3l1.5,0.3l0.8-0.5l0.5,0.8l-0.8,1.3l1.6,1.5l1.3-0.8h1.1l0.8,0.8l0.3,2.1l-0.3,0.5l2.9,1 l4.4-0.5l3.6-0.5l2.6-0.3l1.8,1.3l1.6,0.3l1.5-1.3l5.5,1.6l0.8-0.8l1.8-2.1l1-0.8l-0.3-1.8l1.3-1l1-1.3l0.5-1.8l1.5-2.1v-1 l2.6-0.5h2.9l2.6,1.3l0.8-1.8l3.4-2.3l3.9-1.5l4.7-0.3l1.3,0.5l9.2,0.5l5.5,3.9l1.8,0.5l1.3,0.3l-0.3,1.5l1.5,2.3l2.3,2.5l0.8,0.3 l2.9-3.1l1-0.5l1.5-1.5l2.3-2.1l1-1.8l0.5-1.6l-0.8-1.3l0.3-1.3v-2.3l-1.8-3.1l0.3-1.6l-0.6-5.5l1-3.6l-0.3-1l1.5-0.8L723,46 l1.6-0.3l0.3-0.8l1-0.3l2.3,0.3l7.9-3.9l3.1-0.8l2.8-1.3l-0.8-0.6l-0.3-1.5l-0.3-1.8l0.8-0.8l2.1-0.5l1.8-1.3l5.2-0.3l2.1-0.6 l0.3-1.5l1.5-0.3l2.1,0.3l2.3-1.3l1.5-0.3l1.3-0.8l1-0.3l1.3-1.6v-1.5l2.1-0.5l1.9-2.5l-0.3-1.8l-2.4-1.3l-0.5-1.6l0.5-1.5l2.3-1 l0.3-1.1l1.9-0.8l0.8,0.5l0.3,2.1l1,0.5l1.5-1l1.3,0.3l0.8,0.5l0.3,0.8h1l2.3-1.3l0.5-1.9l2.8-0.8l1.3-0.3l1-0.8l0.8,0.8h0.8 l0.3-1.1l0.5-1.5l2.5,0.3l0.5-1.1l-0.8-1l0.8-0.5l1.6,0.5l1-1.1l-1.3-1l-0.5-1.6l-0.3-1.3l2.3,0.3l1.9-1.8l1.8-1l-0.3-0.8l0.5-1.9 l4.5-1.6l2.4-1.9l3.6-3.7l2.6-3.2l0.3-3.4l-0.8-0.8l-0.3-2.7l1-3.9l3.1-6l0.8-4.3l-0.3-3.6v-5.7l-5.5,0.5l-6.5,0.8l-4.2,0.8 l-7.9,1.6l-7.6,1l-7.5,1l-2.6,0.3l-6.5,0.9l-13.1,2.4l2.6,16.5l2.1,9.9l-0.5,5.7v8.1l-0.8,9.1l-0.3,3.4l-3.4,3.9l-2.2,7.5 l-1.1,5.5l-1.3,3.1l-0.5,7.4l-4.2,5.5l-0.5,3.9v4.9l-2.9,5.7l-0.5,1.8l-0.5,7.9l-1,3.6l-2.1,2.9l-1,6.2l0.3,2.3l-0.8,7.1 L822.2,177.3z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "new-york" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("new-york")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("new-york")}
                />
                
                {/* Arizona */}
                <path
                  id="arizona"
                  d="M225.3,345.6l-7.1-78.2l-1.8-1.5v-1l-2-1.8l-1-3.3l-2.6-2.3l-0.8-2.8l0.2-2l1.6-1.8l-0.5-1.5l-0.8-5.1l-1-2.8l-3.3-1.5 l-1-2.3l-1.5-1.5v-1.6l-0.3-4.9l-0.5-4.9l-2.9-7.7l-1.3-2.3l-0.6-3.3l-2.9-5.5l-0.5-5.4l-1.5-0.5l-2.1-4.1l-0.3-1.8l-1.6-1l-2.6-7.4 l-1.8-2.5l-2.3-0.5l-1-1.1l-8.7-1.3l-3.3-1.6l-2.5-3.3l-3.5-0.5l-1.6-2.5l-1.1-1h-4.1l-0.5-1.8l-2.5-1.5l-2.5-2.8l-1.5-0.3l-4-1 l-3.5-5.3l-2.9-2.6l-1.3-2.3l-1-2.8l-0.9-2l-2.1-0.5l-0.6-1l1-5.5l-4.3-12.5l-0.5-3l2.5-2.5v-4.4l-1.8-4.4l-4.5-8.4l-0.3-3.5 l2.5-6.5l-0.3-5.5l1.6-2.5l-7.9-32.9l-5.6-8.9l-4.8-5.4l-4.9-10.9l-1.1-5.5l-0.5-7l-1.1-3.1l-6.8-1.1l-1.5,4.4l-13.8,4.1l-21.9,8.5 L36,72.7L25.4,78L16,82.8l-4.6,0.5l-0.5,3l19.3,40.8l25.8,52.6l11.9,24.6l7.2,14.3l7.1,14.6l5.1,10.8l5.3,10.3l5.5,11.5l5.4,11.4 l5.6,11.3l0.5,0.1l12.2,31.9l-2.9,8.9l-10.1,31.8l-0.6,1.8l13.3,4.8l13.5,4.8l13.5,4.5h1.5l0,0l33.3,11.1l35.9,11.5l1-1.8 l14.9,5.2l6.1,2.3l6.3,2.3h1.5l18.9,6.9l5.9,1.9l1.8-4.8l1.4-1l-0.6-1.8l-1.3-2.6l-0.3-1.5l0.8-1.9l1.6-0.6l0.5-2.9l-1.8-3.1 l-1.4-1l-0.5-0.5l-0.5-3.4l0.8-0.5l1.8-2.8l1.6-0.5l1.8,0.5l1.6,4.4l0.5,1.9l0.8,1l0.8,2.9l1.3,2.6l1.6,0.5l0.8,1.4l0.3,2.3l-1,3.6 l-1.8,2.6v1l2.3,1.8l1.3,1.5l2.1,1l3.4,1.3l1.6-0.5l0.8-2.1l-0.8-2.9l1-2.6v-1.8l-0.8-2.3l-3.1-4.8l-3.1-0.5l-1.3-1.3l-1.3-3.1 l0.3-4.8l-1.8-2.6l-2.1-0.5l-2.1-2.6l-1-3.6l0.3-3.9h1l1.5,1.3l0.8-0.5l0.3-2.3l1.3-2.9l2.3-0.5l2.3,1l2.9,9.4l0.3,2.3v2.3l1.6,1 l3.6-1.5l2.6-0.6l3.7-0.5l3.9,1.8l2.6-0.5l0.5-0.5l-1.3-4.2v-2.1l0.5-0.8h1.8l0.8-1.3l-2.1-1.8l-0.5-2.6l-1.6-1h-0.8l-2.1-2.3 l-4.2-0.5l-3.1-3.1l-1.9-1l-0.3-1.3l-2.9-0.5l-2-1.6l-5.7-1.8l-5.3-2.6l-3.2-0.8l-0.3-1.1l3.1-1.3l4.2-0.6l6.3-1.5l7.3-3.9l2.3-1.8 l-0.5-1.8L225.3,345.6z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "arizona" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("arizona")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("arizona")}
                />
                
                {/* Colorado */}
                <path
                  id="colorado"
                  d="M380.3,240.8l-19-1.1L345,238l-84.5-3h-2l-15.8-2.2l-2.5,22.9l-0.4,9.4l-2,22.1l-3,43.8l1.9,3.2l0.5,1.1l2.5,1.6 l0.8,1.9v2.1l1.3,1.6l2.4,1.4l1.6,2.4l2.3-0.1l0.9-2l1-0.5l2.5-0.1h1L253,347l13.3,1l55.3,2.7l12.9,0.8l18.2,1.2l20.9,1.2 l-2.6-49.9l-1.4-25.6L380.3,240.8z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "colorado" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("colorado")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("colorado")}
                />
                
                {/* Alabama */}
                <path
                  id="alabama"
                  d="M631.9,462.2l-0.8-0.3l-1.6-2.1l-0.5-2.9l-2.9,0.3l-6.7,0.8h-6.7l-0.2-3.2l-1.8-0.5h-0.5l-5.2,0.2l-6.5,0.5l-5.4,0.7 l-5.7,0.4l-2.3,0.9l2.2-3.3l1.9-2.5l2-2.5l1.4-5.1l1.3-1.5l0.5-1.8l-0.3-1.8l-1.8-2.1l0.8-2.6l2.4-2.5l0.5-0.3l-0.1-1.5l-0.6-1 l1.1-0.3l6-1.8h0.2l0.5-0.5l1.3-0.3l0.3-3.1l-2.3-1l-6-0.8l-1.6-1.8l0.3-1.7l-1.8-1.5l-0.5-1.5l0.5-3.3l2.9-9.3l3.1-8.3l-0.3-3.7 l-1.4-3.3l-0.5-3.2l30-3.6l23.7-3.5l1.3,0.8l0.8,1l0.8,0.3l1.8-1l1.3-1.8l-0.3-1.3l-1.5-1.5l0.5-0.5h4.5l0.8,1l1.3,0.8l3.9-0.3 l0.5-0.5l-0.8-1l0.3-1l1-0.8h7.3l9.6-0.8l0.3,0.5l3.9,0.3l0.3,2.4l0.8,1l1.6,0.5l2.1,0.3l-0.5,26l1.3,40.1l-0.5,3.8l-0.8,1.8 l-1.3,1.6l-0.3,1.9l6.3,1l1.5-1l1.5-1.5l0.5,0.3l1.6,0.3l4.3,3.3l3.7,2.2l3.1,2.2l4.2,1.8l3.3,3.6l0.8,3.3l-0.5,2.5l-0.3,5.5 l-0.5,1.5l1.3,2.2l0.3,2.2l-0.8,1.8l-1.5,0.8l-1,0.5l-10.8,1.5l-12.1,1l-6.8,0.8l-5.2,1l-2.6,0.5l-1.8,0.5l-1.8,1l-0.8,2.1l-0.8,1.3 l-2.1,1.8l-8,0.5l-15,1.5l-6.2,1.5L631.9,462.2z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "alabama" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("alabama")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("alabama")}
                />
                
                {/* Alaska */}
                <path
                  id="alaska"
                  d="M155.2,453.7l-4.3,0.5l-0.3,0.3l0.3,1l2.9,0.5l1.5,1.1l3.9,0.5l3.8-0.5l-2.3-1.6l-2.9-1L155.2,453.7z M106.2,498 l-1-0.5h-1v0.1l0.5,1.8l-0.3,0.2l0.3,0.6l3.3,0.2l1.6-0.8l-0.8-1.1l-1.8-0.5H106.2z M265.8,453v0.5l3.9,0.5l0.5-0.7l-0.5-1 l-1.5-0.5L265.8,453z M71.1,493.9l1.5-2.1l0.5-0.5l-3.5-0.5l-12.1-0.5l-0.4,0.7l0.5,1l10.4,1.5L71.1,493.9z M65.6,510.1 l2-0.2l-0.1-1.3l-1.3-0.7L65.6,510.1z M121.5,501.9l1.6,0.7l4.9-0.1l4-0.5l-0.8-1l-3.9-0.3L121.5,501.9z M239,478.3l-1.5-0.8 l-2,0.8l0.5,1.5l2,0.8L239,478.3z M256.6,478.3l-5.9-0.3l-2.5,0.5l-0.5,0.5l4.3,1.1l4.5-0.5L256.6,478.3z M295.2,472.1l-5.5-0.5 l-6.1-0.5l-2.5,0.3l-1.3,1.3l1.8,0.8l7.3,0.5l5.5-0.5l1-0.5L295.2,472.1z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "alaska" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("alaska")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("alaska")}
                />
                
                {/* Hawaii */}
                <path
                  id="hawaii"
                  d="M310.6,563.1l-1-1.6l-3.4,1.6l0.2,1.5l2.3,2.3l1.7-0.4l0.5-1.3L310.6,563.1z M298.9,558l-1.3-1.1l-1.9,0.9l0,2.5 l1.9,2.2l1.1,0.4l0.6-1.1l-0.5-2.1L298.9,558z M303.9,569.1l-0.4-3.4l-4.6,0.5l-0.2,2.1l3.6,3.7l4.9,1.5l0.8-0.4l-0.4-1.4 L303.9,569.1z M290.6,554.7l-1.3,0.1l-0.1,1.7l0.7,1.9l2-0.1l0.6-0.5L290.6,554.7z M296,568.8l-1.7-1.4l-0.6,0.4l0.8,1.3l1.5,1.2 l0.9-0.4L296,568.8z M329.2,528.5l1-1.2l-0.5-1.5h-1.5l-2.3,1.5l-0.6,2.2l1.2,2.5l2.5-0.3l1.6-1.2L329.2,528.5z M319.7,518.5 l-2.1-0.9l-0.9,0.3l-0.2,2.2l3.6,0.9l0.8-0.7L319.7,518.5z M313.1,518.6l-0.5-2.5l-1.3-1.4l-2,1.8v1.7l0.9,0.8l1.3,0.4L313.1,518.6 z M330.8,522.5l-0.5-2.3l-2.2-0.7l-2,1.1l-0.2,1.8l2.5,1.5L330.8,522.5z M315.4,554.7l2.2-2.1l-0.2-2.3l-2.8-0.5l-3,3.3l0.2,3.1 l3,0.4l2.3-1.2L315.4,554.7z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "hawaii" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("hawaii")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("hawaii")}
                />
                
                {/* Georgia */}
                <path
                  id="georgia"
                  d="M697.5,353.8l-4.9,0.5l-6.5,0.5l-14.9,1.2v2.5h-4.9l-0.9,0.6l-1,2.8l-1.9,0.9l-0.5,0.5l-0.1,1.9l-2,0.5l1.5,4.5 l1.8,1.5l0.5,2.2l-1.2,2.5l-0.8,2.2l-1.2,0.9l0.4,0.8l1.5,0.8l0.1,2.1l-1.9,4.1l-2.3,9.9l-2.2,5.9l-1.3,4.5l-0.5,3.1l2.8,8.9 l3.3,6.4l0.5,3.4l1.9,1.9l1.5,0.8l0.3,2.7l2.5,3.7l5.2,4.5l0.5,1.1l0.4,3.3l3.3,5.9l0.6,5.9l0.9,0.5l1-0.8l0.5,0.9l1.4,0.1l2.5-2.1 l1-2.6l-0.3-1.9l0.8-0.8l0.3-0.8l-1.1-5.8L680,434l-1.5-4.8v-9.5l-2.7-8.7l-0.6-5.7l-0.8-2.5l0.8-4.9l2.5-6.5l-0.4-2.5l3.1-6.4 l0.5-2.7L679,373l1.4-2.5l-2.1-2.1l-0.5-2.3l0.7-2l2.4-0.6l-0.2-3.1l-0.8-3.5l1.7-4.5l-0.5-0.8h-3.8l-6.7,0.8L697.5,353.8z M676.5,435.7l2.7-5.7l2.9-3.7l1-0.7l-0.3-1.5l-4.2,0.7L674,428l-1.3,2l0.2,1.5L676.5,435.7z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "georgia" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("georgia")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("georgia")}
                />
                
                {/* Nevada */}
                <path
                  id="nevada"
                  d="M164.1,189.3l-8.9,54.9l-3.6,22.2l-2.4,19l20.7,3.3l21,3.4l11.9,1.9l9.7,1.4l12,1.7l3.9-26.1l3.1-20 l-1.4-2.2l-70.4-107.2l-2.3,0.1L164.1,189.3z"
                  className={`hover:${hoverColor} ${strokeColor} cursor-pointer ${hoveredState === "nevada" ? hoverColor : defaultColor}`}
                  onMouseEnter={() => handleMouseEnter("nevada")}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => handleStateClick("nevada")}
                />
              </g>
            </svg>
          </div>
          
          {/* Hover Info Panel */}
          {hoveredState && statesData[hoveredState] && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="w-full lg:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-xl glass-card border border-white/10 shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-miami-coral flex items-center justify-center text-white">
                  <span className="text-lg font-bold">{statesData[hoveredState]?.name?.substring(0, 1) || "S"}</span>
                </div>
                <h3 className="text-2xl font-bold ml-3 text-white">
                  {statesData[hoveredState]?.name || "Estado"}
                </h3>
              </div>
              
              <div className="mb-4">
                <p className="text-white/90 text-sm mb-4 line-clamp-3">
                  {statesData[hoveredState]?.description}
                </p>
                <h4 className="text-white text-lg mb-2 font-semibold">Ciudades principales</h4>
                <div className="flex flex-wrap gap-2">
                  {statesData[hoveredState]?.cities.map((city, idx) => (
                    <span key={idx} className="bg-white/20 text-white text-sm px-3 py-1 rounded-full">
                      {city.name}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                <img 
                  src={statesData[hoveredState]?.heroImage} 
                  alt={statesData[hoveredState]?.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
                  <h4 className="font-bold text-lg">Visita {statesData[hoveredState]?.name}</h4>
                </div>
              </div>
              
              <button 
                className="w-full py-3 bg-miami-coral hover:bg-miami-coral/80 text-white rounded-lg flex items-center justify-center transition-colors"
                onClick={() => handleStateClick(hoveredState)}
              >
                Explorar {statesData[hoveredState]?.name}
              </button>
            </motion.div>
          )}
          
          {/* Default Info Panel (when no state is hovered) */}
          {!hoveredState && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full lg:w-1/3 bg-white/10 backdrop-blur-md p-6 rounded-xl glass-card border border-white/10 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Explora los Estados Unidos</h3>
              <p className="text-white/90 mb-4">
                Desliza el cursor sobre cualquier estado coloreado para ver información y detalles. 
                Haz clic para ver una página con información completa.
              </p>
              <div className="mb-4">
                <h4 className="text-white text-lg mb-2 font-semibold">Características</h4>
                <ul className="text-white/90 space-y-2">
                  <li className="flex items-center">
                    <span className="bg-miami-coral p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    Información detallada de cada estado
                  </li>
                  <li className="flex items-center">
                    <span className="bg-miami-coral p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    Ciudades principales y atracciones
                  </li>
                  <li className="flex items-center">
                    <span className="bg-miami-coral p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    Gastronomía típica y clima
                  </li>
                  <li className="flex items-center">
                    <span className="bg-miami-coral p-1 rounded-full mr-2">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                    Preguntas frecuentes para planificar tu viaje
                  </li>
                </ul>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SimpleUSAMap;
