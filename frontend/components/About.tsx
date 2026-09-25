import { FileBadge2, ShieldCheck, Sparkles } from "lucide-react";
import { site } from "@/src/config/site";

export default function About() {
  return (
    <section id="about" className="reveal bg-[#fffdf7] py-18 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
        <div className="rounded-[2rem] border border-[#e7d7b2] bg-[#F7F1E3] p-6 shadow-[0_18px_38px_rgba(62,39,35,0.08)] sm:p-8">
          <div className="rounded-[1.5rem] bg-[linear-gradient(145deg,#3E2723,#4D332E_48%,#6D4C41)] p-6 text-[#F7F1E3] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#d9b96b]">About {site.businessName}</p>
            <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#fffdf7]">Your local digital support hub.</h3>
            <div className="mt-6 space-y-4 text-sm leading-7 text-[#f4ecdf]">
              <p>
                {site.businessName} helps customers with everyday digital, documentation, printing, payment and online government services in one trusted place.
              </p>
              <p>
                Whether you need photocopies, online forms, Easypaisa or JazzCash assistance, NADRA support, or a quick print job, our goal is to make each task simple, fast and stress-free.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">Who We Are</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
            Practical help for everyday digital tasks.
          </h2>

          <div className="mt-8 space-y-5">
            <div className="flex gap-4 rounded-[1.5rem] border border-[#e7d7b2] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-[0_12px_25px_rgba(62,39,35,0.07)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F1E3] text-[#3E2723]">
                <FileBadge2 className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B2118]">Documentation support</h3>
                <p className="mt-1 text-sm leading-7 text-[#5d514b]">
                  Need forms, photocopies, printing or document processing? We make it straightforward and efficient.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-[1.5rem] border border-[#e7d7b2] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-[0_12px_25px_rgba(62,39,35,0.07)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F1E3] text-[#3E2723]">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B2118]">Reliable assistance</h3>
                <p className="mt-1 text-sm leading-7 text-[#5d514b]">
                  We guide customers with care, accuracy and practical support across digital and government-related tasks.
                </p>
              </div>
            </div>

            <div className="flex gap-4 rounded-[1.5rem] border border-[#e7d7b2] bg-white p-4 shadow-sm transition-shadow duration-200 hover:shadow-[0_12px_25px_rgba(62,39,35,0.07)]">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F7F1E3] text-[#3E2723]">
                <Sparkles className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-[#2B2118]">Simple local service</h3>
                <p className="mt-1 text-sm leading-7 text-[#5d514b]">
                  A clean, friendly place where customers can get their digital and document work done without hassle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-14 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl overflow-hidden rounded-[2rem] border border-[#d7c09a] bg-[#f9f3ea] shadow-[0_20px_38px_rgba(62,39,35,0.10)]">
          <div className="relative flex min-h-[260px] items-center justify-center border-2 border-dashed border-[#c9a227] bg-[#f9f3ea] px-6 py-10 sm:px-10">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#6D4C41]">Add your shop photo here</p>
              <div className="mt-4 inline-flex items-center justify-center rounded-full border border-[#d9b96b] bg-[#fffdf7] px-5 py-2 text-sm font-semibold text-[#3E2723]">
                Photo Placeholder
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
