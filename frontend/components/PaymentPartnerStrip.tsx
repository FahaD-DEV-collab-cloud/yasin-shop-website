export default function PaymentPartnerStrip() {
  const partners = [
    { name: "Easypaisa", short: "E", bg: "#eafaf2", accent: "#1ebc74", text: "#0d6b4a" },
    { name: "JazzCash", short: "J", bg: "#fff5d6", accent: "#ffcc3e", text: "#6a4b00" },
  ];

  return (
    <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#6D4C41]">We accept</p>

      <div className="flex flex-wrap items-center gap-2">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="inline-flex items-center gap-2 rounded-full border border-[#ead7a4] px-2.5 py-1.5 shadow-[0_8px_18px_rgba(62,39,35,0.04)]"
            style={{ backgroundColor: partner.bg }}
          >
            <span
              className="flex h-6 w-6 items-center justify-center rounded-full text-[10px] font-black"
              style={{ backgroundColor: partner.accent, color: partner.text }}
            >
              {partner.short}
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.12em]" style={{ color: partner.text }}>
              {partner.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
