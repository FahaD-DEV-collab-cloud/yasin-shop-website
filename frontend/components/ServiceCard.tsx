import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BriefcaseBusiness,
  Copy,
  FileCheck2,
  FileText,
  GraduationCap,
  Landmark,
  MessageCircleMore,
  Monitor,
  Palette,
  Printer,
  Smartphone,
  WalletCards,
  type LucideIcon,
} from "lucide-react";
import services from "@/src/data/services";
import { buildWhatsAppLink, getServiceRequestMessage } from "@/src/utils/whatsapp";

type Service = (typeof services)[number];

const iconMap: Record<string, LucideIcon> = {
  Wallet: WalletCards,
  Smartphone: Smartphone,
  IdCard: BadgeCheck,
  BriefcaseBusiness: BriefcaseBusiness,
  ShieldCheck: BadgeCheck,
  Printer: Printer,
  Copy: Copy,
  Palette: Palette,
  GraduationCap: GraduationCap,
  FileText: FileText,
  Landmark: Landmark,
  FileCheck2: FileCheck2,
  Monitor: Monitor,
  BookOpenText: BookOpenText,
  BadgeCheck: BadgeCheck,
};

const getPriceHint = (service: Service) => service.pricing.amount || "Custom quote";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? FileText;
  const whatsappLink = buildWhatsAppLink(getServiceRequestMessage(service.name));

  return (
    <article className="group flex h-full flex-col rounded-[1.5rem] border border-[#e8d5a3] bg-[#fffdf9] p-4 shadow-[0_12px_26px_rgba(62,39,35,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-[#d2b66c] hover:shadow-[0_18px_34px_rgba(62,39,35,0.08)]">
      <div className="mb-4 flex items-center justify-between gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ead9a7] bg-[#fffaf0] text-[#3E2723] shadow-[0_8px_16px_rgba(62,39,35,0.04)]">
          <Icon className="h-5 w-5" />
        </span>
        <span className="rounded-full border border-[#ead9a7] bg-[#fffaf0] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">
          {service.category}
        </span>
      </div>

      <Link href={`/services/${service.slug}`} className="block">
        <h3 className="text-xl font-black tracking-[-0.04em] text-[#2B2118] transition-colors hover:text-[#6D4C41]">
          {service.name}
        </h3>
      </Link>

      <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#5d514b]">{service.shortDescription}</p>

      <div className="mt-auto pt-4">
        <div className="mb-3 rounded-xl border border-[#f0e4be] bg-[#fffaf0] px-3 py-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-[#6D4C41]">Price hint</p>
          <p className="mt-1 text-sm font-semibold text-[#2B2118]">{getPriceHint(service)}</p>
        </div>

        <div className="flex items-center gap-2">
          <Link
            href={`/services/${service.slug}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-[#e7d7b2] bg-[#fffaf0] px-3 py-2.5 text-sm font-semibold text-[#3E2723] transition-all hover:border-[#c9a227] hover:bg-[#fff7e7]"
          >
            Get Service
            <ArrowRight className="h-4 w-4" />
          </Link>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label={`Chat on WhatsApp about ${service.name}`}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#e7d7b2] bg-[#fff] text-[#3E2723] transition-all duration-300 hover:border-[#c9a227] hover:bg-[#fff7e7]"
          >
            <MessageCircleMore className="h-4 w-4" />
          </a>
        </div>
      </div>
    </article>
  );
}
