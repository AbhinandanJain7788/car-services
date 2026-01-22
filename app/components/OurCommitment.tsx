"use client";

import { useState } from "react";
import { Wrench, Disc, Car } from "lucide-react";

const accordionData = [
  {
    title: "24 - Hours Emergency Services",
    content:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, injected humour, or randomised words which don't look even slightly believable. There are many variations of passages of Lorem Ipsum available.",
  },
  {
    title: "Management and Supervision",
    content:
      "Graphic design lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took.",
  },
  {
    title: "Uniformed, Licensed Mechanic",
    content:
      "Development lorem Ipsum is simply dummy text of the printing and type has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make.",
  },
];

export default function OurCommitment() {
  const [activeIndex, setActiveIndex] = useState<number | null>(1); // second open by default

  return (
    <section className="bg-[#1f2a30] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* LEFT SIDE - ACCORDION */}
          <div>

            <h2 className="text-3xl font-semibold mb-10 uppercase tracking-wide">
              Our Commitment
            </h2>

            <div className="space-y-5">

              {accordionData.map((item, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div key={index} className="border border-gray-600">

                    {/* TITLE */}
                    <button
                      onClick={() =>
                        setActiveIndex(isOpen ? null : index)
                      }
                      className={`w-full text-left px-6 py-4 uppercase tracking-wide text-sm font-semibold
                        transition
                        ${
                          isOpen
                            ? "bg-white text-red-600"
                            : "bg-white text-gray-900 hover:text-red-600"
                        }`}
                    >
                      {item.title}
                    </button>

                    {/* CONTENT */}
                    <div
                      className={`overflow-hidden transition-all duration-500
                        ${isOpen ? "max-h-96" : "max-h-0"}`}
                    >
                      <div className="px-6 py-4 text-gray-200 text-sm leading-7 bg-transparent">
                        {item.content}
                      </div>
                    </div>

                  </div>
                );
              })}

            </div>
          </div>

          {/* RIGHT SIDE - SERVICES */}
          <div>

            <h2 className="text-3xl font-semibold mb-6 uppercase tracking-wide">
              We Provide Best Services
            </h2>

            <p className="text-gray-300 leading-7 mb-12 max-w-xl">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>

            {/* SERVICE BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">

              {/* OIL CHANGE */}
              <div className="border border-red-600 p-8 text-center hover:bg-red-600 transition group">
                <Wrench className="mx-auto mb-6 w-10 h-10 group-hover:text-white" />
                <h4 className="uppercase tracking-widest text-sm mb-2">
                  Oil
                </h4>
                <h4 className="uppercase tracking-widest text-sm">
                  Change
                </h4>
              </div>

              {/* BRAKE REPAIR */}
              <div className="border border-red-600 p-8 text-center hover:bg-red-600 transition group">
                <Disc className="mx-auto mb-6 w-10 h-10 group-hover:text-white" />
                <h4 className="uppercase tracking-widest text-sm mb-2">
                  Break
                </h4>
                <h4 className="uppercase tracking-widest text-sm">
                  Repair
                </h4>
              </div>

              {/* CAR WHEELS */}
              <div className="border border-red-600 p-8 text-center hover:bg-red-600 transition group">
                <Car className="mx-auto mb-6 w-10 h-10 group-hover:text-white" />
                <h4 className="uppercase tracking-widest text-sm mb-2">
                  Car
                </h4>
                <h4 className="uppercase tracking-widest text-sm">
                  Wheels
                </h4>
              </div>

            </div>

            {/* READ MORE BUTTON */}
            <div className="text-right">
              <a
                href="#"
                className="inline-block bg-red-600 text-white px-8 py-3 text-xs font-semibold
                           tracking-widest uppercase hover:bg-black transition"
              >
                Read More
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
