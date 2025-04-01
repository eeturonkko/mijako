"use client";

import { useState, useRef } from "react";
import {
  PenLine,
  ShieldCheck,
  Handshake,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const services = [
  {
    id: "suunnittelu",
    icon: <PenLine className="w-12 h-12 text-purple-800" />,
    title: "Suunnittelu",
    description:
      "Oviympäristön tuotteiden suunnitteluun uusissa ja saneerauskohteissa. Palvelu on toimittajariippumaton.",
    details: [
      "Hankkeen ja materiaalien läpikäynti sekä kohdekartoitus (saneerauskohteissa raportti mukaan lukien)",
      "Lukitus- ja turvatuotteiden valinta ovityypin ja tilan käyttötarkoituksen perusteella",
      "Suunnitelmat: sijoituspohjakuvat, ovikohtaiset heloitus- ja lukitussuunnitelmat sekä kulku- ja valvonta-alueiden alustavat määritykset",
      "Yhteensovittaminen muiden suunnittelualojen kanssa (esim. sähkö-, lukitus-, kulunvalvonta- ja automaatiosuunnittelu)",
    ],
    imageUrl: "/planning.jpg",
    imageAlt: "Suunnittelupalvelun kuvitus",
  },
  {
    id: "valvonta",
    icon: <ShieldCheck className="w-12 h-12 text-purple-800" />,
    title: "Valvonta",
    description:
      "Suunnitelmien toteutuksen valvonta. Palvelu on tilaajan edunvalvontaa hankkeiden toteutusvaiheessa.",
    details: [
      "Lukitus- ja turvasuunnitelmien toteutuksen valvonta ja katselmukset",
      "Raportointi tilaajalle ja toteuttajalle",
      "Palaverit ja yhteydenpito työmaan osapuolten kanssa",
      "Tilaajan edustaminen lukitus- ja turvajärjestelmäasioissa työmaavaiheessa",
    ],
    imageUrl: "/security.jpg",
    imageAlt: "Valvontapalvelun kuvitus",
  },
  {
    id: "tukitoiminnot",
    icon: <Handshake className="w-12 h-12 text-purple-800" />,
    title: "Tukitoiminnot",
    description: "Konsultointi ja suunnittelusta poikkeava selvitystyö.",
    details: [
      "Selvitystyöt esim. uuden tuotteen tai tuoteperheen toiminnasta ja soveltuvuudesta",
      "Tarjousten ja suunnitelmien kommentointi lukitus- ja turvatuotteiden osalta",
      "Urakkarajojen ja rakennustyöselosteen tarkistaminen, mikäli ei sisälly suunnittelutyöhön",
      "Ovien tuotantokuvien tarkistaminen ennen tuotantoon menoa",
    ],
    imageUrl: "/consulting.jpg",
    imageAlt: "Tukitoimintojen kuvitus",
  },
];

export default function ServiceDetails() {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const cardRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleExpand = (id: string) => {
    const isExpanding = expandedService !== id;
    setExpandedService(isExpanding ? id : null);

    if (isExpanding) {
      setTimeout(() => {
        const el = cardRefs.current[id];
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          // Only scroll if screen is bigger than 768px
          if (window.innerWidth > 768) {
            window.scrollBy(0, -24);
          }
        }
      }, 300);
    }
  };

  return (
    <div className="space-y-12">
      {services.map((service) => {
        const isExpanded = expandedService === service.id;

        return (
          <motion.div
            key={service.id}
            ref={(el) => {
              cardRefs.current[service.id] = el;
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card
              id={service.id}
              className="scroll-mt-24 overflow-hidden shadow-lg border-0 rounded-xl"
            >
              <CardHeader className="bg-white p-0">
                <div className="relative">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-800"></div>
                  <div className="p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
                    <div className="bg-gradient-to-br from-purple-100 to-purple-200 rounded-full p-4 w-20 h-20 flex items-center justify-center shrink-0">
                      {service.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl md:text-3xl text-purple-900 mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-gray-600 text-lg">
                        {service.description}
                      </p>
                    </div>
                    <button
                      onClick={() => toggleExpand(service.id)}
                      className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 hover:bg-purple-200 transition-colors shrink-0"
                      aria-label={isExpanded ? "Sulje tiedot" : "Näytä tiedot"}
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 text-purple-800" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-purple-800" />
                      )}
                    </button>
                  </div>
                </div>
              </CardHeader>

              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    <CardContent className="p-6 md:p-8 bg-gradient-to-br from-purple-50 to-white">
                      <motion.div
                        initial={{ y: -10, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.2 }}
                      >
                        <div className="flex flex-col lg:flex-row gap-8">
                          {/* Left side - Text content */}
                          <div className="flex-1">
                            <h3 className="text-xl font-semibold mb-6 text-purple-800 border-b border-purple-200 pb-2">
                              Palvelun sisältö:
                            </h3>
                            <ul className="space-y-3 text-lg">
                              {service.details.map((detail, index) => (
                                <motion.li
                                  key={index}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: 0.1 + index * 0.03,
                                    duration: 0.2,
                                  }}
                                  className="flex  bg-white p-3 rounded-lg shadow-md items-center"
                                >
                                  <span className="ml-1 md:text-md text-md text-gray-800">
                                    {detail}
                                  </span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>

                          {/* Right side - Image */}
                          <motion.div
                            className="lg:w-2/5 flex-shrink-0"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.3 }}
                          >
                            <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-md">
                              <Image
                                src={service.imageUrl || "/placeholder.svg"}
                                alt={service.imageAlt}
                                fill
                                className="object-cover"
                                loading="eager"
                              />
                            </div>
                          </motion.div>
                        </div>
                      </motion.div>
                    </CardContent>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
