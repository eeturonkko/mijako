import { Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mijako Oy</h3>
            <p className="mb-4">
              Lukitus- ja turvatekniikan konsultointi- ja asennuspalvelu
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <p>Y-tunnus: 3504559-1</p>
              </li>
              <li>
                <p>Turvallisuusalan elinkeinolupanumero TU/2023/14094</p>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Yhteystiedot</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" /> mijako@mijako.fi
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" /> +358 44 9734 941 Jani Rönkkö
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" /> +358 45 6954 147 Milla Rönkkö
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <Image
            src="/luotettavakumppani.png"
            alt="Luotettava kumppani"
            width={200}
            height={100}
            className="object-contain mx-auto rounded-lg"
          />
          {/*  <p>&copy; {new Date().getFullYear()} Mijako | All rights reserved.</p> */}
        </div>
      </div>
    </footer>
  );
}
