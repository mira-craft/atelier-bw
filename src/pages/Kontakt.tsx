import { motion } from "framer-motion";
import MusealLayout from "@/components/MusealLayout";

const Kontakt = () => {
  return (
    <MusealLayout>
      <div className="flex min-h-screen items-start justify-center px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md"
        >
          <h1 className="font-serif text-3xl text-foreground">Kontakt</h1>

          <div className="mt-12 space-y-8 font-body text-sm leading-[1.8] text-muted-foreground">
            <p>
              Ich freue mich über Anfragen zu meinen Arbeiten, zu aktuellen oder
              vergangenen Projekten sowie über einen persönlichen Austausch.
            </p>

            <p>
              Wenn Sie Interesse an einem Werk haben oder einen Besuch im Atelier
              vereinbaren möchten, schreiben Sie mir gerne eine E-Mail.
            </p>

            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/70">
                E-Mail
              </p>
              <a
                href="mailto:studio@miamustermann.com"
                className="mt-1 inline-block text-foreground transition-opacity duration-300 hover:opacity-60"
              >
                b-weitner@gmx.de
              </a>
            </div>
          </div>

          <p className="mt-16 font-body text-[15px] leading-relaxed text-muted-foreground/50">
            Ich bemühe mich, zeitnah zu antworten. Vielen Dank für Ihr Interesse.
          </p>
        </motion.div>
      </div>
    </MusealLayout>
  );
};

export default Kontakt;
