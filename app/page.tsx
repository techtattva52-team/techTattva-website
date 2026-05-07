import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import UpcomingEvents from "@/components/UpcomingEvents";
import PastEvents from "@/components/PastEvents";
import Team from "@/components/Team";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-[#081120] text-white overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <UpcomingEvents />
      <PastEvents />
      <Team />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
