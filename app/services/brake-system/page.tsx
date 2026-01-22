// import Image from "next/image";
// import ServicesHero from "../ServicesHero";
// import { brakeServices } from "@/data/brakeServices";

// export default function BrakeSystemPage() {
//   return (
//     <>
//       {/* HERO – SAME AS SERVICES PAGE */}
//       <ServicesHero title="Brake Repair" breadcrumb="Brake repair" />

//       <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
//         {/* LEFT SIDEBAR */}
//         <aside className="space-y-6">
//           <div className="border rounded-md">
//             {[
//               "All Services",
//               "Engine Diagnostics",
//               "Lube Oil and Filters",
//               "Belt and Hoses",
//               "Air Conditioning",
//               "Brake repair",
//               "Tire and wheel Services",
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="px-4 py-3 border-b last:border-b-0 text-sm hover:bg-gray-100 cursor-pointer"
//               >
//                 {item}
//               </div>
//             ))}
//           </div>

//           {/* OFFER BOX */}
//           <div className="bg-gray-100 p-6">
//             <h3 className="text-2xl font-semibold mb-3">GET 10% OFF TODAY</h3>
//             <p className="text-sm text-gray-600 mb-4">
//               A Completely Safe and Advanced Cleaning Solution for both Petrol
//               and Diesel Engines
//             </p>
//             <button className="bg-red-600 text-white px-5 py-2 text-sm">
//               READ MORE
//             </button>
//           </div>
//         </aside>

//         {/* MAIN CONTENT */}
//         <div className="lg:col-span-3">
//           <h1 className="text-4xl font-semibold mb-6">BRAKE REPAIR</h1>

//           <div className="relative w-full h-[420px] mb-8">
//             <Image
//               src="/services/brake.jpg"
//               alt="Brake Repair"
//               fill
//               className="object-cover rounded-md"
//             />
//           </div>

//           <p className="text-gray-700 leading-relaxed mb-12">
//           Brakes are one of the most critical safety components in any vehicle. Over time, brake pads wear out, rotors get damaged, and brake fluid loses its effectiveness — all of which can compromise your safety. At Car Garage, we specialize in professional brake services for Japanese and Korean cars, ensuring maximum safety and performance on every drive.

// Our comprehensive brake service includes inspection, cleaning, replacement, and system calibration to restore smooth braking and vehicle control. With certified technicians, advanced diagnostic tools, and transparent pricing, we deliver top-quality brake solutions you can trust. Book your brake service today and drive with confidence knowing your vehicle stops safely every time.

// Our advanced cleaning process removes harmful deposits, restores fuel flow, and improves overall engine efficiency. With certified technicians, cutting-edge equipment, and transparent pricing, we guarantee top-quality service. Book your injector cleaning today and experience better fuel economy, increased power, and a healthier engine! 
//           </p>

//           {/* SUB SERVICES */}
//           <div className="space-y-6">
//             {brakeServices.map((service, index) => (
//               <div
//                 key={index}
//                 className="grid grid-cols-1 md:grid-cols-5 gap-6 border-b pb-6"
//               >
//                 <div className="relative md:col-span-1 h-28">
//                   <Image
//                     src={service.image}
//                     alt={service.title}
//                     fill
//                     className="object-cover rounded"
//                   />
//                 </div>

//                 <div className="md:col-span-3">
//                   <h4 className="text-lg font-semibold">{service.title}</h4>
//                   <p className="text-sm text-gray-600 mt-1">
//                     Time: {service.time}
//                   </p>
//                 </div>

//                 <div className="md:col-span-1 text-right">
//                   <p className="font-semibold">{service.price}</p>
//                   <button className="mt-3 text-sm border px-4 py-1 hover:bg-black hover:text-white transition">
//                     Add to cart
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
















// import Image from "next/image";
// import ServicesHero from "../ServicesHero";

// import BrakeServicesTable from "@/app/components/BrakeServicesTable";
// import ServicesSidebar from "@/app/components/ServicesSidebar";
// import BrakeServicesGrid from "@/app/components/BrakeServicesGrid";

// export default function BrakeSystemPage() {
//   return (
//     <>
//       {/* HERO */}
//       <ServicesHero
//         title="Brake Repair"
//         breadcrumb="Brake Repair"
        
