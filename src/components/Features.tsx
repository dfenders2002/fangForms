"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const features = [
	{
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
				/>
			</svg>
		),
		title: "Content die converteert",
		description:
			"Authentieke video's van jouw gym, trainers en leden. Gefilmd met professionele apparatuur, geëdit voor maximale impact op social media.",
	},
	{
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"
				/>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"
				/>
			</svg>
		),
		title: "Gerichte Meta Campagnes",
		description:
			"Instagram & Facebook ads geoptimaliseerd op geboekte proeflessen, niet vage engagement. Data gedreven optimalisatie voor maximale ROI.",
	},
	{
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
				/>
			</svg>
		),
		title: "WhatsApp AI Automation",
		description:
			"WhatsApp AI-bot kwalificeert en boekt leads automatisch in. Alleen echt geïnteresseerde mensen in jouw agenda. Volledig op auto-pilot!",
	},
	{
		icon: (
			<svg
				className="w-8 h-8"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					strokeWidth={1.5}
					d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
				/>
			</svg>
		),
		title: "Rapportage & Inzicht",
		description:
			"Real-time dashboard voor inzicht op leads en geboekte proeflessen + maandelijkse campagne rapportage. Volledige transparantie over je resultaten, altijd inzichtelijk.",
	},
];

const SHOWCASE_VIDEO_ID = "ozV-4QRtOR4";

export default function Features() {
	const [activeVideo, setActiveVideo] = useState<string | null>(null);

	return (
		<section
			id="diensten"
			className="scroll-mt-20 md:scroll-mt-24 pt-10 pb-20 md:pt-16 md:pb-32"
		>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4 }}
					className="text-center mb-16"
				>
					<h2 className="font-heading text-4xl md:text-5xl lg:text-6xl tracking-wide">
						ONZE <span className="text-accent">DIENSTEN</span>
					</h2>
					<p className="mt-4 text-gray-400 text-lg max-w-2xl mx-auto">
						Van video tot volle agenda - wij regelen de complete lead generation
						voor jouw sportschool.
					</p>
				</motion.div>

				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{features.map((feature, i) => (
						<motion.div
							key={feature.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4, delay: i * 0.08 }}
							className="group relative p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-accent/50 transition-all duration-300"
						>
							{/* Hover glow */}
							<div className="absolute inset-0 rounded-2xl bg-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

							<div className="relative">
								<div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-4 group-hover:bg-accent/20 transition-colors">
									{feature.icon}
								</div>
								<h3 className="font-heading text-xl tracking-wide mb-2">
									{feature.title}
								</h3>
								<p className="text-gray-400 text-sm leading-relaxed">
									{feature.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>

				{/* Video showcase */}
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.4, delay: 0.1 }}
					className="mt-24"
				>
					<p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-12">
						Ons werk
					</p>
					<div className="flex justify-center">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.4 }}
							className="flex flex-col gap-4 w-full max-w-[300px]"
						>
							{/* Glow behind card */}
							<div className="relative">
								<div className="absolute inset-0 rounded-2xl bg-accent/20 blur-2xl scale-95 opacity-60" />
								<div
									className="relative w-full overflow-hidden rounded-2xl border border-white/10 cursor-pointer group"
									style={{ aspectRatio: "9/16" }}
									onClick={() => setActiveVideo(SHOWCASE_VIDEO_ID)}
								>
									<Image
										src={`https://img.youtube.com/vi/${SHOWCASE_VIDEO_ID}/maxresdefault.jpg`}
										alt="Social Media Edit — FitUnity"
										fill
										sizes="300px"
										className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
									/>
									{/* Dark gradient at bottom */}
									<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
									{/* Play button */}
									<div className="absolute inset-0 flex items-center justify-center">
										<div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-accent/50 group-hover:border-accent/60 transition-all duration-300">
											<svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
												<path d="M8 5v14l11-7z" />
											</svg>
										</div>
									</div>
								</div>
							</div>
							<span className="text-gray-400 text-xs tracking-wide text-center">
								Social Media Edit — FitUnity
							</span>
						</motion.div>
					</div>
				</motion.div>

				{/* Video modal */}
				<AnimatePresence>
					{activeVideo && (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
							onClick={() => setActiveVideo(null)}
						>
							<motion.div
								initial={{ scale: 0.9, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								exit={{ scale: 0.9, opacity: 0 }}
								transition={{ duration: 0.25 }}
								className="relative overflow-hidden rounded-2xl shadow-2xl"
								style={{ width: "min(92vw, 420px)", aspectRatio: "9/16" }}
								onClick={(e) => e.stopPropagation()}
							>
								<iframe
									src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&vq=hd2160`}
									allow="autoplay; fullscreen"
									className="w-full h-full"
								/>
								<button
									onClick={() => setActiveVideo(null)}
									className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/80 transition-colors"
								>
									<svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
										<path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
									</svg>
								</button>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</div>
		</section>
	);
}
