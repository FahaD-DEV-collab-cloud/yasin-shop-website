import { ArrowRight, MessageCircleMore } from "lucide-react";
import { buildWhatsAppLink } from "@/src/utils/whatsapp";

export default function MidPageCta() {
  const whatsappLink = buildWhatsAppLink("Assalam-o-Alaikum, mujhe service ke liye WhatsApp par contact karna hai. Please guide karain.");

  return (
    <section className="bg-[#2d1d1a] py-14 text-[#fffaf0] sm:py-16">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e7c96b]">Need help fast?</p>
          <h2 className="mt-3 text-3xl font-black tracking-[-0.06em] text-[#fffdf7] sm:text-4xl">
            Need it done today? Message us now.
          </h2>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c9a227] px-6 py-3.5 text-sm font-semibold text-[#2d1d1a] shadow-[0_16px_28px_rgba(201,162,39,0.25)] transition hover:-translate-y-0.5 hover:bg-[#d9b347]"
        >
          <MessageCircleMore className="h-4 w-4" />
          Chat on WhatsApp
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
