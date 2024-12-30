import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12" id="contact">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Mijako Security Systems</h3>
            <p className="mb-4">
              Securing your world with advanced technology and unparalleled
              service.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-purple-400">
                <Facebook />
              </Link>
              <Link href="#" className="hover:text-purple-400">
                <Twitter />
              </Link>
              <Link href="#" className="hover:text-purple-400">
                <Instagram />
              </Link>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Mail className="mr-2" /> info@mijako.com
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" /> +1 (555) 123-4567
              </li>
              <li className="flex items-center">
                <MapPin className="mr-2" /> 123 Security St, Locktown, ST 12345
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p>
            &copy; {new Date().getFullYear()} Mijako Security Systems. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
