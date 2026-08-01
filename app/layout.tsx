import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { SiteFooter, SiteHeader } from "./components/site-shell";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Thermal Wall Technology",
    template: "%s | Thermal Wall Technology",
  },
  description:
    "A patented building concept seeking rigorous research, prototype measurement, and transparent technical validation.",
  applicationName: "Thermal Wall Technology",
  keywords: [
    "thermal wall technology",
    "thermal mass",
    "hydronic building systems",
    "radiant heating and cooling",
    "building science research",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "Thermal Wall Technology",
    title: "Thermal Wall Technology",
    description:
      "A patented building concept seeking rigorous research, prototype measurement, and transparent technical validation.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SiteHeader />
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
