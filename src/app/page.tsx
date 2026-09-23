import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import CapabilityStrip from "@/components/sections/CapabilityStrip";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <CapabilityStrip />

        <Projects />

        <About />

        <Services />

        <Process />

        <Contact />

        <Footer />
      </main>
    </>
  );
}