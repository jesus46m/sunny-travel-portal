
import React from 'react';
import { Avatar } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

interface TestimonialsProps {
  stateId: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ stateId }) => {
  // This is just a stub component that now properly accepts stateId prop
  const testimonials = [
    {
      id: 1,
      name: "María González",
      avatar: "https://i.pravatar.cc/150?img=1",
      rating: 5,
      text: "Una experiencia increíble. Los paisajes son impresionantes y la gente muy amable.",
      date: "Mayo 2024"
    },
    {
      id: 2,
      name: "Carlos Rodríguez",
      avatar: "https://i.pravatar.cc/150?img=2",
      rating: 4,
      text: "Disfrutamos mucho de nuestra visita. Recomendaría este destino a cualquiera.",
      date: "Abril 2024"
    },
    {
      id: 3,
      name: "Ana López",
      avatar: "https://i.pravatar.cc/150?img=3",
      rating: 5,
      text: "Viajé con mi familia y todos quedamos encantados. Definitivamente volveremos.",
      date: "Marzo 2024"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {testimonials.map(testimonial => (
        <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-4">
            <Avatar className="h-12 w-12 mr-4">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </Avatar>
            <div>
              <h4 className="font-semibold">{testimonial.name}</h4>
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < testimonial.rating ? 'text-yellow-500 fill-yellow-500' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="text-gray-600 mb-2">"{testimonial.text}"</p>
          <p className="text-sm text-gray-500">{testimonial.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
