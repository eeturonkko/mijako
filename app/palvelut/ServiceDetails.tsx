import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { PenLine, ShieldCheck, Handshake } from "lucide-react";

const services = [
  {
    id: "suunnittelu",
    icon: <PenLine className="w-12 h-12 text-purple-800" />,
    title: "Suunnittelu",
    description:
      "Oviympäristön tuotteiden suunnitteluuudis- ja saneerauskohteisiin. Palvelu on toimittajasta riippumaton",
    details: [
      "Materiaaleihin ja hankkeeseen perehtyminen",
      "Kohdekartoitus (saneerauskohteet)",
      "Raportti kohdekartoituksesta (saneerauskohteet)",
      "Lukitus- ja turvatuotteiden valinta ovityypin ja tilan käyttötarkoituksen/ympäristön mukaan",
      "Sijoituspohjakuvat",
      "Ovikohtainen heloitus- ja lukitussuunnitelma",
      "Alustavat kulkualue/valvonta-alue määritykset ja avain/tunniste tiedot",
      "Yhteensovittaminen oviympäristöön liittyvien toimijoiden kanssa (esim. lukitus-, kulunvalvonta-, sähkö-, automaatiosuunnittelu)",
      "Suunnitelmien tarkistukset ja korjaukset",
      "Suunnittelupalaverit",
      "Materiaalien toimitus tilaajalle",
      "Tarvittava seuranta muutosten/muutostarpeiden osalta",
    ],
  },
  {
    id: "valvonta",
    icon: <ShieldCheck className="w-12 h-12 text-purple-800" />,
    title: "Valvonta",
    description:
      "Suunnitelmien toteutuksen valvonta. Palvelu on tilaajan edunvalvontaa hankkeiden toteutusvaiheessa.",
    details: [
      "Lukitus- ja turvasuunnitelmien toteutuksen valvonta",
      "Katselmukset",
      "Raportointi tilaajalle ja toteuttajalle",
      "Palaverit",
      "Tilaajan edustaja lukitus- ja turvajärjestelmäasioissa työmaavaiheessa",
    ],
  },
  {
    id: "tukitoiminnot",
    icon: <Handshake className="w-12 h-12 text-purple-800" />,
    title: "Tukitoiminnot",
    description: "Konsultointi ja suunnittelusta poikkeava selvitystyö.",
    details: [
      "Selvitystyöt esim. uuden tuotteen/tuoteperheen toiminnasta tai soveltuvuudesta",
      "Tarjousten kommentointi lukituksen ja turvatuotteiden osalta mikäli eriteltävissä kokonaisurakasta",
      "Suunnitelmien tarkistaminen esim. rakennustyöselosteen kommentointi jos ei sisälly jo suunnittelutyöhön",
      "Urakkarajojen tarkistaminen",
      "Ovien tuotantokuvien tarkistaminen ennen tuotantoon menoa",
    ],
  },
];

export default function ServiceDetails() {
  return (
    <div className="space-y-16">
      {services.map((service) => (
        <Card
          key={service.id}
          id={service.id}
          className="scroll-mt-20 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-900 text-white p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-white rounded-full p-3">{service.icon}</div>
              <CardTitle className="text-3xl">{service.title}</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6 text-gray-600 text-lg">{service.description}</p>
            <h3 className="text-xl font-semibold mb-4 text-purple-800">
              Sisältö:
            </h3>
            <ul className="space-y-2">
              {service.details.map((detail, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-purple-600 mr-2">•</span>
                  <span className="font-medium">{detail}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
