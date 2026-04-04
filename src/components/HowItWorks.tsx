"use client";

import { motion } from "framer-motion";

const steps = [
	{
		number: "01",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
			</svg>
		),
		title: "Meta Advertenties",
		description: "Authentieke videocontent van jouw gym, ingezet als gerichte Instagram en Facebook advertenties. Volledig gericht op geboekte proeflessen.",
		highlight: false,
	},
	{
		number: "02",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
			</svg>
		),
		title: "Lead Forms",
		description: "Via de advertentie vult de prospect een kort formulier in. Alles komt automatisch in ons systeem terecht en de opvolging gaat direct van start.",
		highlight: false,
	},
	{
		number: "03",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
			</svg>
		),
		title: "AI kwalificeert via WhatsApp",
		description: "Onze AI-bot neemt binnen seconden contact op, stelt de juiste vragen en plant de proefles automatisch in. Alles volledig op auto-pilot.",
		highlight: true,
	},
	{
		number: "04",
		icon: (
			<svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
				<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
			</svg>
		),
		title: "Afspraak in jouw agenda",
		description: "Alleen gekwalificeerde leads landen in jouw agenda. Via ons dashboard heb je altijd live inzicht in je resultaten en geboekte proeflessen.",
		highlight: false,
	},
];

const arrowIcon = (
	<svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
	</svg>
);

export default function HowItWorks() {
	return (
		<section id="diensten" className="scroll-mt-20 md:scroll-mt-24 py-20 md:py-32">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: "0px 0px 200px 0px" }}
					transition={{ duration: 0.4 }}
					className="text-center mb-16 md:mb-20"
				>
					<span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
						Ons systeem
					</span>
					<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
						VAN AD TOT <span className="text-accent">AFSPRAAK</span>
					</h2>
					<p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
						Van de eerste advertentie tot een gekwalificeerde afspraak in jouw agenda. Volledig geautomatiseerd, zodat jij je kunt focussen op wat je het beste doet.
					</p>
				</motion.div>

				{/* Mobile: vertical timeline */}
				<div className="relative max-w-2xl mx-auto lg:hidden">
					<div
						className="absolute left-[23px] top-6 bottom-6 w-px rounded-full bg-gradient-to-b from-accent/20 via-accent/60 to-accent/20"
						aria-hidden
					/>
					<ul className="space-y-0">
						{steps.map((step, i) => (
							<li key={step.number} className="relative flex gap-6 pb-10 last:pb-0">
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									whileInView={{ opacity: 1, scale: 1 }}
									viewport={{ once: true, margin: "0px 0px 200px 0px" }}
									transition={{ duration: 0.35, delay: i * 0.08 }}
									className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-full border-2 flex items-center justify-center ring-4 ring-black ${
										step.highlight
											? "bg-black border-accent text-accent"
											: "bg-black border-accent/40 text-gray-400"
									}`}
								>
									{step.icon}
								</motion.div>
								<motion.div
									initial={{ opacity: 0, y: 16 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "0px 0px 200px 0px" }}
									transition={{ duration: 0.35, delay: i * 0.08 + 0.05 }}
									className={`relative flex-1 min-w-0 rounded-xl border p-6 ${
										step.highlight
											? "border-accent/60 bg-accent/10 shadow-[0_0_40px_-8px_rgba(157,124,236,0.35)]"
											: "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]"
									}`}
								>
									{step.highlight && (
										<span className="absolute -top-3 left-4 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
											Uniek systeem
										</span>
									)}
									<p className={`font-heading text-xs tracking-widest mb-1 ${step.highlight ? "text-accent" : "text-gray-600"}`}>
										{step.number}
									</p>
									<h3 className="font-heading text-lg tracking-wide text-white uppercase mb-2">
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

				{/* Desktop: horizontal grid — equal heights guaranteed by CSS grid rows */}
				<div
					className="hidden lg:grid items-stretch"
					style={{ gridTemplateColumns: "1fr 2rem 1fr 2rem 1fr 2rem 1fr" }}
				>
					{steps.map((step, i) => (
						<>
							<motion.div
								key={step.number}
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: "0px 0px 200px 0px" }}
								transition={{ duration: 0.4, delay: i * 0.08 }}
								className={`relative flex flex-col rounded-2xl border p-6 ${
									step.highlight
										? "border-accent/60 bg-accent/10 shadow-[0_0_40px_-8px_rgba(157,124,236,0.35)]"
										: "border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02]"
								}`}
							>
								{step.highlight && (
									<span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full whitespace-nowrap">
										Uniek systeem
									</span>
								)}
								<div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
									step.highlight ? "bg-accent/20 text-accent" : "bg-white/5 text-gray-400"
								}`}>
									{step.icon}
								</div>
								<p className={`font-heading text-xs tracking-widest mb-1 ${step.highlight ? "text-accent" : "text-gray-600"}`}>
									{step.number}
								</p>
								<h3 className="font-heading text-lg tracking-wide text-white uppercase mb-2">
									{step.title}
								</h3>
								<p className="text-gray-400 text-[15px] leading-relaxed">
									{step.description}
								</p>
							</motion.div>

							{i < steps.length - 1 && (
								<div key={`arrow-${i}`} className="flex items-center justify-center text-accent/40">
									{arrowIcon}
								</div>
							)}
						</>
					))}
				</div>
			</div>
		</section>
	);
}
