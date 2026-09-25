import { Clock3, MapPin, MessageCircleMore, Phone } from "lucide-react";
import site from "@/src/config/site";

const contactDetails = [
  { icon: Phone, label: "Phone", value: site.phone, href: `tel:${site.phone.replace(/\s+/g, "")}` },
  { icon: MessageCircleMore, label: "WhatsApp", value: site.phone, href: `https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Assalamualaikum M.KHAN, I need assistance with a service.")}` },
  { icon: MapPin, label: "Address", value: site.address, href: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}` },
  { icon: Clock3, label: "Opening Hours", value: site.hours, href: "#contact" },
];

export default function Contact() {
  return (
    <section id="contact" className="reveal bg-[#fffdf7] py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 rounded-[2rem] border border-[#eadac0] bg-[#fffdf7] p-6 shadow-[0_18px_38px_rgba(62,39,35,0.08)] lg:grid-cols-[1fr_1.05fr] lg:p-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">Contact</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
              Need help with a service? We are here for you.
            </h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined} className="rounded-[1.5rem] border border-[#e7d7b2] bg-[#F7F1E3] p-4 shadow-sm transition-shadow duration-200 hover:shadow-[0_12px_24px_rgba(62,39,35,0.06)]">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fffdf7] text-[#3E2723] shadow-sm">
                    <Icon className="h-5 w-5" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#6D4C41]">{label}</p>
                  <p className="mt-2 text-base font-semibold text-[#2B2118]">{value}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="overflow-hidden rounded-[1.75rem] border border-[#e7d7b2] bg-[#f7f1e3] p-3 shadow-[0_18px_36px_rgba(62,39,35,0.06)]">
              <iframe
                title="M.KHAN location map"
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[280px] w-full rounded-[1.2rem] border-0"
                allowFullScreen
              />
            </div>

            <div className="flex flex-col justify-center rounded-[1.75rem] bg-[linear-gradient(160deg,#3E2723,#4A312D_60%,#6D4C41)] p-6 text-[#F7F1E3] shadow-[0_20px_38px_rgba(62,39,35,0.18)]">
              <p className="text-xs uppercase tracking-[0.25em] text-[#d7b972]">M KHAN NETCAFE</p>
              <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#fffdf7]">Need quick support?</h3>
              <p className="mt-3 max-w-md text-sm leading-7 text-[#f0e7d8]">
                Visit our shop or send a message on WhatsApp for quick assistance with printing, payment, government and digital services.
              </p>

              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Assalamualaikum M.KHAN, I need assistance with a service.")}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-base font-semibold text-white shadow-[0_14px_28px_rgba(37,211,102,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
              >
                <MessageCircleMore className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
