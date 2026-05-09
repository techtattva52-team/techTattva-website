// components/PastEvents.jsx
const pastEvents = [
  { title: "Web Dev Bootcamp", image: "/images/past1.jpg" },
  { title: "Design Meetup", image: "/images/past2.jpg" },
];
export default function PastEvents() {
  return (
    <section id="eventsSection" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16">Past Events</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {pastEvents.map((event) => (
            <div
              key={event.title}
              className="rounded-3xl overflow-hidden border border-white/10 bg-white/5"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-72 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold"> {event.title} </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
