import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface BackgroundSlideshowProps {
  images: string[];
  interval?: number;
}

const BackgroundSlideshow: React.FC<BackgroundSlideshowProps> = ({ images, interval = 6000 }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images.length, interval]);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((img, idx) => (
        <motion.div
          key={idx}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{
            opacity: idx === currentImageIndex ? 1 : 0,
            scale: idx === currentImageIndex ? 1.15 : 1.05,
          }}
          transition={{ duration: 2, ease: 'easeInOut' }}
        >
          <img
            src={img}
            alt={`Background ${idx + 1}`}
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>
      ))}
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm pointer-events-none" />
    </div>
  );
};

export default BackgroundSlideshow;
