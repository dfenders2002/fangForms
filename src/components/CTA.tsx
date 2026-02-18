"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CTA() {
  const [formData, setFormData] = useState({
    naam: "",
    email: "",
    telefoon: "",
    bericht: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder — connect to form backend
    alert("Bedankt! We nemen snel contact met je op.");
    setFormData({ naam: "", email: "", telefoon: "", bericht: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-accent/15 rounded-full blur-[150px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
            KLAAR OM TE{" "}
            <span className="text-accent">GROEIEN?</span>
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            Laat je gegevens achter en wij nemen binnen 24 uur contact met je
            op.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Naam"
              required
              value={formData.naam}
              onChange={(e) =>
                setFormData({ ...formData, naam: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            />
            <input
              type="email"
              placeholder="E-mailadres"
              required
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
            />
          </div>
          <input
            type="tel"
            placeholder="Telefoonnummer"
            value={formData.telefoon}
            onChange={(e) =>
              setFormData({ ...formData, telefoon: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors"
          />
          <textarea
            placeholder="Je bericht (optioneel)"
            rows={4}
            value={formData.bericht}
            onChange={(e) =>
              setFormData({ ...formData, bericht: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-colors resize-none"
          />
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent-dark text-white font-semibold py-4 rounded-lg transition-colors text-lg"
          >
            Verstuur Bericht
          </button>
        </motion.form>
      </div>
    </section>
  );
}
