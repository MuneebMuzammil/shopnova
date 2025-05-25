
import React from 'react';
import { Star } from 'lucide-react';

interface StarRatingProps {
  rating: number;
  totalReviews?: number;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

const StarRating: React.FC<StarRatingProps> = ({ 
  rating, 
  totalReviews, 
  size = 'md',
  showText = true 
}) => {
  const sizeClasses = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5'
  };

  const textSizeClasses = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  };

  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`${sizeClasses[size]} ${
              star <= Math.floor(rating)
                ? 'text-yellow-400 fill-current'
                : star <= rating
                ? 'text-yellow-400 fill-current opacity-50'
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      {showText && (
        <div className={`${textSizeClasses[size]} text-gray-600 ml-1`}>
          <span className="font-medium">{rating.toFixed(1)}</span>
          {totalReviews && (
            <span className="text-gray-400"> ({totalReviews.toLocaleString()})</span>
          )}
        </div>
      )}
    </div>
  );
};

export default StarRating;
