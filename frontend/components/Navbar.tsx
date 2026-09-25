"use client";

import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { site } from "@/src/config/site";
import MobileMenu from "./MobileMenu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#d9cab3]/80 bg-[#fffdf7]/85 shadow-[0_8px_28px_rgba(62,39,35,0.06)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6 lg:px-8">
        <a href="/" className="flex items-center gap-3" aria-label={`${site.businessName} home`}>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3E2723,#6D4C41)] text-lg font-black text-[#F7F1E3] shadow-[0_10px_22px_rgba(62,39,35,0.18)]">
            M
          </div>
          <div>
            <p className="text-lg font-black tracking-[0.14em] text-[#3E2723]">{site.businessName}</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#2B2118] transition-all duration-200 hover:text-[#6D4C41]"
            >
              <span className="after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-[#C9A227] after:transition-transform after:duration-200 hover:after:scale-x-100">
                {item.label}
              </span>
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="inline-flex items-center gap-2 rounded-full border border-[#d7c8b3] bg-[#fffdf7] px-3 py-2 text-sm font-semibold text-[#3E2723] transition-all duration-200 hover:border-[#c9a227] hover:bg-[#fffaf0]"
          >
            <PhoneCall className="h-4 w-4" />
            Call
          </a>

          <a
            href="/#contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#3E2723] px-5 py-2.5 text-sm font-semibold text-[#F7F1E3] shadow-[0_12px_24px_rgba(62,39,35,0.14)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2a1c18]"
          >
            <PhoneCall className="h-4 w-4" />
            Contact Us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="inline-flex items-center justify-center rounded-full border border-[#d7c8b3] bg-[#fffdf7] p-2.5 text-[#3E2723] shadow-sm transition-colors hover:bg-[#f3ead9] md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </header>
  );
}
