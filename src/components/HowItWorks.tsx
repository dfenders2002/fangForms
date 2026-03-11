"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Gesprek",
    description:
      "We bespreken jouw doelen, doelgroep en huidige situatie. Samen bepalen we de beste strategie.",
  },
  {
    number: "02",
    title: "Opzet",
    description:
      "Wij maken de advertenties, formulieren en funnel. Alles wordt op maat gebouwd en getest.",
  },
  {
    number: "03",
    title: "Resultaat",
    description:
      "Leads stromen binnen, jij focust op je zaak. Wij optimaliseren continu voor betere resultaten.",
  },
];

export default function HowItWorks() {
  return (
    <section id="hoe-het-werkt" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
            HOE HET <span className="text-accent">WERKT</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            In drie eenvoudige stappen van nul naar een volle sportschool.
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          {/* Timeline track */}
          <div
            className="absolute left-[23px] top-6 bottom-6 w-px rounded-full bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20"
            aria-hidden
          />

          <ul className="space-y-0">
            {steps.map((step, i) => (
              <li key={step.number} className="relative flex gap-6 pb-12 last:pb-0">
                {/* Step marker */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                  className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-black border-2 border-accent flex items-center justify-center ring-4 ring-[var(--bg)]"
                >
                  <span className="font-heading text-sm font-bold text-accent tabular-nums">
                    {step.number}
                  </span>
                </motion.div>

                {/* Card */}
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.15 + 0.1 }}
                  className="flex-1 min-w-0 rounded-xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]"
                >
                  <h3 className="font-heading text-lg font-semibold tracking-wider text-white uppercase mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 text-[15px] leading-relaxed">
                    {step.description}
                  </p>
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
