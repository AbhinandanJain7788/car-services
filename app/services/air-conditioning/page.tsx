


import Image from "next/image";
import ServicesHero from "../ServicesHero";
import ServicesSidebar from "@/app/components/ServicesSidebar";
import { brakeServices } from "@/data/brakeServices";
import AcServicesTable from "@/app/components/AcServicesTable";


import { siteConfig } from "@/data/site";


export default function BrakeSystemPage() {
  return (
    <>
      {/* HERO */}
      <ServicesHero title="Air Conditioning" breadcrumb="Air Conditioning" />

      {/* PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-14">
        
        {/* LEFT SIDEBAR */}
        <ServicesSidebar activeId="air-conditioning" />

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3">

          {/* INTRO SECTION (PARALLEL LAYOUT) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 items-start">

 <div className="relative w-full h-[420px] rounded-md overflow-hidden">
              <Image
                src="/services/ac.png"
                alt="Brake Repair Service"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-4xl font-semibold mb-6">
                Air Conditioning
              </h1>

              <p className="text-gray-700 leading-relaxed mb-4">
               Air conditioning systems in vehicles are essential for comfort, especially in hot climates. Over time, AC components can wear out or become inefficient, leading to reduced cooling performance. At Car Garage, we offer professional AC services for Japanese and Korean cars, ensuring optimal cooling and reliability.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our comprehensive Ac service includes inspection, cleaning, replacement, and system calibration to restore smooth braking and vehicle control. With certified technicians, advanced diagnostic tools, and transparent pricing, we deliver top-quality brake solutions you can trust. Book your brake service today and drive with confidence knowing your vehicle stops safely every time.
              </p>

              {/* <p className="text-gray-700 leading-relaxed">
                Our comprehensive brake service includes inspection, cleaning,
                replacement, and system calibration. With certified technicians,
                advanced diagnostic tools, and transparent pricing, we deliver
                brake solutions you can trust.
              </p> */}
            </div>

            {/* IMAGE */}
           

          </section>

          {/* PROCESS SECTION */}
          <section className="mb-24">
            <h2 className="text-3xl font-semibold mb-12">
              Our Air Conditioning Service Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
               
  ["1", "Advanced AC Diagnostics", "Complete air conditioning system inspection using precision diagnostic tools."],
  ["2", "Evaporator & Vent Cleaning", "Deep cleaning of vents, evaporator, and airflow channels."],
  ["3", "Refrigerant Quality Check", "Old or degraded refrigerant professionally flushed and recharged."],
  ["4", "Cooling System Calibration", "AC components optimized and calibrated for maximum cooling efficiency."],
  ["5", "Final Performance Test", "Real-world cooling and comfort test for peak performance."],


              ].map(([step, title, text]) => (
                <div
                  key={step}
                  className="border border-red-200 rounded-lg p-6 text-center hover:shadow-md transition"
                >
                  <div className="w-10 h-10 mx-auto mb-4 rounded-full border border-red-500 text-red-600 flex items-center justify-center font-semibold">
                    {step}
                  </div>
                  <h4 className="font-semibold mb-2">{title}</h4>
                  <p className="text-sm text-gray-600">{text}</p>
                </div>
              ))}
            </div>
          </section>

         
        
        </div>
      </section>
      <AcServicesTable />

<section className="bg-gray-50 py-24">
  <div className="max-w-6xl mx-auto px-6">

    {/* CTA CARD */}
    <div
      className="relative bg-white rounded-2xl shadow-lg p-12 text-center
                 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
    >

      {/* DISCOUNT BADGE */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2
                      bg-red-600 text-white px-6 py-2 text-xs font-semibold
                      tracking-widest uppercase rounded-full shadow-md">
        {siteConfig.discountText}
      </div>

      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5 mt-4">
        Book Your Air Conditioning Service Today
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Drive safely with expert air conditioning services performed by certified
        technicians. We use advanced diagnostics and genuine parts to ensure
        maximum safety, reliability, and performance.
      </p>

      <div className="flex flex-col sm:flex-row justify-center gap-6">

        {/* BOOK APPOINTMENT */}
        <a
          href="/contact"
          className="bg-red-600 text-white px-12 py-4 text-sm font-semibold
                     tracking-widest uppercase rounded-md
                     transition-all duration-300
                     hover:bg-black hover:scale-105"
        >
          Book Appointment
        </a>

        {/* CALL BUTTON (DYNAMIC NUMBER) */}
        <a
          href={`tel:${siteConfig.phone}`}
          className="border border-gray-300 px-12 py-4 text-sm font-semibold
                     tracking-widest uppercase rounded-md
                     transition-all duration-300
                     hover:border-black hover:bg-black hover:text-white hover:scale-105"
        >
          Call {siteConfig.phone}
        </a>

      </div>
    </div>

  </div>
</section>


    </>
  );
}
