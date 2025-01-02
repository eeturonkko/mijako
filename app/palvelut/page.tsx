import Link from "next/link";
import { Metadata } from "next";
import { ChevronLeft } from "lucide-react";
import ServiceDetails from "./ServiceDetails";

export const metadata: Metadata = {
  title: "Palvelut | Mijako",
  description:
    "Mijako tarjoaa suunnittelu-, valvonta- ja tukipalveluita turvallisuusratkaisuihin.",
};

export default function PalvelutPage() {
  return (
    <main className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="inline-flex items-center text-purple-800 hover:text-purple-600 mb-8 font-semibold"
        >
          <ChevronLeft className="mr-0.5 h-6 w-6" />
          Takaisin
        </Link>
        <h1 className="text-4xl font-bold text-center mb-12">Palvelut</h1>
        <ServiceDetails />
      </div>
    </main>
  );
}
