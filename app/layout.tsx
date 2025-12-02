import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Kelowna Wrestling Club | KWC",
  description: "Elite freestyle wrestling training in the Okanagan. Beginners welcome.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 font-sans text-slate-900">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

