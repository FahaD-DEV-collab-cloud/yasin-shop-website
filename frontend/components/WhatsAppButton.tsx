import { MapPinned, MessageCircleMore, PhoneCall } from "lucide-react";
import site from "@/src/config/site";

export default function WhatsAppButton() {
  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Assalamualaikum M.KHAN, I want to book a service.")}`;
  const mapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`;

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-5 right-5 z-50 hidden items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-[0_12px_25px_rgba(37,211,102,0.35)] transition-transform duration-200 hover:-translate-y-1 md:inline-flex"
      >
        <MessageCircleMore className="h-5 w-5" />
        WhatsApp
      </a>

      <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-[#eadac0] bg-[#fffdf7]/95 px-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-2 shadow-[0_-8px_30px_rgba(62,39,35,0.08)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-3 gap-2">
          <a
            href={`tel:${site.phone.replace(/\s+/g, "")}`}
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-[#F7F1E3] px-2 py-2.5 text-[#2B2118]"
          >
            <PhoneCall className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">Call</span>
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-[#25D366] px-2 py-2.5 text-white"
          >
            <MessageCircleMore className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">WhatsApp</span>
          </a>

          <a
            href={mapsLink}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center justify-center gap-1 rounded-2xl bg-[#3E2723] px-2 py-2.5 text-[#F7F1E3]"
          >
            <MapPinned className="h-4 w-4" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em]">Location</span>
          </a>
        </div>
      </nav>
    </>
  );
}
