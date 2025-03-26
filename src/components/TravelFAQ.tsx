
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FAQ {
  question: string;
  answer: string;
}

const TravelFAQ = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  
  const faqs: FAQ[] = [
    {
      question: "¿Qué documentos necesito para viajar a Estados Unidos?",
      answer: "Para ingresar a Estados Unidos, necesitarás un pasaporte válido y, dependiendo de tu país de origen, una visa o autorización ESTA. Es recomendable verificar los requisitos específicos según tu nacionalidad en la web oficial de la Embajada de Estados Unidos."
    },
    {
      question: "¿Cuál es la mejor época para visitar Estados Unidos?",
      answer: "La mejor época depende del destino específico que desees visitar. En general, la primavera (abril-junio) y el otoño (septiembre-noviembre) ofrecen temperaturas agradables en la mayoría de estados. El verano es ideal para destinos del norte, mientras que el invierno es perfecto para estados del sur como Florida."
    },
    {
      question: "¿Necesito alquilar un coche para moverme por Estados Unidos?",
      answer: "Depende de tu destino. En grandes ciudades como Nueva York, Boston o San Francisco, el transporte público es eficiente y a menudo más conveniente que conducir. Sin embargo, para explorar parques nacionales o destinos más rurales, alquilar un coche es casi imprescindible por la falta de transporte público en esas áreas."
    },
    {
      question: "¿Cuánto dinero debo llevar para propinas?",
      answer: "Las propinas son una parte importante de la cultura estadounidense. En restaurantes, se espera dejar entre un 15-20% del total de la cuenta. Para taxistas, maleteros o guías turísticos, entre $1-5 por servicio es lo habitual. Recuerda incluir este gasto en tu presupuesto de viaje."
    },
    {
      question: "¿Es seguro viajar a Estados Unidos?",
      answer: "En general, Estados Unidos es un país seguro para los turistas. Como en cualquier destino, se recomienda informarse sobre las zonas específicas que visitarás, mantenerte alerta en lugares concurridos y seguir las recomendaciones de seguridad básicas como no exhibir objetos de valor y estar atento a tus pertenencias."
    }
  ];
  
  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  
  return (
    <div className="w-full max-w-3xl mx-auto">
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className="border border-gray-300 bg-white rounded-lg overflow-hidden"
          >
            <button
              className="w-full py-4 px-6 text-left flex justify-between items-center focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-medium text-gray-800">{faq.question}</span>
              {expandedIndex === index ? (
                <ChevronUp className="h-5 w-5 text-miami-coral" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            
            <AnimatePresence>
              {expandedIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4"
                >
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelFAQ;
