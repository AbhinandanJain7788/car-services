// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import { Plus, Minus } from "lucide-react";

// const faqs = [
//   {
//     question: "WHEN SHOULD I REPLACE MY FUEL FILTER?",
//     answer:
//       "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
//   },
//   {
//     question: "MUST I GET AIR CONDITIONING SERVICED?",
//     answer:
//       "Graphic design lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took.",
//   },
//   {
//     question: "HOW LONG IT TAKE TO REPAIR MY VEHICLE?",
//     answer:
//       "Development lorem Ipsum is simply dummy text of the printing and type has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make.",
//   },
// ];

// export default function FaqSection() {
//   const [activeIndex, setActiveIndex] = useState<number | null>(0);

//   const toggle = (i: number) => {
//     setActiveIndex(activeIndex === i ? null : i);
//   };

//   return (
//     <section className="relative py-28 bg-white overflow-hidden">

//       {/* CONTENT WRAPPER */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">

//         {/* LEFT IMAGE + RED BLOCK */}
//         <div className="relative">

//           {/* RED BACKGROUND BLOCK */}
//           <div className="absolute top-10 left-0 w-[70%] h-[85%] bg-red-600 z-0" />

//           {/* MECHANIC IMAGE */}
//           <div className="relative z-10 ml-10">
//             <Image
//               src="/new.png"
//               alt="Trusted Services"
//               width={420}
//               height={520}
//               className="object-contain"
//             />
//           </div>

//           {/* LEFT TEXT OVER RED */}
//           <div className="absolute top-24 left-10 z-20 text-white max-w-xs">
//             <p className="text-sm tracking-widest uppercase mb-2">
//               We Provide
//             </p>

//             <h3 className="text-4xl font-bold leading-tight">
//               Trusted <br /> Services <br /> For You
//             </h3>
//           </div>

//         </div>

//         {/* RIGHT FAQ CONTENT */}
//         <div>

//           <p className="text-sm tracking-widest uppercase text-red-600 mb-3">
//             What We Do
//           </p>

//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
//             Satisfaction <br /> Guaranteed Or Your <br /> Dent Back.
//           </h2>

//           {/* FAQ LIST */}
//           <div className="space-y-4">

//             {faqs.map((faq, i) => (
//               <div
//                 key={i}
//                 className="border border-gray-200 bg-gray-50
//                            transition-all duration-500"
//               >

//                 {/* QUESTION */}
//                 <button
//                   onClick={() => toggle(i)}
//                   className={`w-full flex items-center justify-between
//                              px-6 py-5 text-left
//                              transition-all duration-300
//                              ${
//                                activeIndex === i
//                                  ? "text-red-600"
//                                  : "text-gray-900"
//                              }`}
//                 >
//                   <span className="text-sm font-semibold tracking-wide uppercase">
//                     {faq.question}
//                   </span>

//                   <span className="ml-4">
//                     {activeIndex === i ? (
//                       <Minus size={20} className="text-red-600" />
//                     ) : (
//                       <Plus size={20} className="text-gray-900" />
//                     )}
//                   </span>
//                 </button>

//                 {/* ANSWER */}
//                 <div
//                   className={`overflow-hidden transition-all duration-500
//                              ${
//                                activeIndex === i
//                                  ? "max-h-40 px-6 pb-6 opacity-100"
//                                  : "max-h-0 px-6 pb-0 opacity-0"
//                              }`}
//                 >
//                   <p className="text-gray-600 leading-7 text-sm">
//                     {faq.answer}
//                   </p>
//                 </div>

//               </div>
//             ))}

//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }















"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "WHEN SHOULD I REPLACE MY FUEL FILTER?",
    answer:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
  },
  {
    question: "MUST I GET AIR CONDITIONING SERVICED?",
    answer:
      "Graphic design lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text ever since the when an unknown printer took.",
  },
  {
    question: "HOW LONG IT TAKE TO REPAIR MY VEHICLE?",
    answer:
      "Development lorem Ipsum is simply dummy text of the printing and type has been the industry's standard dummy text ever since the when an unknown printer took a galley of type and scrambled it to make.",
  },
];

export default function FaqSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setActiveIndex(activeIndex === i ? null : i);
  };

  return (
    <section className="relative py-28 bg-white overflow-hidden">

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center px-6">

        {/* LEFT BLOCK */}
        <div className="relative">

          {/* RED BACKGROUND – TOUCHES LEFT EDGE */}
          <div className="absolute top-0 left-[-9999px] right-16  h-[115%] bg-red-600 z-0" />

          {/* TEXT INSIDE RED BLOCK */}
          <div className="relative z-10 max-w-sm pl-5 pt-20 pb-20 text-white">
            <p className="text-sm tracking-widest uppercase mb-4">
              We Provide
            </p>

            <h3 className="text-6xl font-bold leading-tight">
              Trusted <br /> Services <br /> For You
            </h3>
          </div>

          {/* IMAGE – SHIFTED RIGHT */}
          <div className="absolute top-10 right-[-40px] z-20">
            <Image
              src="/new.png"
              alt="Trusted Services"
              width={380}
              height={520}
              className="object-contain"
            />
          </div>

        </div>

        {/* RIGHT FAQ CONTENT */}
        <div>

          <p className="text-sm tracking-widest uppercase text-red-600 mb-3">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-10">
            Satisfaction <br /> Guaranteed Or Your <br /> Dent Back.
          </h2>

          {/* FAQ LIST */}
          <div className="space-y-4">

            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-gray-200 bg-gray-50
                           transition-all duration-500"
              >

                {/* QUESTION */}
                <button
                  onClick={() => toggle(i)}
                  className={`w-full flex items-center justify-between
                             px-6 py-5 text-left
                             transition-all duration-300
                             ${
                               activeIndex === i
                                 ? "text-red-600"
                                 : "text-gray-900"
                             }`}
                >
                  <span className="text-sm font-semibold tracking-wide uppercase">
                    {faq.question}
                  </span>

                  <span className="ml-4">
                    {activeIndex === i ? (
                      <Minus size={20} className="text-red-600" />
                    ) : (
                      <Plus size={20} className="text-gray-900" />
                    )}
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`overflow-hidden transition-all duration-500
                             ${
                               activeIndex === i
                                 ? "max-h-40 px-6 pb-6 opacity-100"
                                 : "max-h-0 px-6 pb-0 opacity-0"
                             }`}
                >
                  <p className="text-gray-600 leading-7 text-sm">
                    {faq.answer}
                  </p>
                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}








