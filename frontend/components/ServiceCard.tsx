import Link from "next/link";
import { ArrowRight, MessageCircleMore, type LucideIcon } from "lucide-react";
import { site } from "@/src/config/site";

type ServiceCardProps = {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "featured";
};

export default function ServiceCard({
  slug,
  icon: Icon,
  title,
  description,
  variant = "default",
}: ServiceCardProps) {
  const isFeatured = variant === "featured";
  const whatsappLink = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(
    `Assalam-o-Alaikum, ${title} ka rate aur details chahiye.`
  )}`;

  return (
    <article
      className={`group relative overflow-hidden rounded-[1.75rem] border p-5 shadow-[0_12px_28px_rgba(62,39,35,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(62,39,35,0.12)] ${
        isFeatured
          ? "border-[#d4b05d] bg-[linear-gradient(180deg,#fffaf0,#fffdf7)]"
          : "border-[#e9dcc2] bg-[#fffdf7]"
      }`}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-[linear-gradient(90deg,#C9A227,#D7B765,#C9A227)] opacity-80" />

      <div className="absolute right-4 top-4 z-10">
        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`Chat on WhatsApp about ${title}`}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2d4b5] bg-[#fffaf0] text-[#3E2723] transition-all duration-200 hover:border-[#c9a227] hover:bg-[#fff7e7] hover:text-[#6D4C41]"
        >
          <MessageCircleMore className="h-4 w-4" />
        </a>
      </div>

      <div
        className={`relative mb-5 inline-flex rounded-2xl p-3 ${
          isFeatured ? "bg-[#3E2723] text-[#F7F1E3]" : "bg-[#F7F1E3] text-[#3E2723]"
        }`}
      >
        <Icon className="h-6 w-6" />
      </div>

      <Link href={`/services/${slug}`} className="block">
        <h3 className="text-xl font-bold text-[#2B2118] transition-colors group-hover:text-[#6D4C41]">
          {title}
        </h3>
      </Link>

      <p className="mt-3 text-sm leading-7 text-[#5d514b]">{description}</p>

      <div className="mt-5 flex items-center gap-2">
        <Link
          href={`/services/${slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-[#e2d4b5] bg-[#fffaf0] px-3.5 py-2 text-sm font-semibold text-[#3E2723] transition-all duration-200 hover:border-[#c9a227] hover:bg-[#fff7e7] hover:text-[#6D4C41]"
        >
          Get Service
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
