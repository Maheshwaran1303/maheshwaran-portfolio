import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Maheshwaran | AI Python Full Stack Developer",
    template: "%s | Maheshwaran",
  },

  description:
    "Maheshwaran is an AI Python Full Stack Developer building modern web applications, AI-powered products, REST APIs, and data-driven solutions.",

  keywords: [
    "Maheshwaran",
    "AI Python Full Stack Developer",
    "Python Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Django Developer",
    "AI Developer",
    "Data Analytics",
    "Freelance Developer",
    "Tamil Nadu Developer",
  ],

  authors: [
    {
      name: "Maheshwaran",
    },
  ],

  creator: "Maheshwaran",

  metadataBase: new URL("http://localhost:3000"),

  openGraph: {
    type: "website",
    locale: "en_IN",
    title: "Maheshwaran | AI Python Full Stack Developer",
    description:
      "Building modern web applications, AI-powered products, and data-driven solutions.",
    siteName: "Maheshwaran",
  },

  twitter: {
    card: "summary_large_image",
    title: "Maheshwaran | AI Python Full Stack Developer",
    description:
      "Building modern web applications, AI-powered products, and data-driven solutions.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}