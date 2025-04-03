
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { CalendarIcon, MapPin, Plus, Trash } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ItineraryActivity {
  id: string;
  time: string;
  description: string;
  location: string;
}

interface ItineraryDay {
  id: string;
  date: Date;
  activities: ItineraryActivity[];
}

const ItineraryPlanner = () => {
  const [itinerary, setItinerary] = useState<ItineraryDay[]>([]);
  const [isAddingDay, setIsAddingDay] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  const addDay = () => {
    if (!selectedDate) return;
    
    const newDay: ItineraryDay = {
      id: crypto.randomUUID(),
      date: selectedDate,
      activities: []
    };
    
    setItinerary([...itinerary, newDay]);
    setSelectedDate(undefined);
    setIsAddingDay(false);
  };

  const removeDay = (dayId: string) => {
    setItinerary(itinerary.filter(day => day.id !== dayId));
  };

  const addActivity = (dayId: string) => {
    const updatedItinerary = itinerary.map(day => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: [
            ...day.activities,
            {
              id: crypto.randomUUID(),
              time: "12:00",
              description: "",
              location: ""
            }
          ]
        };
      }
      return day;
    });
    
    setItinerary(updatedItinerary);
  };

  const updateActivity = (dayId: string, activityId: string, field: keyof ItineraryActivity, value: string) => {
    const updatedItinerary = itinerary.map(day => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: day.activities.map(activity => {
            if (activity.id === activityId) {
              return {
                ...activity,
                [field]: value
              };
            }
            return activity;
          })
        };
      }
      return day;
    });
    
    setItinerary(updatedItinerary);
  };

  const removeActivity = (dayId: string, activityId: string) => {
    const updatedItinerary = itinerary.map(day => {
      if (day.id === dayId) {
        return {
          ...day,
          activities: day.activities.filter(activity => activity.id !== activityId)
        };
      }
      return day;
    });
    
    setItinerary(updatedItinerary);
  };

  const saveItinerary = () => {
    // In a real app, this would save to a database
    localStorage.setItem('travelItinerary', JSON.stringify(itinerary));
    alert('¡Itinerario guardado! En una aplicación real, esto se guardaría en la base de datos.');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h3 className="text-xl font-bold mb-4">Planificador de Itinerario</h3>
      
      <div className="mb-6">
        {!isAddingDay ? (
          <Button 
            onClick={() => setIsAddingDay(true)}
            className="flex items-center gap-2 bg-miami-coral hover:bg-miami-turquoise"
          >
            <Plus size={16} />
            Añadir día
          </Button>
        ) : (
          <div className="flex flex-col sm:flex-row gap-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {selectedDate ? format(selectedDate, "PPP", { locale: es }) : <span>Selecciona una fecha</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
            <div className="flex gap-2">
              <Button onClick={addDay} disabled={!selectedDate} className="bg-green-500 hover:bg-green-600">
                Confirmar
              </Button>
              <Button variant="outline" onClick={() => setIsAddingDay(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        )}
      </div>
      
      <div className="space-y-6">
        <AnimatePresence>
          {itinerary.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              Añade días a tu itinerario para planificar tu viaje
            </div>
          ) : (
            itinerary.map((day, index) => (
              <motion.div
                key={day.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="border rounded-lg p-4"
              >
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-lg font-semibold">
                    Día {index + 1}: {format(day.date, "EEEE, d MMMM", { locale: es })}
                  </h4>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    onClick={() => removeDay(day.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash size={16} />
                  </Button>
                </div>
                
                <div className="space-y-3">
                  {day.activities.map(activity => (
                    <div key={activity.id} className="grid grid-cols-12 gap-2 items-center">
                      <div className="col-span-2">
                        <Input 
                          type="time" 
                          value={activity.time} 
                          onChange={(e) => updateActivity(day.id, activity.id, "time", e.target.value)}
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-5">
                        <Input 
                          placeholder="Actividad" 
                          value={activity.description}
                          onChange={(e) => updateActivity(day.id, activity.id, "description", e.target.value)}
                          className="text-sm"
                        />
                      </div>
                      <div className="col-span-4">
                        <div className="relative">
                          <MapPin size={16} className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
                          <Input 
                            placeholder="Ubicación" 
                            value={activity.location}
                            onChange={(e) => updateActivity(day.id, activity.id, "location", e.target.value)}
                            className="pl-8 text-sm"
                          />
                        </div>
                      </div>
                      <div className="col-span-1">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          onClick={() => removeActivity(day.id, activity.id)}
                          className="text-red-500 hover:text-red-700 p-1 h-auto"
                        >
                          <Trash size={16} />
                        </Button>
                      </div>
                    </div>
                  ))}
                  
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={() => addActivity(day.id)}
                    className="mt-2 w-full justify-center text-sm"
                  >
                    <Plus size={16} className="mr-1" />
                    Añadir actividad
                  </Button>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
      </div>
      
      {itinerary.length > 0 && (
        <div className="mt-6 flex justify-end">
          <Button onClick={saveItinerary} className="bg-miami-coral hover:bg-miami-turquoise">
            Guardar itinerario
          </Button>
        </div>
      )}
    </div>
  );
};

export default ItineraryPlanner;
