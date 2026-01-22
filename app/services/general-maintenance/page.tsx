
import Image from "next/image";
import ServicesHero from "../ServicesHero";
import ServicesSidebar from "@/app/components/ServicesSidebar";




import GeneralServicesTable from "@/app/components/generalServicesTable";

import { siteConfig } from "@/data/site";
export default function BrakeSystemPage() {
  return (
    <>
      {/* HERO */}
      <ServicesHero title="General & Preventive Services" breadcrumb="General & Preventive Services" />

      {/* PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-14">
        
        {/* LEFT SIDEBAR */}
        <ServicesSidebar activeId="general-maintenance" />

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3">

          {/* INTRO SECTION (PARALLEL LAYOUT) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 items-start">

 <div className="relative w-full h-[420px] rounded-md overflow-hidden">
              <Image
                src="/services/general.png"
                alt="General & Preventive Services"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-4xl font-semibold mb-6">
                General & Preventive Services
              </h1>

              <p className="text-gray-700 leading-relaxed mb-4">
                General & Preventive services are essential for maintaining vehicle stability, handling, and overall driving comfort. At Car Garage, we provide comprehensive general & preventive services tailored to Japanese and Korean vehicles, ensuring optimal performance and safety.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
               If you have a problem with your vehicle's general maintenance, you should contact a Car General & Preventive Services mechanic who can diagnose and repair the problem. A general & preventive services mechanic can determine which parts are required for your specific situation and whether they are available through a local dealership or specialty shop.
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
             Our General & Preventive Service Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                ["1", "Multi-Point Inspection", "Complete vehicle inspection to assess overall condition and safety.."],
                ["2", "Fluid Level Check", "Engine oil, coolant, brake, and other fluids checked and topped up."],
                ["3", "Filter & Wear Check", "Air, oil, and cabin filters inspected along with common wear items."],
                ["4", "Basic Maintenance Service", "Scheduled maintenance performed to prevent future issues."],
                ["5", "Final Safety Check", "Final inspection and test drive to ensure reliable performance."],
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
<GeneralServicesTable/>

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
        Book Your General & Preventive Services Today
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Drive safely with expert general & preventive services performed by certified
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
