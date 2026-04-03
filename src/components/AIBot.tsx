"use client";

import { motion } from "framer-motion";

const messages = [
	{ from: "bot", text: "Je spreekt met Sam van Gym X. Ik help je om een proefles in te plannen die past bij jouw doelen. Wat is jouw belangrijkste doel met trainen?", time: "16:47" },
	{ from: "lead", text: "ik wil graag afvallen voor de zomer", time: "16:48" },
	{ from: "bot", text: "Afvallen voor de zomer is een mooi doel! Bij Gym X helpen we je met persoonlijke begeleiding en een plan dat bij jou past. Heb je al eerder getraind, of begin je net?", time: "16:48" },
	{ from: "lead", text: "ik begin net", time: "16:48" },
	{ from: "bot", text: "Helder, dan stemmen we de proefles helemaal af op jouw niveau. Wanneer komt een proefles jou het beste uit?", time: "16:49" },
	{ from: "lead", text: "doordeweeks 's avonds", time: "16:50" },
	{ from: "bot", text: "Ik heb dinsdag om 19:00 beschikbaar. Past dat voor jou?", time: "16:50" },
	{ from: "lead", text: "ja perfect!", time: "16:51" },
	{ from: "bot", text: "Geregeld! Je proefles staat op dinsdag om 19:00. Je ontvangt zo een bevestiging. Tot dan!", time: "16:51" },
];

const stats = [
	{ value: "< 60 sec", label: "Reactietijd na aanmelding" },
	{ value: "24/7", label: "Actief, ook buiten openingstijden" },
	{ value: "0×", label: "Handmatig opvolgen nodig" },
];

export default function AIBot() {
	return (
		<section className="py-20 md:py-32 relative overflow-hidden">
			{/* Background glow */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">

					{/* Left — copy */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<span className="inline-block text-accent text-sm font-semibold uppercase tracking-widest mb-4">
							AI Lead Kwalificatie
						</span>
						<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide leading-none mb-6">
							LEADS DIE ZICHZELF{" "}
							<span className="text-accent">KWALIFICEREN</span>
						</h2>
						<p className="text-gray-300 text-lg leading-relaxed mb-6">
							De meeste bureaus leveren je een lijst met namen. Wij leveren je{" "}
							<span className="text-white font-semibold">geboekte afspraken</span>.
							Zodra een lead binnenkomt pakt onze AI-bot het gesprek op via
							WhatsApp, stelt de juiste vragen en plant de proefles automatisch in.
						</p>
						<p className="text-gray-400 leading-relaxed mb-10">
							Jij spreekt voortaan alleen nog mensen die gemotiveerd zijn, weten
							wat ze willen en al een moment in hun agenda hebben vrijgemaakt.
							De bot regelt de rest volledig op de achtergrond.
						</p>

						{/* Stats */}
						<div className="grid grid-cols-3 gap-4">
							{stats.map((stat, i) => (
								<motion.div
									key={stat.label}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									viewport={{ once: true }}
									transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
									className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center"
								>
									<p className="font-heading text-2xl text-accent tracking-wide">
										{stat.value}
									</p>
									<p className="text-gray-500 text-xs mt-1 leading-snug">
										{stat.label}
									</p>
								</motion.div>
							))}
						</div>
					</motion.div>

					{/* Right — WhatsApp mockup */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.15 }}
						className="flex justify-center lg:justify-end"
					>
						<div className="w-full max-w-sm">
							{/* Phone frame */}
							<div className="rounded-3xl border border-white/10 bg-[#111] shadow-2xl overflow-hidden">
								{/* Chat header */}
								<div className="flex items-center gap-3 px-4 py-3 bg-[#1a1a1a] border-b border-white/5">
									<div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
										<svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
											<path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
										</svg>
									</div>
									<div className="flex-1 min-w-0">
										<p className="text-white text-sm font-semibold">FangForm AI Bot</p>
										<div className="flex items-center gap-1.5">
											<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
											<p className="text-green-400 text-xs">Online</p>
										</div>
									</div>
								</div>

								{/* Messages */}
								<div className="px-3 py-4 space-y-2 bg-[#0d0d0d] min-h-[420px] max-h-[420px] overflow-hidden">
									{messages.map((msg, i) => (
										<motion.div
											key={i}
											initial={{ opacity: 0, y: 10 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{ duration: 0.3, delay: 0.3 + i * 0.07 }}
											className={`flex ${msg.from === "lead" ? "justify-end" : "justify-start"}`}
										>
											<div
												className={`max-w-[78%] rounded-2xl px-3 py-2 text-sm leading-snug ${
													msg.from === "bot"
														? "bg-[#1e1e1e] text-gray-200 rounded-tl-sm"
														: "bg-accent text-white rounded-tr-sm"
												}`}
											>
												<p>{msg.text}</p>
												<p className={`text-[10px] mt-1 text-right ${msg.from === "bot" ? "text-gray-500" : "text-white/60"}`}>
													{msg.time}
												</p>
											</div>
										</motion.div>
									))}
								</div>

								{/* Input bar */}
								<div className="flex items-center gap-2 px-3 py-3 bg-[#1a1a1a] border-t border-white/5">
									<div className="flex-1 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-gray-600 text-sm">
										Typ een bericht...
									</div>
									<div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
										<svg className="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 24 24">
											<path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
										</svg>
									</div>
								</div>
							</div>

						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
