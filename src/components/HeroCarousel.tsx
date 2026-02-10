import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

import painting1 from "@/assets/landscape_2.jpg";
import painting2 from "@/assets/Flut.png";
import painting3 from "@/assets/überm_Berg.jpg";
import painting4 from "@/assets/Ohne_Titel_3.png";
import painting5 from "@/assets/Ohne_Titel_7.png";

const slides = [
  { src: painting2, title: "Flut", year: "2023" },
  { src: painting3, title: "Überm Berg", year: "2017 - 2020" },
  { src: painting4, title: "Ohne Titel 3", year: "2025" },
  { src: painting5, title: "Ohne Titel 7", year: "2024" },
  { src: painting1, title: "landscape 2", year: "2005 - 2007" },
];

const INTERVAL = 6000;

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={slide.src}
            alt={`${slide.title}, ${slide.year}`}
            className="h-full w-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Caption — bottom right, restrained */}
      <div className="absolute bottom-10 right-10 z-10 text-right">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <h2 className="font-serif text-xl font-light italic text-primary-foreground/90 text-halo">
              {slide.title}
            </h2>
            <p className="font-body mt-1 text-xs tracking-[0.2em] uppercase text-primary-foreground/60 text-halo">
              {slide.year}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Progress dots — bottom center */}
      <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`View slide ${i + 1}`}
            className={`h-[3px] rounded-full transition-all duration-700 ${
              i === current
                ? "w-12 bg-primary-foreground/60"
                : "w-6 bg-primary-foreground/20 hover:bg-primary-foreground/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
