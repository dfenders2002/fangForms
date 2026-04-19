"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrerkjjg";

export default function CTA() {
	const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

	async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault();
		setStatus("sending");

		const form = e.currentTarget;
		const data = new FormData(form);

		try {
			const res = await fetch(FORMSPREE_ENDPOINT, {
				method: "POST",
				body: data,
				headers: { Accept: "application/json" },
			});

			if (res.ok) {
				setStatus("success");
				form.reset();
			} else {
				setStatus("error");
			}
		} catch {
			setStatus("error");
		}
	}

	return (
		<section id="contact" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-32 relative overflow-hidden">
			{/* Background glow */}
			<div
				className="absolute inset-0 overflow-visible"
				style={{
					background:
						"radial-gradient(ellipse 80% 120% at 50% 60%, rgba(157,124,236,0.13) 0%, rgba(157,124,236,0.04) 45%, transparent 70%)",
				}}
			/>

			<div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "0px 0px -75px 0px" }}
					transition={{ duration: 0.3 }}
					className="text-center"
				>
					<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
						KLAAR OM TE <span className="text-accent">GROEIEN?</span>
					</h2>
					<p className="mt-4 text-gray-400 text-lg max-w-xl mx-auto">
						Laat je gegevens achter en wij nemen binnen 24 uur contact met je op
						voor een vrijblijvend gesprek.
					</p>
				</motion.div>

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "0px 0px -75px 0px" }}
					transition={{ duration: 0.3, delay: 0.08 }}
					className="mt-10"
				>
					{status === "success" ? (
						<div className="text-center py-12">
							<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
								<svg className="w-8 h-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
								</svg>
							</div>
							<h3 className="font-heading text-2xl tracking-wide text-white mb-2">BERICHT VERZONDEN!</h3>
							<p className="text-gray-400">We nemen zo snel mogelijk contact met je op.</p>
						</div>
					) : (
						<form onSubmit={handleSubmit} className="space-y-4">
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
								<div>
									<label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
										Naam
									</label>
									<input
										id="name"
										name="name"
										type="text"
										required
										placeholder="Naam"
										className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
									/>
								</div>
								<div>
									<label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
										E-mailadres
									</label>
									<input
										id="email"
										name="email"
										type="email"
										required
										placeholder="E-mailadres"
										className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
									/>
								</div>
							</div>

							<div>
								<label htmlFor="gym" className="block text-sm font-medium text-gray-300 mb-1.5">
									Bedrijf
								</label>
								<input
									id="gym"
									name="gym"
									type="text"
									placeholder="Bedrijfsnaam"
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors"
								/>
							</div>

							<div>
								<label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
									Bericht <span className="text-gray-500">(optioneel)</span>
								</label>
								<textarea
									id="message"
									name="message"
									rows={4}
									placeholder="Beschrijf de situatie of stel een vraag..."
									className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none"
								/>
							</div>

							{status === "error" && (
								<p className="text-red-400 text-sm">
									Er is iets misgegaan. Probeer het opnieuw of mail ons direct.
								</p>
							)}

							<button
								type="submit"
								disabled={status === "sending"}
								className="w-full bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg transition-colors text-base"
							>
								{status === "sending" ? "Verzenden..." : "Stuur een bericht →"}
							</button>

							<p className="text-center text-gray-500 text-sm">
								Gratis &middot; Vrijblijvend &middot; Reactie binnen 24 uur
							</p>
						</form>
					)}
				</motion.div>
			</div>
		</section>
	);
}
