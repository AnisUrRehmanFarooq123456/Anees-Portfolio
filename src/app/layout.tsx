import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bodyFont = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const displayFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = "https://anees-portfolio.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Anees Ur Rehman Farooq | Frontend Web Developer (React, Next.js)",
  description:
    "Anees Ur Rehman Farooq is a Frontend Web Developer specializing in React, Next.js, TypeScript and the MERN stack. Explore projects, hackathon work, skills and experience.",
  keywords: [
    "Anees Ur Rehman Farooq",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "MERN Stack Developer",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Karachi Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Anees Ur Rehman Farooq" }],
  creator: "Anees Ur Rehman Farooq",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Anees Ur Rehman Farooq | Frontend Web Developer",
    description:
      "Frontend Web Developer skilled in React, Next.js, TypeScript and the MERN stack. View projects, hackathon builds and professional experience.",
    siteName: "Anees Ur Rehman Farooq — Portfolio",
  },
  twitter: {
    card: "summary",
    title: "Anees Ur Rehman Farooq | Frontend Web Developer",
    description:
      "Frontend Web Developer skilled in React, Next.js, TypeScript and the MERN stack.",
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Anees Ur Rehman Farooq",
  jobTitle: "Frontend Web Developer",
  url: siteUrl,
  email: "mailto:anees2217117@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Karachi",
    addressCountry: "PK",
  },
  knowsAbout: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Responsive Web Design",
  ],
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html
      lang="en"
      className={`${bodyFont.variable} ${displayFont.variable} ${monoFont.variable}`}
    >
      <body>
        <div className="editor-bg" aria-hidden="true" />
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
