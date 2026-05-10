"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Users, Clock, Terminal, ExternalLink, Code2, Zap, Star } from "lucide-react";
import { eventsData, EventStatus, TechEvent } from "@/components/data/eventsData";

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState<EventStatus>("Future");

  const filteredEvents = eventsData.filter((event) => event.status === activeTab);

  const getHeaderTitle = () => {
    switch (activeTab) {
      case "Future": return "UPCOMING MISSIONS";
      case "Ongoing": return "ACTIVE OPERATIONS";
      case "Past": return "MISSION ARCHIVES";
      default: return "MISSIONS";
    }
  };

  return (
    <div className="min-h-screen bg-[#081120] text-slate-300 py-24 px-6 relative overflow-hidden font-sans">

      {/* Subtle Background Elements */}
      <div className="absolute top-[20%] left-[15%] w-1.5 h-1.5 bg-cyan-500 rounded-full shadow-[0_0_15px_#06b6d4] animate-pulse" />
      <div className="absolute top-[60%] right-[15%] w-1.5 h-1.5 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] animate-pulse" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 mt-10">

        {/* HEADER */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4"
          >
            <h1 className="text-4xl md:text-5xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 uppercase">
              {getHeaderTitle()}
            </h1>
          </motion.div>
          <p className="max-w-2xl text-slate-400 text-sm md:text-base leading-relaxed">
            Join our elite events where code warriors gather to push the boundaries of technology. Every mission is designed to challenge your skills and expand your digital horizons.
          </p>
        </div>

        {/* TABS */}
        <div className="flex justify-center mb-16">
          <div className="flex gap-2 p-1.5 bg-[#0a1526]/80 backdrop-blur-md rounded-full border border-slate-800 shadow-xl relative">
            {(["Past", "Ongoing", "Future"] as EventStatus[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-6 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 z-10 ${activeTab === tab ? "text-white" : "text-slate-500 hover:text-slate-300"
                  }`}
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-slate-800/80 border border-slate-700 rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* EVENTS GRID */}
        <div className={`grid gap-6 ${activeTab === "Past" ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"}`}>
          <AnimatePresence mode="popLayout">
            {filteredEvents.length > 0 ? (
              filteredEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ delay: index * 0.1, duration: 0.4 }}
                >
                  {activeTab === "Past" ? (
                    <PastEventCard event={event} />
                  ) : (
                    <EventCard event={event} isActive={activeTab === "Ongoing" || activeTab === "Future"} />
                  )}
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-full py-32 flex flex-col items-center justify-center border border-slate-800/50 rounded-2xl bg-[#0a1526]/50"
              >
                <Terminal className="w-10 h-10 text-slate-600 mb-4" />
                <p className="text-lg text-slate-400 font-medium tracking-wide">NO MISSIONS AVAILABLE</p>
                <p className="text-slate-500 text-sm mt-2">Awaiting new intel...</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}

// Full size card for Future / Ongoing Events
function EventCard({ event, isActive }: { event: TechEvent; isActive: boolean }) {
  const dateParts = event.date.split(" ");
  const day = dateParts[1]?.replace(",", "") || "00";
  const monthYear = `${dateParts[0]?.toUpperCase()}, ${dateParts[2] || new Date().getFullYear()}`;

  return (
    <div className="group flex flex-col h-full bg-[#0a1526]/80 border border-slate-800 hover:border-slate-700 rounded-3xl p-8 transition-all duration-300 relative overflow-hidden">

      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header: Date & Status */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <div className="flex flex-col">
          <span className="text-4xl font-bold text-cyan-400 mb-1">{day}</span>
          <span className="text-xs text-yellow-500 font-mono font-semibold">{monthYear}</span>
          <span className="text-[10px] text-slate-500 font-mono mt-1">(Tentative)</span>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 uppercase tracking-wide">
              {event.type}
            </span>
            {event.status === "Ongoing" && (
              <span className="px-3 py-1 text-[10px] font-bold rounded-full bg-red-500/10 text-red-400 border border-red-500/20 uppercase tracking-wide flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse" />
                LIVE
              </span>
            )}
          </div>
          <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mt-2">
            <Clock className="w-3.5 h-3.5" />
            <span>{event.time}</span>
          </div>
        </div>
      </div>

      {/* Title & Description */}
      <div className="mb-8 relative z-10 flex-1">
        <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
          {event.description}
        </p>
      </div>

      {/* Meta Grid */}
      <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8 relative z-10">
        <div className="flex items-center gap-3">
          <MapPin className="w-4 h-4 text-cyan-500" />
          <span className="text-xs font-mono text-slate-300">{event.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <Users className="w-4 h-4 text-purple-400" />
          <span className="text-xs font-mono text-slate-300">{event.participants} slots</span>
        </div>
        <div className="flex items-center gap-3">
          <Star className="w-4 h-4 text-yellow-500" />
          <span className="text-xs font-mono text-slate-300">All Levels</span>
        </div>
        <div className="flex items-center gap-3">
          <Zap className="w-4 h-4 text-green-400" />
          <span className="text-xs font-mono text-slate-300">High Energy</span>
        </div>
      </div>

      {/* Action Button */}
      <div className="relative z-10 mt-auto">
        <button
          className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-xs font-bold tracking-widest uppercase transition-all duration-300 bg-linear-to-r from-blue-600 to-cyan-500 hover:opacity-90 text-white shadow-lg shadow-blue-500/20"
        >
          REGISTER FOR MISSION
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

// Compact card for Past Events (Mission Archives)
function PastEventCard({ event }: { event: TechEvent }) {
  const dateParts = event.date.split(" ");
  const day = dateParts[1]?.replace(",", "") || "00";
  const monthYear = `${dateParts[0]?.substring(0, 3)}, ${dateParts[2] || new Date().getFullYear()}`;

  return (
    <div className="group flex flex-col h-full bg-[#0a1526]/50 border border-slate-800 hover:border-slate-700 rounded-2xl p-6 transition-all duration-300 relative overflow-hidden">

      {/* Subtle hover gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-blue-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Header: Icon & Date */}
      <div className="flex justify-between items-center mb-6 relative z-10">
        <Code2 className="w-5 h-5 text-cyan-500" />
        <span className="text-[11px] font-mono text-slate-500">
          {day} {monthYear}
        </span>
      </div>

      {/* Title & Description */}
      <div className="mb-6 relative z-10 flex-1">
        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
          {event.title}
        </h3>
        <p className="text-slate-400 text-xs leading-relaxed line-clamp-3">
          {event.description}
        </p>
      </div>

      {/* Footer Meta */}
      <div className="relative z-10 mt-auto">
        <div className="flex items-center gap-2 text-cyan-500">
          <Users className="w-4 h-4" />
          <span className="text-xs font-mono">{event.participants}</span>
        </div>
      </div>
    </div>
  );
}