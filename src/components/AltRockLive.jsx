"use client";
import heroImg from "../assets/hero.png";
import live1Img from "../assets/live1.jpg";
import live2Img from "../assets/live2.jpg";
import live3Img from "../assets/live3.jpg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AltRockLive() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const dates = [
    {
      id: 1,
      city: "Ridgewood, NY",
      venue: "TV Eye",
      date: "2025-11-02",
      time: "19:00",
      price: "$26.08",
      map: "https://www.google.com/maps?f=d&hl=en&daddr=1647+Weirfield+St,+Ridgewood,+NY,+United+States,+11385",
      ticket: "https://wl.eventim.us/event/loren-the-waits-album-showcase/667059",
      img: live1Img,
    },
    {
      id: 2,
      city: "Chicago, IL",
      venue: "Beat Kitchen",
      date: "2025-11-04",
      time: "Doors: 19:00 | Show: 20:00",
      price: "$26.96",
      map: "https://www.google.com/maps?f=d&hl=en&daddr=2100+W+Belmont+Ave,+Chicago,+IL,+United+States,+60618",
      ticket: "https://wl.eventim.us/event/loren-the-waits-album-showcase/667063",
      img: live2Img,
    },
    {
      id: 3,
      city: "Los Angeles, CA",
      venue: "The Moroccan Lounge",
      date: "2025-11-16",
      time: "21:30",
      price: "$27.65",
      map: "https://www.google.com/maps?daddr=34.04898,-118.23365",
      ticket: "https://www.ticketmaster.com/event/09006342A0D76E3F",
      img: live3Img,
    },
  ];

  // 🔁 並び替え（未来→過去）
  const today = new Date();
  const sortedDates = [...dates].sort((a, b) => {
    const aDate = new Date(a.date);
    const bDate = new Date(b.date);
    if ((aDate >= today && bDate >= today) || (aDate < today && bDate < today)) {
      return aDate - bDate;
    }
    if (aDate < today && bDate >= today) return 1;
    if (aDate >= today && bDate < today) return -1;
    return 0;
  });

  const openModal = (d) => {
    setSelectedDate(d);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white antialiased">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 py-8 flex items-center justify-between">
        <h1 className="text-xl font-bold">LØREN - “THE WAITS” Album Showcase</h1>
        <nav className="flex gap-6 items-center text-sm text-gray-200">
          <a href="https://www.instagram.com/the.ayla.0/" className="hover:underline">About</a>
          <a href="#dates" className="hover:underline">Dates</a>
          <a href="https://www.instagram.com/lorenisalone/" className="hover:underline">Media</a>
          <button
            onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
            className="py-2 px-4 bg-white text-black rounded-full font-semibold shadow"
          >
            Tickets
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">ALTERNATIVE ROCK — LØREN LIVE IN YOUR CITY</h2>
          <p className="mt-4 text-gray-300">LØREN - “THE WAITS” Album Showcase</p>
          <div className="mt-6 flex gap-3">
            <a href="#dates" className="inline-flex items-center gap-2 py-3 px-5 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 font-semibold shadow-lg">ticket now</a>
            <a href="#media" className="inline-flex items-center gap-2 py-3 px-5 rounded-full border border-gray-700">Movie</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img src={heroImg} alt="The Echoes Live Hero" className="w-full h-80 md:h-96 object-cover rounded-2xl" />
            <div className="p-4 bg-gradient-to-t from-black/70 to-transparent">
              <p className="text-sm text-gray-200">Live Photo — Hyang Ryu</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Dates */}
      <section id="dates" className="max-w-5xl mx-auto px-6 py-16 space-y-8">
        <h2 className="text-3xl font-bold text-center mb-8">Tour Dates</h2>
        {sortedDates.map((d) => {
          const isPast = new Date(d.date) < today;
          return (
            <motion.div
              key={d.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className={`flex flex-row border rounded-2xl overflow-hidden shadow-lg ${
                isPast ? "bg-gray-800/70 border-gray-700 opacity-70" : "bg-gray-900/90 border-gray-700"
              }`}
            >
              <div className="w-1/3 h-64 flex-shrink-0">
                <img src={d.img} alt={`${d.city} 会場写真`} className="w-full object-cover h-full" />
              </div>

              <div className="w-2/3 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-1">{d.city}</h3>
                  <p className="text-gray-300">{d.venue}</p>
                  <p className="text-sm text-gray-400 mt-1">{d.date} — {d.time}</p>

                  {/* ✅ ENDED ラベル */}
                  {isPast ? (
                    <span className="inline-block mt-2 px-3 py-1 text-xs font-bold text-gray-200 bg-gray-700 rounded-full">ENDED</span>
                  ) : (
                    <p className="text-lg font-bold mt-3">{d.price}</p>
                  )}
                </div>

                <hr className="border-t border-dashed border-gray-600 my-8" />

                <div className="mt-4 flex gap-3">
                  {!isPast && (
                    <a
                      href={d.ticket}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 text-center bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl font-semibold hover:opacity-90 transition"
                    >
                      BUY TICKET
                    </a>
                  )}

                  <a
                    href={d.map}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2 px-4 rounded-xl border border-gray-700 hover:bg-gray-800 transition"
                  >
                    MAP
                  </a>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>

      {/* Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div initial={{ y: 20, scale: 0.98 }} animate={{ y: 0, scale: 1 }} exit={{ y: 10, scale: 0.98 }} transition={{ type: "spring" }} className="max-w-md w-full bg-gray-900 border border-gray-800 rounded-2xl p-6 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <h5 className="text-lg font-bold">チケット — {selectedDate?.city}</h5>
                  <p className="text-sm text-gray-400">{selectedDate?.date} ・ {selectedDate?.time} • {selectedDate?.venue}</p>
                </div>
                <button onClick={() => setShowModal(false)} className="p-2 rounded-lg bg-gray-800">×</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
