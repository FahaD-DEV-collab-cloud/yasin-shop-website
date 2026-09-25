import type { Metadata } from "next";
import dynamic from "next/dynamic";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, Clock3, Home, MessageCircleMore } from "lucide-react";
import services from "@/src/data/services";
import { site } from "@/src/config/site";
import { buildWhatsAppLink, getServiceWhatsAppMessage } from "@/src/utils/whatsapp";

const Navbar = dynamic(() => import("@/components/Navbar"), {
  loading: () => <div className="h-[72px] w-full bg-[#fffdf7]/80" aria-hidden="true" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-[180px] w-full bg-[#fffdf7]" aria-hidden="true" />,
});

const WhatsAppButton = dynamic(() => import("@/components/WhatsAppButton"), {
  loading: () => <div className="h-[64px] w-[64px] rounded-full bg-[#25D366]/20" aria-hidden="true" />,
});

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found | M Khan Netcafe Lalian",
      description: "Service details not found.",
      alternates: {
        canonical: "/services",
      },
    };
  }

  const nearbyLandmark = site.address.includes("Near") ? site.address.split("Near")[1].trim() : "Lalian";
  const shortDescription = service.shortDescription.replace(/\.$/, "");
  const title = `${service.name} in Lalian | ${site.businessName}`;
  const description = `${shortDescription} in Lalian, near ${nearbyLandmark}.`;
  const canonicalUrl = `https://yasin-shop-website.vercel.app/services/${service.slug}`;

  return {
    title,
    description: description.length > 160 ? `${description.slice(0, 157)}...` : description,
    alternates: {
      canonical: `/services/${service.slug}`,
    },
    keywords: [
      `${service.name} Lalian`,
      `${service.name} in Lalian`,
      `${service.name} near ${nearbyLandmark}`,
      site.businessName,
      `digital service center Lalian`,
      "Lalian Punjab",
    ],
    openGraph: {
      title,
      description,
      siteName: site.businessName,
      url: canonicalUrl,
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    notFound();
  }

  const seed = service.slug.split("").reduce((total, character) => total + character.charCodeAt(0), 0);

  const relatedServices = services
    .filter((item) => item.slug !== service.slug)
    .map((item) => {
      const itemSeed = item.slug.split("").reduce((total, character) => total + character.charCodeAt(0), 0);
      return { item, sortValue: (itemSeed + seed) % 97 };
    })
    .sort((left, right) => left.sortValue - right.sortValue)
    .slice(0, 3)
    .map(({ item }) => item);

  const whatsappLink = buildWhatsAppLink(getServiceWhatsAppMessage(service.name));
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    category: service.category,
    provider: {
      "@type": "LocalBusiness",
      name: site.businessName,
      telephone: site.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address,
        addressLocality: "Lalian",
        addressRegion: "Punjab",
        addressCountry: "PK",
      },
    },
    areaServed: "Lalian",
    description: service.shortDescription,
    serviceType: service.category,
    url: `https://mkhannetcafe.com/services/${service.slug}`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="bg-[#F7F1E3] text-[#2B2118]">
        <Navbar />

        <main className="mx-auto w-full max-w-6xl px-4 pb-20 pt-6 sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center gap-2 text-sm text-[#6d4c41]">
            <Link href="/" className="inline-flex items-center gap-1 font-medium transition hover:text-[#3e2a24]">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="font-medium transition hover:text-[#3e2a24]">
              Services
            </Link>
            <span>/</span>
            <span className="truncate font-semibold text-[#3e2a24]">{service.name}</span>
          </div>

          <article className="overflow-hidden rounded-[28px] border border-[#eadfb6] bg-[#fffdf9]/95 shadow-[0_18px_50px_rgba(62,42,36,0.08)] backdrop-blur-sm">
            <div className="border-b border-[#f0e1b4] bg-[linear-gradient(135deg,rgba(201,162,39,0.12),rgba(255,255,255,0.4))] p-5 sm:p-8 lg:p-10">
              <div className="mb-4 inline-flex items-center rounded-full border border-[#e5d39a] bg-[#f9f0d3] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-[#4d332e]">
                {service.category}
              </div>

              <h1 className="max-w-2xl text-4xl font-black tracking-[-0.06em] text-[#3e2a24] sm:text-5xl lg:text-6xl">
                {service.name}
              </h1>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[#5a453f] sm:text-lg">
                {service.shortDescription}
              </p>
            </div>

            <div className="grid gap-6 p-5 sm:p-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:p-10">
              <div className="space-y-6">
                <section className="rounded-2xl border border-[#eddcb1] bg-[#fffaf1] p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5f55]">
                    Pricing
                  </p>

                  <div className="mt-3">
                    <p className="text-3xl font-black tracking-[-0.06em] text-[#3e2a24] sm:text-4xl">
                      {service.pricing.amount}
                    </p>
                  </div>

                  {(service.pricing.type === "varies" || service.pricing.type === "range") && (
                    <div className="mt-4 rounded-xl border border-[#ebd08b] bg-[#fff2cf] px-3 py-2 text-sm leading-6 text-[#4d332e]">
                      {service.pricing.note}
                    </div>
                  )}
                </section>

                {service.whatToBring.length > 0 && (
                  <section className="rounded-2xl border border-[#eadfb6] bg-white p-5 shadow-sm">
                    <h2 className="text-2xl font-black tracking-[-0.05em] text-[#3e2a24]">
                      What to bring
                    </h2>

                    <ul className="mt-4 space-y-3">
                      {service.whatToBring.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-[#4d332e]">
                          <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-[#e9f4da] text-[#3d6b2d]">
                            <Check className="h-3.5 w-3.5" />
                          </span>
                          <span className="leading-6">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>

              <aside className="space-y-6">
                <div className="rounded-2xl border border-[#eadfb6] bg-[#f8f3ea] p-5 shadow-sm">
                  <div className="flex items-center gap-3 text-[#3e2a24]">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f0e0a8] text-[#5e432e]">
                      <Clock3 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5f55]">
                        Turnaround
                      </p>
                      <p className="mt-1 text-sm font-medium text-[#3e2a24]">
                        {service.turnaroundTime}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-[#d5b76b] bg-[#fff7df] p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#7a5f55]">
                    Details
                  </p>
                  <p className="mt-3 text-base leading-7 text-[#4d332e]">{service.longDescription}</p>
                </div>
              </aside>
            </div>
          </article>

          <div className="sticky bottom-4 z-40 mt-6 flex justify-end px-1 sm:bottom-5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-[0_15px_35px_rgba(37,211,102,0.28)] transition hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-[#25d366]/30 sm:px-6"
              aria-label={`Chat on WhatsApp for ${service.name}`}
            >
              <MessageCircleMore className="h-4 w-4" />
              WhatsApp for rate
            </a>
          </div>

          <section className="mt-12">
            <div className="mb-5 flex items-center justify-between gap-3">
              <h2 className="text-3xl font-black tracking-[-0.06em] text-[#3e2a24] sm:text-4xl">
                Other services you might need
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {relatedServices.map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  className="group rounded-2xl border border-[#eadfb6] bg-[#fffdf9] p-4 shadow-sm transition hover:-translate-y-0.5 hover:border-[#d4b765] hover:shadow-[0_12px_28px_rgba(62,42,36,0.08)]"
                >
                  <div className="mb-3 flex items-center justify-between gap-2">
                    <span className="inline-flex rounded-full bg-[#f5ebd4] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#5c423d]">
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-black tracking-[-0.05em] text-[#3e2a24]">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#5a453f]">{item.shortDescription}</p>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#3e2a24] transition group-hover:text-[#6d4c41]">
                    View service
                    <span aria-hidden="true">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    </>
  );
}
