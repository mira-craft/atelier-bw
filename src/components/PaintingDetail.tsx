import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import type { Painting } from "@/data/paintings";

interface PaintingDetailProps {
  painting: Painting | null;
  onClose: () => void;
}

const PaintingDetail = ({ painting, onClose }: PaintingDetailProps) => {
  return (
    <AnimatePresence>
      {painting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/95 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center gap-4 p-4 sm:max-w-[90vw] sm:gap-6 sm:p-6 md:gap-8 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute -top-2 right-0 p-2 text-muted-foreground transition-colors duration-300 hover:text-foreground"
              aria-label="Close detail view"
            >
              <X className="h-5 w-5" strokeWidth={1} />
            </button>

            {/* Image */}
            <img
              src={painting.src}
              alt={`${painting.title}, ${painting.year}`}
              decoding="async"
              className="max-h-[60vh] max-w-full object-contain bg-muted sm:max-h-[65vh] md:max-h-[70vh]"
            />

            {/* Caption */}
            <div className="text-center">
              <h2 className="font-serif text-xl italic text-foreground sm:text-2xl">
                {painting.title}
              </h2>
              <p className="font-body mt-1 text-[10px] tracking-[0.15em] text-muted-foreground sm:mt-2 sm:text-xs">
                {painting.year}
                {painting.medium && ` · ${painting.medium}`}
                {painting.dimensions && ` · ${painting.dimensions}`}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaintingDetail;
