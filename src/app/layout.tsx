import type { Metadata } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
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
  title: "FangForm — Scherpere targeting, meer beet, volle agenda",
  description:
    "FangForm transformeert sportscholen in lead-genererende machines. Meta campagnes die bijten, volle agenda aan proeflessen.",
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
        <Analytics />
      </body>
    </html>
  );
}
