const items = [
  { title: "NADRA / E-Sahulat", details: ["CNIC copy", "Phone number", "Passport photo", "Original form if available"] },
  { title: "Job applications", details: ["CNIC copy", "Phone number", "CV / file", "Passport photo"] },
  { title: "Government schemes", details: ["CNIC copy", "Phone number", "Required documents", "Application form"] },
];

export default function WhatToBring() {
  return (
    <section className="reveal py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">What to bring</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
            Keep these ready before you visit.
          </h2>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {items.map(({ title, details }) => (
            <div
              key={title}
              className="rounded-[1.75rem] border border-[#e7d7b2] bg-[#fffdf7] p-5 shadow-[0_16px_32px_rgba(62,39,35,0.07)]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-dashed border-[#d9c79f] pb-4">
                <h3 className="text-xl font-black tracking-[-0.04em] text-[#2B2118]">{title}</h3>
                <span className="rounded-full border border-[#ead9a7] bg-[#fffaf0] px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-[#6D4C41]">
                  Bring
                </span>
              </div>

              <ul className="mt-4 space-y-3">
                {details.map((detail) => (
                  <li key={detail} className="flex items-start gap-3 text-sm leading-6 text-[#5d514b]">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[#c9a227]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 rounded-[1.5rem] border border-[#e7d7b2] bg-[#fffaf0] p-4 text-sm text-[#3E2723] shadow-[0_14px_26px_rgba(62,39,35,0.04)]">
          <span className="font-semibold">Tip:</span> If you’re unsure, message us on WhatsApp first and we’ll tell you exactly what to bring.
        </div>
      </div>
    </section>
  );
}
