const steps = [
  {
    number: "01",
    title: "Tell us what you need",
    description: "Printing, photocopy, payment, form, or NADRA help — just tell us what you need.",
  },
  {
    number: "02",
    title: "Bring your details",
    description: "CNIC copy, phone number, or documents ready, and we’ll sort the rest quickly.",
  },
  {
    number: "03",
    title: "Get it done",
    description: "We finish the work fast, explain the next step, and keep it straightforward.",
  },
];

export default function Process() {
  return (
    <section className="reveal bg-[#F7F1E3] py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">How It Works</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
            Simple steps, quick service.
          </h2>
        </div>

        <div className="relative mt-12">
          <div className="absolute left-1/2 top-8 hidden h-[2px] w-[80%] -translate-x-1/2 bg-gradient-to-r from-[#d7c08a] via-[#c9a227] to-[#d7c08a] lg:block" />

          <div className="grid gap-6 lg:grid-cols-3">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="relative rounded-[1.75rem] border border-[#e8d7b5] bg-[#fffdf7] p-6 shadow-[0_12px_28px_rgba(62,39,35,0.06)]">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#d7c08a] bg-[#fffaf0] text-2xl font-black tracking-[-0.06em] text-[#3E2723]">
                    {number}
                  </div>
                  <div className="h-px flex-1 bg-gradient-to-r from-[#d7c08a] via-[#c9a227] to-transparent lg:hidden" />
                </div>

                <h3 className="text-xl font-black tracking-[-0.04em] text-[#2B2118]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d514b]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
