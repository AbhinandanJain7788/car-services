"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function EngineHero() {
  return (
    <section className=" w-full py-24 bg-gradient-to-b bg-[#1f2a30]">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* SMALL TOP LINE */}
          <p className="text-sm uppercase tracking-widest text-red-500 font-semibold">
          
          </p>

          {/* MAIN HEADING */}
          <h1 className="text-3xl md:text-3xl font-bold leading-tight text-white">
            Premium Performance Engine Oils <br />
            <span className="text-gray-300 text-2xl md:text-2xl">
            Crafted for Extreme Heat. Refined for Excellence.
            </span>
          </h1>

          {/* DESCRIPTION */}
          <p className="text-white max-w-xl leading-relaxed">
          Experience a superior range of high-performance engine oils engineered for luxury and high-end vehicles, delivering uncompromising protection, refined performance, and long-lasting efficiency in the demanding UAE climate.
          </p>

          {/* POINTS */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span className="text-gray-300">Advanced Thermal Protection for Extreme Temperatures</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span className="text-gray-300">Smooth, Quiet Engine Performance</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-500 w-5 h-5" />
              <span className="text-gray-300">OEM-Approved for Luxury & Performance Vehicles</span>
            </div>
          </div>

          {/* BUTTON */}
          <div>
            <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition shadow-lg">
              BUY NOW
            </button>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center"
        >
          {/* Soft background glow */}
          <div className="absolute -inset-10 bg-red-100 rounded-full blur-3xl opacity-10"></div>

          <img
            src="/mianproduct/engineoil4.png"   // replace with your tyre image path
            alt="High Performance Tyres"
            className="relative w-[420px] md:w-[520px] drop-shadow-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
