import type { Metadata } from "next";
import ServiceDetails from "./ServiceDetails";

export const metadata: Metadata = {
  title: "Palvelut | Mijako",
  description:
    "Mijako tarjoaa suunnittelu-, valvonta- ja tukipalveluita turvallisuusratkaisuihin.",
};

export default function PalvelutPage() {
  return (
    <main className="min-h-screen py-12 md:py-20 bg-gradient-to-b from-white to-purple-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fadeSlideDown">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-900">
            Palvelut
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Tarjoamme kattavat asiantuntijapalvelut oviympäristön tuotteiden
            suunnitteluun, valvontaan ja konsultointiin. Palvelumme ovat
            toimittajariippumattomia ja räätälöitävissä tarpeidenne mukaan.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {["suunnittelu", "valvonta", "tukitoiminnot"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="px-5 py-2 bg-white rounded-full shadow-md text-purple-800 font-medium 
                         hover:bg-purple-800 hover:text-white transition-colors duration-300"
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}
          </div>
        </div>

        <ServiceDetails />
      </div>
    </main>
  );
}
