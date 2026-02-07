import { motion } from "framer-motion";
import MusealLayout from "@/components/MusealLayout";

const Contact = () => {
  return (
    <MusealLayout>
      <div className="flex min-h-screen items-start justify-center px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-md"
        >
          <h1 className="font-serif text-3xl text-foreground">Contact</h1>

          <div className="mt-12 space-y-8 font-body text-sm leading-[1.8] text-muted-foreground">
            <p>
              For inquiries regarding available works, exhibitions, or studio
              visits, please reach out by email.
            </p>

            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/70">
                Email
              </p>
              <a
                href="mailto:studio@miamustermann.com"
                className="mt-1 inline-block text-foreground transition-opacity duration-300 hover:opacity-60"
              >
                studio@miamustermann.com
              </a>
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/70">
                Representation
              </p>
              <p className="mt-1 text-foreground">Galerie Eigen + Art</p>
              <p className="text-muted-foreground">
                Auguststraße 26, 10117 Berlin
              </p>
            </div>

            <div>
              <p className="text-xs tracking-[0.15em] uppercase text-muted-foreground/70">
                Instagram
              </p>
              <a
                href="#"
                className="mt-1 inline-block text-foreground transition-opacity duration-300 hover:opacity-60"
              >
                @mia.mustermann
              </a>
            </div>
          </div>

          <p className="mt-16 font-body text-[11px] leading-relaxed text-muted-foreground/50">
            Response times may vary. Thank you for your patience and interest.
          </p>
        </motion.div>
      </div>
    </MusealLayout>
  );
};

export default Contact;
