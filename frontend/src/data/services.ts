export type ServicePricingType = "fixed" | "range" | "varies";

export type Service = {
  slug: string;
  name: string;
  category: string;
  featured?: boolean;
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    featured: true,
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
    slug: "government-private-job-applications",
    name: "Government & Private Job Applications",
    category: "Documents",
    shortDescription: "Support for applying to government and private jobs with forms, documents, and guidance.",
    longDescription:
      "We help customers prepare and submit applications for both government and private job openings. From document checking to form completion, our support makes the application process quicker and more reliable.",
    pricing: {
      type: "varies",
      amount: "Depends on the job form and document requirements",
      note: "Additional charges may apply for printing, document copies, or portal-specific support.",
    },
    whatToBring: ["CNIC", "CV or resume", "Educational documents", "Job advertisement or portal details"],
    turnaroundTime: "Usually completed in 20-45 minutes depending on the application",
    icon: "BriefcaseBusiness",
  },
  {
    slug: "university-college-admissions",
    name: "University & College Admissions",
    category: "Documents",
    shortDescription: "Admission application support for colleges and universities, including document review and form help.",
    longDescription:
      "We assist students with university and college admission applications by helping them prepare forms, check documents, and submit the right information correctly. This helps reduce errors and saves time during the admission process.",
    pricing: {
      type: "varies",
      amount: "Depends on document support and form requirements",
      note: "Charges may vary depending on the number of forms, copies, and documents required.",
    },
    whatToBring: ["CNIC", "Academic documents", "Result cards or certificates", "Admission form details"],
    turnaroundTime: "Usually completed in 30-60 minutes",
    icon: "GraduationCap",
  },
  {
    slug: "online-forms-applications",
    name: "Online Forms & Applications",
    category: "Documents",
    shortDescription: "Quick help with key online forms, applications, and document submission tasks.",
    longDescription:
      "We support customers with online forms and application submissions for education, government, private services, and other formal processes. Whether it is a short form or a lengthy application, we help complete it correctly and efficiently.",
    pricing: {
      type: "varies",
      amount: "Depends on form and processing needs",
      note: "Any official form fee or printing cost is separate from service support.",
    },
    whatToBring: ["CNIC", "Required form or website details", "Supporting documents", "Any reference or previous form data"],
    turnaroundTime: "Usually done in 15-30 minutes",
    icon: "FileText",
  },
  {
    slug: "loan-applications",
    name: "Loan Applications",
    category: "Financial",
    shortDescription: "Help with online banking and loan applications, form filling, and document preparation.",
    longDescription:
      "We assist customers with online loan applications and related digital processes by guiding them through form completion, document checks, and required submission details. This helps reduce delays and confusion while applying for financial support.",
    pricing: {
      type: "varies",
      amount: "Depends on service and document requirements",
      note: "Charges may vary based on form complexity and document processing volume.",
    },
    whatToBring: ["CNIC", "Income or salary proof", "Bank details", "Application information or reference"],
    turnaroundTime: "Usually completed in 20-45 minutes",
    icon: "Landmark",
  },
  {
    slug: "fbr-income-tax-return-services",
    name: "FBR / Income Tax Return Services",
    category: "Financial",
    shortDescription: "Support for tax return filing, document preparation, and official FBR-related assistance.",
    longDescription:
      "We provide support for FBR and income tax return-related services, including document preparation, form understanding, and filing assistance. This helps customers complete official tax tasks more smoothly and with fewer mistakes.",
    pricing: {
      type: "varies",
      amount: "Depends on filing type and document requirements",
      note: "Government fee and document processing charges may apply separately.",
    },
    whatToBring: ["CNIC", "Income records", "Tax-related documents", "Previous return or reference if available"],
    turnaroundTime: "Usually completed in 30-90 minutes",
    icon: "FileCheck2",
  },
  {
    slug: "online-registration-verification",
    name: "Online Registration & Verification",
    category: "Digital",
    shortDescription: "Account registration and online verification help for digital systems and official portals.",
    longDescription:
      "We help customers complete online registrations and verification steps across digital services and official portals. Whether it is account setup or verification guidance, we make the process easier and reduce repeated mistakes.",
    pricing: {
      type: "varies",
      amount: "Depends on the service and portal requirements",
      note: "Any platform fees or official verification charges are separate from support charges.",
    },
    whatToBring: ["CNIC", "Mobile number", "Email address", "Portal or form details"],
    turnaroundTime: "Usually done in 15-30 minutes",
    icon: "ShieldCheck",
  },
  {
    slug: "biometric-services",
    name: "Biometric Services",
    category: "Documents",
    shortDescription: "Biometric support and guidance for identity and official documentation needs.",
    longDescription:
      "We assist with biometric-related tasks and procedures for identity, documentation, and official services. Our support helps customers understand the steps clearly and complete the process with less confusion.",
    pricing: {
      type: "varies",
      amount: "Depends on the service and document type",
      note: "Official biometrics charges or related fees may apply separately.",
    },
    whatToBring: ["CNIC", "Required documents", "Appointment or slip if applicable", "Any prior reference number"],
    turnaroundTime: "Usually completed in 15-30 minutes",
    icon: "Fingerprint",
  },
  {
    slug: "mobile-accessories",
    name: "Mobile Accessories",
    category: "Electronics",
    shortDescription: "Quick assistance with mobile accessories and small device-related support.",
    longDescription:
      "We provide mobile accessory support and basic device-related assistance for everyday customer needs. This includes common accessory needs and quick guidance for simple mobile support tasks.",
    pricing: {
      type: "varies",
      amount: "Depends on the product or accessory",
      note: "Accessory pricing varies by item type, quality, and availability.",
    },
    whatToBring: ["Mobile device", "Accessory requirement", "Budget preference if needed"],
    turnaroundTime: "Usually done in 5-15 minutes",
    icon: "Smartphone",
  },
  {
    slug: "printing-color-printing",
    name: "Printing & Color Printing",
    category: "Printing",
    shortDescription: "Fast black-and-white and color print services for forms, projects, and documents.",
    longDescription:
      "We offer both standard printing and color printing for assignments, reports, forms, and personal documents. The service is quick, dependable, and suitable for school, office, and personal printing needs.",
    pricing: {
      type: "range",
      amount: "Rs 20 - 150 per page",
      note: "Price depends on color, paper, size, and total quantity required.",
    },
    whatToBring: ["Digital file or print copy", "Required quantity", "Preferred paper or color setting"],
    turnaroundTime: "Usually done in 10-30 minutes",
    icon: "Printer",
  },
  {
    slug: "photocopy-xerox",
    name: "Photocopy / Xerox",
    category: "Printing",
    shortDescription: "Affordable photocopy and xerox support for study notes, documents, and forms.",
    longDescription:
      "Our photocopy and xerox service is useful for students, professionals, and families who need clean copies of papers, forms, cards, and certificates. We provide quick service with attention to clarity and quantity.",
    pricing: {
      type: "fixed",
      amount: "Rs 10 per page",
      note: "Price may change based on document size or special paper requirements.",
    },
    whatToBring: ["Original document", "Number of copies needed", "Any special size or formatting request"],
    turnaroundTime: "Usually done in 5-15 minutes",
    icon: "Copy",
  },
  {
    slug: "composing-typing",
    name: "Composing & Typing",
    category: "Documents",
    shortDescription: "Typing and form composing help for applications, letters, reports, and documents.",
    longDescription:
      "We provide typing and composing support for academic, professional, and official documents. From simple letters to detailed forms, we help prepare clean and correct written material for easy submission.",
    pricing: {
      type: "varies",
      amount: "Depends on length and task complexity",
      note: "Pricing varies according to document length, formatting needs, and turnaround time.",
    },
    whatToBring: ["Draft or notes", "Reference examples", "Required format or deadline"],
    turnaroundTime: "Usually done in 20-60 minutes",
    icon: "Type",
  },
  {
    slug: "passport-size-photos",
    name: "Passport Size Photos",
    category: "Photography",
    shortDescription: "Standard passport-size photos and document photo printing support.",
    longDescription:
      "We create passport-size and standard document photos with quick turnaround and quality output. The service is convenient for job, visa, and official documentation needs.",
    pricing: {
      type: "fixed",
      amount: "Depends on quantity and format",
      note: "Charges vary by number of prints and photo size selected.",
    },
    whatToBring: ["CNIC or reference photo if needed", "Preferred quantity", "Any size or format requirement"],
    turnaroundTime: "Usually done in 10-20 minutes",
    icon: "Camera",
  },
  {
    slug: "photo-editing-document-scanning",
    name: "Photo Editing & Document Scanning",
    category: "Digital",
    shortDescription: "Photo editing, scan conversion, and document digitization services.",
    longDescription:
      "We assist with photo editing and document scanning so customers can convert paper files into digital copies quickly and clearly. This saves time and makes paperwork easier to store or share.",
    pricing: {
      type: "varies",
      amount: "Depends on number of pages and editing work",
      note: "Editing complexity, document count, and output quality may affect final pricing.",
    },
    whatToBring: ["Original photo or document", "Digital storage option", "Any editing preferences or output format"],
    turnaroundTime: "Usually completed in 15-45 minutes",
    icon: "ScanLine",
  },
  {
    slug: "document-scanning",
    name: "Document Scanning",
    category: "Digital",
    shortDescription: "Scan and digitize paper documents, forms, certificates, and records.",
    longDescription:
      "We scan physical papers and documents into digital files for easy storage, sharing, or formal use. This service is especially helpful for important records, certificates, and forms that need a digital backup.",
    pricing: {
      type: "varies",
      amount: "Depends on number of pages and output quality",
      note: "Higher-quality scans and multiple pages may increase the price slightly.",
    },
    whatToBring: ["Original documents", "Number of pages", "Preferred file format or output"],
    turnaroundTime: "Usually done in 10-30 minutes",
    icon: "Scan",
  },
  {
    slug: "email-online-account-assistance",
    name: "Email & Online Account Assistance",
    category: "Digital",
    shortDescription: "Support with email setup, online accounts, and digital platform access.",
    longDescription:
      "We help customers set up and manage email, online accounts, and digital access for government, educational, and personal services. This reduces confusion when using online portals and digital systems.",
    pricing: {
      type: "varies",
      amount: "Depends on task complexity and account setup",
      note: "Some services may require extra document checks or portal-specific support.",
    },
    whatToBring: ["Mobile number", "Email details", "CNIC if required", "Portal login or reference information"],
    turnaroundTime: "Usually done in 15-30 minutes",
    icon: "Mail",
  },
  {
    slug: "all-online-government-services",
    name: "All Online Government Services",
    category: "Digital",
    shortDescription: "Support for online government platforms, service portals, and official digital assistance.",
    longDescription:
      "We guide customers through online government services and digital procedures for official tasks, account access, and documentation. This support helps people complete required processes without repeated confusion or unnecessary delays.",
    pricing: {
      type: "varies",
      amount: "Depends on the service and official requirements",
      note: "Official portal or processing fees may apply separately from service support.",
    },
    whatToBring: ["CNIC", "Mobile number", "Portal or service info", "Required supporting documents"],
    turnaroundTime: "Usually completed in 20-60 minutes",
    icon: "BadgeCheck",
  },
  {
    slug: "cv-resume-making",
    name: "CV / Resume Making",
    category: "Documents",
    shortDescription: "Professional resume and CV writing help for job seekers and applicants.",
    longDescription:
      "We help create professional CVs and resumes that are clear, organized, and suitable for job applications. This improves presentation and helps applicants stand out in the hiring process.",
    pricing: {
      type: "varies",
      amount: "Depends on package and document length",
      note: "Complexity, editing, and number of revisions may affect the final price.",
    },
    whatToBring: ["Previous CV or qualifications", "CNIC", "Education and experience details", "Job target or field preference"],
    turnaroundTime: "Usually completed in 30-60 minutes",
    icon: "FileUser",
  },
  {
    slug: "computer-internet-services",
    name: "Computer & Internet Services",
    category: "Digital",
    shortDescription: "Computer setup, internet support, and digital assistance for everyday tasks.",
    longDescription:
      "We help customers with computer and internet-related tasks, including access issues, setup support, and basic digital troubleshooting. The service is helpful for people who need quick help with everyday online work.",
    pricing: {
      type: "varies",
      amount: "Depends on task and troubleshooting needs",
      note: "Service pricing may vary according to the complexity of support needed.",
    },
    whatToBring: ["Device", "Login details if needed", "Issue description", "Internet or account information"],
    turnaroundTime: "Usually done in 15-45 minutes",
    icon: "Monitor",
  },
  {
    slug: "online-certificates-documents",
    name: "Online Certificates / Documents",
    category: "Documents",
    shortDescription: "Help with online certificate requests and official document-related digital tasks.",
    longDescription:
      "We support customers with online certificate and document-related requests, including form completion, verification, and submission guidance. This is useful for official records, certificates, and document needs in digital format.",
    pricing: {
      type: "varies",
      amount: "Depends on request type and paperwork",
      note: "Official or portal-specific fees may be separate from service support.",
    },
    whatToBring: ["CNIC", "Certificate or document details", "Reference or form information", "Any previous record if applicable"],
    turnaroundTime: "Usually completed in 20-60 minutes",
    icon: "FileBadge",
  },
  {
    slug: "visa-travel-related-online-applications",
    name: "Visa & Travel-Related Online Applications",
    category: "Travel",
    shortDescription: "Support for visa and travel-related online forms, applications, and document processing.",
    longDescription:
      "We help customers with visa and travel-related online applications by guiding them through form completion, document preparation, and submission steps. This reduces confusion and helps make the process smoother before travel.",
    pricing: {
      type: "varies",
      amount: "Depends on application type and document support",
      note: "Visa fees and official charges are separate from support fees.",
    },
    whatToBring: ["CNIC", "Passport details", "Travel documents", "Form or application info"],
    turnaroundTime: "Usually completed in 30-90 minutes",
    icon: "Plane",
  },
  {
    slug: "polio-certificate-online-record-services",
    name: "Polio Certificate / Online Record Services",
    category: "Documents",
    shortDescription: "Support for polio certificate and other online record-related procedures.",
    longDescription:
      "We assist with polio certificate requests and other record-related online services so customers can complete formal tasks with correct documentation and fewer delays. This support is especially useful for timely verification needs.",
    pricing: {
      type: "varies",
      amount: "Depends on service and official requirements",
      note: "Any official record fees or processing charges are separate from service support.",
    },
    whatToBring: ["CNIC", "Relevant certificate details", "Record or slip if available", "Reference information or form details"],
    turnaroundTime: "Usually completed in 20-45 minutes",
    icon: "ShieldPlus",
  },
  {
    slug: "online-banking-digital-application-assistance",
    name: "Online Banking / Digital Application Assistance",
    category: "Financial",
    shortDescription: "Help with digital banking, online applications, and account-related digital tasks.",
    longDescription:
      "We provide support for online banking and digital application assistance, helping customers complete forms, verify details, and manage digital account tasks more confidently. This is useful for everyday digital financial transactions and official online activities.",
    pricing: {
      type: "varies",
      amount: "Depends on application and account support needed",
      note: "Official bank charges or portal fees may apply separately from support service.",
    },
    whatToBring: ["CNIC", "Bank account or app details", "Mobile number", "Application form or reference info"],
    turnaroundTime: "Usually completed in 15-45 minutes",
    icon: "Banknote",
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
