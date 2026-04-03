import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import AIBot from "@/components/AIBot";
import Showcase from "@/components/Showcase";
// import Results from "@/components/Results";
// import Pricing from "@/components/Pricing";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowItWorks />
      <AIBot />
      <Showcase />
      {/* Bewezen resultaten - commented out for now */}
      {/* <Results /> */}
      {/* Onze pakketten - commented out for now */}
      {/* <Pricing /> */}
      <CTA />
      <Footer />
    </main>
  );
}
