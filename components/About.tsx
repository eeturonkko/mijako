import Image from "next/image";

export default function About() {
  return (
    <section className="pt-5 md:pt-0">
      <div className="mx-auto">
        <div className="flex flex-col-reverse md:flex-row items-stretch justify-center gap-10">
          {/* Image Section */}
          <div className="w-full md:w-1/2 aspect-[4/3] md:aspect-video relative">
            <Image
              src="/lockmijako.png"
              alt="Door Lock"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 px-4 sm:px-6 text-center md:text-left flex items-center">
            <div className="md:max-w-none max-w-sm mx-auto space-y-6 py-6">
              <h2 className="text-4xl md:text-4xl font-bold drop-shadow-xl text-purple-800">
                Yritys
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
      </div>
    </section>
  );
}
