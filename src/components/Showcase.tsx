"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const SHOWCASE_VIDEO_ID = "ozV-4QRtOR4";

export default function Showcase() {
	const [activeVideo, setActiveVideo] = useState<string | null>(null);

	return (
		<section id="ons-werk" className="py-20 md:py-32 scroll-mt-20 md:scroll-mt-24">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<p className="text-center text-gray-400 text-sm uppercase tracking-widest mb-12">
					Ons werk
				</p>

				<div className="flex justify-center">
					<motion.div
						initial={{ opacity: 0, y: 16 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true, margin: "0px 0px 400px 0px" }}
						transition={{ duration: 0.3 }}
						className="flex flex-col gap-4 w-full max-w-[300px]"
					>
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
								<div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
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
			</div>

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
								src={`https://www.youtube.com/embed/${activeVideo}?autoplay=1&rel=0&modestbranding=1&vq=hd1440`}
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
		</section>
	);
}
