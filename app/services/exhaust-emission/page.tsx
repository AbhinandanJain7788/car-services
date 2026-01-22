


import Image from "next/image";
import ServicesHero from "../ServicesHero";
import ServicesSidebar from "@/app/components/ServicesSidebar";
import { brakeServices } from "@/data/brakeServices";


import ExhaustServicesTable from "@/app/components/ExhaustServicesTable";

import { siteConfig } from "@/data/site";


export default function ExhaustEmissionPage() {
  return (
    <>
      {/* HERO */}
      <ServicesHero title="Exhaust Emission" breadcrumb="Exhaust Emission" />

      {/* PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-14">
        
        {/* LEFT SIDEBAR */}
        <ServicesSidebar activeId="exhaust-emission" />

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3">

          {/* INTRO SECTION (PARALLEL LAYOUT) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 items-start">

 <div className="relative w-full h-[420px] rounded-md overflow-hidden">
              <Image
                src="/services/exhaust1.png"
                alt="Brake Repair Service"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-4xl font-semibold mb-6">
                Exhaust Emission
              </h1>

              <p className="text-gray-700 leading-relaxed mb-4">
               Exhaust emission systems in vehicles are crucial for environmental compliance and engine performance. Over time, these systems can degrade or become inefficient, leading to increased emissions and reduced performance. At Car Garage, we offer professional exhaust emission services for Japanese and Korean cars, ensuring optimal emissions control and reliability.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our comprehensive exhaust emission service includes inspection, cleaning, replacement, and system calibration to restore smooth braking and vehicle control. With certified technicians, advanced diagnostic tools, and transparent pricing, we deliver top-quality brake solutions you can trust. Book your brake service today and drive with confidence knowing your vehicle stops safely every time.
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
              Our Exhaust Emission Service Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
               
  
  ["1", "Exhaust System Diagnostics", "Comprehensive inspection of the exhaust system using advanced diagnostic equipment."],
  ["2", "Carbon & Residue Cleaning", "Precision removal of carbon buildup from exhaust components."],
  ["3", "Leak & Emission Check", "Detection and correction of leaks to ensure optimal emission performance."],
  ["4", "Flow & Pressure Calibration", "Exhaust flow and back-pressure calibrated for peak engine efficiency."],
  ["5", "Final Performance Validation", "Road-tested to confirm smooth exhaust flow and refined engine response."]




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
     <ExhaustServicesTable/>

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
        Book Your Exhaust Emission Service Today
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Drive safely with expert exhaust emission services performed by certified
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
