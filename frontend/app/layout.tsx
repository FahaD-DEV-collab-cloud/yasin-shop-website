import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import RevealObserver from "@/components/RevealObserver";
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
  title: "M KHAN NETCAFE | Digital Services Center",
  description:
    "M KHAN NETCAFE offers online job applications, printing, photocopy, digital services, online forms, government support and local computer assistance in Lalian.",
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
