// "use client";

// import Image from "next/image";
// import Link from "next/link";
// import { useEffect, useState } from "react";
// import { services } from "@/data/services";

// export default function ServicesCarousel() {
//   const [index, setIndex] = useState(0);
//   const visibleCount = 3;

//   const totalSlides = Math.ceil(services.length / visibleCount);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % totalSlides);
//     }, 4500);

//     return () => clearInterval(timer);
//   }, [totalSlides]);

//   const start = index * visibleCount;
//   const visibleServices = services.slice(start, start + visibleCount);

//   const next = () => setIndex((prev) => (prev + 1) % totalSlides);
//   const prev = () =>
//     setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

//   return (
//     <section
//       className="relative py-28 bg-[#1f2a30] text-white"

      
//       style={{
//         backgroundImage: "url('/dots.png')",
//         backgroundRepeat: "repeat",
//       }}
//     >
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center max-w-3xl mx-auto mb-20">
//           <span className="text-sm tracking-widest uppercase text-gray-300">
//             Our Services
//           </span>

//           <h2 className="mt-3 text-3xl md:text-4xl font-bold">
//             We Provide Professional Services
//           </h2>

//           <p className="mt-6 text-[15px] leading-7 text-gray-300">
//             There are many variations of passages of Lorem Ipsum available,
//             but the majority have suffered alteration in some form.
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
//           {visibleServices.map((service) => (
//             <div
//               key={service.id}
//               className="bg-white text-gray-900 overflow-hidden
//                          transition-all duration-500
//                          hover:-translate-y-3 hover:shadow-2xl"
//             >
//               {/* IMAGE */}
//               <div className="relative h-56 w-full overflow-hidden">
//                 <Image
//                   src={service.image}
//                   alt={service.title}
//                   fill
//                   className="object-cover transition-transform duration-500
//                              group-hover:scale-105"
//                 />
//               </div>

//               {/* CONTENT */}
//               <div className="px-7 py-8">
//                 <h3 className="text-sm font-semibold tracking-widest uppercase">
//                   {service.title}
//                 </h3>

//                 <p className="mt-4 text-[15px] leading-7 text-gray-600">
//                   {service.shortDescription}
//                 </p>

//                 <Link
//                   href={`/services/${service.id}`}
//                   className="inline-block mt-7 bg-red-600 text-white
//                              px-7 py-3 text-xs font-semibold
//                              tracking-widest uppercase
//                              hover:bg-black transition"
//                 >
//                   View Services
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* NAVIGATION */}
//         <div className="flex justify-center gap-4 mt-16">
//           <button
//             onClick={prev}
//             className="w-12 h-12 border border-red-600 text-red-600
//                        hover:bg-red-600 hover:text-white transition"
//           >
//             ‹
//           </button>

//           <button
//             onClick={next}
//             className="w-12 h-12 border border-red-600 text-red-600
//                        hover:bg-red-600 hover:text-white transition"
//           >
//             ›
//           </button>
//         </div>

//       </div>
//     </section>
//   );
// }


"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { services } from "@/data/services";

export default function ServicesCarousel() {
  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const totalSlides = Math.ceil(services.length / visibleCount);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % totalSlides);
    }, 4500);

    return () => clearInterval(timer);
  }, [totalSlides]);

  const start = index * visibleCount;
  const visibleServices = services.slice(start, start + visibleCount);

  const next = () => setIndex((prev) => (prev + 1) % totalSlides);
  const prev = () =>
    setIndex((prev) => (prev - 1 + totalSlides) % totalSlides);

  return (
    <section className="relative py-28">

      {/* DARK + TEXTURE BACKGROUND (TOP HALF ONLY) */}
      <div
        className="absolute top-0 left-0 w-full h-[60%] bg-[#1f2a30]"
        style={{
          backgroundImage: "url('/dots.png')",
          backgroundRepeat: "repeat",
        }}
      />

      {/* CONTENT WRAPPER */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20 text-white">
          <span className="text-sm tracking-widest uppercase text-gray-300">
            Our Services
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold">
            We Provide Professional Services
          </h2>

          <p className="mt-6 text-[15px] leading-7 text-gray-300">
            There are many variations of passages of Lorem Ipsum available,
            but the majority have suffered alteration in some form.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {visibleServices.map((service) => (
            <div
              key={service.id}
              className="bg-gray-100 text-gray-900 overflow-hidden
                         transition-all duration-500
                         hover:-translate-y-3 hover:shadow-2xl"
            >
              {/* IMAGE */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500
                             group-hover:scale-105"
                />
              </div>

              {/* CONTENT */}
              <div className="px-7 py-8">
                <h3 className="text-sm font-semibold tracking-widest uppercase">
                  {service.title}
                </h3>

                <p className="mt-4 text-[15px] leading-7 text-gray-600">
                  {service.shortDescription}
                </p>

                <Link
                  href={`/services/${service.id}`}
                  className="inline-block mt-7 bg-red-600 text-white
                             px-7 py-3 text-xs font-semibold
                             tracking-widest uppercase
                             hover:bg-black transition"
                >
                  View Services
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* NAVIGATION */}
        <div className="flex justify-center gap-4 mt-16">
          <button
            onClick={prev}
            className="w-12 h-12 border border-red-600 text-red-600
                       hover:bg-red-600 hover:text-white transition"
          >
            ‹
          </button>

          <button
            onClick={next}
            className="w-12 h-12 border border-red-600 text-red-600
                       hover:bg-red-600 hover:text-white transition"
          >
            ›
          </button>
        </div>

      </div>
    </section>
  );
}
