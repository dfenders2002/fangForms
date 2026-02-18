"use client";

import { motion } from "framer-motion";

const CALENDLY_URL = "https://calendly.com/fangform/gesprek"; // TODO: replace with real Calendly URL

export default function CTA() {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
            KLAAR OM TE{" "}
            <span className="text-accent">GROEIEN?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
            Plan een vrijblijvend gesprek en ontdek hoe wij jouw sportschool
            kunnen vullen met nieuwe leden. Van eerste scroll tot betalend lid —
            wij regelen de volledige funnel.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark text-white font-semibold px-10 py-4 rounded-lg transition-colors text-lg"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            Plan een Gesprek
          </a>
          <p className="mt-4 text-gray-500 text-sm">
            Gratis &middot; 30 minuten &middot; Geen verplichtingen
          </p>
        </motion.div>
      </div>
    </section>
  );
}
