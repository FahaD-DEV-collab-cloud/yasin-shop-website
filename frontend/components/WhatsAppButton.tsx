import { MapPinned, MessageCircleMore, PhoneCall, Sparkles } from "lucide-react";
import site from "@/src/config/site";
import { buildWhatsAppLink, getGenericWhatsAppMessage } from "@/src/utils/whatsapp";

export default function WhatsAppButton() {
  const whatsappLink = buildWhatsAppLink(getGenericWhatsAppMessage());
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[92px] right-5 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:-translate-y-1 md:inline-flex"
      >
        <MessageCircleMore className="h-5 w-5" />
        WhatsApp
      </a>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#eadac0] bg-[#fffdf7]/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-12px_35px_rgba(62,39,35,0.12)] backdrop-blur-xl md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-4 gap-2">
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#ead7a4] bg-[#f7f1e3] px-2 py-2.5 text-[#2B2118] shadow-[0_6px_18px_rgba(62,39,35,0.05)] transition-transform duration-200 active:scale-[0.98]"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="text-[9px] font-bold uppercase tracking-[0.14em]">Call</span>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#8bd7a0] bg-[#25D366] px-2 py-2.5 text-white shadow-[0_10px_22px_rgba(37,211,102,0.28)] transition-transform duration-200 active:scale-[0.98]"
          >
            <MessageCircleMore className="h-4 w-4" />
            <span className="text-[9px] font-bold uppercase tracking-[0.14em]">WhatsApp</span>
          </a>

          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#d4b76b] bg-[#3E2723] px-2 py-2.5 text-[#F7F1E3] shadow-[0_6px_18px_rgba(62,39,35,0.12)] transition-transform duration-200 active:scale-[0.98]"
          >
            <MapPinned className="h-4 w-4" />
            <span className="text-[9px] font-bold uppercase tracking-[0.14em]">Map</span>
          </a>

          <a
            href="#services"
            className="flex flex-col items-center justify-center gap-1.5 rounded-2xl border border-[#ead7a4] bg-[#fffaf0] px-2 py-2.5 text-[#3E2723] shadow-[0_6px_18px_rgba(62,39,35,0.05)] transition-transform duration-200 active:scale-[0.98]"
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-[9px] font-bold uppercase tracking-[0.14em]">Services</span>
          </a>
        </div>
      </nav>
    </>
  );
}
