
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Thermometer, Wind, Umbrella, Droplets, Search } from "lucide-react";
import { toast } from "sonner";

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  precipitation: number;
  forecast: {
    day: string;
    condition: string;
    maxTemp: number;
    minTemp: number;
  }[];
}

const WeatherForecast = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState(false);

  const mockWeatherData: Record<string, WeatherData> = {
    "miami": {
      location: "Miami, Florida",
      temperature: 28,
      condition: "Soleado",
      humidity: 65,
      windSpeed: 14,
      precipitation: 10,
      forecast: [
        { day: "Lunes", condition: "Soleado", maxTemp: 29, minTemp: 23 },
        { day: "Martes", condition: "Parcialmente nublado", maxTemp: 28, minTemp: 22 },
        { day: "Miércoles", condition: "Lluvia ligera", maxTemp: 27, minTemp: 22 },
        { day: "Jueves", condition: "Soleado", maxTemp: 30, minTemp: 24 },
        { day: "Viernes", condition: "Soleado", maxTemp: 31, minTemp: 24 }
      ]
    },
    "new york": {
      location: "Nueva York, NY",
      temperature: 18,
      condition: "Parcialmente nublado",
      humidity: 45,
      windSpeed: 20,
      precipitation: 5,
      forecast: [
        { day: "Lunes", condition: "Parcialmente nublado", maxTemp: 19, minTemp: 12 },
        { day: "Martes", condition: "Lluvia", maxTemp: 17, minTemp: 11 },
        { day: "Miércoles", condition: "Lluvia", maxTemp: 16, minTemp: 10 },
        { day: "Jueves", condition: "Nublado", maxTemp: 18, minTemp: 12 },
        { day: "Viernes", condition: "Parcialmente nublado", maxTemp: 20, minTemp: 13 }
      ]
    },
    "los angeles": {
      location: "Los Ángeles, California",
      temperature: 22,
      condition: "Soleado",
      humidity: 35,
      windSpeed: 10,
      precipitation: 0,
      forecast: [
        { day: "Lunes", condition: "Soleado", maxTemp: 23, minTemp: 17 },
        { day: "Martes", condition: "Soleado", maxTemp: 24, minTemp: 16 },
        { day: "Miércoles", condition: "Soleado", maxTemp: 25, minTemp: 17 },
        { day: "Jueves", condition: "Parcialmente nublado", maxTemp: 23, minTemp: 16 },
        { day: "Viernes", condition: "Soleado", maxTemp: 24, minTemp: 17 }
      ]
    }
  };

  const fetchWeatherData = () => {
    if (!searchQuery.trim()) {
      toast.error("Por favor, ingresa una ciudad para buscar");
      return;
    }

    setLoading(true);
    
    // Simulate API call with a timeout
    setTimeout(() => {
      const normalizedQuery = searchQuery.toLowerCase().trim();
      const data = Object.keys(mockWeatherData).find(key => 
        normalizedQuery.includes(key) || key.includes(normalizedQuery)
      );
      
      if (data) {
        setWeatherData(mockWeatherData[data]);
        toast.success(`Previsión meteorológica para ${mockWeatherData[data].location} cargada`);
      } else {
        toast.error("No se encontraron datos meteorológicos para esta ubicación");
        setWeatherData(null);
      }
      
      setLoading(false);
    }, 1000);
  };

  const getWeatherIcon = (condition: string) => {
    switch(condition.toLowerCase()) {
      case "lluvia":
      case "lluvia ligera":
        return <Umbrella className="text-blue-500" />;
      case "soleado":
        return <Thermometer className="text-yellow-500" />;
      case "nublado":
      case "parcialmente nublado":
      default:
        return <Droplets className="text-gray-500" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <h3 className="text-xl font-bold mb-4">Previsión Meteorológica</h3>
      
      <div className="flex flex-col sm:flex-row gap-2 mb-6">
        <div className="relative flex-grow">
          <Input
            placeholder="Buscar ciudad o destino..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pr-10"
            onKeyPress={(e) => e.key === 'Enter' && fetchWeatherData()}
          />
          <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
        </div>
        <Button 
          onClick={fetchWeatherData} 
          className="bg-miami-coral hover:bg-miami-turquoise"
          disabled={loading}
        >
          {loading ? "Buscando..." : "Buscar"}
        </Button>
      </div>

      {weatherData && (
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
            <div>
              <h4 className="text-lg font-semibold">{weatherData.location}</h4>
              <p className="text-gray-500">{weatherData.condition}</p>
            </div>
            <div className="text-3xl font-bold">{weatherData.temperature}°C</div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 my-4">
            <div className="flex items-center">
              <Droplets className="mr-2 text-blue-500" />
              <div>
                <div className="text-sm text-gray-500">Humedad</div>
                <div className="font-semibold">{weatherData.humidity}%</div>
              </div>
            </div>
            <div className="flex items-center">
              <Wind className="mr-2 text-green-500" />
              <div>
                <div className="text-sm text-gray-500">Viento</div>
                <div className="font-semibold">{weatherData.windSpeed} km/h</div>
              </div>
            </div>
            <div className="flex items-center">
              <Umbrella className="mr-2 text-gray-500" />
              <div>
                <div className="text-sm text-gray-500">Precipitación</div>
                <div className="font-semibold">{weatherData.precipitation}%</div>
              </div>
            </div>
          </div>
          
          <h5 className="font-semibold mt-6 mb-3">Pronóstico de 5 días</h5>
          <div className="grid grid-cols-5 gap-2">
            {weatherData.forecast.map((day, index) => (
              <Card key={index} className="p-3 text-center">
                <div className="text-sm font-medium">{day.day}</div>
                <div className="my-2 flex justify-center">
                  {getWeatherIcon(day.condition)}
                </div>
                <div className="text-sm">
                  <span className="font-medium">{day.maxTemp}°</span> / {day.minTemp}°
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-4 text-xs text-gray-400 text-center">
            Datos de previsión simulados - En una implementación real, se usaría una API meteorológica
          </div>
        </div>
      )}
      
      {!weatherData && !loading && (
        <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
          Busca una ciudad para ver el pronóstico del tiempo
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
