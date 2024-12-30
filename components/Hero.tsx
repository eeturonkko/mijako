import Image from "next/image";
import B from "@/public/b.jpg";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={B}
          alt="Background image for Mijako hero"
          className="object-cover w-full h-full"
          priority
          placeholder="blur"
        />
        {/* Animated Gradient Overlay */}
        <div
          className={`
            absolute inset-0
            bg-gradient-to-r from-purple-900/80 via-purple-700/60 to-purple-600/60
            bg-[length:200%_200%]
            animate-gradient-flow-subtle
          `}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center drop-shadow-xl">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 mt-10 text-white">
            Mijako Oy
          </h1>
          <p className="text-2xl mb-8 max-w-2xl text-white/90">
            Lukitus- ja turvatekniikan konsultointipalvelu
          </p>
        </div>
      </div>
    </section>
  );
}
