// components/About.jsx

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <img
            src="/images/about.png"
            alt="about"
            className="rounded-3xl border border-white/10"
          />
        </div>
        <div>
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
        </div>
      </div>
    </section>
  );
}
