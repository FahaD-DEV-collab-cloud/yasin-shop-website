import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
import { site } from "@/src/config/site";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yasin-shop-website.vercel.app"),
  title: {
    default: "M Khan Netcafe – Photocopy, Printing, Easypaisa, JazzCash, NADRA Services in Lalian",
    template: "%s | M Khan Netcafe Lalian",
  },
  description:
    "M Khan Netcafe in Lalian offers photocopy, color printing, Easypaisa, JazzCash, NADRA support, job form help, and digital services for local residents.",
  keywords: [
    "photocopy Lalian",
    "printing shop Lalian",
    "color printing Lalian",
    "Easypaisa shop Lalian",
    "JazzCash shop Lalian",
    "NADRA E-Sahulat Lalian",
    "job application help Lalian",
    "online job applying shop Lalian",
    "ID card copy Lalian",
    "book binding Lalian",
    "digital service center Lalian",
    "computer shop Lalian",
    "document scanning Lalian",
    "passport size photo Lalian",
    "printing and photocopy Lalian",
    "online forms Lalian",
    "admissions support Lalian",
    "government form assistance Lalian",
    "CV making Lalian",
    "mobile wallet service Lalian",
    "loan application help Lalian",
    "Lalian Punjab digital services",
    "M Khan Netcafe Lalian",
    ...site.services.map((service) => `${service.name} Lalian`),
  ],
  applicationName: site.businessName,
  category: "local business",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "M Khan Netcafe – Photocopy, Printing, Easypaisa, JazzCash, NADRA Services in Lalian",
    description:
      "Fast printing, photocopy, E-Sahulat, Easypaisa, JazzCash, job application support, and digital services in Lalian, Punjab.",
    url: "https://yasin-shop-website.vercel.app",
    siteName: site.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Khan Netcafe – Photocopy, Printing, Easypaisa, JazzCash, NADRA Services in Lalian",
    description:
      "Fast printing, photocopy, E-Sahulat, Easypaisa, JazzCash, job application support, and digital services in Lalian, Punjab.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#f7f1e3",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--color-cream)] text-[var(--color-brown-900)]">
        <RevealObserver />
        {children}
      </body>
    </html>
  );
}
