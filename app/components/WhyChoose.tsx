// import React, { useState } from 'react';
// import { Check, Wrench, Shield, Settings } from 'lucide-react';

// export default function WhyChoose() {
//   const [activeTab, setActiveTab] = useState('offer');

//   const tabs = [
//     {
//       id: 'offer',
//       title: 'We Offer',
//       icon: <Settings className="w-8 h-8" />,
//       heading: 'Long Term Warranties And Competitive Prices We Repair Anything From Hardware.',
//       description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
//       points: [
//         'Our Technicians are highly qualified',
//         'There are many variations',
//         'We supply the after market',
//         'We only use new parts',
//       ],
//       image: '/images/gallery/pic6.jpg'
//     },
//     {
//       id: 'who',
//       title: 'Who We Are',
//       icon: <Shield className="w-8 h-8" />,
//       heading: 'Term Warranties And Competitive Prices We Repair Anything From Hardware.',
//       description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
//       points: [
//         'There are many variations',
//         'Our Technicians are highly qualified',
//         'We supply the after market',
//         'We only use new parts',
//       ],
//       image: '/images/gallery/pic1.jpg'
//     },
//     {
//       id: 'history',
//       title: 'Our History',
//       icon: <Wrench className="w-8 h-8" />,
//       heading: 'Long Warranties And Competitive Prices We Repair Anything From Hardware.',
//       description: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.',
//       points: [
//         'Our Technicians are highly qualified',
//         'We supply the after market',
//         'We only use new parts',
//         'We can not be beaten on price',
//       ],
//       image: '/images/gallery/pic2.jpg'
//     },
//   ];

//   const activeContent = tabs.find(tab => tab.id === activeTab);

//   return (
//     <section className="py-20 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* SECTION HEADER */}
//         <div className="text-center mb-16">
//           <h5 className="text-red-600 uppercase text-sm font-semibold tracking-widest mb-3">
//             Why Choose
//           </h5>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
//             Why Choose Us?
//           </h2>
//           <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
//             There are many variations of passages of Lorem Ipsum available, but the majority have suffered 
//             alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
//           </p>
//         </div>

//         {/* TABS SECTION */}
//         <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//           <div className="grid grid-cols-1 lg:grid-cols-4">
            
//             {/* LEFT SIDEBAR - TABS */}
//             <div className="lg:col-span-1 border-r border-gray-200">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`w-full p-6 text-center transition-all duration-300 border-b border-gray-200 hover:bg-gray-50
//                     ${activeTab === tab.id 
//                       ? 'bg-red-50 border-l-4 border-l-red-600' 
//                       : 'border-l-4 border-l-transparent'
//                     }`}
//                 >
//                   <div className="flex flex-col items-center gap-3">
//                     <div className={`transition-colors duration-300 ${
//                       activeTab === tab.id ? 'text-red-600' : 'text-gray-400'
//                     }`}>
//                       {tab.icon}
//                     </div>
//                     <h5 className={`font-semibold text-sm uppercase tracking-wide ${
//                       activeTab === tab.id ? 'text-red-600' : 'text-gray-700'
//                     }`}>
//                       {tab.title}
//                     </h5>
//                   </div>
//                 </button>
//               ))}
//             </div>

//             {/* RIGHT CONTENT AREA */}
//             <div className="lg:col-span-3 p-8 md:p-12">
//               {activeContent && (
//                 <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                  
//                   {/* TEXT CONTENT */}
//                   <div className="animate-fadeIn">
//                     <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-5 leading-tight">
//                       {activeContent.heading}
//                     </h4>
                    
//                     <p className="text-gray-600 mb-6 leading-relaxed">
//                       {activeContent.description}
//                     </p>

//                     <ul className="space-y-3">
//                       {activeContent.points.map((point, index) => (
//                         <li 
//                           key={index} 
//                           className="flex items-start gap-3 text-gray-700 transform transition-all duration-300 hover:translate-x-2"
//                         >
//                           <div className="mt-1 flex-shrink-0">
//                             <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center">
//                               <Check className="w-3 h-3 text-white" />
//                             </div>
//                           </div>
//                           <span>{point}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* IMAGE */}
//                   <div className="animate-slideInRight">
//                     <div className="rounded-lg overflow-hidden shadow-xl transform transition-transform duration-500 hover:scale-105">
//                       <img
//                         src={activeContent.image}
//                         alt={activeContent.title}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                   </div>

//                 </div>
//               )}
//             </div>

//           </div>
//         </div>

//       </div>

      
//     </section>
//   );
// }



"use client";

import { useState } from "react";
import Image from "next/image";
import { Wrench, ShieldCheck, Settings } from "lucide-react";

const tabs = [
  {
    key: "offer",
    title: "We Offer",
    icon: Wrench,
    heading:
      "Long Term Warranties And Competitive Prices we repair anything from hardware.",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    points: [
      "Our Technicians are highly qualified",
      "There are many variations",
      "We supply the after market",
      "We only use new parts",
    ],
    image: "/about/pic1.jpg",
  },
  {
    key: "who",
    title: "Who We Are",
    icon: ShieldCheck,
    heading:
      "Term Warranties And Competitive Prices we repair anything from hardware.",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    points: [
      "There are many variations",
      "Our Technicians are highly qualified",
      "We supply the after market",
      "We only use new parts",
    ],
    image: "/about/pic2.jpg",
  },
  {
    key: "history",
    title: "Our History",
    icon: Settings,
    heading:
      "Long Warranties And Competitive Prices we repair anything from hardware.",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.",
    points: [
      "Our Technicians are highly qualified",
      "We supply the after market",
      "We only use new parts",
      "We can not be beaten on price",
    ],
    image: "/about/pic3.jpg",
  },
];

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState(0);

  const current = tabs[activeTab];

  return (
    <section className="py-28 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-sm uppercase tracking-widest text-red-600">
            Why Choose
          </span>
          <h2 className="mt-3 text-4xl font-semibold text-gray-900">
            Why Choose Us?
          </h2>
          <p className="mt-6 text-gray-600 leading-7">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>

        {/* MAIN BOX */}
        <div className="bg-white border p-6">

          <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">

            {/* LEFT TABS */}
            <div className="border-r">

              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === index;

                return (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(index)}
                    className={`w-full flex flex-col items-center gap-3 py-8 border-b
                      transition
                      ${
                        isActive
                          ? "border-l-4 border-l-red-600 bg-gray-50 text-red-600"
                          : "text-gray-700 hover:text-red-600"
                      }`}
                  >
                    <Icon className="w-8 h-8" />
                    <span className="uppercase text-sm font-semibold tracking-wide">
                      {tab.title}
                    </span>
                  </button>
                );
              })}

            </div>

            {/* RIGHT CONTENT */}
            <div className="pl-4">

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* TEXT */}
                <div>

                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    {current.heading}
                  </h4>

                  <p className="text-gray-600 leading-7 mb-6">
                    {current.description}
                  </p>

                  <ul className="space-y-3 text-gray-700">
                    {current.points.map((point, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <span className="text-red-600 text-lg">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>

                </div>

                {/* IMAGE */}
                <div className="w-full">
                  <div className="relative w-full h-[320px] overflow-hidden">
                    <Image
                      src={current.image}
                      alt={current.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
