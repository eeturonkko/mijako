import Image from "next/image";
import Lock from "@/public/lock3.jpg";
/* import Lock2 from "@/public/20250327_2118_Freshly Updated Lock_remix_01jqcgmypweaktx1rnxxte25tt.png"; */

export default function About() {
  return (
    <section className="pt-5 md:pt-0">
      <div className="mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 relative h-max md:h-auto">
            <Image
              src={Lock}
              alt="Door Lock"
              className="object-contain"
              priority
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
            <h2 className="text-4xl font-bold drop-shadow-xl text-purple-800">
              Meistä
            </h2>
            <p className="text-lg text-gray-800 leading-relaxed">
              Olemme erikoistuneet lukitusjärjestelmien suunnitteluun ja
              oviympäristöjen optimointiin. Palvelumme mukautetaan aina
              tarpeidenne mukaisesti. Olipa kyseessä uuden kiinteistön
              rakentaminen tai vanhan saneeraus, olemme valmiita auttamaan
              teitä. Tarjoamme laadukasta suunnittelua ja teknisiä ratkaisuja
              kiinteistöjen turvateknisiin tarpeisiin.
            </p>
            <p className="text-lg text-gray-800 leading-relaxed">
              Panostamme tarpeidenne tarkkaan huomioimiseen ja järjestelmien
              toimivuuteen, mikä tuo säästöjä asennus- ja ylläpitovaiheisiin.
              Varmistamme oviympäristöjen turvallisuuden, paloturvallisuuden,
              esteettömät hätäpoistumistiet sekä teknisten ratkaisujen
              standardienmukaisuuden. Lisäksi otamme huomioon tulevaisuuden
              tarpeet. Lukitusturvallisuus on keskeinen osa toimintaamme.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
