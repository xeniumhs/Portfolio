import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeProvider from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://xenium.com.np";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Xenium Suwal | Full-Stack Developer",
    template: "%s | Xenium Suwal",
  },

  description:
    "Official portfolio of Xenium Suwal, a Full-Stack Developer exploring AI, machine learning, and modern web technologies.",

  authors: [
    {
      name: "Xenium Suwal",
      url: siteUrl,
    },
  ],

  creator: "Xenium Suwal",
  publisher: "Xenium Suwal",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Xenium Suwal",
    title: "Xenium Suwal | Full-Stack Developer",
    description:
      "Official portfolio of Xenium Suwal, a Full-Stack Developer exploring AI, machine learning, and modern web technologies.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Xenium Suwal",
  alternateName: ["Xenium HS", "Xenium"],
  url: siteUrl,
  jobTitle: "Full-Stack Developer",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider>{children}</ThemeProvider>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
      </body>
    </html>
  );
}
