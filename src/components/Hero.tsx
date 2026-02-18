"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Heading — full width */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide"
        >
          SCHERPERE TARGETING, MEER BEET,{" "}
          <span className="text-accent">VOLLE AGENDA</span>
        </motion.h1>

        {/* Description left + logo right */}
        <div className="grid lg:grid-cols-[1fr,auto] gap-8 items-start mt-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-300 max-w-lg"
            >
              FangForm transformeert sportscholen in lead-genererende machines.
              Wij jagen op de juiste prospects met Meta campagnes die bijten.
              Jij vangt ze binnen met een volle agenda aan proeflessen.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                Start Nu
              </a>
              <a
                href="#resultaten"
                className="border border-white/30 hover:border-white text-white font-semibold px-8 py-3.5 rounded-lg transition-colors text-lg"
              >
                Bekijk Resultaten
              </a>
            </motion.div>
          </div>

          {/* Logo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-start justify-center"
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-6 md:p-8">
              <Image
                src="/assets/fangform_white.png"
                alt="FangForm"
                width={280}
                height={280}
                className="w-44 md:w-52 lg:w-60 drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
