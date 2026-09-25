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
  metadataBase: new URL("https://mkhannetcafe.com"),
  title: {
    default: `${site.businessName} | Digital Services Center`,
    template: `%s | ${site.businessName}`,
  },
  description:
    `${site.businessName} offers online job applications, printing, photocopy, digital services, online forms, government support and local computer assistance in Lalian.`,
  keywords: [
    "M KHAN NETCAFE",
    "digital services Lalian",
    "printing shop Lalian",
    "photocopy service Lalian",
    "Easypaisa support",
    "JazzCash help",
    "NADRA support",
    "online job applications",
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
    title: `${site.businessName} | Digital Services Center`,
    description:
      `${site.businessName} provides practical digital support, printing, photocopy, government forms, and local online help in Lalian.`,
    url: "https://mkhannetcafe.com",
    siteName: site.businessName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.businessName} | Digital Services Center`,
    description:
      `${site.businessName} provides practical digital support, printing, photocopy, government forms, and local online help in Lalian.`,
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
