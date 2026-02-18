"use client";

import { motion } from "framer-motion";

const packages = [
  {
    name: "Starter",
    price: "€497",
    period: "/maand",
    description: "Perfect om te beginnen met leadgeneratie",
    features: [
      "1 lead formulier",
      "Meta advertenties setup",
      "Basis funnel",
      "Maandelijkse rapportage",
      "E-mail support",
    ],
    popular: false,
  },
  {
    name: "Groei",
    price: "€997",
    period: "/maand",
    description: "Voor sportscholen die serieus willen groeien",
    features: [
      "3 lead formulieren",
      "Meta & Instagram ads",
      "Geavanceerde funnel",
      "Wekelijkse rapportage",
      "A/B testing",
      "Prioriteit support",
    ],
    popular: true,
  },
  {
    name: "Schaal",
    price: "€1.997",
    period: "/maand",
    description: "Maximale groei voor meerdere locaties",
    features: [
      "Onbeperkt formulieren",
      "Alle social media kanalen",
      "Complete funnel strategie",
      "Realtime dashboard",
      "Dedicated account manager",
      "Retargeting campagnes",
      "Landing pages op maat",
    ],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="prijzen" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
            ONZE <span className="text-accent">PAKKETTEN</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
            Kies het pakket dat past bij jouw ambities. Geen verborgen kosten,
            geen lange contracten.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative p-6 md:p-8 rounded-2xl border ${
                pkg.popular
                  ? "border-accent bg-accent/5 scale-[1.02]"
                  : "border-white/10 bg-white/[0.02]"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                  Populair
                </div>
              )}

              <div className="mb-6">
                <h3 className="font-heading text-2xl tracking-wide">
                  {pkg.name}
                </h3>
                <p className="text-gray-400 text-sm mt-1">{pkg.description}</p>
              </div>

              <div className="mb-6">
                <span className="font-heading text-4xl md:text-5xl">
                  {pkg.price}
                </span>
                <span className="text-gray-400">{pkg.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 text-accent flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center font-semibold px-6 py-3 rounded-lg transition-colors ${
                  pkg.popular
                    ? "bg-accent hover:bg-accent-dark text-white"
                    : "border border-white/20 hover:border-white text-white"
                }`}
              >
                Kies {pkg.name}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
