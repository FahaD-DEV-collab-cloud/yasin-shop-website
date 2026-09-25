import type { Metadata } from "next";
import Link from "next/link";
import { Home } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ServiceCatalog } from "@/components/Services";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/src/config/site";

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
