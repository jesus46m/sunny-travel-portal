
import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface Offer {
  id: string;
  title: string;
  description: string;
  destination: string;
  discount: string;
  validUntil: string;
  imageUrl: string;
  price: number;
  originalPrice: number;
  tag?: string;
}

const SPECIAL_OFFERS: Offer[] = [
  {
    id: "1",
    title: "Escapada a Miami Beach",
    description: "3 noches en hotel de 4 estrellas con desayuno incluido",
    destination: "Miami, Florida",
    discount: "25%",
    validUntil: "2025-06-30",
    imageUrl: "https://images.unsplash.com/photo-1535498730771-e735b998cd64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWlhbWklMjBiZWFjaHxlbnwwfHwwfHx8MA%3D%3D",
    price: 450,
    originalPrice: 600,
    tag: "Oferta Flash"
  },
  {
    id: "2",
    title: "Ruta de Jazz en Nueva Orleans",
    description: "Tour de 4 días por los mejores locales de jazz",
    destination: "Nueva Orleans, Louisiana",
    discount: "20%",
    validUntil: "2025-05-15",
    imageUrl: "https://images.unsplash.com/photo-1571893544028-06b07af6dade?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmV3JTIwb3JsZWFuc3xlbnwwfHwwfHx8MA%3D%3D",
    price: 380,
    originalPrice: 475,
  },
  {
    id: "3",
    title: "Aventura en Las Vegas",
    description: "2 noches en el Strip + entrada a espectáculo",
    destination: "Las Vegas, Nevada",
    discount: "30%",
    validUntil: "2025-07-10",
    imageUrl: "https://images.unsplash.com/photo-1605833556294-ea5c7a74f57d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFzJTIwdmVnYXN8ZW58MHx8MHx8fDA%3D",
    price: 320,
    originalPrice: 460,
    tag: "Última hora"
  },
  {
    id: "4",
    title: "Ruta por la Costa de California",
    description: "5 días de autocaravana con alojamientos incluidos",
    destination: "California",
    discount: "15%",
    validUntil: "2025-08-20",
    imageUrl: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2FsaWZvcm5pYXxlbnwwfHwwfHx8MA%3D",
    price: 780,
    originalPrice: 920,
  },
  {
    id: "5",
    title: "Naturaleza en Yellowstone",
    description: "Visita guiada de 3 días con alojamiento en cabañas",
    destination: "Wyoming",
    discount: "22%",
    validUntil: "2025-06-15",
    imageUrl: "https://images.unsplash.com/photo-1605453168300-e9e84b9dd86b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWVsbG93c3RvbmV8ZW58MHx8MHx8fDA%3D",
    price: 495,
    originalPrice: 635,
    tag: "Promoción Especial"
  }
];

const SpecialOffers = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold">Ofertas Especiales</h3>
        <Button variant="link" className="text-miami-coral hover:text-miami-turquoise">
          Ver todas las ofertas
        </Button>
      </div>
      
      <Carousel className="w-full">
        <CarouselContent>
          {SPECIAL_OFFERS.map((offer) => (
            <CarouselItem key={offer.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className="h-full">
                <div className="relative">
                  <img 
                    src={offer.imageUrl} 
                    alt={offer.title} 
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge className="bg-miami-coral">{offer.discount} OFF</Badge>
                  </div>
                  {offer.tag && (
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="bg-black/70 text-white border-none">
                        {offer.tag}
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{offer.title}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <span>{offer.destination}</span>
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pb-2">
                  <p className="text-sm text-gray-600">{offer.description}</p>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-xl font-bold">${offer.price}</span>
                    <span className="text-sm line-through text-gray-400">${offer.originalPrice}</span>
                    <span className="text-xs text-gray-500 ml-auto">
                      Válido hasta: {new Date(offer.validUntil).toLocaleDateString('es-ES')}
                    </span>
                  </div>
                </CardContent>
                
                <CardFooter>
                  <Button className="w-full bg-miami-turquoise hover:bg-miami-coral">
                    Reservar ahora
                  </Button>
                </CardFooter>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SpecialOffers;
