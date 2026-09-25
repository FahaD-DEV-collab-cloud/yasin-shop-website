import {
  ArrowRight,
  Award,
  BadgeCheck,
  Clock3,
  Copy,
  FileText,
  Printer,
  ShieldCheck,
  WalletCards,
} from "lucide-react";
import AnnouncementBar from "@/components/AnnouncementBar";
import PaymentPartnerStrip from "@/components/PaymentPartnerStrip";
import site from "@/src/config/site";
import { buildWhatsAppLink } from "@/src/utils/whatsapp";

const quickActions = [
  { label: "Print", message: "Assalam-o-Alaikum, printing service chahiye. Please rate aur time required bata dain.", icon: Printer },
  { label: "Photocopy", message: "Assalam-o-Alaikum, photocopy service chahiye. Please pages aur rate ke bary mein guide karain.", icon: Copy },
  { label: "Easypaisa", message: "Assalam-o-Alaikum, Easypaisa service ke bary mein information chahiye. Please charges aur process bata dain.", icon: WalletCards },
  { label: "NADRA", message: "Assalam-o-Alaikum, NADRA / E-Sahulat form help chahiye. Please requirements aur process ke bary mein guide karain.", icon: BadgeCheck },
];

const trustBadges = [
  { label: "Verified Local Business", icon: ShieldCheck },
  { label: "Fast Turnaround", icon: Clock3 },
  { label: "Cash & Digital Payments", icon: WalletCards },
  { label: `Trusted Since ${site.establishedYear}`, icon: Award },
];

