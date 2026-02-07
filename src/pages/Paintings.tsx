import { useState } from "react";
import { motion } from "framer-motion";
import MusealLayout from "@/components/MusealLayout";
import PaintingDetail from "@/components/PaintingDetail";
import { paintings, type Painting } from "@/data/paintings";

const Paintings = () => {
  const [selected, setSelected] = useState<Painting | null>(null);

  return (
    <MusealLayout>
      <div className="min-h-screen px-8 py-16 md:px-16 lg:px-24">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="font-serif text-3xl text-foreground">Selected Works</h1>
          <p className="font-body mt-2 text-xs tracking-[0.15em] uppercase text-muted-foreground">
            Paintings, 2022–2024
          </p>
        </motion.div>

        {/* Masonry-like grid */}
        <div className="columns-1 gap-8 sm:columns-2 lg:columns-3">
          {paintings.map((painting, i) => (
            <motion.div
              key={painting.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.08,
              }}
              className="mb-8 break-inside-avoid cursor-pointer group"
              onClick={() => setSelected(painting)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={painting.src}
                  alt={`${painting.title}, ${painting.year}`}
                  className="w-full object-cover transition-all duration-700 group-hover:opacity-90"
                  loading="lazy"
                />
                {/* Hover caption */}
                <div className="absolute inset-x-0 bottom-0 translate-y-full opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="bg-gradient-to-t from-background/80 to-transparent px-4 pb-4 pt-12">
                    <p className="font-serif text-sm italic text-foreground">
                      {painting.title}
                    </p>
                    <p className="font-body mt-0.5 text-[10px] tracking-[0.15em] text-muted-foreground">
                      {painting.year}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Detail overlay */}
      <PaintingDetail painting={selected} onClose={() => setSelected(null)} />
    </MusealLayout>
  );
};

export default Paintings;
