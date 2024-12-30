import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { ShieldCheck, Home, Building2, Key } from "lucide-react";

const services = [
  {
    icon: <ShieldCheck className="w-10 h-10 mb-4 text-purple-800" />,
    title: "Advanced Security Systems",
    description:
      "State-of-the-art security systems tailored to your specific needs.",
  },
  {
    icon: <Home className="w-10 h-10 mb-4 text-purple-800" />,
    title: "Residential Solutions",
    description:
      "Protect your home and loved ones with our comprehensive security solutions.",
  },
  {
    icon: <Building2 className="w-10 h-10 mb-4 text-purple-800" />,
    title: "Commercial Security",
    description:
      "Safeguard your business with our cutting-edge commercial security systems.",
  },
  {
    icon: <Key className="w-10 h-10 mb-4 text-purple-800" />,
    title: "Smart Lock Technology",
    description:
      "Experience the convenience and security of our smart lock solutions.",
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-24 drop-shadow-xl">
          Palvelumme
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="flex justify-center">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
