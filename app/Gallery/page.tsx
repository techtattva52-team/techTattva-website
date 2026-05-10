"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Image as ImageIcon, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Data Structure for Events and their corresponding images
const galleryData = [
  {
    id: "ai-for-everyone",
    title: "AI FOR EVERYONE",
    description: "Empowering the community with accessible AI knowledge.",
    coverImage: "/events/AI FOR EVERYONE/poster.jpeg",
    images: [
      "/events/AI FOR EVERYONE/poster.jpeg",
      "/events/AI FOR EVERYONE/WhatsApp Image 2026-04-29 at 2.07.41 PM (1).jpeg",
      "/events/AI FOR EVERYONE/WhatsApp Image 2026-04-29 at 2.07.43 PM (1).jpeg",
      "/events/AI FOR EVERYONE/WhatsApp Image 2026-04-29 at 2.07.43 PM.jpeg",
      "/events/AI FOR EVERYONE/certificate-of-appreciation.jpeg"
    ]
  },
  {
    id: "ai-healthx",
    title: "AI HEALTHX 2026",
    description: "Innovating healthcare solutions through AI tech.",
    coverImage: "/events/AI HEALTHX 2026/poster.jpeg",
    images: [
      "/events/AI HEALTHX 2026/poster.jpeg",
      "/events/AI HEALTHX 2026/WhatsApp Image 2026-04-29 at 2.08.53 PM.jpeg",
      "/events/AI HEALTHX 2026/WhatsApp Image 2026-04-29 at 2.08.54 PM (1).jpeg",
      "/events/AI HEALTHX 2026/WhatsApp Image 2026-04-29 at 2.08.54 PM.jpeg",
      "/events/AI HEALTHX 2026/WhatsApp Image 2026-04-29 at 2.08.55 PM.jpeg"
    ]
  },
  {
    id: "hack-energy",
    title: "HACK ENERGY 2.0",
    description: "Pushing boundaries in green tech and energy solutions.",
    coverImage: "/events/HACK ENERGY 2.0/poster.jpeg",
    images: [
      "/events/HACK ENERGY 2.0/poster.jpeg",
      "/events/HACK ENERGY 2.0/team-photo.jpeg",
      "/events/HACK ENERGY 2.0/trophies.jpeg",
      "/events/HACK ENERGY 2.0/WhatsApp Image 2026-04-30 at 10.07.58 PM.jpeg"
    ]
  },
  {
    id: "code-nakshatra",
    title: "CODE NAKSHATRA 2.0",
    description: "A stellar 24-hour hackathon for brilliant coders.",
    coverImage: "/events/CODE NAKSHATRA 2.0/poster.jpeg",
    images: [
      "/events/CODE NAKSHATRA 2.0/poster.jpeg"
    ]
  },
  {
    id: "enfinity",
    title: "ENFINITY 2026",
    description: "The ultimate tech symposium and community gathering.",
    coverImage: "/events/ENFINITY 2026/Community Partner Certificate.png",
    images: [
      "/events/ENFINITY 2026/Community Partner Certificate.png"
    ]
  }
];

