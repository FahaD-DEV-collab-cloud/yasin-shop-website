export type ServicePricingType = "fixed" | "range" | "varies";

export type Service = {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  pricing: {
    type: ServicePricingType;
    amount: string;
    note: string;
  };
  whatToBring: string[];
  turnaroundTime: string;
  icon: string;
};

const services: Service[] = [
  {
    slug: "easypaisa",
    name: "Easypaisa",
    category: "Payments",
    shortDescription: "Cash-in, cash-out, utility payments, and mobile wallet support at your nearest shop.",
    longDescription:
      "We help customers with Easypaisa account services including cash-in, cash-out, bill payments, and wallet-related support. The process is quick, secure, and designed for everyday transactions without the hassle of standing in long queues.",
    pricing: {
      type: "varies",
      amount: "Service charges vary by transaction",
      note: "Rate may change depending on the official Easypaisa fee and service type at the time of transaction.",
    },
    whatToBring: ["CNIC", "Mobile number linked to wallet", "Transaction details or recipient information"],
    turnaroundTime: "Usually done in 5-10 minutes",
    icon: "Wallet",
  },
  {
    slug: "jazzcash",
    name: "JazzCash",
    category: "Payments",
    shortDescription: "Fast JazzCash transfers, top-ups, and account services with easy local support.",
    longDescription:
      "JazzCash services include money transfers, mobile top-ups, utility payments, and profile assistance for common wallet needs. Our team makes the process smooth so customers can complete transactions quickly and confidently.",
    pricing: {
      type: "varies",
      amount: "Service charges vary by transaction",
      note: "Rate may change depending on the official JazzCash fee and transaction amount at the time of service.",
    },
    whatToBring: ["CNIC", "Registered mobile number", "Receiver details or bill reference"],
    turnaroundTime: "Usually done in 5-10 minutes",
    icon: "Smartphone",
  },
  {
    slug: "nadra-e-sahulat",
    name: "NADRA / E-Sahulat",
    category: "Documents",
    shortDescription: "NADRA form support and E-Sahulat services for identity and documentation tasks.",
    longDescription:
      "We assist with NADRA and E-Sahulat-related tasks such as form submission, status checking, and document guidance. The service is helpful for customers who want a smoother visit without confusion about required steps or forms.",
    pricing: {
      type: "varies",
      amount: "Depends on official NADRA/E-Sahulat fee",
      note: "Government fee and service charges may vary based on the official rate at the time of application.",
    },
    whatToBring: ["CNIC or original document", "Required form(s)", "Any previous receipt or reference number if applicable"],
    turnaroundTime: "Usually completed in 15-30 minutes depending on the task",
    icon: "IdCard",
  },
  {
    slug: "online-job-applications",
    name: "Online Job Applications",
    category: "Documents",
    shortDescription: "Help with applying online for jobs, preparing documents, and submitting forms.",
    longDescription:
      "We support online job application processes by helping customers fill forms, prepare CVs, and submit required documentation correctly. This saves time and reduces mistakes when applying to private and public sector roles.",
    pricing: {
      type: "varies",
      amount: "Depends on form and document requirements",
      note: "Some job portals or employers may charge application fees or require additional document processing charges.",
    },
    whatToBring: ["CV or resume", "CNIC", "Educational certificates or experience letters", "Job post link or advertisement"],
    turnaroundTime: "Usually takes 20-45 minutes depending on application details",
    icon: "BriefcaseBusiness",
  },
  {
    slug: "government-schemes",
    name: "Government Schemes",
    category: "Documents",
    shortDescription: "Guidance and support for public welfare schemes and eligibility applications.",
    longDescription:
      "We help residents understand and apply for government benefit schemes, eligibility requirements, and document checklists. Our support is useful for families looking to access official support programs without getting lost in the process.",
    pricing: {
      type: "varies",
      amount: "Depends on scheme and official paperwork",
      note: "Fee depends on the official government rate and any required documentation at the time of service.",
    },
    whatToBring: ["CNIC", "Proof of income or residence if required", "Relevant family records or supporting documents", "Scheme information or reference number"],
    turnaroundTime: "Usually completed in 20-60 minutes depending on the scheme",
    icon: "ShieldCheck",
  },
  {
    slug: "printing",
    name: "Printing",
    category: "Printing",
    shortDescription: "Quick document and assignment printing for students, offices, and everyday needs.",
    longDescription:
      "We print documents, assignments, forms, and study material in a clean and efficient manner. Whether it is black-and-white or simple office printing, the process is fast and dependable for urgent jobs.",
    pricing: {
      type: "range",
      amount: "Rs 20 - 80 per page",
      note: "Final price may vary by paper quality, printing size, and number of copies required.",
    },
    whatToBring: ["Printed or digital file", "USB drive or mobile file access", "Required page count or format"],
    turnaroundTime: "Usually done in 10-20 minutes",
    icon: "Printer",
  },
  {
    slug: "photocopy",
    name: "Photocopy",
    category: "Printing",
    shortDescription: "Affordable photocopying for forms, notes, IDs, certificates, and documents.",
    longDescription:
      "Our photocopy service is ideal for students, professionals, and families who need multiple copies of important documents. We handle daily copying jobs with quick turnaround and careful attention to quality.",
    pricing: {
      type: "fixed",
      amount: "Rs 10 per page",
      note: "Price may change slightly depending on paper quality or document size.",
    },
    whatToBring: ["Original document or paper", "Number of copies needed", "Any special format request"],
    turnaroundTime: "Usually done in 5-15 minutes",
    icon: "Copy",
  },
  {
    slug: "color-printing",
    name: "Color Printing",
    category: "Printing",
    shortDescription: "Color copies and printouts for flyers, photos, and presentation material.",
    longDescription:
      "Color printing is available for invitations, business materials, colorful reports, and personal photos. We provide clear printing output with flexible sizes and quantity options for both small and bulk jobs.",
    pricing: {
      type: "range",
      amount: "Rs 30 - 150 per page",
      note: "Final cost depends on paper quality, color density, and number of pages.",
    },
    whatToBring: ["Digital file or design", "USB or mobile file access", "Preferred size and quantity"],
    turnaroundTime: "Usually done in 15-30 minutes",
    icon: "Palette",
  },
  {
    slug: "bank-services",
    name: "Bank Services",
    category: "Documents",
    shortDescription: "Basic bank form filling, account support, and document assistance for local customers.",
    longDescription:
      "We help customers with routine bank-related tasks such as form filling, account slips, and document submission guidance. This support is useful when people need quick assistance without confusion during a busy banking visit.",
    pricing: {
      type: "varies",
      amount: "Depends on bank form and service type",
      note: "Bank charges and official fees may apply depending on the particular transaction or form.",
    },
    whatToBring: ["CNIC", "Bank form or slip", "Account details or required document copy"],
    turnaroundTime: "Usually done in 10-25 minutes",
    icon: "Landmark",
  },
  {
    slug: "book-binding",
    name: "Book Binding",
    category: "Printing",
    shortDescription: "Professional binding for assignments, thesis copies, notebooks, and reports.",
    longDescription:
      "Book binding gives your papers a clean, durable finish for academic or professional use. We offer simple and premium binding options depending on how long you want the document to last and how formal it should look.",
    pricing: {
      type: "range",
      amount: "Rs 80 - 500 per set",
      note: "Cost varies depending on binding type, number of pages, and quality of cover material.",
    },
    whatToBring: ["Printed pages or assignment", "Cover design if needed", "Preferred binding style"],
    turnaroundTime: "Usually completed in 1-2 hours",
    icon: "BookOpen",
  },
  {
    slug: "id-card-copy",
    name: "ID Card Copy",
    category: "Documents",
    shortDescription: "Simple ID card copying and document duplication for everyday needs.",
    longDescription:
      "We provide clear copies of identity cards and similar documents for personal and official use. This is a quick service for customers who need a clean duplicate without the hassle of dealing with complicated paperwork.",
    pricing: {
      type: "fixed",
      amount: "Rs 20 per copy",
      note: "Price may vary if there are multiple copies or special document handling needs.",
    },
    whatToBring: ["Original ID card or document", "Number of copies required", "Any copy size preference"],
    turnaroundTime: "Usually done in 5-10 minutes",
    icon: "BadgeCheck",
  },
  {
    slug: "songs-movies",
    name: "Songs & Movies",
    category: "Digital",
    shortDescription: "Local media access for songs, movies, and digital entertainment files.",
    longDescription:
      "We provide access to songs and movie files in a convenient local service format for customers who want media downloads or copies. The service is intended for quick, easy access to popular entertainment content in a local shop setup.",
    pricing: {
      type: "range",
      amount: "Rs 50 - 300 per item",
      note: "Price may vary based on file quality, storage size, and media type requested.",
    },
    whatToBring: ["Preferred media request", "Storage device if needed", "Any title or format preference"],
    turnaroundTime: "Usually completed in 10-30 minutes",
    icon: "Music4",
  },
];

export default services;
