import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <div className="h-[72px] w-full bg-[#fffdf7]/80" aria-hidden="true" />,
});

const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <div className="h-[560px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const Services = dynamic(() => import("@/components/Services"), {
  loading: () => <div className="h-[420px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-[320px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const WhyChooseUs = dynamic(() => import("@/components/WhyChooseUs"), {
  loading: () => <div className="h-[280px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const Process = dynamic(() => import("@/components/Process"), {
  loading: () => <div className="h-[300px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const WhatToBring = dynamic(() => import("@/components/WhatToBring"), {
  loading: () => <div className="h-[260px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const FAQ = dynamic(() => import("@/components/FAQ"), {
  loading: () => <div className="h-[360px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const Reviews = dynamic(() => import("@/components/Reviews"), {
  loading: () => <div className="h-[320px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-[260px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-[180px] w-full bg-[#fffdf7]" aria-hidden="true" />,
});

const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  loading: () => <div className="h-[64px] w-[64px] rounded-full bg-[#25D366]/20" aria-hidden="true" />,
});

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
