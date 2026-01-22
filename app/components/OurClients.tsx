"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { clients } from "@/data/clients";

export default function OurClients() {
  const [index, setIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % clients.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-gray-100 py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="text-center mb-16">
          <h5 className="text-red-600 uppercase tracking-widest text-sm mb-2">
            Recently Finished
          </h5>
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Our Clients
          </h2>
          <p className="max-w-3xl mx-auto text-gray-600 leading-7">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </div>

        {/* LOGO CAROUSEL */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 180}px)`,
            }}
          >
            {/* Duplicate for smooth loop */}
            {[...clients, ...clients].map((client, i) => (
              <div
                key={i}
                className="min-w-[160px] flex items-center justify-center px-4"
              >
                <Image
                  src={client.logo}
                  alt="Client Logo"
                  width={140}
                  height={80}
                  className="opacity-60 hover:opacity-100 transition"
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center gap-3 mt-10">
          {clients.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${
                i === index ? "bg-red-600" : "bg-gray-400"
              }`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
