'use client';

import React, { useState, useEffect } from 'react';

interface CarouselProps {
  images?: string[];
  autoPlayInterval?: number;
}

const ImageCarouselFallback: React.FC<CarouselProps> = ({ 
  images = [
    "/assets/familia1.jpg",
    "/assets/familia2.jpg",
    "/assets/familia3.jpg"
  ],
  autoPlayInterval = 3000 
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [images.length, autoPlayInterval]);

  const goToSlide = (index: number) => setCurrentIndex(index);
  const goToPrevious = () => setCurrentIndex(prev => prev === 0 ? images.length - 1 : prev - 1);
  const goToNext = () => setCurrentIndex(prev => prev === images.length - 1 ? 0 : prev + 1);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-2xl bg-gray-100">
      {/* Contenedor del carrusel inclinado */}
      <div className="relative w-full h-64 md:h-80 lg:h-96 transform -rotate-1">
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />

        {/* Flechas de navegación (solo visibles al hacer hover) */}
        <div className="absolute inset-0 flex items-center justify-between opacity-0 hover:opacity-100 transition-opacity">
          <button
            onClick={goToPrevious}
            className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all ml-2"
            aria-label="Anterior"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-all mr-2"
            aria-label="Siguiente"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/75'}`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselFallback;
