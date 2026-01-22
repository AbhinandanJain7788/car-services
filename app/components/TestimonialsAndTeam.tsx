// "use client";

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// const testimonials = [
//   {
//     name: "Jhon Parker",
//     role: "Loyal Customer For 2 Years",
//     text: "There are many variations of passages of lorem Ipsum available,but the majority have suffered.",
//     image: "/test1.jpg",
//   },
//   {
//     name: "Jhon Parker",
//     role: "Loyal Customer For 2 Years",
//     text: "There are many variations of passages of lorem Ipsum available,but the majority have suffered.",
//     image: "/test2.jpg",
//   },
//   {
//     name: "Jhon Parker",
//     role: "Loyal Customer For 2 Years",
//     text: "There are many variations of passages of lorem Ipsum available,but the majority have suffered.",
//     image: "/test3.jpg",
//   },
//   {
//     name: "Jhon Parker",
//     role: "Loyal Customer For 2 Years",
//     text: "There are many variations of passages of lorem Ipsum available,but the majority have suffered.",
//     image: "/test4.jpg",
//   },
// ];

// const team = [
//   {
//     name: "Richard Wagner",
//     role: "Technician",
//     image: "/team1.jpg",
//   },
//   {
//     name: "James Strasser",
//     role: "Technician",
//     image: "/team2.jpg",
//   },
//   {
//     name: "Simpson Martin",
//     role: "Technician",
//     image: "/team3.jpg",
//   },
//   {
//     name: "Tom Albert",
//     role: "Technician",
//     image: "/team4.jpg",
//   },
// ];

// export default function TestimonialsAndTeam() {
//   const [index, setIndex] = useState(0);

//   // AUTO ROTATION (both sides together)
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % testimonials.length);
//     }, 4000); // 4 seconds

//     return () => clearInterval(timer);
//   }, []);

//   const prev = () => {
//     setIndex((prev) =>
//       prev === 0 ? testimonials.length - 1 : prev - 1
//     );
//   };

//   const next = () => {
//     setIndex((prev) => (prev + 1) % testimonials.length);
//   };

//   const currentTestimonial = testimonials[index];
//   const currentTeam = team[index];

//   return (
//     <section className="w-full overflow-hidden">
//       <div className="grid grid-cols-1 lg:grid-cols-2">

//         {/* LEFT SIDE - TESTIMONIALS */}
//         <div className="bg-[#263238] text-white py-24 px-10 flex items-center">

//           <div className="max-w-xl">

//             {/* TITLE */}
//             <div className="mb-12">
//               <span className="text-sm uppercase tracking-widest text-red-500">
//                 Our Client Says
//               </span>
//               <h2 className="mt-4 text-4xl font-semibold">
//                 People What Say
//               </h2>
//             </div>

//             {/* SLIDER */}
//             <div className="relative">

//               <div className="flex items-start gap-6">

//                 {/* IMAGE */}
//                 <div className="w-24 h-24 relative border-4 border-red-600 flex-shrink-0">
//                   <Image
//                     src={currentTestimonial.image}
//                     alt={currentTestimonial.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* TEXT */}
//                 <div>
//                   <h4 className="text-red-500 font-semibold uppercase mb-2">
//                     {currentTestimonial.name}
//                   </h4>
//                   <p className="text-sm text-gray-300 mb-4">
//                     {currentTestimonial.role}
//                   </p>

//                   <p className="text-gray-200 leading-7 flex gap-2">
//                     <Quote className="w-5 h-5 text-red-500 mt-1" />
//                     {currentTestimonial.text}
//                   </p>
//                 </div>

//               </div>

//               {/* DOTS */}
//               <div className="flex gap-3 mt-10 items-center">
//                 {testimonials.map((_, i) => (
//                   <button
//                     key={i}
//                     onClick={() => setIndex(i)}
//                     className={`w-3 h-3 rounded-full transition
//                       ${i === index ? "bg-red-600" : "bg-gray-500"}`}
//                   />
//                 ))}
//               </div>

//               {/* ARROWS */}
//               <div className="absolute right-0 bottom-0 flex gap-4">
//                 <button
//                   onClick={prev}
//                   className="w-10 h-10 border border-gray-500 flex items-center justify-center hover:bg-red-600 transition"
//                 >
//                   <ChevronLeft />
//                 </button>
//                 <button
//                   onClick={next}
//                   className="w-10 h-10 border border-gray-500 flex items-center justify-center hover:bg-red-600 transition"
//                 >
//                   <ChevronRight />
//                 </button>
//               </div>

//             </div>

//           </div>
//         </div>

