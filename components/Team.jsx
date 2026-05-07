// components/Team.jsx
const members = [
  { name: "John Doe", role: "Community Lead", image: "/images/team1.jpg" },
  { name: "Sarah Smith", role: "Design Lead", image: "/images/team2.jpg" },
];
export default function Team() {
  return (
    <section id="team" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Core Team</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member) => (
            <div
              key={member.name}
              className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-28 h-28 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-bold"> {member.name} </h3>
              <p className="text-blue-400"> {member.role} </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
