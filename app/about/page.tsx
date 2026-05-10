import aboutPageIcon from "@/public/images/aboutPageIcon.png"
import Image from "next/image";
export default function About() {
  return (
    <div className="flex flex-row gap-5">
    <Image src={aboutPageIcon} alt="About Page Icon" className="w-1/2" />
      <section id="about" className="py-32 px-6">
          <p className="text-blue-400 uppercase tracking-widest mb-4">
            About Community
          </p>
          <h2 className="text-5xl font-bold mb-6">
            Empowering Students Through Technology{" "}
          </h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            We are a student-driven tech community focused on innovation,
            collaboration, workshops, hackathons, and real-world learning.{" "}
          </p>
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full transition">
            Join Community
          </button>
    </section>
    </div>
  );
}
