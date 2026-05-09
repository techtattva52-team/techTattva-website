import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <main className="bg-[#081120] text-white overflow-hidden">
      <Hero />
      <Stats />
    </main>
  );
}
