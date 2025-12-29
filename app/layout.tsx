import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Imantha Ahangama - Portfolio",
    template: "%s | Imantha Ahangama",
  },
  description: "ML Engineer, Full-Stack Developer & Astrophotographer",
  keywords: ["ML Engineer", "Software Engineer", "Astrophotography", "Next.js", "Go", "PyTorch"],
  authors: [{ name: "Imantha Ahangama" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Imantha Ahangama Portfolio",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

