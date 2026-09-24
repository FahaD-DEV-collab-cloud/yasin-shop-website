import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Rates kitnay hain?",
    answer:
      "Rates depend on the service — printing, photocopy, forms, or government work. Aap bas pooch len, hum clear rate bata denge without any confusion.",
  },
  {
    question: "Kaun se time par aana hota hai?",
    answer:
      "Shop opening hours are usually daily from morning to evening, and urgent work is handled as quickly as possible. Aap WhatsApp par message kar ke confirm kar sakte hain.",
  },
  {
    question: "Kis cheez ko le kar aana chahiye?",
    answer:
      "Usually CNIC copy, phone number, and required form or document are enough. Agar government or NADRA service ho to hamain original form ya passport photo bhi chahiye ho sakta hai.",
  },
  {
    question: "Kya same-day kaam ho jata hai?",
    answer:
      "Most common jobs are done the same day, especially photocopying, printing, and form help. Busy days par timing thora change ho sakta hai, but we still try to be quick.",
  },
  {
    question: "Payment kis tarah hota hai?",
    answer:
      "Cash, Easypaisa, and JazzCash support available for most services. Aap jo easiest method use karna chahen, hum guide kar denge.",
  },
];

export default function FAQ() {
  return (
    <section className="reveal bg-[#fffdf7] py-18 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#6D4C41]">FAQ</p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.05em] text-[#2B2118] sm:text-4xl">
            Common questions, clear answers.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map(({ question, answer }) => (
            <details
              key={question}
              className="group rounded-[1.5rem] border border-[#e7d7b2] bg-[#fffdf7] p-4 shadow-[0_12px_26px_rgba(62,39,35,0.04)] transition-all duration-200 open:bg-[#fffaf0]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-[#2B2118]">
                <span>{question}</span>
                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7d7b2] bg-[#fffaf0] text-[#3E2723] transition-transform duration-200 group-open:rotate-180">
                  <ChevronDown className="h-4 w-4" />
                </span>
              </summary>

              <p className="mt-4 max-w-3xl text-sm leading-7 text-[#5d514b]">{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
