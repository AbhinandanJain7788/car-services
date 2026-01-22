




// "use client";

// import { useEffect, useRef, useState } from "react";

// const servicesData = [
//   { title: "Brake System Services", image: "/services/brake.jpg" },
//   { title: "Engine Services", image: "/services/engine1.jpg" },
//   { title: "Suspension & Steering", image: "/services/suspension.jpg" },
//   { title: "Electrical System Services", image: "/services/electrical1.jpg" },
//   { title: "Cooling System", image: "/services/Cooling.png" },
//   { title: "Transmission Services", image: "/services/Transmission.jpg" },
//   { title: "Tyres & Wheels", image: "/services/tyre1.jpg" },
//   { title: "Exhaust & Emission", image: "/services/exhaust1.png" },
//   { title: "Air Conditioning (AC)", image: "/services/AC.png" },
//   { title: "Diagnostic Services", image: "/services/diagnostic.png" },
//   { title: "General & Preventive Maintenance", image: "/services/general.png" },
// ];

// function getDirection(index: number) {
//   if (index % 3 === 0) return "from-bottom";
//   if (index % 3 === 1) return "from-right";
//   return "from-left";
// }

// export default function ServicesGrid() {
//   const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
//   const [visibleCards, setVisibleCards] = useState<boolean[]>(
//     Array(servicesData.length).fill(false)
//   );

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           const index = Number(entry.target.getAttribute("data-index"));
//           setVisibleCards((prev) => {
//             const updated = [...prev];
//             updated[index] = entry.isIntersecting;
//             return updated;
//           });
//         });
//       },
//       { threshold: 0.25 }
//     );

//     cardsRef.current.forEach((card) => {
//       if (card) observer.observe(card);
//     });

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section className="bg-[#ECECEC] py-28 px-6">
//       <div className="max-w-7xl mx-auto">

//         {/* HEADER */}
//         <div className="text-center mb-24">
//           <p className="text-xs tracking-widest uppercase text-gray-500">
//             Our Services
//           </p>
//           <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
//             Complete Car Care Solutions
//           </h2>
//         </div>

//         {/* GRID */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
//           {servicesData.map((service, index) => {
//             const direction = getDirection(index);
//             const isVisible = visibleCards[index];

//             return (
//               <div
//                 key={index}
//                 ref={(el) => (cardsRef.current[index] = el)}
//                 data-index={index}
//                 className={`
//                   group relative overflow-hidden bg-black cursor-pointer
//                   transition-all duration-500 ease-out
//                   hover:-translate-y-3
//                   hover:shadow-[0_25px_45px_rgba(0,0,0,0.35)]
//                   ${
//                     isVisible
//                       ? "opacity-100 translate-x-0 translate-y-0"
//                       : direction === "from-left"
//                       ? "opacity-0 -translate-x-12"
//                       : direction === "from-right"
//                       ? "opacity-0 translate-x-12"
//                       : "opacity-0 translate-y-12"
//                   }
//                 `}
//               >
//                 {/* IMAGE */}
//                 <div className="h-72 overflow-hidden">
//                   <img
//                     src={service.image}
//                     alt={service.title}
//                     className="
//                       h-full w-full object-cover
//                       transition-transform duration-700 ease-out
//                       group-hover:scale-110
//                     "
//                   />
//                 </div>

//                 {/* GRADIENT OVERLAY */}
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

//                 {/* TITLE */}
//                 <div className="absolute inset-0 flex items-end p-6">
//                   <div className="transition-transform duration-500 group-hover:-translate-y-1">
//                     <h3 className="text-lg font-semibold text-white">
//                       {service.title}
//                     </h3>

//                     <div className="mt-2 h-[2px] w-12 bg-white transition-all duration-500 group-hover:w-24" />
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }













"use client";

import { useEffect, useRef, useState } from "react";

const servicesData = [
  { title: "Brake System Services", image: "/services/brake.jpg" },
  { title: "Engine Services", image: "/services/engine1.jpg" },
  { title: "Suspension & Steering", image: "/services/suspension.jpg" },
  { title: "Electrical System Services", image: "/services/electrical1.jpg" },
  { title: "Cooling System", image: "/services/Cooling.png" },
  { title: "Transmission Services", image: "/services/Transmission.jpg" },
  { title: "Tyres & Wheels", image: "/services/tyre1.jpg" },
  { title: "Exhaust & Emission", image: "/services/exhaust1.png" },
  { title: "Air Conditioning (AC)", image: "/services/AC.png" },
  { title: "Diagnostic Services", image: "/services/diagnostic.png" },
  { title: "General & Preventive Maintenance", image: "/services/general.png" },
];

function getDirection(index: number) {
  if (index % 3 === 0) return "from-bottom";
  if (index % 3 === 1) return "from-right";
  return "from-left";
}

export default function ServicesGrid() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const [visibleCards, setVisibleCards] = useState<boolean[]>(
    Array(servicesData.length).fill(false)
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute("data-index"));
          if (Number.isNaN(index)) return;

          setVisibleCards((prev) => {
            const updated = [...prev];
            updated[index] = entry.isIntersecting;
            return updated;
          });
        });
      },
      { threshold: 0.25 }
    );

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-[#ECECEC] py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-xs tracking-widest uppercase text-gray-500">
            Our Services
          </p>
          <h2 className="mt-4 text-3xl md:text-4xl font-semibold">
            Complete Car Care Solutions
          </h2>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
          {servicesData.map((service, index) => {
            const direction = getDirection(index);
            const isVisible = visibleCards[index];

            return (
              <div
                key={index}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                data-index={index}
                className={`
                  group relative overflow-hidden bg-black cursor-pointer
                  transition-all duration-500 ease-out
                  hover:-translate-y-3
                  hover:shadow-[0_25px_45px_rgba(0,0,0,0.35)]
                  ${
                    isVisible
                      ? "opacity-100 translate-x-0 translate-y-0"
                      : direction === "from-left"
                      ? "opacity-0 -translate-x-12"
                      : direction === "from-right"
                      ? "opacity-0 translate-x-12"
                      : "opacity-0 translate-y-12"
                  }
                `}
              >
                {/* IMAGE */}
                <div className="h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="
                      h-full w-full object-cover
                      transition-transform duration-700 ease-out
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-transparent" />

                {/* TITLE */}
                <div className="absolute inset-0 flex items-end p-6">
                  <div className="transition-transform duration-500 group-hover:-translate-y-1">
                    <h3 className="text-lg font-semibold text-white">
                      {service.title}
                    </h3>
                    <div className="mt-2 h-[2px] w-12 bg-white transition-all duration-500 group-hover:w-24" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
