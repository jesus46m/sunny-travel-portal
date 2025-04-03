
import React, { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";

interface PopularityData {
  state_id: string;
  popularity: number;
}

const PopularityHeatmap = () => {
  const [popularityData, setPopularityData] = useState<PopularityData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPopularityData = async () => {
      setIsLoading(true);
      
      try {
        // Get experiences by state
        const { data: experiencesByState, error: experiencesError } = await supabase
          .from('experiences')
          .select('state_id, id')
          
        if (experiencesError) {
          console.error('Error fetching experiences:', experiencesError);
          setIsLoading(false);
          return;
        }
        
        // Count experiences per state
        const stateCountMap: Record<string, number> = {};
        experiencesByState?.forEach(exp => {
          stateCountMap[exp.state_id] = (stateCountMap[exp.state_id] || 0) + 1;
        });
        
        // 2. Get ratings data
        const { data: ratingData, error: ratingError } = await supabase
          .from('destination_ratings')
          .select('*')
          .eq('destination_type', 'state');

        if (ratingError) {
          console.error('Error fetching ratings:', ratingError);
          setIsLoading(false);
          return;
        }

        // Process data to create popularity metric
        const processedData = Object.keys(stateCountMap).map(stateId => {
          const stateRatings = ratingData?.find(r => r.destination_id === stateId);
          const ratingFactor = stateRatings ? (stateRatings.average_rating || 3) : 3;
          
          return {
            state_id: stateId,
            popularity: stateCountMap[stateId] * (ratingFactor / 5) * 100 // Scale to percentage
          };
        });

        setPopularityData(processedData);
      } catch (error) {
        console.error("Error processing data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPopularityData();
  }, []);

  const getHeatColor = (popularity: number) => {
    if (popularity > 80) return "bg-red-600";
    if (popularity > 60) return "bg-orange-500";
    if (popularity > 40) return "bg-yellow-400";
    if (popularity > 20) return "bg-green-400";
    return "bg-blue-300";
  };

  return (
    <div className="relative rounded-xl shadow-lg overflow-hidden bg-white p-4">
      <h3 className="text-xl font-bold mb-4 text-center">Mapa de popularidad de destinos</h3>
      
      {isLoading ? (
        <div className="h-64 flex items-center justify-center">
          <div className="animate-pulse text-gray-400">Cargando datos...</div>
        </div>
      ) : (
        <div className="relative w-full">
          <img 
            src="/placeholder.svg" 
            alt="USA Map Outline"
            className="w-full h-auto opacity-20"
          />
          <div className="absolute inset-0">
            {popularityData.map((item) => (
              <motion.div
                key={item.state_id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 0.7, scale: 1 }}
                whileHover={{ opacity: 1, scale: 1.05 }}
                className={`absolute rounded-full ${getHeatColor(item.popularity)}`}
                style={{
                  width: `${Math.max(5, Math.min(30, item.popularity / 10))}px`,
                  height: `${Math.max(5, Math.min(30, item.popularity / 10))}px`,
                  // Position would ideally be based on state coordinates
                  // This is simplified - in real implementation, you'd use a mapping of state coordinates
                  top: `${Math.random() * 80}%`, 
                  left: `${Math.random() * 80}%`,
                }}
              />
            ))}
          </div>
          
          <div className="flex justify-between mt-2 text-xs">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-300 mr-1"></div>
              <span>Bajo</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-400 mr-1"></div>
              <span>Moderado</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
              <span>Popular</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-orange-500 mr-1"></div>
              <span>Muy popular</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-600 mr-1"></div>
              <span>Top</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PopularityHeatmap;