export default function GalleryPage() {
  const [selectedEvent, setSelectedEvent] = useState<typeof galleryData[0] | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedEvent(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto-scroll logic
  useEffect(() => {
    if (!scrollContainerRef.current || isHovering || selectedEvent) return;

    let animationFrameId: number;
    const scrollContainer = scrollContainerRef.current;

    const scrollStep = () => {
      if (scrollContainer) {
        scrollContainer.scrollLeft += 1.5;
        // Reset scroll when reaching the end of the original list to create infinite loop
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scrollStep);
    };

    animationFrameId = requestAnimationFrame(scrollStep);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovering, selectedEvent]);

  const manualScroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = window.innerWidth > 768 ? 450 : 320;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#081120] text-slate-300 py-24 relative overflow-hidden font-sans flex flex-col">
      
      {/* Background Glows */}
      <div className="absolute top-[10%] left-[20%] w-96 h-96 bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* HEADER */}
      <div className="text-center mb-16 relative z-10 px-6 mt-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 uppercase">
            MISSION ARCHIVES
          </h1>
        </motion.div>
        <p className="max-w-2xl mx-auto text-slate-400 text-sm md:text-base leading-relaxed">
          Visual intel from our past operations. Click on an event classification to preview the captured field data.
        </p>
      </div>

      {/* HORIZONTAL AUTO-SCROLLING SLIDER */}
      <div className="relative w-full flex flex-col justify-center flex-1 z-10 py-10 group/slider">
        
        {/* Navigation Buttons */}
        <button 
          onClick={() => manualScroll("left")}
          className="absolute left-4 md:left-10 z-30 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0a1526]/80 backdrop-blur-md border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 opacity-0 group-hover/slider:opacity-100 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={() => manualScroll("right")}
          className="absolute right-4 md:right-10 z-30 top-1/2 -translate-y-1/2 w-14 h-14 bg-[#0a1526]/80 backdrop-blur-md border border-cyan-500/50 rounded-full flex items-center justify-center text-cyan-400 opacity-0 group-hover/slider:opacity-100 hover:bg-cyan-500/20 hover:scale-110 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        {/* Shadow gradients to fade the edges smoothly */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-r from-[#081120] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-linear-to-l from-[#081120] to-transparent z-20 pointer-events-none" />

        <div 
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="flex overflow-x-auto hide-scrollbar gap-6 px-[10vw]"
        >
          {/* We duplicate the items for infinite scrolling effect */}
          {[...galleryData, ...galleryData, ...galleryData].map((event, index) => (
            <div 
              key={`${event.id}-${index}`}
              className="shrink-0 w-[300px] sm:w-[350px] md:w-[400px]"
            >
              <div 
                onClick={() => setSelectedEvent(event)}
                className="group relative h-[450px] rounded-3xl overflow-hidden cursor-pointer border border-slate-800/80 bg-[#0a1526] transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
              >
                {/* Event Cover Image */}
                <div className="absolute inset-0">
                  <Image 
                    src={event.coverImage} 
                    alt={event.title} 
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#081120] via-[#081120]/40 to-transparent" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-x-0 bottom-0 p-8 flex flex-col justify-end h-full">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 backdrop-blur-md border border-blue-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <ImageIcon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 tracking-wide uppercase">
                      {event.title}
                    </h3>
                    <p className="text-slate-400 text-sm line-clamp-2 mb-4">
                      {event.description}
                    </p>
                    <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      <Maximize2 className="w-4 h-4" />
                      <span>ACCESS FILES ({event.images.length})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-[#040810]/95 backdrop-blur-xl"
          >
            <div className="absolute inset-0" onClick={() => setSelectedEvent(null)} />
            
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              className="relative w-full max-w-6xl max-h-full overflow-y-auto bg-[#0a1526]/80 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl z-10 custom-scrollbar"
            >
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-10 border-b border-white/5 pb-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide uppercase mb-2">
                    {selectedEvent.title}
                  </h2>
                  <p className="text-slate-400 font-mono text-sm flex items-center gap-2">
                    <ImageIcon className="w-4 h-4 text-cyan-500" />
                    {selectedEvent.images.length} FILES RETRIEVED
                  </p>
                </div>
                <button 
                  onClick={() => setSelectedEvent(null)}
                  className="p-3 bg-slate-800/50 hover:bg-red-500/20 text-slate-400 hover:text-red-400 rounded-full transition-colors border border-slate-700 hover:border-red-500/30"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* BENTO GRID */}
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                {selectedEvent.images.map((imgSrc, idx) => {
                  // Logic to create Bento Grid spanning classes
                  let spanClass = "col-span-1 row-span-1";
                  
                  if (selectedEvent.images.length === 1) {
                    spanClass = "col-span-1 md:col-span-3 lg:col-span-4 row-span-2";
                  } else if (idx === 0) {
                    // First image is usually big
                    spanClass = "col-span-1 md:col-span-2 row-span-2";
                  } else if (idx === 3 && selectedEvent.images.length > 4) {
                    // Make a random item wide
                    spanClass = "col-span-1 md:col-span-2 row-span-1";
                  }

                  return (
                    <div 
                      key={idx} 
                      className={`relative rounded-2xl overflow-hidden group border border-slate-800/60 bg-[#081120] ${spanClass}`}
                    >
                      <Image
                        src={imgSrc}
                        alt={`${selectedEvent.title} Image ${idx + 1}`}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      {/* Subtle hover overlay */}
                      <div className="absolute inset-0 bg-blue-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  );
                })}
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(15, 23, 42, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(56, 189, 248, 0.3);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(56, 189, 248, 0.6);
        }
      `}</style>
    </div>
  );
}
