// components/Stats.jsx

const stats = [
  { number: "25+", label: "Events Organized" },
  { number: "1200+", label: "Community Members" },
  { number: "15+", label: "Workshops" },
  { number: "10+", label: "Collaborations" },
];
export default function Stats() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center backdrop-blur-xl hover:border-blue-500/40 transition"
          >
            <h2 className="text-4xl font-bold text-blue-400 mb-2">
              {stat.number}
            </h2>
            <p className="text-slate-400">{stat.label}</p>{" "}
          </div>
        ))}
      </div>
    </section>
  );
}
