import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mijako Oy</h3>
            <p className="mb-4">
              Lukitus- ja turvatekniikan konsultointipalvelu
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4"></h3>
            <ul className="space-y-2">
              <li>
                <p>Y-tunnus: 2245428-1</p>
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
                <Mail className="mr-2" /> milla.ronkko@mijako.fi
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" /> +358 45 6954 147
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" /> FIN 01340 Vantaa
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Mijako | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
