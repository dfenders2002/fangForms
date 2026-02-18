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
    <section id="hoe-het-werkt" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
            HOE HET <span className="text-accent">WERKT</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            In drie eenvoudige stappen van nul naar een volle sportschool.
          </p>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-px" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative flex items-start gap-6 mb-16 last:mb-0 md:gap-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Number circle */}
              <div className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full bg-black border-2 border-accent flex items-center justify-center md:absolute md:left-1/2 md:-translate-x-1/2">
                <span className="font-heading text-2xl text-accent">
                  {step.number}
                </span>
              </div>

              {/* Content card */}
              <div
                className={`flex-1 p-6 rounded-2xl border border-white/10 bg-white/[0.02] md:w-[calc(50%-3rem)] ${
                  i % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <h3 className="font-heading text-2xl tracking-wide mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
