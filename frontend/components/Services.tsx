import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  FileText,
  Printer,
  Smartphone,
  WalletCards,
} from "lucide-react";
import site from "@/src/config/site";

const featured = [
  {
    key: "easypaisa",
    title: "Easypaisa",
    subtitle: "Cash in / out",
    description: "Form bharwana hai? Paisa transfer chahiye? Bas aa jayen.",
    icon: WalletCards,
    tone: "dark",
  },
  {
    key: "jazzcash",
    title: "JazzCash",
    subtitle: "Quick support",
    description: "Cash in, transfer aur bill payment, sab yahin smooth ho jata hai.",
    icon: Smartphone,
    tone: "light",
  },
  {
    key: "nadra",
    title: "NADRA / E-Sahulat",
    subtitle: "CNIC, forms, help",
    description: "CNIC copy, form filling, aur general government support ready.",
    icon: BadgeCheck,
    tone: "light",
  },
  {
    key: "jobs",
    title: "Job Applications",
    subtitle: "CV + forms",
    description: "CV print karwana hai ya online form fill karwana hai? Hum help karte hain.",
    icon: BriefcaseBusiness,
    tone: "light",
  },
  {
    key: "printing",
    title: "Printing & Photocopy",
    subtitle: "Fast & neat",
    description: "A4, A3, notes, forms, documents — clean print aur copy, quick service.",
    icon: Printer,
    tone: "light",
  },
  {
    key: "schemes",
    title: "Government Schemes",
    subtitle: "Application help",
    description: "Scheme apply karni hai? Documents check kar lein, phir form fill kar dein.",
    icon: BookOpenText,
    tone: "light",
  },
];

const allServices = site.services.filter(
  (service) =>
    ![
      "Easypaisa / JazzCash",
      "NADRA / E-Sahulat",
      "Online Job Applications",
      "Government Schemes",
      "Photocopy & Printing",
    ].includes(service.name),
);

export default function Services() {
  return (
    <section id="services" className="reveal py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-left sm:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">Our Services</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
            Fast service, honest help, and no running around.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <article className="group relative overflow-hidden rounded-[2rem] border border-[#e9dcc2] bg-[#fffdf9] p-5 shadow-[0_18px_40px_rgba(62,39,35,0.08)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_48px_rgba(62,39,35,0.12)] md:col-span-2 xl:col-span-2">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#e2c77b] to-[#c9a227]" />
            <div className="flex items-start justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3E2723] text-[#f7f1e3] shadow-[0_12px_25px_rgba(62,39,35,0.15)]">
                <WalletCards className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-[#e9dcc2] bg-[#fffaf0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">
                Most asked
              </span>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.4rem] border border-[#ead9a7] bg-[#fffaf0] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">Cash in/out</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#2B2118]">Easypaisa</h3>
                <p className="mt-3 text-sm leading-6 text-[#5d514b]">
                  Form bharwana hai? Paisa transfer chahiye? Bas aa jayen.
                </p>
              </div>

              <div className="rounded-[1.4rem] border border-[#ead9a7] bg-[#f8f1e3] p-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">Quick wallet help</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#2B2118]">JazzCash</h3>
                <p className="mt-3 text-sm leading-6 text-[#5d514b]">
                  Cash-in, transfer aur bill payment — simple aur fast.
                </p>
              </div>
            </div>
          </article>

          <article className="group rounded-[1.75rem] border border-[#e9dcc2] bg-[#fffdf7] p-5 shadow-[0_18px_36px_rgba(62,39,35,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(62,39,35,0.11)]">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-[#f7f1e3] p-2 text-[#3E2723]">
                <BadgeCheck className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">Govt help</span>
            </div>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.05em] text-[#2B2118]">NADRA / E-Sahulat</h3>
            <p className="mt-3 text-sm leading-6 text-[#5d514b]">
              CNIC-related help, forms aur public service requests — clear aur quick.
            </p>
          </article>

          <article className="group rounded-[1.75rem] border border-[#e9dcc2] bg-[#fffdf7] p-5 shadow-[0_18px_36px_rgba(62,39,35,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(62,39,35,0.11)]">
            <div className="flex items-center justify-between gap-2">
              <span className="rounded-full bg-[#f7f1e3] p-2 text-[#3E2723]">
                <BriefcaseBusiness className="h-4 w-4" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">Apply</span>
            </div>
            <h3 className="mt-5 text-2xl font-black tracking-[-0.05em] text-[#2B2118]">Job Forms</h3>
            <p className="mt-3 text-sm leading-6 text-[#5d514b]">
              CV print karni hai? Online form fill karna hai? Hum dekh lete hain.
            </p>
          </article>

          <div className="col-span-full w-full overflow-hidden rounded-[2rem] border border-[#e7d7b2] bg-[#fffdf9] shadow-[0_18px_36px_rgba(62,39,35,0.06)]">
            <div className="divide-y divide-dashed divide-[#d8c79d]">
              {allServices.map((service, index) => (
                <a
                  key={service.name}
                  href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Assalam-o-Alaikum, ${service.name} ka service chahiye.`
                  )}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#fffaf0] sm:gap-6 sm:px-8 sm:py-6"
                >
                  <span className="hidden w-8 shrink-0 text-[11px] font-semibold tracking-[0.22em] text-[#6D4C41] sm:block">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="min-w-0 flex-1 md:grid md:grid-cols-[minmax(0,15rem)_1fr] md:items-baseline md:gap-8">
                    <h3 className="text-base font-bold tracking-[-0.02em] text-[#2B2118] sm:text-lg">
                      {service.name}
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-[#5d514b] md:mt-0">
                      {service.description}
                    </p>
                  </div>

                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e7d7b2] bg-[#fffaf0] text-[#3E2723] transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#c9a227] group-hover:bg-[#f8f0de]">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-[1.9rem] border border-[#e7d5a7] bg-[#fffaf0] p-5 shadow-[0_16px_30px_rgba(62,39,35,0.06)]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">Need something quick?</p>
              <h3 className="mt-1 text-2xl font-black tracking-[-0.05em] text-[#2B2118]">Message us on WhatsApp and we’ll guide you.</h3>
            </div>
            <a
              href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Assalam-o-Alaikum, main M.KHAN Digital Service Center se service lena chahta hoon.")}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3E2723] px-5 py-3 text-sm font-semibold text-[#F7F1E3] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#2d1d1a]"
            >
              WhatsApp Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
