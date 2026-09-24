const bannerItems = [
  "Photocopy",
  "Printing",
  "Easypaisa",
  "JazzCash",
  "NADRA",
  "Govt. Forms",
  "ID Card Copy",
  "Book Binding",
  "Online Jobs",
  "Government Schemes",
  "Digital Services",
  "WhatsApp Support",
];

export default function InfiniteBanner() {
  return (
    <div className="border-y border-[#e6d9bb] bg-[#fffaf0]/90">
      <div className="relative overflow-hidden py-3">
        <div className="marquee-track flex min-w-max items-center gap-4 whitespace-nowrap text-sm font-semibold uppercase tracking-[0.2em] text-[#3E2723]">
          {[...bannerItems, ...bannerItems].map((item, index) => (
            <span
              key={`${item}-${index}`}
              className="inline-flex items-center gap-3 rounded-full border border-[#ead8ab] bg-[#fffdf7] px-4 py-2 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-[#C9A227]" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
