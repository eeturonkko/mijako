export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          preload="auto"
          autoPlay
          muted
          playsInline
          loop
          className="w-full h-full object-cover"
        >
          <source src="/keyvideo2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Purple Gradient Overlay */}
        <div
          className={`
            absolute inset-0
            bg-gradient-to-r from-purple-900/60 via-purple-700/50 to-purple-600
            bg-[length:200%_200%]
           
          `}
        />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center drop-shadow-2xl">
          <h1 className="text-4xl md:text-8xl font-bold mb-4 mt-10 text-white">
            Mijako Oy
          </h1>
          <p className="text-md md:text-xl lg:text-2xl font-semibold mb-8 max-w-2xl text-white drop-shadow-2xl">
            Lukitus- ja turvatekniikan konsultointi- ja asennuspalvelu
          </p>
        </div>
      </div>
    </section>
  );
}
