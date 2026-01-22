// import { FileText, User, Cog } from "lucide-react";

// const cards = [
//   {
//     id: "01",
//     title: "INTERNATIONAL STANDARDS",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     icon: FileText,
//   },
//   {
//     id: "02",
//     title: "WE LOVE OUR CLIENT",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     icon: User,
//   },
//   {
//     id: "03",
//     title: "ONLY ORIGINAL PARTS",
//     desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
//     icon: Cog,
//   },
// ];

// export default function AboutCards() {
//   return (
//     <section className="bg-white py-28">
//       <div className="max-w-7xl mx-auto px-6">

//         {/* HEADER */}
//         <div className="text-center max-w-4xl mx-auto mb-20">
//           <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900">
//             WE'RE A COMPANY OF TALENTED ENGINEERS & MECHANICS
//           </h2>

//           <p className="mt-8 text-gray-600 text-base leading-relaxed">
//             There are many variations of passages of Lorem Ipsum available, but the
//             majority have suffered alteration in some form, by injected humour, or
//             randomised words which don't look even slightly believable.
//           </p>
//         </div>

//         {/* CARDS */}
//         <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//           {cards.map((card, i) => {
//             const Icon = card.icon;

//             return (
//               <div
//                 key={i}
//                 className="group relative border border-gray-200 p-10
//                            transition-all duration-500
//                            hover:bg-[#1f2a30] hover:-translate-y-2 hover:shadow-2xl"
//               >

//                 {/* BIG NUMBER */}
//                 <span className="absolute bottom-6 right-6 text-[120px] font-bold
//                                  text-gray-100 group-hover:text-white/10 transition">
//                   {card.id}
//                 </span>

//                 {/* ICON */}
//                 <Icon
//                   className="w-14 h-14 text-gray-500 mb-8
//                              group-hover:text-white transition"
//                 />

//                 {/* TITLE */}
//                 <h3
//                   className="text-2xl font-semibold tracking-wide text-gray-900
//                              group-hover:text-white transition"
//                 >
//                   {card.title}
//                 </h3>

//                 {/* DESC */}
//                 <p
//                   className="mt-5 text-gray-600 leading-relaxed
//                              group-hover:text-gray-300 transition"
//                 >
//                   {card.desc}
//                 </p>

//                 {/* BUTTON */}
//                 <button
//                   className="mt-10 bg-red-600 text-white px-8 py-3 text-xs
//                              tracking-widest uppercase font-semibold
//                              hover:bg-black transition"
//                 >
//                   Read More
//                 </button>

//               </div>
//             );
//           })}
//         </div>

//       </div>
//     </section>
//   );
// }









"use client";

import { FileText, User, Cog } from "lucide-react";
import { useRouter } from "next/navigation";

const cards = [
  {
    id: "01",
    title: "INTERNATIONAL STANDARDS",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: FileText,
  },
  {
    id: "02",
    title: "WE LOVE OUR CLIENT",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: User,
  },
  {
    id: "03",
    title: "ONLY ORIGINAL PARTS",
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page.",
    icon: Cog,
  },
];

export default function AboutCards() {
  const router = useRouter();

  const handleReadMore = () => {
    router.push("/about");
  };

  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-light tracking-wide text-gray-900">
            WE'RE A COMPANY OF TALENTED ENGINEERS & MECHANICS
          </h2>

          <p className="mt-8 text-gray-600 text-base leading-relaxed">
            There are many variations of passages of Lorem Ipsum available, but the
            majority have suffered alteration in some form, by injected humour, or
            randomised words which don't look even slightly believable.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((card, i) => {
            const Icon = card.icon;

            return (
              <div
                key={i}
                className="group relative border border-gray-200 p-10
                           transition-all duration-500
                           hover:bg-[#1f2a30] hover:-translate-y-2 hover:shadow-2xl"
              >

                {/* BIG NUMBER */}
                <span className="absolute bottom-6 right-6 text-[120px] font-bold
                                 text-gray-100 group-hover:text-white/10 transition">
                  {card.id}
                </span>

                {/* ICON */}
                <Icon
                  className="w-14 h-14 text-gray-500 mb-8
                             group-hover:text-white transition"
                />

                {/* TITLE */}
                <h3
                  className="text-2xl font-semibold tracking-wide text-gray-900
                             group-hover:text-white transition"
                >
                  {card.title}
                </h3>

                {/* DESC */}
                <p
                  className="mt-5 text-gray-600 leading-relaxed
                             group-hover:text-gray-300 transition"
                >
                  {card.desc}
                </p>

                {/* BUTTON */}
                <button
                  onClick={handleReadMore}
                  className="mt-10 bg-red-600 text-white px-8 py-3 text-xs
                             tracking-widest uppercase font-semibold
                             hover:bg-black transition"
                >
                  Read More
                </button>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}