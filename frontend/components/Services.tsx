import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  FileText,
  MessageCircleMore,
  Printer,
  Smartphone,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import services from "@/src/data/services";
import { site } from "@/src/config/site";

const iconMap: Record<string, LucideIcon> = {
  easypaisa: WalletCards,
  jazzcash: Smartphone,
  "nadra-e-sahulat": BadgeCheck,
  "online-job-applications": BriefcaseBusiness,
  "government-schemes": BookOpenText,
  printing: Printer,
  photocopy: FileText,
  "color-printing": Printer,
  "bank-services": BookOpenText,
  "book-binding": BookOpenText,
  "id-card-copy": BadgeCheck,
  "songs-movies": Smartphone,
};

const featuredSlugs = [
  "easypaisa",
  "jazzcash",
  "nadra-e-sahulat",
  "online-job-applications",
  "printing",
  "government-schemes",
];

const featured = featuredSlugs
  .map((slug) => services.find((service) => service.slug === slug))
  .filter((service): service is (typeof services)[number] => Boolean(service));

const allServices = services.filter((service) => !featuredSlugs.includes(service.slug));

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
              {featured.slice(0, 2).map((service) => {
                const Icon = iconMap[service.slug] ?? WalletCards;
                const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `Assalam-o-Alaikum, ${service.name} ka rate aur details chahiye.`
                )}`;

                return (
                  <div
                    key={service.slug}
                    className="relative rounded-[1.4rem] border border-[#ead9a7] bg-[#fffaf0] p-4"
                  >
                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Chat on WhatsApp about ${service.name}`}
                      className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full border border-[#e2d4b5] bg-[#fffaf0] text-[#3E2723] transition-all hover:border-[#c9a227] hover:bg-[#fff7e7]"
                    >
                      <MessageCircleMore className="h-4 w-4" />
                    </a>

                    <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">
                      {service.category}
                    </p>

                    <Link href={`/services/${service.slug}`} className="block">
                      <h3 className="mt-2 text-2xl font-black tracking-[-0.05em] text-[#2B2118] transition-colors hover:text-[#6D4C41]">
                        {service.name}
                      </h3>
                    </Link>

                    <p className="mt-3 text-sm leading-6 text-[#5d514b]">{service.shortDescription}</p>

                    <div className="mt-4 flex items-center gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#e2d4b5] bg-[#fff] px-3 py-1.5 text-xs font-semibold text-[#3E2723] transition-colors hover:border-[#c9a227] hover:bg-[#fff7e7]"
                      >
                        Get Service
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </article>

          {featured.slice(2, 5).map((service) => {
            const Icon = iconMap[service.slug] ?? WalletCards;
            const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              `Assalam-o-Alaikum, ${service.name} ka rate aur details chahiye.`
            )}`;

            return (
              <article
                key={service.slug}
                className="group relative rounded-[1.75rem] border border-[#e9dcc2] bg-[#fffdf7] p-5 shadow-[0_18px_36px_rgba(62,39,35,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(62,39,35,0.11)]"
              >
                <div className="absolute right-4 top-4 z-10">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Chat on WhatsApp about ${service.name}`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-[#e2d4b5] bg-[#fffaf0] text-[#3E2723] transition-all hover:border-[#c9a227] hover:bg-[#fff7e7]"
                  >
                    <MessageCircleMore className="h-4 w-4" />
                  </a>
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="rounded-full bg-[#f7f1e3] p-2 text-[#3E2723]">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">
                    {service.category}
                  </span>
                </div>

                <Link href={`/services/${service.slug}`} className="block">
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.05em] text-[#2B2118] transition-colors hover:text-[#6D4C41]">
                    {service.name}
                  </h3>
                </Link>

                <p className="mt-3 text-sm leading-6 text-[#5d514b]">{service.shortDescription}</p>

                <Link
                  href={`/services/${service.slug}`}
                  className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#e2d4b5] bg-[#fffaf0] px-3.5 py-2 text-sm font-semibold text-[#3E2723] transition-all duration-200 hover:border-[#c9a227] hover:bg-[#fff7e7] hover:text-[#6D4C41]"
                >
                  Get Service
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            );
          })}

          <div className="col-span-full w-full overflow-hidden rounded-[2rem] border border-[#e7d7b2] bg-[#fffdf9] shadow-[0_18px_36px_rgba(62,39,35,0.06)]">
            <div className="divide-y divide-dashed divide-[#d8c79d]">
              {allServices.map((service, index) => {
                const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                  `Assalam-o-Alaikum, ${service.name} ka service chahiye.`
                )}`;

                return (
                  <div
                    key={service.slug}
                    className="group flex items-center gap-4 px-5 py-5 transition-colors duration-300 hover:bg-[#fffaf0] sm:gap-6 sm:px-8 sm:py-6"
                  >
                    <span className="hidden w-8 shrink-0 text-[11px] font-semibold tracking-[0.22em] text-[#6D4C41] sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="min-w-0 flex-1 md:grid md:grid-cols-[minmax(0,15rem)_1fr] md:items-baseline md:gap-8">
                      <Link href={`/services/${service.slug}`} className="block">
                        <h3 className="text-base font-bold tracking-[-0.02em] text-[#2B2118] transition-colors hover:text-[#6D4C41] sm:text-lg">
                          {service.name}
                        </h3>
                      </Link>

                      <p className="mt-1 text-sm leading-6 text-[#5d514b] md:mt-0">{service.shortDescription}</p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      <Link
                        href={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 rounded-full border border-[#e7d7b2] bg-[#fffaf0] px-3 py-2 text-xs font-semibold text-[#3E2723] transition-all duration-200 hover:border-[#c9a227] hover:bg-[#f8f0de]"
                      >
                        Get Service
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>

                      <a
                        href={whatsappLink}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Chat on WhatsApp about ${service.name}`}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d7b2] bg-[#fffaf0] text-[#3E2723] transition-all duration-300 hover:translate-x-0.5 hover:border-[#c9a227] hover:bg-[#f8f0de]"
                      >
                        <MessageCircleMore className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                );
              })}
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
