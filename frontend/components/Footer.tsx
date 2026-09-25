import { ArrowUpRight, BadgeCheck, Globe, MapPin, MessageCircleMore, Phone } from "lucide-react";
import site from "../src/config/site";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#3E2723,#2E1F1A)] py-12 text-[#F7F1E3]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F7F1E3] text-lg font-black text-[#3E2723] shadow-sm">
                M
              </div>
              <div>
                <p className="text-lg font-black tracking-[0.14em] text-[#fffdf7]">{site.businessName}</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#e9dfd1]">
              Trusted local digital services, printing, documentation and online government assistance for everyday needs.
            </p>

            <div className="mt-5 flex items-center gap-3">
              {site.facebookUrl ? (
                <a href={site.facebookUrl} target="_blank" rel="noreferrer" aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9b96b]/50 bg-[#fffaf0]/5 text-[#f7f1e3] transition-colors hover:text-[#f4dc94]">
                  <Globe className="h-4 w-4" />
                </a>
              ) : null}

              {site.instagramUrl ? (
                <a href={site.instagramUrl} target="_blank" rel="noreferrer" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9b96b]/50 bg-[#fffaf0]/5 text-[#f7f1e3] transition-colors hover:text-[#f4dc94]">
                  <BadgeCheck className="h-4 w-4" />
                </a>
              ) : null}

              <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d9b96b]/50 bg-[#fffaf0]/5 text-[#f7f1e3] transition-colors hover:text-[#f4dc94]">
                <MessageCircleMore className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#fffdf7]">Quick Links</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e9dfd1]">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="inline-flex items-center gap-2 transition-colors hover:text-[#f4dc94]">
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#fffdf7]">Services</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e9dfd1]">
              <li>Photocopy & Printing</li>
              <li>Easypaisa & JazzCash</li>
              <li>NADRA / E-Sahulat</li>
              <li>Job & Govt. Forms</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold text-[#fffdf7]">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-[#e9dfd1]">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d9b96b]" />
                <a href={`tel:${site.phone.replace(/\s+/g, "")}`} className="hover:text-[#f4dc94]">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircleMore className="h-4 w-4 text-[#d9b96b]" />
                <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-[#f4dc94]">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d9b96b]" />
                {site.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#674d45] pt-6 text-center text-sm text-[#e9dfd1]">
          © 2026 {site.businessName}. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
