
import { ChevronDown } from "lucide-react";

export const BenefitsSection = () => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        Beneficios de registrar tu visita
      </h2>
      <ul className="space-y-2">
        <li className="flex items-start">
          <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
          <span>Recibe recomendaciones personalizadas según tus intereses</span>
        </li>
        <li className="flex items-start">
          <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
          <span>Información sobre eventos especiales durante tu estancia</span>
        </li>
        <li className="flex items-start">
          <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
          <span>Consejos de transporte y alojamiento según tu itinerario</span>
        </li>
        <li className="flex items-start">
          <ChevronDown className="h-5 w-5 text-miami-turquoise mr-2 flex-shrink-0" />
          <span>Posibilidad de contacto con guías locales especializados</span>
        </li>
      </ul>
    </div>
  );
};
