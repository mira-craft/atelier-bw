import { motion } from "framer-motion";
import MusealLayout from "@/components/MusealLayout";
import whitecanvas from "@/assets/whitecanvas.jpg";

const Atelier = () => {
  return (
    <MusealLayout>
      <div className="flex min-h-screen items-start justify-center px-5 pt-20 pb-12 sm:px-8 sm:py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl"
        >
          <div className="grid gap-8 md:gap-16 md:grid-cols-2">
            {/* Text */}
            <div>
              <h1 className="font-serif text-2xl text-foreground sm:text-3xl">
                Atelier
              </h1>

              <div className="mt-8 space-y-6 font-body text-sm leading-[1.8] text-muted-foreground sm:mt-12 sm:space-y-8">
                <p>
                  Das Atelier ist ein Ort des Arbeitens, des Suchens und des
                  Weiterdenkens. Hier entstehen neue Bilder, Skizzen und Serien –
                  oft über längere Zeiträume hinweg.
                </p>

                <p>
                  Bald werden an dieser Stelle Fotografien aus dem Atelier sowie
                  begleitende Eindrücke aus dem Arbeitsalltag zu sehen sein.
                </p>
              </div>
            </div>

            {/* Image placeholder */}
            <div className="relative mx-auto w-full max-w-sm">
              <img
                src={whitecanvas}
                alt="Leinwand im Atelier"
                decoding="async"
                className="w-full object-contain"
              />

              {/* Overlay text */}
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                <span
                  className="
                    font-body
                    text-[10px] sm:text-xs
                    tracking-[0.35em]
                    uppercase
                    text-muted-foreground/60
                  "
                >
                  coming soon
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </MusealLayout>
  );
};

export default Atelier;
