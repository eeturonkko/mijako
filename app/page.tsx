import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";

export default function Home() {
  return (
    <main className="min-h-screen" id="hero">
      <Hero />
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  );
}
