import { motion } from "framer-motion";
import MusealLayout from "@/components/MusealLayout";

const Bio = () => {
  return (
    <MusealLayout>
      <div className="flex min-h-screen items-start justify-center px-5 pt-20 pb-12 sm:px-8 sm:py-20 md:py-26">
        <motion.article
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full max-w-5xl"
        >
          <h1 className="font-serif text-2xl text-foreground sm:text-3xl">Bio</h1>

          <div className="mt-8 sm:mt-12 grid gap-8 md:gap-16 md:grid-cols-2">
            <div>
              <div className="space-y-5 font-body text-sm leading-[1.8] text-muted-foreground sm:space-y-6">
                <p>
                  Ich arbeite überwiegend mit Acryl auf Leinwand. Meine
                  künstlerische Praxis hat sich aus einem weitgehend
                  autodidaktischen Studium der Malerei entwickelt. In früheren
                  Jahren entstanden Aquarelle und Zeichnungen, die meinen Blick
                  für Linie, Fläche und Farbwirkung bis heute prägen.
                </p>

                <p>
                  Über viele Jahre hinweg gab ich Malkurse und setzte mich intensiv
                  mit künstlerischen und pädagogischen Fragestellungen auseinander.
                  2008–2009 absolvierte ich eine Weiterbildung in Pädagogischer
                  Kunsttherapie an der KatHO NRW bei Professor Domma. Mich
                  interessierte zunehmend, was im kreativen Prozess innerlich
                  geschieht – wie Aktion, Intuition und Emotion ineinandergreifen
                  und sich gegenseitig beeinflussen. Diese Auseinandersetzung hat
                  mein Verständnis geschärft und mein Arbeiten begleitet.
                </p>

                <p>
                  Mit der Zeit wurde jedoch eine andere Frage drängender:
                  Wie bewege ich mich vom präzisen Erfassen ins Offene?
                </p>

                <p>
                  Die Suche nach einer Antwort führte mich an die Europäische Kunstakademie Trier.
                  Dort stellte ich mich genau dieser Herausforderung – dem Schritt vom Gegenständlichen in die Abstraktion.
                  Das Genaue gibt Halt. Es ordnet, strukturiert, sichert ab. Und doch suchte ich mehr Offenheit,
                  mehr Vertrauen und auch mehr Gelassenheit in Komposition und Ausdruck. Mehr Freiheit. Und fand sie.
                </p>

                <p>
                  Heute reizt mich weniger das präzise Abbild als der lebendige Prozess
                </p>
              </div>
            </div>

            {/* Right column: Ausbildung, Ausstellungen & Arbeitsweise */}
            <div>
              <div className="bio-sections font-body text-sm leading-[1.8] text-muted-foreground">
                <section>
                  <h2 className="font-serif text-xl text-foreground">Ausbildung</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li className="pl-2">2017–2020 Studium der Freien Kunst, Europäische Kunstakademie Trier, Diplom</li>
                    <li className="pl-2">2008–2009 Weiterbildung „Pädagogische Kunsttherapie", KatHO NRW</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground">Ausstellungen</h2>
                  <ul className="mt-4 list-disc space-y-2 pl-5">
                    <li className="pl-2">2020 Abschlussausstellung, Europäische Kunstakademie Trier</li>
                    <li className="pl-2">2015 Kunstroute Aachen</li>
                    <li className="pl-2">2008 - 2009 Gemeinschaftsausstellungen, KatHO Aachen</li>
                    <li className="pl-2">2008 Gemeinschaftsausstellung, Aula Carolina Aachen</li>
                  </ul>
                </section>

                <section>
                  <h2 className="font-serif text-xl text-foreground">Arbeitsweise</h2>
                  <div className="mt-4 space-y-4">
                    <p>
                      Meine Arbeiten entstehen in einem offenen, prozessorientierten
                      Arbeitsablauf. Schichtung, Überarbeitung und das direkte Arbeiten
                      mit dem Material spielen dabei eine zentrale Rolle.
                    </p>
                    <p>
                      Emotionen mit Bildern auszudrücken – weil Worte dafür manchmal nicht reichen.
                      Oft zeigt sich erst im Malprozess oder im fertigen Werk, was wirklich gemeint war.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </motion.article>
      </div>
    </MusealLayout>
  );
};

export default Bio;