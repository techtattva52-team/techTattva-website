// components/UpcomingEvents.jsx

const events = [
  {
    title: "AI Workshop",
    date: "20 May 2026",
    venue: "Main Auditorium",
    image: "/images/event1.jpg",
  },
  {
    title: "Hackathon",
    date: "28 May 2026",
    venue: "Innovation Lab",
    image: "/images/event2.jpg",
  },
];
export default function UpcomingEvents() {
  return (
    <section id="events" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">
          Upcoming Events
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event) => (
            <div
              key={event.title}
              className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:border-blue-500/40 transition"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-64 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">{event.title}</h3>
                <p className="text-slate-400 mb-2"> {event.date} </p>{" "}
                <p className="text-slate-400 mb-5"> {event.venue} </p>{" "}
                <button className="bg-blue-600 hover:bg-blue-500 px-5 py-2 rounded-full transition">
                  Register
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
