import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Mijako team"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4">About Mijako</h2>
            <p className="mb-6">
              Mijako has been at the forefront of security technology for over
              two decades. Our team of experts is dedicated to providing
              innovative and reliable security solutions that give our clients
              peace of mind. We combine cutting-edge technology with exceptional
              customer service to ensure that your security needs are met with
              precision and care.
            </p>
            <Button className="bg-purple-800 text-white hover:bg-purple-900">
              Learn More About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
