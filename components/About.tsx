import Image from "next/image";
import Lock from "@/public/lock3.jpg";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="pt-5 md:pt-0">
      <div className=" mx-auto ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 ">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative h-max md:h-auto ">
            <Image src={Lock} alt="Door Lock" className="object-contain" />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left ">
            <h2 className="text-4xl font-bold drop-shadow-xl text-purple-800">
              Meistä
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mr-2">
              Olemme erikoistuneet lukitusjärjestelmien suunnitteluun ja
              oviympäristöjen optimointiin. Palvelu tuotetaan aina tarpeidenne
              mukaisesti ja tarpeitanne vastaavassa laajuudessa. Olette
              rakentamassa uutta tai saneeraamassa vanhaa kiinteistöä, olemme
              valmiina auttamaan teitä. Tarjoamme asiakkaillemme laadukasta
              suunnittelua ja teknisiä ratkaisuja kiinteistöjen turvateknisiin
              tarpeisiin.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mr-2 ">
              Panostamme tarpeidenne täsmälliseen huomioimiseen, järjestelmien
              toimivuuteen, tuoden näin säästöjä asennus- ja ylläpitovaiheisiin.
              Varmistamme suunnittelulla oviympäristöjen; turvallisuuden,
              paloturvallisuuden, esteettömät hätäpoistumistiet, että tekniset
              ratkaisut noudattavat standardeja. Otamme huomioon myös
              tulevaisuuden tarpeet. Lukitusturvallisuus on keskeinen osa
              toimintaamme.
            </p>

            <Button className="bg-purple-800 text-white hover:bg-purple-900 font-semibold px-8 py-4 rounded-lg shadow-lg transform transition-transform duration-200 ">
              <a href="#contact">Ota yhteyttä</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