export default function Hero() {
  const whatsappLink = buildWhatsAppLink("Assalam-o-Alaikum, mujhe M KHAN NETCAFE se service ke bary mein information chahiye. Please guide karain.");
  const now = new Date();
  const isOpenDay = now.getDay() >= 1 && now.getDay() <= 6;
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  const isOpenNow = isOpenDay && currentMinutes >= 9 * 60 && currentMinutes < 21 * 60;

  return (
    <>
      <AnnouncementBar announcements={site.announcements} />

      <section id="home" className="relative overflow-hidden pb-14 pt-8 sm:pb-16 lg:pb-20">
        <div className="absolute inset-0 opacity-90" style={{ backgroundImage: "radial-gradient(circle at top left, rgba(201,162,39,0.18), transparent 24%), radial-gradient(circle at bottom right, rgba(109,76,65,0.16), transparent 28%), linear-gradient(135deg, rgba(255,255,255,0.28), rgba(255,255,255,0))" }} />

        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#e0c98d] bg-[#fffaf0] px-3 py-1.5 shadow-[0_8px_18px_rgba(62,39,35,0.04)]">
            <span className="h-2 w-2 rounded-full bg-[#c79d32]" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6D4C41]">
              Trusted Local Service Center
            </p>
          </div>

          <h1
            className="max-w-xl text-4xl font-black leading-[0.9] tracking-[-0.07em] text-[#2B2118] sm:text-5xl lg:text-[4.4rem]"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Print. Pay. Apply. <span className="text-[#6D4C41]">Done.</span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-7 text-[#5d514b] sm:text-lg">
            Form bharwana hai? Photocopy chahiye? Easypaisa, NADRA, job forms, printing — sab yahin, fast, accurate, and easy.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3E2723] px-6 py-3.5 text-sm font-semibold text-[#F7F1E3] shadow-[0_16px_30px_rgba(62,39,35,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2d1d1a]"
            >
              View Services
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#c9a227] bg-[#fff8e8] px-6 py-3.5 text-sm font-semibold text-[#3E2723] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b48d1f] hover:bg-[#f9edd0]"
            >
              WhatsApp Now
            </a>
          </div>

          {/* <div className="mt-7 flex flex-wrap gap-3">
            <div className="soft-ring rounded-[1.15rem] border border-[#e8dcb5] bg-[#fffdf9] px-3 py-2.5 shadow-sm">
              <p className="text-xl font-black tracking-[-0.05em] text-[#2B2118]">{site.customersServed}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">Customers helped</p>
            </div>
            <div className="soft-ring rounded-[1.15rem] border border-[#e8dcb5] bg-[#fffdf9] px-3 py-2.5 shadow-sm">
              <p className="text-xl font-black tracking-[-0.05em] text-[#2B2118]">{site.establishedYear}</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">Since</p>
            </div>
            <div className="soft-ring rounded-[1.15rem] border border-[#e8dcb5] bg-[#fffdf9] px-3 py-2.5 shadow-sm">
              <p className="text-xl font-black tracking-[-0.05em] text-[#2B2118]">9 AM-9 PM</p>
              <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">Open six days</p>
            </div>
          </div> */}

          <div className="mt-7 grid max-w-xl grid-cols-2 gap-2 sm:grid-cols-4">
            {quickActions.map(({ label, message, icon: Icon }) => (
              <a
                key={label}
                href={buildWhatsAppLink(message)}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-2 rounded-full border border-[#e8dcb5] bg-[#fffdf9]/90 px-2.5 py-2 text-[11px] font-medium text-[#3E2723] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#d5b457] hover:bg-[#fffaf0]"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f7f1e3] text-[#3E2723]">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {label}
              </a>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-2">
            {trustBadges.map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-[#e4d3a7] bg-[#fffaf1] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#5d514b]"
              >
                <Icon className="h-3.5 w-3.5 text-[#3E2723]" />
                <span>{label}</span>
              </div>
            ))}
          </div>

          {/* <PaymentPartnerStrip /> */}
        </div>

        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[520px]">
            <div className="absolute -left-6 top-8 h-28 w-28 rounded-full bg-[#C9A227]/20 blur-3xl" />
            <div className="absolute -right-6 bottom-12 h-28 w-28 rounded-full bg-[#6D4C41]/12 blur-3xl" />

            <div
              className="section-shell relative overflow-hidden rounded-[2rem] border-[#e6d6a9] bg-[#fffdf7] p-4"
              style={{ backgroundImage: "radial-gradient(rgba(62,42,36,0.025) 1px, transparent 1px)", backgroundSize: "8px 8px" }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-40" style={{ backgroundImage: "radial-gradient(rgba(62,42,36,0.12) 0.8px, transparent 0.8px)", backgroundSize: "7px 7px" }} />
              <div className="pointer-events-none absolute left-3 top-3 h-8 w-8 border-l border-t border-[#c9a227]/80" />
              <div className="pointer-events-none absolute right-3 top-3 h-8 w-8 border-r border-t border-[#c9a227]/80" />
              <div className="pointer-events-none absolute bottom-3 left-3 h-8 w-8 border-b border-l border-[#c9a227]/80" />
              <div className="pointer-events-none absolute bottom-3 right-3 h-8 w-8 border-b border-r border-[#c9a227]/80" />

              <div className="relative ml-2 mt-2 h-[310px] rounded-[1.5rem] border border-[#e9dcc0] bg-[#f5eedb] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                <div className="absolute inset-x-6 top-6 h-40 rounded-[1.2rem] bg-[#f9f3ea] shadow-[0_16px_34px_rgba(62,39,35,0.06)]" />
                <div className="absolute inset-x-10 top-12 h-36 rotate-[-4deg] rounded-[1.2rem] border border-[#e6d9b8] bg-[#fffdf9] shadow-[0_18px_34px_rgba(62,39,35,0.07)]" />
                <div className="absolute inset-x-14 top-16 h-32 rotate-[3deg] rounded-[1.2rem] border border-[#e6d9b8] bg-[#fffefb] shadow-[0_20px_38px_rgba(62,39,35,0.08)]" />

                <div className="absolute left-10 top-20 z-10 w-[180px] rounded-[1rem] border border-[#ead7a4] bg-[#fffdf7] p-3 shadow-[0_18px_25px_rgba(62,39,35,0.08)]">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f7f1e3] text-[#3E2723]">
                        <FileText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-[9px] uppercase tracking-[0.2em] text-[#6D4C41]">ID</p>
                        <p className="text-[10px] font-bold text-[#2B2118]">Copy</p>
                      </div>
                    </div>
                    <div className="rounded-full border border-[#d4b75b] bg-[#fff7dc] px-1.5 py-0.5 text-[8px] font-semibold uppercase tracking-[0.18em] text-[#3E2723]">
                      CNIC
                    </div>
                  </div>

                  <div className="space-y-1.5 text-[10px] text-[#5d514b]">
                    <div className="flex justify-between border-b border-dashed border-[#e6d9b8] pb-1">
                      <span>Name</span>
                      <span className="font-semibold text-[#2B2118]">M. Khan</span>
                    </div>
                    <div className="flex justify-between border-b border-dashed border-[#e6d9b8] pb-1">
                      <span>Code</span>
                      <span className="font-semibold text-[#2B2118]">A-104</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Valid</span>
                      <span className="font-semibold text-[#2B2118]">Today</span>
                    </div>
                  </div>
                </div>

                <div className="absolute right-8 top-20 z-20 h-20 w-20 rounded-full border-[7px] border-[#e6d9b8] bg-[#fffaf0] shadow-[0_18px_35px_rgba(62,39,35,0.12)]" style={{ transform: "rotate(-12deg)" }}>
                  <div className="flex h-full w-full items-center justify-center rounded-full border border-[#d8bd67] text-center text-[8px] font-bold uppercase tracking-[0.18em] text-[#3E2723]">
                    Trusted
                    <br />
                    Locally
                  </div>
                </div>
              </div>

              <div className="relative mt-4 flex items-center justify-between rounded-[1rem] border border-[#ead7a4] bg-[#fffaf0] px-4 py-3 shadow-[0_8px_20px_rgba(62,39,35,0.06)]">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.24em] text-[#6D4C41]">{isOpenNow ? "Open now" : "Closed now"}</p>
                  <p className="mt-1 text-base font-semibold text-[#2B2118]">{site.hours}</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#3E2723] text-[#f8efe2]">
                  <BadgeCheck className="h-5 w-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}
