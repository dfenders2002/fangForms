"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

const whatsappMessages = [
	{ from: "bot", text: "Wat is jouw belangrijkste doel met trainen?", time: "16:47" },
	{ from: "lead", text: "ik wil graag afvallen voor de zomer", time: "16:48" },
	{ from: "bot", text: "Mooi doel! Afvallen gaat veel makkelijker met de juiste begeleiding. Heb je al eerder gesport of zou dit de eerste keer zijn?", time: "16:48" },
	{ from: "lead", text: "ik begin net", time: "16:49" },
	{ from: "bot", text: "Helder! Dan is persoonlijke begeleiding precies wat je nodig hebt. Woon je in de regio Gouda?", time: "16:49" },
	{ from: "lead", text: "ja, ik woon in Gouda", time: "16:50" },
	{ from: "bot", text: "✓ Lead gekwalificeerd", time: "16:50", qualified: true },
];

const stats = [
	{ value: "< 60 sec", label: "Reactietijd na aanmelding" },
	{ value: "24/7", label: "Actief, ook buiten openingstijden" },
	{ value: "Op maat", label: "Kwalificatiemethode per bedrijf" },
];

function WhatsAppSlide() {
	return (
		<div className="h-[490px] flex flex-col rounded-3xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden">
			<div className="flex-shrink-0 flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
				<div className="w-9 h-9 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
					<svg className="w-5 h-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
					</svg>
				</div>
				<div className="flex-1 min-w-0">
					<p className="text-white text-sm font-semibold">Fangform AI Bot</p>
					<div className="flex items-center gap-1.5">
						<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
						<p className="text-green-400 text-xs">Online</p>
					</div>
				</div>
			</div>

			<motion.div
				className="flex-1 px-3 py-4 space-y-2 bg-[#0d0d0d] overflow-hidden"
				variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }}
				initial="hidden"
				animate="visible"
			>
				{whatsappMessages.map((msg, i) => (
					<motion.div
						key={i}
						variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
						transition={{ duration: 0.25 }}
						className={`flex ${msg.from === "lead" ? "justify-end" : "justify-start"}`}
					>
						<div className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-snug ${
							msg.qualified
								? "bg-green-500/20 border border-green-500/40 text-green-400 rounded-tl-sm"
								: msg.from === "bot"
								? "bg-[#1e1e1e] text-gray-200 rounded-tl-sm"
								: "bg-[#8B5CF6] text-white rounded-tr-sm"
						}`}>
							<p>{msg.text}</p>
							<p className={`text-[10px] mt-1 text-right ${
								msg.qualified ? "text-green-500/60" : msg.from === "bot" ? "text-gray-500" : "text-white/60"
							}`}>
								{msg.time}
							</p>
						</div>
					</motion.div>
				))}
			</motion.div>

			<div className="flex-shrink-0 flex items-center gap-2 px-3 py-3 bg-[#1a1a1a] border-t border-white/5">
				<div className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-gray-600 text-sm">
					Typ een bericht...
				</div>
				<div className="w-8 h-8 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center">
					<svg className="w-4 h-4 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 24 24">
						<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
					</svg>
				</div>
			</div>
		</div>
	);
}

function LandingPageSlide() {
	return (
		<div className="h-[490px] flex flex-col rounded-3xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden">
			{/* Browser bar */}
			<div className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 bg-[#1a1a1a] border-b border-white/5">
				<div className="flex gap-1.5">
					<span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
					<span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
					<span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
				</div>
				<div className="flex-1 mx-2 rounded-md bg-white/5 border border-white/10 px-3 py-1 text-gray-500 text-xs truncate">
					gym-naam.nl/proefles
				</div>
			</div>

			{/* Hero */}
			<div className="flex-shrink-0 bg-[#8B5CF6]/10 border-b border-[#8B5CF6]/20 px-6 py-5 text-center">
				<p className="font-heading text-xl tracking-wide text-white leading-tight">5KG KWIJT IN 1 MAAND</p>
				<p className="text-gray-400 text-[11px] mt-1">Bewezen aanpak voor mensen die écht resultaat willen zien</p>
			</div>

			{/* Form content */}
			<div className="flex-1 px-6 py-4 bg-[#0d0d0d] flex flex-col justify-center">
				<h3 className="font-heading text-lg tracking-wide text-white mb-0.5">
					GRATIS PROEFLES
				</h3>
				<p className="text-gray-500 text-[11px] mb-4">Wij nemen zo snel mogelijk contact met je op.</p>

				<div className="space-y-2.5 mb-3">
					<div>
						<p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">Naam</p>
						<div className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2 text-gray-600 text-sm">
							Jan de Vries
						</div>
					</div>
					<div>
						<p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">Telefoonnummer</p>
						<div className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2 text-gray-600 text-sm">
							06 12345678
						</div>
					</div>
					<div>
						<p className="text-gray-500 text-[10px] mb-1 uppercase tracking-wider">Doel</p>
						<div className="rounded-lg bg-white/[0.04] border border-white/10 px-3 py-2 text-gray-600 text-sm flex items-center justify-between">
							<span>Afvallen</span>
							<svg className="w-3 h-3 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
							</svg>
						</div>
					</div>
				</div>

				<button className="w-full bg-[#8B5CF6] text-white font-semibold py-2.5 rounded-lg text-sm mt-1">
					Ja, ik wil een proefles →
				</button>
			</div>
		</div>
	);
}

function MetaOptimalisatieSlide() {
	return (
		<div className="h-[490px] flex flex-col rounded-3xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden">
			<div className="flex-shrink-0 flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
				<div className="w-9 h-9 rounded-full bg-[#8B5CF6]/20 flex items-center justify-center flex-shrink-0">
					<svg className="w-5 h-5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
					</svg>
				</div>
				<div>
					<p className="text-white text-sm font-semibold">Meta Pixel Events</p>
					<p className="text-gray-500 text-xs">Live tracking</p>
				</div>
			</div>

			<div className="flex-1 px-5 py-6 bg-[#0d0d0d] flex flex-col justify-between">
				<div className="flex items-center justify-between gap-2 mt-4">
					<div className="flex-1 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-center">
						<div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center mx-auto mb-2">
							<svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
							</svg>
						</div>
						<p className="text-gray-400 text-[11px] font-medium leading-tight">Nieuwe Lead</p>
					</div>

					<svg className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>

					<div className="flex-1 rounded-xl border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 p-3 text-center shadow-[0_0_20px_-4px_rgba(139,92,246,0.3)]">
						<div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-2">
							<svg className="w-3.5 h-3.5 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
								<path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5M12 12.75h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM14.25 15h.008v.008h-.008V15z" />
							</svg>
						</div>
						<p className="text-[#8B5CF6] text-[11px] font-medium leading-tight">Afspraak Geboekt</p>
					</div>

					<svg className="w-3.5 h-3.5 text-[#8B5CF6] flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
						<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
					</svg>

					<div className="flex-1 rounded-xl border border-[#8B5CF6]/40 bg-[#8B5CF6]/10 p-3 text-center shadow-[0_0_20px_-4px_rgba(139,92,246,0.3)]">
						<div className="w-7 h-7 rounded-lg bg-[#8B5CF6]/20 flex items-center justify-center mx-auto mb-2">
							<svg className="w-3.5 h-3.5 text-[#8B5CF6]" fill="currentColor" viewBox="0 0 24 24">
								<path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
							</svg>
						</div>
						<p className="text-[#8B5CF6] text-[11px] font-medium leading-tight">Klant Geworden</p>
					</div>
				</div>

				<div className="flex justify-end mt-5">
					<div className="flex items-center gap-1.5 bg-white/[0.03] border border-white/10 rounded-lg px-3 py-1.5">
						<svg className="w-3 h-3 text-[#8B5CF6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
							<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
						</svg>
						<span className="text-gray-400 text-xs">Signaal naar Meta</span>
					</div>
				</div>

				<div className="mt-5 rounded-xl border border-white/5 bg-white/[0.02] p-4">
					<p className="text-gray-400 text-xs leading-relaxed">
						Elke stap die een lead zet sturen wij als signaal terug naar Meta. Zo leert het algoritme wie jouw beste klanten zijn en vindt het er meer van.
					</p>
				</div>
			</div>
		</div>
	);
}

const slides = [
	{ label: "WhatsApp Kwalificatie", render: () => <WhatsAppSlide /> },
	{ label: "Landingspagina op Maat", render: () => <LandingPageSlide /> },
	{ label: "Slimme Meta Optimalisatie", render: () => <MetaOptimalisatieSlide /> },
];

const ChevronLeft = () => (
	<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
	</svg>
);

const ChevronRight = () => (
	<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
		<path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
	</svg>
);

export default function AIBot() {
	const [current, setCurrent] = useState(0);
	const touchStartX = useRef<number | null>(null);

	const prev = () => setCurrent(c => Math.max(c - 1, 0));
	const next = () => setCurrent(c => Math.min(c + 1, slides.length - 1));

	const handleTouchStart = (e: React.TouchEvent) => {
		touchStartX.current = e.touches[0].clientX;
	};

	const handleTouchEnd = (e: React.TouchEvent) => {
		if (touchStartX.current === null) return;
		const diff = touchStartX.current - e.changedTouches[0].clientX;
		if (Math.abs(diff) > 50) {
			diff > 0 ? next() : prev();
		}
		touchStartX.current = null;
	};

	return (
		<section id="whatsapp-bot" className="py-20 md:py-32 relative overflow-hidden scroll-mt-20 md:scroll-mt-24">
			<div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">

					{/* Left — copy */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -75px 0px" }}
						transition={{ duration: 0.4 }}
					>
						<span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
							PER BEDRIJF ANDERS
						</span>
						<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide leading-none mb-6">
							KWALIFICATIE{" "}
							<span className="text-accent">OP MAAT</span>
						</h2>
						<p className="text-gray-300 text-lg leading-relaxed mb-10">
							De meeste bureaus sturen je een lijst met namen. Wij zorgen dat alleen mensen die écht geïnteresseerd zijn bij jou aankomen. Hoe we dat doen hangt af van jouw bedrijf, niet elke gym of trainer heeft dezelfde aanpak nodig.
						</p>

						<div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
							{stats.map((stat, i) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 10 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true, margin: "0px 0px -75px 0px" }}
									transition={{ duration: 0.2, delay: i * 0.04 }}
									className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
								>
									<p className="font-heading text-2xl text-accent tracking-wide">{stat.value}</p>
									<p className="text-gray-400 text-xs mt-1 leading-snug">{stat.label}</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right — Carousel */}
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px -75px 0px" }}
						transition={{ duration: 0.4, delay: 0.1 }}
						className="flex justify-center lg:justify-end"
					>
						<div className="w-full max-w-sm">
							{/* Label */}
							<div className="mb-3 flex justify-center">
								<span className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-widest bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 px-3 py-1 rounded-full">
									{slides[current].label}
								</span>
							</div>

							{/* Slide + arrows */}
							<div
								className="relative"
								onTouchStart={handleTouchStart}
								onTouchEnd={handleTouchEnd}
							>
								{current > 0 && (
									<button
										onClick={prev}
										className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 transition-all duration-200"
										aria-label="Vorige slide"
									>
										<ChevronLeft />
									</button>
								)}

								<AnimatePresence mode="wait">
									<motion.div
										key={current}
										initial={{ opacity: 0, x: 20 }}
										animate={{ opacity: 1, x: 0 }}
										exit={{ opacity: 0, x: -20 }}
										transition={{ duration: 0.25 }}
									>
										{slides[current].render()}
									</motion.div>
								</AnimatePresence>

								{current < slides.length - 1 && (
									<button
										onClick={next}
										className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-10 w-8 h-8 rounded-full bg-[#1a1a1a] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#8B5CF6]/50 hover:bg-[#8B5CF6]/10 transition-all duration-200"
										aria-label="Volgende slide"
									>
										<ChevronRight />
									</button>
								)}
							</div>

							{/* Dots */}
							<div className="flex items-center justify-center gap-2 mt-4">
								{slides.map((_, i) => (
									<button
										key={i}
										onClick={() => setCurrent(i)}
										className={`rounded-full transition-all duration-300 ${
											i === current
												? "w-6 h-2 bg-[#8B5CF6]"
												: "w-2 h-2 bg-white/20 hover:bg-white/40"
										}`}
										aria-label={`Slide ${i + 1}`}
									/>
								))}
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
