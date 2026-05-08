// components/Gallery.jsx
const images = [
  "/images/gallery1.jpg",
  "/images/gallery2.jpg",
  "/images/gallery3.jpg",
  "/images/gallery4.jpg",
];
export default function Gallery() {
  return (
    <section id="gallery" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16"> Gallery </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="gallery"
              className="rounded-3xl h-72 w-full object-cover border border-white/10"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
