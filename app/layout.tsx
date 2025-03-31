import type { Metadata } from "next";
import { Exo_2 } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const exo = Exo_2({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mijako Oy",
  description: "Lukitus- ja turvatekniikan konsultointi- ja asennuspalvelu",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${exo.className} antialiased`}>
        <main className="min-h-screen" id="hero">
          <Header />
          {children}
          <section id="contact">
            <Footer />
          </section>
        </main>
      </body>
    </html>
  );
}
