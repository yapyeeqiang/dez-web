import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "DEZ Construction & Renovation",
  description: "Professional construction and renovation services.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main className="py-20">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
