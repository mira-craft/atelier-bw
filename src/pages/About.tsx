import { motion } from "framer-motion";
import MusealLayout from "@/components/MusealLayout";

const About = () => {
  return (
    <MusealLayout>
      <div className="flex min-h-screen items-start justify-center px-8 py-20 md:py-32">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-lg"
        >
          <h1 className="font-serif text-3xl text-foreground">About</h1>

          <div className="mt-12 space-y-6 font-body text-sm leading-[1.8] text-muted-foreground">
            <p>
              Birgit Weitner (b. 1987, Berlin) works primarily in oil on canvas,
              exploring the tension between landscape memory and abstraction. Her
              paintings draw from prolonged observation of light, terrain, and
              atmospheric phenomena — distilled into compositions that resist
              narrative and favor presence.
            </p>

            <p>
              Her practice is rooted in slowness. Each painting develops over
              weeks or months, built through translucent layers that accumulate
              depth and quiet luminosity. The work invites sustained looking
              rather than immediate recognition.
            </p>

            <p>
              Mustermann has exhibited at institutions including Kunsthalle
              Bremen, Museum Folkwang, and Galerie Eigen + Art. Her work is held
              in private and public collections across Europe.
            </p>

            <p>She lives and works in Berlin.</p>
          </div>

          <div className="mt-16 border-t border-border pt-8">
            <h2 className="font-serif text-lg text-foreground">Education</h2>
            <ul className="mt-4 space-y-2 font-body text-xs leading-relaxed text-muted-foreground">
              <li>MFA, Universität der Künste Berlin, 2013</li>
              <li>BFA, Hochschule für Bildende Künste Hamburg, 2010</li>
            </ul>
          </div>

          <div className="mt-12 border-t border-border pt-8">
            <h2 className="font-serif text-lg text-foreground">
              Selected Exhibitions
            </h2>
            <ul className="mt-4 space-y-2 font-body text-xs leading-relaxed text-muted-foreground">
              <li>2024 — "Quiet Fields", Kunsthalle Bremen</li>
              <li>2023 — "Nocturnes", Galerie Eigen + Art, Berlin</li>
              <li>2022 — "Between Grounds", Museum Folkwang, Essen</li>
              <li>2021 — "Still Morning", Galerie Nordenhake, Stockholm</li>
            </ul>
          </div>
        </motion.article>
      </div>
    </MusealLayout>
  );
};

export default About;
