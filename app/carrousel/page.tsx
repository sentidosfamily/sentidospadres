import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CarouselProps {
  backendImages?: string[];
}

const placeholderImages = [
  "/assets/familia1.jpg",
  "/assets/familia2.jpg",
  "/assets/familia3.jpg",
];

const ImageCarouselFallback: React.FC<CarouselProps> = ({ backendImages }) => {
  const images = backendImages && backendImages.length > 0 ? backendImages.slice(0, 3) : placeholderImages;
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images]);

  return (
    <div className="relative w-full h-96 rounded-2xl overflow-hidden shadow-2xl">
      <AnimatePresence>
        <motion.img
          key={current}
          src={images[current]}
          alt={`Slide ${current}`}
          className="absolute w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>
    </div>
  );
};

export default ImageCarouselFallback;
