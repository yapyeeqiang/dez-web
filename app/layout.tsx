import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import { Dancing_Script } from "next/font/google";

export const metadata: Metadata = {
  title: "DEZ Construction & Renovation",
  description: "Professional construction and renovation services.",
};

const dancing = Dancing_Script({
  subsets: ["latin"],
  variable: "--font-dancing-script",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dancing.variable} antialiased`}>
        <Navbar />

        <main className="py-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
