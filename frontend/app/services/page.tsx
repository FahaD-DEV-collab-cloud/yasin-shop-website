import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { Home } from "lucide-react";
import { site } from "@/src/config/site";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <div className="h-[72px] w-full bg-[#fffdf7]/80" aria-hidden="true" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-[180px] w-full bg-[#fffdf7]" aria-hidden="true" />,
});

const ServiceCatalog = dynamic(
  () => import("@/components/Services").then((module) => module.ServiceCatalog),
  {
    loading: () => <div className="h-[520px] w-full animate-pulse bg-[#f7f1e3]" aria-hidden="true" />,
  }
);

const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  loading: () => <div className="h-[64px] w-[64px] rounded-full bg-[#25D366]/20" aria-hidden="true" />,
});

export const metadata: Metadata = {
  title: "All Services in Lalian | M Khan Netcafe",
  description:
    "Find printing, photocopy, color printing, Easypaisa, JazzCash, NADRA support, job application help, and digital services in Lalian, Punjab.",
  keywords: [
    "all services Lalian",
    "printing shop Lalian",
    "photocopy Lalian",
    "color printing Lalian",
    "Easypaisa shop Lalian",
    "JazzCash shop Lalian",
    "NADRA E-Sahulat Lalian",
    "job application help Lalian",
    "online forms Lalian",
    "digital service center Lalian",
    "computer shop Lalian",
    "book binding Lalian",
    "document scanning Lalian",
    "ID card copy Lalian",
    "passport size photo Lalian",
    "M Khan Netcafe services Lalian",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "All Services in Lalian | M Khan Netcafe",
    description:
      "Discover all digital, printing, payment, and document services at M Khan Netcafe in Lalian, Punjab.",
    url: "https://yasin-shop-website.vercel.app/services",
    siteName: site.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Services in Lalian | M Khan Netcafe",
    description:
      "Discover all digital, printing, payment, and document services at M Khan Netcafe in Lalian, Punjab.",
  },
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: `All Services | ${site.businessName}`,
  description:
    "Browse printing, photocopy, digital services, online forms, government support, Nadra assistance, and payment services at M KHAN NETCAFE in Lalian.",
  url: "https://mkhannetcafe.com/services",
  isPartOf: {
    "@type": "WebSite",
    name: site.businessName,
    url: "https://mkhannetcafe.com/",
  },
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      <div className="bg-[#F7F1E3] text-[#2B2118]">
        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-[#6d4c41]">
            <Link href="/" className="inline-flex items-center gap-1 font-medium transition hover:text-[#3e2a24]">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <span>/</span>
            <span className="font-semibold text-[#3e2a24]">Services</span>
          </div>

          <div className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#6D4C41]">All Services</p>
            <h1 className="mt-3 text-4xl font-black tracking-[-0.06em] text-[#2B2118] sm:text-5xl">
              Everything you need, in one place.
            </h1>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#5d514b] sm:text-lg">
              Printing, photocopy, payments, job forms, NADRA assistance, digital support, and everyday local help — all under one roof.
            </p>
          </div>

          <ServiceCatalog />
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
