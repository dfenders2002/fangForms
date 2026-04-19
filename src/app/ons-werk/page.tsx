"use client";

import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ease = [0.22, 1, 0.36, 1] as [number, number, number, number];

const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const fadeRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.7, ease } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

export default function OnsWerk() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />

      {/* Block 1 — foto links, tekst rechts */}
      <section className="pt-28 md:pt-32 pb-16 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="font-heading text-5xl md:text-6xl tracking-wide leading-none mb-10 md:mb-14"
          >
            OVER <span className="text-accent">ONS</span>
          </motion.h1>

          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Foto 1 */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              className="relative"
            >
              <div className="absolute inset-0 rounded-2xl bg-accent/15 blur-3xl scale-90 opacity-60 pointer-events-none" />
              <div className="relative w-full max-w-sm mx-auto md:mx-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/assets/foto intern 1.jpg"
                  alt="Fangform — content creatie"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 90vw, 420px"
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            {/* Tekst rechts */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              className="flex flex-col gap-5"
            >
              <motion.p variants={fadeUp} className="text-accent text-xs uppercase tracking-[0.25em]">
                Wie wij zijn
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl tracking-wide leading-none">
                ONZE MISSIE
              </motion.h2>
              <motion.div variants={fadeUp} className="w-12 h-px bg-accent/60" />
              <motion.p variants={fadeUp} className="text-gray-300 text-base leading-relaxed">
                De missie van Fangform is om sportscholen en personal trainers volledig te
                ontzorgen van de jacht naar nieuwe leads. Wij geven jouw bedrijf de premium
                uitstraling die het verdient en vullen jouw agenda met gekwalificeerde leads
                via slimme Meta campagnes en AI-automatisering.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400 text-base leading-relaxed">
                Alles volledig op de automatische piloot, zodat jij je tijd en energie weer
                kunt gebruiken voor de dingen die ertoe doen.
              </motion.p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-px bg-white/5" />
      </div>

      {/* Block 2 — tekst links, foto rechts */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

            {/* Tekst links */}
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              className="flex flex-col gap-5 order-2 md:order-1"
            >
              <motion.p variants={fadeUp} className="text-accent text-xs uppercase tracking-[0.25em]">
                Achter de schermen
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl md:text-5xl tracking-wide leading-none">
                BEHIND THE LENS
              </motion.h2>
              <motion.div variants={fadeUp} className="w-12 h-px bg-accent/60" />
              <motion.p variants={fadeUp} className="text-gray-300 text-base leading-relaxed">
                Van concept tot afgeleverd product, wij regelen de volledige contentstrategie
                en productie voor jouw merk. Elk frame is bewust gekozen om jouw doelgroep
                te raken en te converteren.
              </motion.p>
              <motion.p variants={fadeUp} className="text-gray-400 text-base leading-relaxed">
                Het resultaat is content die ervoor zorgt dat mensen al overtuigd zijn nog voordat ze de deur binnenstappen.
              </motion.p>
            </motion.div>

            {/* Foto 2 */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -80px 0px" }}
              className="relative order-1 md:order-2"
            >
              <div className="absolute inset-0 rounded-2xl bg-accent/15 blur-3xl scale-90 opacity-60 pointer-events-none" />
              <div className="relative w-full max-w-sm mx-auto md:ml-auto md:mr-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <Image
                  src="/assets/foto intern 2.jpg"
                  alt="Fangform — camera werk"
                  width={0}
                  height={0}
                  sizes="(max-width: 768px) 90vw, 420px"
                  quality={90}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 80% 120% at 50% 60%, rgba(157,124,236,0.13) 0%, rgba(157,124,236,0.04) 45%, transparent 70%)",
          }}
        />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease }}
          >
            <p className="text-accent text-xs uppercase tracking-[0.25em] mb-4">Laten we samenwerken</p>
            <h2 className="font-heading text-5xl md:text-6xl tracking-wide leading-none mb-6">
              KLAAR OM TE <span className="text-accent">GROEIEN?</span>
            </h2>
            <p className="text-gray-400 text-base mb-8 max-w-md mx-auto">
              Plan een vrijblijvend gesprek en ontdek wat Fangform voor jouw sportschool kan betekenen.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-semibold px-7 py-3.5 rounded-xl transition-colors text-sm"
            >
              Plan een Gesprek
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
