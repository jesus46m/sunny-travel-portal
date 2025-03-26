
import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { MapPin } from "lucide-react";

const states = [
  { id: "alabama", name: "Alabama" },
  { id: "alaska", name: "Alaska" },
  { id: "arizona", name: "Arizona" },
  { id: "arkansas", name: "Arkansas" },
  { id: "california", name: "California" },
  { id: "colorado", name: "Colorado" },
  { id: "connecticut", name: "Connecticut" },
  { id: "delaware", name: "Delaware" },
  { id: "florida", name: "Florida" },
  { id: "georgia", name: "Georgia" },
  { id: "hawaii", name: "Hawaii" },
  { id: "idaho", name: "Idaho" },
  { id: "illinois", name: "Illinois" },
  { id: "indiana", name: "Indiana" },
  { id: "iowa", name: "Iowa" },
  { id: "kansas", name: "Kansas" },
  { id: "kentucky", name: "Kentucky" },
  { id: "louisiana", name: "Louisiana" },
  { id: "maine", name: "Maine" },
  { id: "maryland", name: "Maryland" },
  { id: "massachusetts", name: "Massachusetts" },
  { id: "michigan", name: "Michigan" },
  { id: "minnesota", name: "Minnesota" },
  { id: "mississippi", name: "Mississippi" },
  { id: "missouri", name: "Missouri" },
  { id: "montana", name: "Montana" },
  { id: "nebraska", name: "Nebraska" },
  { id: "nevada", name: "Nevada" },
  { id: "new-hampshire", name: "New Hampshire" },
  { id: "new-jersey", name: "New Jersey" },
  { id: "new-mexico", name: "New Mexico" },
  { id: "new-york", name: "New York" },
  { id: "north-carolina", name: "North Carolina" },
  { id: "north-dakota", name: "North Dakota" },
  { id: "ohio", name: "Ohio" },
  { id: "oklahoma", name: "Oklahoma" },
  { id: "oregon", name: "Oregon" },
  { id: "pennsylvania", name: "Pennsylvania" },
  { id: "rhode-island", name: "Rhode Island" },
  { id: "south-carolina", name: "South Carolina" },
  { id: "south-dakota", name: "South Dakota" },
  { id: "tennessee", name: "Tennessee" },
  { id: "texas", name: "Texas" },
  { id: "utah", name: "Utah" },
  { id: "vermont", name: "Vermont" },
  { id: "virginia", name: "Virginia" },
  { id: "washington", name: "Washington" },
  { id: "west-virginia", name: "West Virginia" },
  { id: "wisconsin", name: "Wisconsin" },
  { id: "wyoming", name: "Wyoming" }
];

const SimpleUSAMap = () => {
  const navigate = useNavigate();
  const [hoveredState, setHoveredState] = useState<string | null>(null);

  const handleStateClick = (stateId: string) => {
    navigate(`/state/${stateId}`);
  };

  return (
    <div className="w-full max-w-4xl mx-auto rounded-xl glass-card p-6 overflow-hidden">
      {/* USA Map Background */}
      <div className="relative w-full aspect-[4/3] bg-[#111827] rounded-lg overflow-hidden shadow-lg">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1502988632461-b1626c28d13c?q=80&w=1740&auto=format&fit=crop" 
            alt="USA Map Background" 
            className="w-full h-full object-cover opacity-15"
            loading="lazy"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-miami-turquoise/20 to-miami-coral/20"></div>
        
        {/* Map Title */}
        <div className="absolute top-0 left-0 w-full p-4 bg-black/30">
          <h3 className="text-white text-xl font-semibold text-center">
            Estados Unidos de América
          </h3>
        </div>
        
        {/* Interactive State List */}
        <div className="absolute inset-0 grid grid-cols-3 sm:grid-cols-5 gap-2 p-16 overflow-auto">
          {states.map((state) => (
            <motion.div
              key={state.id}
              className={`
                relative flex items-center justify-center cursor-pointer 
                rounded px-2 py-1 text-center
                ${hoveredState === state.id 
                  ? 'bg-miami-coral text-white' 
                  : 'bg-white/10 text-white hover:bg-white/20'
                }
              `}
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => setHoveredState(state.id)}
              onMouseLeave={() => setHoveredState(null)}
              onClick={() => handleStateClick(state.id)}
            >
              <MapPin size={12} className="mr-1" />
              <span className="text-xs">{state.name}</span>
            </motion.div>
          ))}
        </div>
        
        {/* Instructional Note */}
        <div className="absolute bottom-0 left-0 w-full p-2 bg-black/30 text-center">
          <p className="text-white text-xs">
            Haz clic en cualquier estado para explorar
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleUSAMap;
