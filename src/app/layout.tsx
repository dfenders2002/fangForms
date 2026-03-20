import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	variable: "--font-inter",
});

const bebasNeue = Bebas_Neue({
	weight: "400",
	subsets: ["latin"],
	variable: "--font-bebas-neue",
});

export const metadata: Metadata = {
	title: "Fangform — Scherpere targeting, meer beet, volle agenda",
	description:
		"FangForm transformeert sportscholen in lead-genererende machines. Meta campagnes die bijten, volle agenda aan proeflessen.",
	icons: {
		icon: [
			{ url: "/favicon.png", sizes: "32x32", type: "image/png" },
			{ url: "/icon.png", sizes: "48x48", type: "image/png" },
			{ url: "/icon-512.png", sizes: "512x512", type: "image/png" },
		],
		apple: "/apple-touch-icon.png",
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="nl" className={`${inter.variable} ${bebasNeue.variable}`}>
			<body className={`${inter.className} bg-black text-white`}>
				{children}
			</body>
		</html>
	);
}
