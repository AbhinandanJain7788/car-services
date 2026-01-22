// "use client";

// const cards = [
//   {
//     no: "01",
//     title: "International Standards",
//     text: "There are many variations of passag es of Lorem Ipsum available, but the majority have suffered.",
//     icon: "📜",
//   },
//   {
//     no: "02",
//     title: "We Love Our Client",
//     text: "There are many variations of passag es of Lorem Ipsum available, but the majority have suffered.",
//     icon: "👨‍🔧",
//   },
//   {
//     no: "03",
//     title: "Only Original Parts",
//     text: "There are many variations of passag es of Lorem Ipsum available, but the majority have suffered.",
//     icon: "⚙️",
//   },
// ];

// export default function ServicesIntroCards() {
//   return (
//     <section className="bg-white py-20">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid gap-10 md:grid-cols-3">
//           {cards.map((item) => (
//             <div key={item.no} className="group">
//               <div
//                 className="
//                   relative bg-white p-8 border border-gray-200
//                   transition-all duration-300
//                   hover:bg-[#1f2a30] hover:shadow-xl
//                 "
//               >
//                 {/* COUNT NUMBER */}
//                 <span
//                   className="
//                     absolute top-6 right-6
//                     text-6xl font-bold
//                     text-gray-200
//                     group-hover:text-white/10
//                   "
//                 >
//                   {item.no}
//                 </span>

//                 {/* ICON */}
//                 <div className="mb-6 text-red-600 text-4xl">
//                   {item.icon}
//                 </div>

//                 {/* CONTENT */}
//                 <h4
//                   className="
//                     mb-4 text-lg font-semibold text-gray-900
//                     group-hover:text-white
//                   "
//                 >
//                   {item.title}
//                 </h4>

//                 <p
//                   className="
//                     mb-6 text-sm leading-relaxed text-gray-600
//                     group-hover:text-gray-300
//                   "
//                 >
//                   {item.text}
//                 </p>

//                 <a
//                   href="#"
//                   className="
//                     inline-block bg-red-600 px-6 py-2
//                     text-xs font-semibold uppercase tracking-wide
//                     text-white transition hover:bg-red-700
//                   "
//                 >
//                   Read More
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }












"use client";

import { Award, User, Settings } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServicesSection() {
const router = useRouter();
 const handleReadMore = () => {
    router.push("/about");
  };

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-4xl font-light text-gray-800 mb-6 tracking-wide">
            WE'RE A COMPANY OF TALENTED ENGINEERS
            <br />
            & MECHANICS
          </h1>
          <p className="text-gray-600 text-base max-w-4xl mx-auto leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look even slightly believable.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white hover:bg-[#1f2a30] p-8 relative transition-all duration-300 group cursor-pointer">
            {/* Background Number */}
            <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#3d5266] text-[140px] font-bold leading-none pointer-events-none select-none transition-colors duration-300">
              01
            </div>
            
            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className="w-16 h-16 border-2 border-red-600 flex items-center justify-center">
                <Award className="w-8 h-8 text-red-600" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-6 tracking-wide transition-colors duration-300">
                INTERNATIONAL STANDARDS
              </h4>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed mb-6 transition-colors duration-300">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
              
              {/* Button right after paragraph */}
              <button 
               onClick={handleReadMore}
              className="bg-red-600 text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-red-700 transition-colors">
                READ MORE
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white hover:bg-[#1f2a30] p-8 relative transition-all duration-300 group cursor-pointer">
            {/* Background Number */}
            <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#3d5266] text-[140px] font-bold leading-none pointer-events-none select-none transition-colors duration-300">
              02
            </div>
            
            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className="w-16 h-16 border-2 border-red-600 flex items-center justify-center">
                <User className="w-8 h-8 text-red-600" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-6 tracking-wide transition-colors duration-300">
                WE LOVE OUR CLIENT
              </h4>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed mb-6 transition-colors duration-300">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
              
              {/* Button right after paragraph */}
              <button
               onClick={handleReadMore}
              className="bg-red-600 text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-red-700 transition-colors">
                READ MORE
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white hover:bg-[#1f2a30] p-8 relative transition-all duration-300 group cursor-pointer">
            {/* Background Number */}
            <div className="absolute top-8 right-8 text-gray-100 group-hover:text-[#3d5266] text-[140px] font-bold leading-none pointer-events-none select-none transition-colors duration-300">
              03
            </div>
            
            {/* Icon */}
            <div className="relative z-10 mb-6">
              <div className="w-16 h-16 border-2 border-red-600 flex items-center justify-center">
                <Settings className="w-8 h-8 text-red-600" strokeWidth={1.5} />
              </div>
            </div>

            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-xl font-semibold text-gray-800 group-hover:text-white mb-6 tracking-wide transition-colors duration-300">
                ONLY ORIGINAL PARTS
              </h4>
              <p className="text-gray-600 group-hover:text-gray-300 text-sm leading-relaxed mb-6 transition-colors duration-300">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
              </p>
              
              {/* Button right after paragraph */}
              <button 
              onClick={handleReadMore}
              className="bg-red-600 text-white px-8 py-3 text-sm font-semibold tracking-wider hover:bg-red-700 transition-colors">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}