import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { site } from "@/src/config/site";

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

export const metadata: Metadata = {
  title: `${site.businessName} | Printing, Forms & Digital Services in Lalian`,
  description:
    `${site.businessName} offers printing, photocopy, Easypaisa, JazzCash, NADRA support, online forms, admissions, government service help, and local digital assistance in Lalian.`,
  keywords: [
    "printing shop Lalian",
    "photocopy near me",
    "Easypaisa service Lalian",
    "JazzCash support Lalian",
    "NADRA help Lalian",
    "online job application support",
    "government form assistance",
    "digital services Lalian",
    "computer shop Lalian",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: `${site.businessName} | Printing, Forms & Digital Services in Lalian`,
    description:
      `${site.businessName} helps with printing, photocopy, payments, forms, admissions, and digital support in Lalian at one local shop.`,
    url: "https://mkhannetcafe.com/",
    siteName: site.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} | Printing, Forms & Digital Services in Lalian`,
    description:
      `${site.businessName} helps with printing, photocopy, payments, forms, admissions, and digital support in Lalian at one local shop.`,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.businessName,
  description:
    "Local digital service center offering printing, photocopy, Easypaisa, JazzCash, NADRA, online form support, admissions help, and government service assistance in Lalian.",
  telephone: site.phone,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address,
    addressLocality: "Lalian",
    addressRegion: "Punjab",
    addressCountry: "PK",
  },
  areaServed: "Lalian",
  priceRange: "Rs 10 - 500",
  openingHours: "Mo-Sa 09:00-21:00",
  url: "https://mkhannetcafe.com/",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

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
    </>
  );
}
