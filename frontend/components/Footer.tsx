import { ArrowUpRight, MapPin, MessageCircleMore, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Why Us", href: "#why-us" },
  { label: "Contact", href: "#contact" },
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
                <p className="text-lg font-black tracking-[0.14em] text-[#fffdf7]">M.KHAN</p>
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-[#e9dfd1]">
              Trusted local digital services, printing, documentation and payment support for everyday needs.
            </p>
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
                03XX-XXXXXXX
              </li>
              <li className="flex items-center gap-2">
                <MessageCircleMore className="h-4 w-4 text-[#d9b96b]" />
                03XX-XXXXXXX
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#d9b96b]" />
                Your Shop Address
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-[#674d45] pt-6 text-center text-sm text-[#e9dfd1]">
          © 2026 M.KHAN. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
