// components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-blue-400 uppercase tracking-widest mb-4">
            Contact
          </p>
          <h2 className="text-5xl font-bold mb-6"> Get In Touch </h2>{" "}
          <p className="text-slate-400 mb-4"> hello@community.com </p>{" "}
          <p className="text-slate-400 mb-4"> +91 9876543210 </p>{" "}
          <p className="text-slate-400"> Ranchi, Jharkhand </p>{" "}
        </div>
        <form className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none"
          />
          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-transparent border border-white/10 rounded-xl px-4 py-3 outline-none"
          />
          <button className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-full transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
