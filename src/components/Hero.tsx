"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide"
            >
              SCHERPERE TARGETING, MEER BEET,{" "}
              <span className="text-accent">VOLLE AGENDA</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-gray-300 max-w-lg"
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

          {/* Hero visual placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:flex items-center justify-center"
          >
            <div className="relative w-full max-w-md aspect-square rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-20 h-20 mx-auto mb-4 rounded-xl bg-accent/20 flex items-center justify-center">
                  <svg
                    className="w-10 h-10 text-accent"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">
                  Plaats je hero afbeelding in
                  <br />
                  <code className="text-accent text-xs">public/assets/</code>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
