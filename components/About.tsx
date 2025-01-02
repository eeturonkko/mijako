import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center gap-10">
          <div className="w-full md:w-3/4 space-y-6">
            <h2 className="text-4xl font-bold text-center drop-shadow-xl text-purple-800">
              Meistä
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
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
            <Button className="bg-purple-800 text-white hover:bg-purple-900 font-semibold px-8 py-4 rounded-lg shadow-lg transform transition-transform duration-200 hover:scale-105">
              <a href="#contact">Ota yhteyttä</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
