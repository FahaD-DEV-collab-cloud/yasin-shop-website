import About from "@/components/About";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import WhatToBring from "@/components/WhatToBring";
import WhatsAppButton from "@/components/WhatsAppButton";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <div className="bg-[#F7F1E3] text-[#2B2118]">
      <Navbar />

      <main className="pb-[calc(4.5rem+env(safe-area-inset-bottom))] md:pb-0">
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Process />
        <WhatToBring />
        <FAQ />
        <Reviews />
        <Contact />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
