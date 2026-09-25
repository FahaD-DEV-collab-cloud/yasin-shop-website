"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  FileText,
  GraduationCap,
  MessageCircleMore,
  Monitor,
  Printer,
  Search,
  Smartphone,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import services from "@/src/data/services";
import { site } from "@/src/config/site";

const tabs = ["All", "Payments", "Documents", "Government", "Education", "Other"] as const;
type Tab = (typeof tabs)[number];

const iconMap: Record<string, LucideIcon> = {
  easypaisa: WalletCards,
  jazzcash: Smartphone,
  "nadra-e-sahulat": BadgeCheck,
  "online-job-applications": BriefcaseBusiness,
  "government-schemes": BookOpenText,
  "government-private-job-applications": BriefcaseBusiness,
  "university-college-admissions": GraduationCap,
  "online-forms-applications": FileText,
  "loan-applications": WalletCards,
  "fbr-income-tax-return-services": FileText,
  "online-registration-verification": BadgeCheck,
  "biometric-services": BadgeCheck,
  "mobile-accessories": Smartphone,
  printing: Printer,
  photocopy: FileText,
  "color-printing": Printer,
  "printing-color-printing": Printer,
  "photocopy-xerox": FileText,
  "composing-typing": FileText,
  "passport-size-photos": Smartphone,
  "photo-editing-document-scanning": FileText,
  "document-scanning": FileText,
  "email-online-account-assistance": Smartphone,
  "all-online-government-services": BadgeCheck,
  "cv-resume-making": FileText,
  "computer-internet-services": Monitor,
  "online-certificates-documents": FileText,
  "visa-travel-related-online-applications": BookOpenText,
  "polio-certificate-online-record-services": BadgeCheck,
  "online-banking-digital-application-assistance": WalletCards,
  "bank-services": BookOpenText,
  "book-binding": BookOpenText,
  "id-card-copy": BadgeCheck,
  "songs-movies": Smartphone,
};

const featuredServices = services.filter((service) => service.featured).slice(0, 4);

const getPriceHint = (service: (typeof services)[number]) => service.pricing.amount || "Custom quote";

const normalize = (value: string) => value.toLowerCase();

const getBucket = (service: (typeof services)[number]): Exclude<Tab, "All"> => {
  const name = normalize(service.name);
  const category = normalize(service.category);

  if (service.name.includes("Easypaisa") || service.name.includes("JazzCash") || category.includes("payment")) {
    return "Payments";
  }

  if (
    name.includes("job") ||
    name.includes("government") ||
    name.includes("scheme") ||
    name.includes("loan") ||
    name.includes("tax") ||
    name.includes("registration") ||
    name.includes("verification") ||
    name.includes("biometric") ||
    name.includes("polio") ||
    name.includes("visa") ||
    name.includes("application") ||
    category.includes("financial") ||
    category.includes("travel")
  ) {
    return "Government";
  }

  if (
    name.includes("admission") ||
    name.includes("resume") ||
    name.includes("typing") ||
    name.includes("passport") ||
    name.includes("photo") ||
    name.includes("scanning") ||
    name.includes("copy") ||
    name.includes("binding") ||
    category.includes("education")
  ) {
    return "Education";
  }

  if (category.includes("print") || category.includes("document") || category.includes("digital")) {
    return "Documents";
  }

  return "Other";
};

