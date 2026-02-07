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
            className="relative flex max-h-[90vh] max-w-[90vw] flex-col items-center gap-8 p-8"
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
              className="max-h-[70vh] max-w-full object-contain"
            />

            {/* Caption */}
            <div className="text-center">
              <h2 className="font-serif text-2xl italic text-foreground">
                {painting.title}
              </h2>
              <p className="font-body mt-2 text-xs tracking-[0.15em] text-muted-foreground">
                {painting.year} · {painting.medium} · {painting.dimensions}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PaintingDetail;
