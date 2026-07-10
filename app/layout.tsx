import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Kevin Huang | Kai-Chun Huang | AI & Data Analysis Portfolio",
    template: "%s | Kevin Huang",
  },
  description:
    "Kai-Chun Huang's portfolio focused on AI, NLP, LLM fine-tuning, and data analysis projects.",
  openGraph: {
    title: "Kevin Huang | Kai-Chun Huang | AI & Data Analysis Portfolio",
    description:
      "Kai-Chun Huang's portfolio focused on AI, NLP, LLM fine-tuning, and data analysis projects.",
    type: "website",
    locale: "zh_TW",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-Hant"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
