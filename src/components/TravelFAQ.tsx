
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface TravelFAQProps {
  stateId: string;
}

const TravelFAQ: React.FC<TravelFAQProps> = ({ stateId }) => {
  // This component now properly accepts the stateId prop
  const faqs = [
    {
      question: "¿Cuál es la mejor época para visitar?",
      answer: "La mejor época para visitar depende de tus preferencias. La primavera (abril-mayo) y el otoño (septiembre-octubre) suelen ofrecer un clima agradable y menos turistas. El verano puede ser más concurrido pero ofrece todas las atracciones abiertas."
    },
    {
      question: "¿Cómo puedo desplazarme por el estado?",
      answer: "Existen varias opciones de transporte, incluyendo alquiler de coches, transporte público en las grandes ciudades, y servicios de tren o autobús entre ciudades. Para explorar áreas rurales, se recomienda alquilar un vehículo."
    },
    {
      question: "¿Qué documentación necesito para visitar?",
      answer: "Los ciudadanos españoles necesitan pasaporte válido y ESTA (Sistema Electrónico para la Autorización de Viaje) para ingresar a Estados Unidos como turistas. Recomendamos verificar los requisitos específicos antes de viajar."
    },
    {
      question: "¿Es seguro viajar a este estado?",
      answer: "En general, es seguro viajar a este estado. Como en cualquier destino, recomendamos tomar precauciones básicas, mantenerse informado sobre las áreas que visita y seguir las recomendaciones locales."
    },
    {
      question: "¿Cuál es la moneda local y dónde puedo cambiar dinero?",
      answer: "La moneda es el dólar estadounidense (USD). Puede cambiar dinero en bancos, casas de cambio, o usar cajeros automáticos. Las tarjetas de crédito son ampliamente aceptadas en la mayoría de los establecimientos."
    }
  ];

  return (
    <Accordion type="single" collapsible className="w-full">
      {faqs.map((faq, index) => (
        <AccordionItem key={index} value={`item-${index}`}>
          <AccordionTrigger className="text-left font-medium">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="text-gray-600">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default TravelFAQ;
