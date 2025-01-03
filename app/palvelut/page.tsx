import { Metadata } from "next";

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
        <h1 className="text-4xl font-bold text-center mb-12 animate-fadeSlideDown">
          Palvelut
        </h1>
        <ServiceDetails />
      </div>
    </main>
  );
}