export default function Services() {
  const [activeTab, setActiveTab] = useState<Tab>("All");
  const [query, setQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const filteredServices = useMemo(() => {
    const searchValue = normalize(query.trim());

    return services.filter((service) => {
      const matchesSearch =
        !searchValue ||
        normalize(service.name).includes(searchValue) ||
        normalize(service.shortDescription).includes(searchValue);

      const matchesTab = activeTab === "All" || getBucket(service) === activeTab;

      return matchesTab && matchesSearch && !service.featured;
    });
  }, [activeTab, query]);

  const visibleServices = useMemo(() => {
    const defaultLimit = 9;
    return showAll ? filteredServices : filteredServices.slice(0, defaultLimit);
  }, [filteredServices, showAll]);

  const groupedServices = useMemo(() => {
    const groups: Record<string, typeof filteredServices> = {};

    for (const service of visibleServices) {
      const bucket = getBucket(service);
      if (!groups[bucket]) groups[bucket] = [];
      groups[bucket].push(service);
    }

    return groups;
  }, [visibleServices]);

  const hasMore = filteredServices.length > visibleServices.length && !showAll;

  return (
    <section id="services" className="reveal py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">Our Services</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
            Fast service, honest help, and no running around.
          </h2>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#ead9a7] bg-[#fffdf9] p-4 shadow-[0_18px_38px_rgba(62,39,35,0.05)] sm:p-6">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6D4C41]" />
            <input
              value={query}
              onChange={(event) => {
                setQuery(event.target.value);
                setShowAll(false);
              }}
              placeholder="Search services..."
              className="w-full rounded-full border border-[#e2d4b5] bg-[#fffaf0] py-3 pl-11 pr-4 text-sm text-[#2B2118] outline-none transition focus:border-[#c9a227] focus:ring-4 focus:ring-[#e9dcc2]"
            />
          </div>

          <div className="mt-4 overflow-x-auto pb-1">
            <div className="flex min-w-max gap-2">
              {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => {
                      setActiveTab(tab);
                      setShowAll(false);
                    }}
                    className={[
                      "rounded-full border px-4 py-2 text-sm font-semibold transition-all",
                      isActive
                        ? "border-[#3E2723] bg-[#3E2723] text-[#fffdf7] shadow-[0_10px_22px_rgba(62,39,35,0.15)]"
                        : "border-[#e2d4b5] bg-[#fffaf0] text-[#3E2723] hover:border-[#c9a227] hover:bg-[#fff7e7]",
                    ].join(" ")}
                  >
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {featuredServices.map((service) => {
            const Icon = iconMap[service.slug] ?? FileText;
            const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
              `Assalam-o-Alaikum, ${service.name} ka rate aur details chahiye.`
            )}`;

            return (
              <article
                key={service.slug}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-[1.75rem] border border-[#e8d5a3] bg-[#fffdf9] p-5 shadow-[0_18px_36px_rgba(62,39,35,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_44px_rgba(62,39,35,0.09)]"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#c9a227] via-[#e2c77b] to-[#c9a227]" />

                <div className="flex items-center justify-between gap-3">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#3E2723] text-[#f7f1e3] shadow-[0_12px_25px_rgba(62,39,35,0.15)]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="rounded-full border border-[#ead9a7] bg-[#fffaf0] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6D4C41]">
                    Popular
                  </span>
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">{service.category}</p>
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

                <Link href={`/services/${service.slug}`} className="mt-3 block">
                  <h3 className="text-[1.45rem] font-black tracking-[-0.05em] text-[#2B2118] transition-colors hover:text-[#6D4C41]">
                    {service.name}
                  </h3>
                </Link>

                <p className="mt-3 text-sm leading-6 text-[#5d514b]">{service.shortDescription}</p>

                <div className="mt-4 rounded-[0.9rem] border border-[#f0e4be] bg-[#fffaf0] px-3 py-2">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">Price hint</p>
                  <p className="mt-1 text-sm font-semibold text-[#2B2118]">{getPriceHint(service)}</p>
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-[#e2d4b5] bg-[#fffaf0] px-3.5 py-2 text-sm font-semibold text-[#3E2723] transition-all hover:border-[#c9a227] hover:bg-[#fff7e7]"
                  >
                    Get Service
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 rounded-[2rem] border border-[#e7d7b2] bg-[#fffdf9] shadow-[0_18px_36px_rgba(62,39,35,0.06)]">
          {filteredServices.length === 0 ? (
            <div className="flex flex-col items-center justify-center gap-4 px-5 py-12 text-center">
              <p className="text-lg font-bold text-[#2B2118]">No services found.</p>
              <a
                href={`https://wa.me/${site.whatsapp}?text=${encodeURIComponent("Assalam-o-Alaikum, mujhe service ke liye contact karna hai.")}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#e2d4b5] bg-[#fffaf0] px-4 py-2.5 text-sm font-semibold text-[#3E2723] transition-colors hover:border-[#c9a227] hover:bg-[#fff7e7]"
              >
                Message us on WhatsApp
                <MessageCircleMore className="h-4 w-4" />
              </a>
            </div>
          ) : (
            <div className="divide-y divide-dashed divide-[#d8c79d]">
              {activeTab === "All" && Object.entries(groupedServices).length > 0 ? (
                Object.entries(groupedServices).map(([groupName, groupServices]) => (
                  <div key={groupName} className="px-5 py-5 sm:px-8 sm:py-6">
                    <div className="mb-4 flex items-center justify-between gap-3">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#6D4C41]">{groupName}</p>
                      <span className="text-xs text-[#6D4C41]">{groupServices.length} service{groupServices.length === 1 ? "" : "s"}</span>
                    </div>

                    <div className="space-y-3">
                      {groupServices.map((service) => {
                        const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                          `Assalam-o-Alaikum, ${service.name} ka service chahiye.`
                        )}`;

                        return (
                          <div
                            key={service.slug}
                            className="group flex flex-col gap-3 rounded-[1.2rem] border border-[#f0e4be] bg-[#fffdf9] p-4 transition-colors hover:bg-[#fffaf0] sm:flex-row sm:items-center sm:justify-between"
                          >
                            <div className="min-w-0 flex-1">
                              <Link href={`/services/${service.slug}`} className="block">
                                <h3 className="text-base font-bold tracking-[-0.02em] text-[#2B2118] transition-colors hover:text-[#6D4C41] sm:text-lg">
                                  {service.name}
                                </h3>
                              </Link>
                              <p className="mt-1 text-sm leading-6 text-[#5d514b]">{service.shortDescription}</p>
                              <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">
                                {getPriceHint(service)}
                              </p>
                            </div>

                            <div className="flex shrink-0 items-center gap-2">
                              <Link
                                href={`/services/${service.slug}`}
                                className="inline-flex items-center gap-2 rounded-full border border-[#e7d7b2] bg-[#fff] px-3 py-2 text-xs font-semibold text-[#3E2723] transition-colors hover:border-[#c9a227] hover:bg-[#fff7e7]"
                              >
                                Get Service
                                <ArrowRight className="h-3.5 w-3.5" />
                              </Link>

                              <a
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`Chat on WhatsApp about ${service.name}`}
                                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d7b2] bg-[#fff] text-[#3E2723] transition-all duration-300 hover:border-[#c9a227] hover:bg-[#fff7e7]"
                              >
                                <MessageCircleMore className="h-4 w-4" />
                              </a>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))
              ) : (
                visibleServices.map((service) => {
                  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
                    `Assalam-o-Alaikum, ${service.name} ka service chahiye.`
                  )}`;

                  return (
                    <div
                      key={service.slug}
                      className="flex flex-col gap-3 border-b border-dashed border-[#ead7a4] px-5 py-5 transition-colors last:border-b-0 hover:bg-[#fffaf0] sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6"
                    >
                      <div className="min-w-0 flex-1">
                        <Link href={`/services/${service.slug}`} className="block">
                          <h3 className="text-base font-bold tracking-[-0.02em] text-[#2B2118] transition-colors hover:text-[#6D4C41] sm:text-lg">
                            {service.name}
                          </h3>
                        </Link>
                        <p className="mt-1 text-sm leading-6 text-[#5d514b]">{service.shortDescription}</p>
                        <p className="mt-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">
                          {getPriceHint(service)}
                        </p>
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
                          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7d7b2] bg-[#fffaf0] text-[#3E2723] transition-all duration-300 hover:border-[#c9a227] hover:bg-[#f8f0de]"
                        >
                          <MessageCircleMore className="h-4 w-4" />
                        </a>
                      </div>
                    </div>
                  );
                })
              )}

              {hasMore ? (
                <div className="px-5 py-5 text-center sm:px-8">
                  <button
                    type="button"
                    onClick={() => setShowAll(true)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#e2d4b5] bg-[#fffaf0] px-4 py-2 text-sm font-semibold text-[#3E2723] transition-all hover:border-[#c9a227] hover:bg-[#fff7e7]"
                  >
                    Show all services
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              ) : filteredServices.length > 9 ? (
                <div className="px-5 py-5 text-center sm:px-8">
                  <button
                    type="button"
                    onClick={() => setShowAll(false)}
                    className="inline-flex items-center gap-2 rounded-full border border-[#e2d4b5] bg-[#fffaf0] px-4 py-2 text-sm font-semibold text-[#3E2723] transition-all hover:border-[#c9a227] hover:bg-[#fff7e7]"
                  >
                    Show less
                    <ArrowRight className="h-4 w-4 rotate-90" />
                  </button>
                </div>
              ) : null}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
