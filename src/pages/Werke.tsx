import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import MusealLayout from "@/components/MusealLayout";
import PaintingDetail from "@/components/PaintingDetail";
import { Painting, filenameToTitle } from "@/data/paintings";

const API_BASE = import.meta.env.VITE_WORKER_URL;

interface WorkerItem {
  id: string;
  filename: string;
  url: string;
}

interface WorkerYear {
  key: string;
  label: string;
  items: WorkerItem[];
}

interface WorkerResponse {
  years: WorkerYear[];
}

const Werke = () => {
  const [years, setYears] = useState<WorkerYear[]>([]);
  const [activeYear, setActiveYear] = useState<string>("");
  const [paintings, setPaintings] = useState<Painting[]>([]);
  const [selected, setSelected] = useState<Painting | null>(null);

  // Load data from worker
  useEffect(() => {
    fetch(API_BASE)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load works");
        return res.json();
      })
      .then((data: WorkerResponse) => {
        setYears(data.years);
        if (data.years.length > 0) {
          setActiveYear(data.years[0].label);
        }
      })
      .catch(console.error);
  }, []);

  // Map active year → Painting[]
  useEffect(() => {
    const year = years.find((y) => y.label === activeYear);
    if (!year) return;

    setPaintings(
      year.items.map((item) => ({
        id: item.id,
        title: filenameToTitle(item.filename),
        year: year.label,
        src: item.url,
      }))
    );
  }, [years, activeYear]);

  return (
    <MusealLayout>
      <div className="min-h-screen px-5 pt-20 pb-12 sm:px-8 sm:py-16 md:px-16 lg:px-24">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 md:mb-16"
        >
          <h1 className="font-serif text-2xl text-foreground sm:text-3xl">Werke</h1>
        </motion.div>

        {/* Mobile year selector — horizontal scrollable pills */}
        {years.length > 0 && (
          <div className="mb-8 -mx-5 px-5 overflow-x-auto scrollbar-hide md:hidden">
            <div className="flex gap-3 pb-2">
              {years.map((year) => (
                <button
                  key={year.key}
                  onClick={() => setActiveYear(year.label)}
                  className={`shrink-0 rounded-full px-4 py-1.5 text-[11px] tracking-[0.15em] uppercase transition-colors ${
                    activeYear === year.label
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {year.label}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex gap-8 md:gap-16">
          {/* Year navigation — desktop only */}
          <aside className="sticky top-32 hidden w-32 shrink-0 md:block">
            <ul className="space-y-4">
              {years.map((year) => (
                <li key={year.key}>
                  <button
                    onClick={() => setActiveYear(year.label)}
                    className={`text-xs tracking-[0.2em] transition-colors ${
                      activeYear === year.label
                        ? "font-semibold text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {year.label}
                  </button>
                </li>
              ))}
            </ul>
          </aside>

          {/* Grid */}
          <main className="flex-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeYear}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="columns-1 gap-4 sm:columns-2 sm:gap-6 lg:columns-3 lg:gap-8"
              >
                {paintings.map((painting, i) => (
                  <motion.div
                    key={painting.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="mb-4 break-inside-avoid cursor-pointer group sm:mb-6 lg:mb-8"
                    onClick={() => setSelected(painting)}
                  >
                    <img
                      src={painting.src}
                      alt={`${painting.title}, ${painting.year}`}
                      loading="lazy"
                      decoding="async"
                      className="w-full object-cover bg-muted transition-opacity duration-700 will-change-[opacity] group-hover:opacity-90"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </main>
        </div>
      </div>

      <PaintingDetail painting={selected} onClose={() => setSelected(null)} />
    </MusealLayout>
  );
};

export default Werke;