//         {/* RIGHT SIDE - TEAM */}
//         <div
//           className="relative py-24 px-10 text-white"
//           style={{
//             backgroundImage: "url('/offer.jpg')",
//             backgroundSize: "cover",
//             backgroundPosition: "center",
//           }}
//         >
//           {/* RED OVERLAY */}
//           <div className="absolute inset-0 bg-red-600/90" />

//           <div className="relative z-10 max-w-xl">

//             {/* TITLE */}
//             <div className="mb-12">
//               <span className="text-sm uppercase tracking-widest text-white">
//                 Our Best Team
//               </span>
//               <h2 className="mt-4 text-4xl font-semibold">
//                 Our Team
//               </h2>
//             </div>

//             {/* TEAM CARD */}
//             <div className="relative w-[260px]">

//               <div className="group relative overflow-hidden">

//                 <div className="relative w-full h-[320px]">
//                   <Image
//                     src={currentTeam.image}
//                     alt={currentTeam.name}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>

//                 {/* HOVER OVERLAY */}
//                 <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//                   <div className="text-center">
//                     <h4 className="uppercase font-semibold mb-2">
//                       {currentTeam.name}
//                     </h4>
//                     <p className="mb-4">{currentTeam.role}</p>

//                     <div className="flex gap-4 justify-center">
//                       <a className="hover:text-red-500 cursor-pointer">Fb</a>
//                       <a className="hover:text-red-500 cursor-pointer">Tw</a>
//                       <a className="hover:text-red-500 cursor-pointer">In</a>
//                     </div>
//                   </div>
//                 </div>

//               </div>

//             </div>

//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }



































"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { testimonials, teamMembers } from "@/data/aboutSliders";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function TestimonialsAndTeam() {
  const [index, setIndex] = useState(0);
  const total = Math.min(testimonials.length, teamMembers.length);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [total]);

  const testimonial = testimonials[index];

  return (
    <section className="w-full bg-[#1f2a30] py-22">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row relative min-h-[100px]">

        {/* ================= LEFT : FULL HEIGHT BLUE ================= */}
        <div className="w-full lg:w-1/2 text-white pr-4 pl-16 flex flex-col justify-center">

          <span className="text-sm tracking-widest uppercase text-gray-300">
            Our Client Says
          </span>

          <h2 className="text-4xl font-bold mt-3 mb-12">
            People What Say
          </h2>

          <div className="flex items-start gap-6">

            {/* IMAGE BLOCK */}
            <div className="relative w-28 h-28 shrink-0 border-4 border-red-600">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <div>
              <h4 className="text-red-500 font-semibold text-lg mb-1">
                {testimonial.name}
              </h4>

              <p className="text-sm text-gray-300 mb-4">
                {testimonial.role}
              </p>

              <p className="text-gray-200 leading-7">
                “ {testimonial.text} ”
              </p>
            </div>
          </div>

          {/* DOTS */}
          <div className="flex gap-3 mt-10">
            {Array.from({ length: total }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-3 h-3 rounded-full transition ${
                  i === index ? "bg-red-600" : "bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ================= RIGHT : RED INNER BOX ================= */}
        <div className="w-full lg:w-1/2 relative flex ">

          {/* This is the RED BOX that starts LOWER */}
          <div
             className="relative bg-red-600 text-white p-10 w-full flex flex-col justify-center"
            style={{
              backgroundImage: "url('/images/background/offer.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-red-600/90" />

            <div className="relative z-10">

              <span className="text-sm tracking-widest uppercase text-gray-200">
                Our Best Team
              </span>

              <h2 className="text-4xl font-bold mt-3 mb-12">
                Our Team
              </h2>

              <div className="flex gap-8">

                {teamMembers.slice(index, index + 2).map((member) => (
                  <div
                    key={member.id}
                    className="relative group w-64 h-80 overflow-hidden bg-black"
                  >
                    {/* IMAGE */}
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />

                    {/* HOVER OVERLAY */}
                    <div className="absolute inset-0 bg-white/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">

                      <div className="text-center">

                        <h4 className="text-red-600 font-bold uppercase mb-2">
                          {member.name}
                        </h4>

                        <p className="text-gray-700 mb-4">
                          {member.role}
                        </p>

                        <div className="flex justify-center gap-4 text-gray-700">
                          <a href={member.socials.facebook}><FaFacebookF /></a>
                          <a href={member.socials.twitter}><FaTwitter /></a>
                          <a href={member.socials.instagram}><FaInstagram /></a>
                        </div>

                      </div>

                    </div>
                  </div>
                ))}

              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
