"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { MessageCircle, Wrench } from "lucide-react";

export default function FinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.35 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#ECECEC] py-36 px-6">
      <div
        ref={ref}
        className={`
          max-w-5xl mx-auto
          transition-all duration-1000 ease-out
          ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        {/* CTA CARD */}
        <div className="bg-white border border-gray-200 shadow-[0_40px_80px_rgba(0,0,0,0.15)] p-14 text-center">

          {/* ICON */}
          <div
            className={`
              flex justify-center mb-6
              transition-all duration-700
              ${visible ? "scale-100" : "scale-90"}
            `}
          >
            <div className="w-14 h-14 rounded-full bg-black text-white flex items-center justify-center">
              <Wrench size={22} />
            </div>
          </div>

          {/* HEADING */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Ready to Book Your Car Service?
          </h2>

          {/* DIVIDER */}
          <div className="mt-6 mb-6 h-[1px] w-20 bg-gray-300 mx-auto" />

          {/* SUBTEXT */}
          <p className="text-gray-600 max-w-2xl mx-auto">
            Professional vehicle servicing trusted by private owners and fleets
            across Dubai.
          </p>

          {/* ACTIONS */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6">
            {/* PRIMARY */}
            <Link
              href="/services"
              className="
                bg-black text-white
                px-10 py-4
                font-medium
                transition-all
                hover:-translate-y-1
                hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]
              "
            >
              Book a Service
            </Link>

            {/* SECONDARY */}
            <a
              href="https://wa.me/971XXXXXXXXX"
              target="_blank"
              className="
                inline-flex items-center gap-2
                border border-black
                px-10 py-4
                font-medium text-black
                transition-all
                hover:bg-black
                hover:text-white
                hover:-translate-y-1
              "
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>

          {/* TRUST LINE */}
          <div className="mt-10 text-sm text-gray-500">
            ✓ Rated 4.9★ on Google · ✓ 1,200+ Vehicles Serviced in Dubai
          </div>
        </div>
      </div>
    </section>
  );
}
