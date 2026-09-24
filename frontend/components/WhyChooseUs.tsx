const stats = [
  { value: "10+", label: "Services" },
  { value: "Mon–Sat", label: "9 AM–9 PM" },
  { value: "Same-day", label: "Work" },
  { value: "Fair", label: "Rates" },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="reveal bg-[#3E2723] py-18 text-[#F7F1E3] sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#e7c96b]">Why people come back</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#fffdf7] sm:text-4xl">
            Straightforward help, no fuss.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {stats.map(({ value, label }) => (
            <div
              key={label}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-sm"
            >
              <div className="text-3xl font-black tracking-[-0.06em] text-[#fffdf7] sm:text-4xl">
                {value}
              </div>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#e7d8b5]">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
