import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fahmi AR - UI/UX Designer & Developer",
  description:
    "Computer Engineering graduate specializing in UI/UX Design, Web Development, AR, and Machine Learning",
  keywords: [
    "UI/UX Designer",
    "Web Developer",
    "Fahmi AR",
    "Portfolio",
    "Next.js",
  ],
  authors: [{ name: "Fahmi AR" }],
  openGraph: {
    title: "Fahmi AR - UI/UX Designer & Developer",
    description:
      "Computer Engineering graduate specializing in UI/UX Design, Web Development, AR, and Machine Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
