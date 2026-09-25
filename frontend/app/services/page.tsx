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
  title: `All Services | ${site.businessName}`,
  description: `${site.businessName} offers printing, photocopying, digital services, government support, Easypaisa, JazzCash, NADRA, admissions, and more across Lalian.`,
};

export default function ServicesPage() {
  return (
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
  );
}
