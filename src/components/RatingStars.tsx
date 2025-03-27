
import { useState } from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  onRating?: (rating: number) => void;
  size?: number;
  editable?: boolean;
}

const RatingStars = ({ rating, onRating, size = 24, editable = true }: RatingStarsProps) => {
  const [hoverRating, setHoverRating] = useState(0);
  
  const handleMouseEnter = (index: number) => {
    if (!editable) return;
    setHoverRating(index);
  };
  
  const handleMouseLeave = () => {
    if (!editable) return;
    setHoverRating(0);
  };
  
  const handleClick = (index: number) => {
    if (!editable || !onRating) return;
    onRating(index);
  };
  
  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((index) => {
        const fill = index <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300";
        return (
          <Star
            key={index}
            size={size}
            className={`${fill} cursor-pointer transition-colors ${editable ? 'cursor-pointer' : 'cursor-default'}`}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            fill={index <= (hoverRating || rating) ? "currentColor" : "none"}
          />
        );
      })}
    </div>
  );
};

export default RatingStars;
