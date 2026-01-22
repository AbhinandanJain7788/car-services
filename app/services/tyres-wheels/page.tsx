
import Image from "next/image";
import ServicesHero from "../ServicesHero";
import ServicesSidebar from "@/app/components/ServicesSidebar";

import TyreServicesTable from "@/app/components/tyresServicesTable";
import { siteConfig } from "@/data/site";

export default function BrakeSystemPage() {
  return (
    <>
      {/* HERO */}
      <ServicesHero title="Tyre & Wheel Services" breadcrumb="Tyre & Wheel Services" />

      {/* PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-14">
        
        {/* LEFT SIDEBAR */}
        <ServicesSidebar activeId="tyres-wheels" />

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3">

          {/* INTRO SECTION (PARALLEL LAYOUT) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 items-start">

 <div className="relative w-full h-[420px] rounded-md overflow-hidden">
              <Image
                src="/services/tyre1.jpg"
                alt="Tyre & Wheels Services"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-4xl font-semibold mb-6">
                Tyre & Wheels Services
              </h1>

              <p className="text-gray-700 leading-relaxed mb-4">
                Tyre & Wheels services are essential for maintaining vehicle stability, handling, and overall driving comfort. At Car Garage, we provide comprehensive tyre & wheels services tailored to Japanese and Korean vehicles, ensuring optimal performance and safety.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
              If you’re experiencing issues with your tyres or wheels, contact a professional tyre and wheel service mechanic to diagnose and fix the problem. They can identify the required parts and advise on availability from local dealers or specialty shops

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
             Our Tyre & Wheel  Service Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                ["1", "Inspection & Diagnosis", "Tyres and wheels inspected for wear, damage, and pressure issues."],
                ["2", "Tyre Condition Check", "Tread depth, alignment, and balance checked for safe driving."],
                ["3", "Wheel Alignment & Balancing", "Wheels aligned and balanced to ensure smooth handling and even wear."],
                ["4", "Repair & Replacement", "Damaged tyres or wheels repaired or replaced as required."],
                ["5", "Final Safety Check", "Road test and final checks performed for stability and control."],
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
      </section>\
<TyreServicesTable/>

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
        Book Your Tyre & Wheel Services Today
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Drive safely with expert tyre & wheel services performed by certified
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
