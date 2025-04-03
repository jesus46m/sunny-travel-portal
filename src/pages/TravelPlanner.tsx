
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PopularityHeatmap from "@/components/PopularityHeatmap";
import ItineraryPlanner from "@/components/ItineraryPlanner";
import WeatherForecast from "@/components/WeatherForecast";
import SpecialOffers from "@/components/SpecialOffers";
import CurrencyBudgetCalculator from "@/components/CurrencyBudgetCalculator";
import { CalendarIcon, Calculator, Thermometer, CircleDollarSign, MapPin, Compass } from "lucide-react";

const TravelPlanner = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-4xl font-bold mb-2 text-center">Planificador de Viajes</h1>
      <p className="text-gray-600 text-center mb-8">Todas las herramientas que necesitas para planificar tu viaje perfecto</p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div className="lg:col-span-2">
          <PopularityHeatmap />
        </div>
        <div>
          <CurrencyBudgetCalculator />
        </div>
      </div>

      <div className="mb-8">
        <WeatherForecast />
      </div>
      
      <div className="mb-8">
        <SpecialOffers />
      </div>
      
      <div className="mb-8">
        <ItineraryPlanner />
      </div>
    </div>
  );
};

export default TravelPlanner;
