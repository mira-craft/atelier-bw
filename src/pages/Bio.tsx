import { motion } from "framer-motion";
import MusealLayout from "@/components/MusealLayout";

const Bio = () => {
  return (
    <MusealLayout>
      <div className="flex min-h-screen items-start justify-center px-5 pt-20 pb-12 sm:px-8 sm:py-20 md:py-32">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl"
        >
          <div className="grid gap-8 md:gap-16 md:grid-cols-2">
            <div>
              <h1 className="font-serif text-2xl text-foreground sm:text-3xl">Bio</h1>

              <div className="mt-8 space-y-5 font-body text-sm leading-[1.8] text-muted-foreground sm:mt-12 sm:space-y-6">
                <p>
                  Birgit Weitner arbeitet überwiegend mit Acryl auf Leinwand. Ihre
                  künstlerische Praxis entwickelte sich aus einem weitestgehend
                  autodidaktischen Studium der Malerei. In früheren Jahren entstanden
                  zudem Aquarelle und Zeichnungen, die bis heute ihren Umgang mit
                  Linie, Fläche und Farbe beeinflussen.
                </p>

                <p>
                  Ein wichtiger Bestandteil ihres Werdegangs ist die kontinuierliche
                  Auseinandersetzung mit künstlerischen und pädagogischen
                  Fragestellungen. Von 2008 bis 2009 absolvierte sie eine
                  Weiterbildung in Pädagogischer Kunsttherapie an der KatHO NRW unter
                  der Leitung von Professor Domma. In diesem Zusammenhang war sie an
                  mehreren Gemeinschaftsausstellungen beteiligt, unter anderem an der
                  KatHO Aachen sowie in der Aula Carolina Aachen.
                </p>

                <p>
                  Von 2017 bis 2020 studierte sie Freie Kunst an der Europäischen
                  Kunstakademie Trier und schloss das Studium mit dem Diplom ab. Die
                  Abschlussausstellung fand 2020 in den Räumen der Akademie statt.
                </p>

                <p>
                  Ihre Arbeiten entstehen in einem offenen, prozessorientierten
                  Arbeitsablauf. Schichtung, Überarbeitung und das direkte Arbeiten
                  mit dem Material spielen dabei eine zentrale Rolle.
                </p>

                <h2 className="font-serif text-xl text-foreground mt-8">Ausbildung</h2>
                <ul className="list-disc list-inside">
                  <li>2017–2020 — Studium der Freien Kunst, Europäische Kunstakademie Trier, Diplom</li>
                  <li>2008–2009 — Weiterbildung „Pädagogische Kunsttherapie“, KatHO NRW</li>
                </ul>

                <h2 className="font-serif text-xl text-foreground mt-8">Ausstellungen</h2>
                <ul className="list-disc list-inside">
                  <li>2020 — Abschlussausstellung, Europäische Kunstakademie Trier</li>
                  <li>2015 — Kunstroute Aachen</li>
                  <li>2009 — Gemeinschaftsausstellungen, KatHO Aachen</li>
                  <li>2008 — Gemeinschaftsausstellung, Aula Carolina Aachen</li>
                </ul>
              </div>
            </div>
            {/* Empty secondary column for layout consistency */}
            <div className="hidden md:block" />
          </div>
        </motion.article>
      </div>
    </MusealLayout>
  );
};

export default Bio;
