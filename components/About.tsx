import { Button } from "@/components/ui/button";
import Image from "next/image";
import BlackWhiteKey from "@/public/blackwhitekey.jpg";

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="w-full md:w-1/2 overflow-hidden rounded-lg shadow-lg">
            <Image
              src={BlackWhiteKey}
              alt="Vintage key in keyhole - representing Mijako's security heritage"
              className="rounded-lg shadow-lg w-full h-auto object-fill "
              width={800}
              height={600}
              placeholder="blur"
              priority
            />
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h2 className="text-3xl font-bold">Meistä</h2>
            <p className="text-lg text-gray-700">
              Olemme erikoistuneet lukitusjärjestelmien suunnitteluun ja
              oviympäristöjen optimointiin. Palvelu tuotetaan aina tarpeidenne
              mukaisesti ja tarpeitanne vastaavassa laajuudessa. Olette
              rakentamassa uutta tai saneeraamassa vanhaa kiinteistöä, olemme
              valmiina auttamaan teitä. Tarjoamme asiakkaillemme laadukasta
              suunnittelua ja teknisiä ratkaisuja kiinteistöjen turvateknisiin
              tarpeisiin. Panostamme tarpeidenne täsmälliseen huomioimiseen,
              järjestelmien toimivuuteen, tuoden näin säästöjä asennus- ja
              ylläpitovaiheisiin. Varmistamme suunnittelulla oviympäristöjen;
              turvallisuuden, paloturvallisuuden, esteettömät hätäpoistumistiet,
              että tekniset ratkaisut noudattavat standardeja. Otamme huomioon
              myös tulevaisuuden tarpeet. Lukitusturvallisuus on keskeinen osa
              toimintaamme. Kun tarvitset kokenutta ja asiantuntevaa kumppania
              kiinteistösi turvatekniseen suunnitteluun, ota yhteyttä.
            </p>
            <Button className="bg-purple-800 text-white hover:bg-purple-900 font-semibold px-8 py-5">
              <a href="#contact">Ota yhteyttä</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
