"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 500, suffix: "+", label: "Leads Gegenereerd" },
  { value: 30, suffix: "+", label: "Tevreden Klanten" },
  { value: 95, suffix: "%", label: "Klanttevredenheid" },
];

const testimonials = [
  {
    quote:
      "Sinds we met FangForm werken, hebben we elke maand minstens 40 nieuwe leads. Onze boksschool is voller dan ooit!",
    name: "Mohammed A.",
    role: "Eigenaar Boksschool",
  },
  {
    quote:
      "De formulieren die ze bouwen converteren geweldig. Eindelijk een partij die snapt hoe fitness marketing werkt.",
    name: "Lisa V.",
    role: "Manager Fitness Studio",
  },
  {
    quote:
      "Professioneel, snel en resultaatgericht. Binnen twee weken hadden we al de eerste leads binnen.",
    name: "Kevin D.",
    role: "Eigenaar CrossFit Box",
  },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Results() {
  return (
    <section id="resultaten" className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
            BEWEZEN <span className="text-accent">RESULTATEN</span>
          </h2>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-3 gap-4 mb-20 p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02]"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-3xl md:text-5xl lg:text-6xl text-accent">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="mt-2 text-gray-400 text-sm md:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="p-6 rounded-2xl border border-white/10 bg-white/[0.02]"
            >
              {/* Quote icon */}
              <svg
                className="w-8 h-8 text-accent/40 mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H0z" />
              </svg>
              <p className="text-gray-300 leading-relaxed mb-4">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div>
                <p className="font-semibold">{t.name}</p>
                <p className="text-sm text-accent">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
