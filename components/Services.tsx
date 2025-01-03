import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShieldCheck, PenLine, Handshake } from "lucide-react";

const services = [
  {
    icon: <PenLine className="w-10 h-10 mb-4 text-purple-800" />,
    title: "Suunnittelu",
    description:
      "Oviympäristön tuotteiden suunnittelu uusissa ja saneerauskohteissa. Palvelu on toimittajariippumaton.",
  },
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-purple-800" />,
    title: "Valvonta",
    description:
      "Suunnitelmien toteutuksen valvonta. Palvelu on tilaajan edunvalvontaa hankkeiden toteutusvaiheessa.",
  },
  {
    icon: <Handshake className="w-10 h-10 mb-4 text-purple-800" />,
    title: "Tukitoiminnot",
    description:
      "Konsultointi ja suunnittelusta poikkeava selvitystyö, kuten tuotteiden soveltuvuuden arviointi.",
  },
];

export default function Services() {
  return (
    <section className="py-28 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 drop-shadow-xl text-purple-800">
          Palvelukonsepti
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg hover:scale-105 transition-transform"
            >
              <Link href={`/palvelut#${service.title.toLowerCase()}`}>
                <CardHeader>
                  <div className="flex justify-center">{service.icon}</div>
                  <CardTitle className="text-xl shadow-2xl">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
              </Link>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button className="bg-purple-800 text-white hover:bg-purple-900 font-semibold px-8 py-5">
            <Link href="/palvelut">Lue lisää</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
