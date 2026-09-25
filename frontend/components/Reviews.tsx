const reviews = [
  {
    name: "Ayesha",
    text: "Printing aur photocopy bilkul theek mila. Quick service aur friendly behavior bhi acha tha.",
  },
  {
    name: "Hamza",
    text: "Easypaisa help ke liye yahan aaya tha. Process easy tha aur team ne khoob samjhaya.",
  },
  {
    name: "Sana",
    text: "Job form aur document work ky liye bahut helpful rahe. Same-day kaam kar diya gaya.",
  },
];

export default function Reviews() {
  return (
    <section className="reveal bg-[#f7f1e3] py-18 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">Reviews</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
              People come back for the same reason.
            </h2>
          </div>
          <span className="inline-flex w-fit rounded-full border border-[#e7d7b2] bg-[#fffaf0] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6D4C41]">
            Sample reviews. Replace with real ones.
          </span>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {reviews.map(({ name, text }) => (
            <div
              key={name}
              className="rounded-[1.75rem] border border-[#e7d7b2] bg-[#fffdf7] p-5 shadow-[0_18px_32px_rgba(62,39,35,0.06)]"
            >
              <div className="flex items-center justify-between gap-3 border-b border-dashed border-[#d9c79f] pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#6D4C41]">Customer</p>
                  <h3 className="mt-1 text-lg font-black tracking-[-0.04em] text-[#2B2118]">{name}</h3>
                </div>
                <div className="flex gap-1 text-[#c9a227]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={`${name}-${index}`} className="text-base">★</span>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-sm leading-7 text-[#5d514b]">“{text}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
