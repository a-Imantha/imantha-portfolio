import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.imantha.dev'),
  title: {
    default: "Imantha Ahangama - ML Engineering Lead | Portfolio",
    template: "%s | Imantha Ahangama",
  },
  description: "Building production ML systems at scale. ML Engineering Lead specializing in MLOps, cloud architecture, LLMs, and explainable AI. Experience with Python, PyTorch, Kubernetes, AWS, and Next.js.",
  keywords: [
    "Imantha Ahangama",
    "ML Engineer",
    "Machine Learning Engineering Lead",
    "MLOps",
    "LLM Fine-tuning",
    "PyTorch",
    "Kubernetes",
    "AWS",
    "Google Cloud",
    "Next.js",
    "Golang",
    "Full-Stack Developer",
    "Software Engineer",
    "Astromind",
    "CML Insights",
    "Explainable AI",
    "XAI",
    "Cloud Architecture",
    "Astrophotography",
    "Sri Lanka",
  ],
  authors: [{ name: "Imantha Ahangama", url: "https://www.imantha.dev" }],
  creator: "Imantha Ahangama",
  publisher: "Imantha Ahangama",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/icon.png',
      },
    ],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.imantha.dev",
    siteName: "Imantha Ahangama Portfolio",
    title: "Imantha Ahangama - ML Engineering Lead",
    description: "Building production ML systems at scale. Specializing in MLOps, cloud architecture, and explainable AI.",
    images: [
      {
        url: "/avatar.jpg",
        width: 1200,
        height: 630,
        alt: "Imantha Ahangama - ML Engineering Lead",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imantha Ahangama - ML Engineering Lead",
    description: "Building production ML systems at scale. Specializing in MLOps, cloud architecture, and explainable AI.",
    images: ["/avatar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here after setting up
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://www.imantha.dev" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="any" />
        <link rel="shortcut icon" href="/icon.png" />
        <meta name="theme-color" content="#3b82f6" />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

