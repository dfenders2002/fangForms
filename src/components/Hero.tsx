import Image from "next/image";

export default function Hero() {
	return (
		<section className="relative md:min-h-screen flex md:items-center overflow-hidden pt-28 md:pt-20 pb-16 md:pb-0">
			{/* Background glow */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
			</div>

			<div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6 md:pt-12">
				{/* Heading — full width */}
				<h1
					className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-none tracking-wide animate-fade-up"
				>
					SCHERPERE TARGETING, MEER BEET,{" "}
					<span className="text-accent">VOLLE AGENDA</span>
				</h1>

				{/* Description left + logo right */}
				<div className="flex flex-col lg:flex-row lg:items-stretch gap-8 lg:gap-3 mt-8">
					<div className="flex-1">
						<p
							className="text-lg md:text-xl text-gray-300 max-w-lg animate-fade-up-delay-1"
						>
							Fangform transformeert sportscholen in lead-genererende machines.
							Wij jagen op de juiste prospects met Meta campagnes die bijten.
							Jij vangt ze binnen met een volle agenda aan proeflessen.
						</p>

						<div
							className="mt-6 flex flex-wrap gap-4 animate-fade-up-delay-2"
						>
							<a
								href="#contact"
								className="bg-accent hover:bg-accent-dark text-white font-semibold px-12 py-3.5 rounded-lg transition-colors text-lg"
							>
								Start Nu
							</a>
						</div>
					</div>

					{/* Logo card — desktop only */}
					<div className="hidden lg:block animate-fade-up-delay-1">
						<div className="rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4 h-full flex items-center justify-center">
							<Image
								src="/assets/fangform-logo-trimmed.png"
								alt="FangForm"
								width={140}
								height={140}
								className="w-28 md:w-32 drop-shadow-2xl"
								priority
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