//       />

//       {/* PAGE CONTENT */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-12">
        
//         {/* LEFT SIDEBAR */}
//         <ServicesSidebar activeId="brake-system" />

//         {/* RIGHT CONTENT */}
//         <div className="lg:col-span-3">
//           <h1 className="text-4xl font-semibold mb-6">Brake Repair</h1>

//           <div className="relative w-full h-[360px] mb-8">
//             <Image
//               src="/services/brake.jpg"
//               alt="Brake Repair"
//               fill
//               className="object-cover rounded-md"
//             />
//           </div>

//           <p className="text-gray-700 leading-relaxed">
//             Brakes are one of the most critical safety components in any vehicle. Over time, brake pads wear out, rotors get damaged, and brake fluid loses its effectiveness — all of which can compromise your safety. At Car Garage, we specialize in professional brake services for Japanese and Korean cars, ensuring maximum safety and performance on every drive.

// Our comprehensive brake service includes inspection, cleaning, replacement, and system calibration to restore smooth braking and vehicle control. With certified technicians, advanced diagnostic tools, and transparent pricing, we deliver top-quality brake solutions you can trust. Book your brake service today and drive with confidence knowing your vehicle stops safely every time.

// Our advanced cleaning process removes harmful deposits, restores fuel flow, and improves overall engine efficiency. With certified technicians, cutting-edge equipment, and transparent pricing, we guarantee top-quality service. Book your injector cleaning today and experience better fuel economy, increased power, and a healthier engine! 
//           </p>

//           {/* SERVICES TABLE */}
          

//         </div>
//         <BrakeServicesGrid />
//       </section>
//     </>
//   );
// }






// import Image from "next/image";
// import ServicesHero from "../ServicesHero";
// import ServicesSidebar from "@/app/components/ServicesSidebar";
// import { brakeServices } from "@/data/brakeServices";

// export default function BrakeSystemPage() {
//   return (
//     <>
//       {/* HERO SECTION (DYNAMIC – ALREADY WORKING) */}
//       <ServicesHero title="Brake Repair" breadcrumb="Brake Repair" />

//       {/* PAGE LAYOUT */}
//       <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-14">

//         {/* LEFT SIDEBAR */}
//         <ServicesSidebar activeId="brake-system" />

//         {/* RIGHT CONTENT */}
//         <div className="lg:col-span-3">

//           {/* INTRO SECTION */}
//           <section className="mb-20">
//             <h1 className="text-4xl font-semibold mb-6">
//               Brake Repair
//             </h1>

//             {/* IMAGE BELOW HEADING */}
//             <div className="relative w-full max-w-md h-[260px] mb-8 rounded-md overflow-hidden">
//               <Image
//                 src="/services/brake.jpg"
//                 alt="Brake Repair Service"
//                 fill
//                 className="object-cover"
//                 priority
//               />
//             </div>

//             {/* DESCRIPTION */}
//             <p className="text-gray-700 leading-relaxed mb-4">
//               Brakes are one of the most critical safety components in any
//               vehicle. Over time, brake pads wear out, rotors get damaged, and
//               brake fluid loses its effectiveness — all of which can compromise
//               your safety.
//             </p>

//             <p className="text-gray-700 leading-relaxed mb-4">
//               At <strong>Car Garage</strong>, we specialize in professional brake
//               services for Japanese and Korean cars, ensuring maximum safety and
//               performance on every drive.
//             </p>

//             <p className="text-gray-700 leading-relaxed">
//               Our comprehensive brake service includes inspection, cleaning,
//               replacement, and system calibration. With certified technicians,
//               advanced diagnostic tools, and transparent pricing, we deliver
//               brake solutions you can trust.
//             </p>
//           </section>

//           {/* PROCESS SECTION */}
//           <section className="mb-24">
//             <h2 className="text-3xl font-semibold mb-12">
//               Our Auto Brake Service Process
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
//               {[
//                 {
//                   step: "1",
//                   title: "Inspection & Diagnosis",
//                   text: "Complete brake system inspection using advanced diagnostics.",
//                 },
//                 {
//                   step: "2",
//                   title: "Brake Pad Cleaning",
//                   text: "Thorough cleaning of pads, rotors, and calipers.",
//                 },
//                 {
//                   step: "3",
//                   title: "Brake Fluid Check",
//                   text: "Old fluid flushed and replaced with high-quality fluid.",
//                 },
//                 {
//                   step: "4",
//                   title: "System Calibration",
//                   text: "Brake components adjusted for balanced braking.",
//                 },
//                 {
//                   step: "5",
//                   title: "Final Safety Test",
//                   text: "Road test performed to ensure braking performance.",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.step}
//                   className="border border-red-200 rounded-lg p-6 text-center hover:shadow-md transition"
//                 >
//                   <div className="w-10 h-10 mx-auto mb-4 rounded-full border border-red-500 text-red-600 flex items-center justify-center font-semibold">
//                     {item.step}
//                   </div>
//                   <h4 className="font-semibold mb-2">{item.title}</h4>
//                   <p className="text-sm text-gray-600">{item.text}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* SUB SERVICES SECTION */}
//           <section>
//             <h2 className="text-3xl font-semibold mb-10">
//               Brake System Services & Pricing
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {brakeServices.map((service) => (
//                 <div
//                   key={service.title}
//                   className="border rounded-lg p-6 hover:shadow-md transition bg-white"
//                 >
//                   <div className="flex gap-4 items-start">
//                     <div className="relative w-20 h-20 rounded-md overflow-hidden shrink-0">
//                       <Image
//                         src={service.image}
//                         alt={service.title}
//                         fill
//                         className="object-cover"
//                       />
//                     </div>

//                     <div>
//                       <h4 className="font-semibold mb-1">
//                         {service.title}
//                       </h4>

//                       <p className="text-sm text-gray-600">
//                         <span className="font-medium">Price:</span>{" "}
//                         {service.price}
//                       </p>

//                       <p className="text-sm text-gray-600">
//                         <span className="font-medium">Time:</span>{" "}
//                         {service.time}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//         </div>
//       </section>
//     </>
//   );
// }







import Image from "next/image";
import ServicesHero from "../ServicesHero";
import ServicesSidebar from "@/app/components/ServicesSidebar";
import { brakeServices } from "@/data/brakeServices";
import BrakeServicesTable from "@/app/components/BrakeServicesTable";
import { siteConfig } from "@/data/site";
export default function BrakeSystemPage() {
  return (
    <>
      {/* HERO */}
      <ServicesHero title="Brake Repair" breadcrumb="Brake Repair" />

      {/* PAGE CONTENT */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-14">
        
        {/* LEFT SIDEBAR */}
        <ServicesSidebar activeId="brake-system" />

        {/* RIGHT CONTENT */}
        <div className="lg:col-span-3">

          {/* INTRO SECTION (PARALLEL LAYOUT) */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-24 items-start">

 <div className="relative w-full h-[420px] rounded-md overflow-hidden">
              <Image
                src="/services/brake.jpg"
                alt="Brake Repair Service"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* TEXT */}
            <div>
              <h1 className="text-4xl font-semibold mb-6">
                Brake Repair
              </h1>

              <p className="text-gray-700 leading-relaxed mb-4">
               Brakes are one of the most critical safety components in any vehicle. Over time, brake pads wear out, rotors get damaged, and brake fluid loses its effectiveness — all of which can compromise your safety. At Car Garage, we specialize in professional brake services for Japanese and Korean cars, ensuring maximum safety and performance on every drive.
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                Our comprehensive brake service includes inspection, cleaning, replacement, and system calibration to restore smooth braking and vehicle control. With certified technicians, advanced diagnostic tools, and transparent pricing, we deliver top-quality brake solutions you can trust. Book your brake service today and drive with confidence knowing your vehicle stops safely every time.
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
              Our Auto Brake Service Process
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                ["1", "Inspection & Diagnosis", "Complete system inspection using diagnostics."],
                ["2", "Brake Pad Cleaning", "Cleaning pads, rotors, and calipers."],
                ["3", "Brake Fluid Check", "Old fluid flushed and replaced."],
                ["4", "System Calibration", "Brake components balanced and aligned."],
                ["5", "Final Safety Test", "Road test for safety and performance."],
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
       <BrakeServicesTable />

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
        Book Your Brake Repair Service Today
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
        Drive safely with expert brake repair services performed by certified
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
