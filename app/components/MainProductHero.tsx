"use client";

import { CheckCircle } from "lucide-react";


type Feature = {
  title: string;
  desc: string;
};

type ProductData = {
  title: string;
  highlight: string;
  features: Feature[];
  ctaText: string;
  phone: string;
  productCard: {
    image: string;
    title: string;
    desc: string;
  };
};

export default function MainProductHero({ data }: { data: ProductData }) {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* LEFT CONTENT */}
        <div className="lg:col-span-2 space-y-10">

          {/* TITLE */}
          <div>
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">
              {data.title}
              <br />
              <span className="text-red-600">{data.highlight}</span>
            </h1>
          </div>

          {/* FEATURES GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.features.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border"
              >
                <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA BUTTON */}
          <div>
            <a
              href={`https://wa.me/${data.phone.replace("+", "")}`}
              target="_blank"
              className="inline-block bg-black text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
            >
              {data.ctaText}
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* CALL BOX */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4">
            <h3 className="text-red-600 font-bold text-xl">
              Your Car in Trouble?
            </h3>
            <p className="text-gray-700">Don't worry, we got you!</p>
            <p className="text-sm text-gray-500">Talk to Our Expert</p>

            <a
              href={`tel:${data.phone}`}
              className="block bg-black text-white py-4 rounded-lg font-semibold text-lg"
            >
              {data.phone}
            </a>
          </div>

          {/* PRODUCT CARD */}
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
            <div className="w-full flex justify-center">
              <img
                src={data.productCard.image}
                alt={data.productCard.title}
                className="w-40 h-auto"
              />
            </div>

            <h3 className="text-xl font-bold">{data.productCard.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {data.productCard.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}




// "use client";

// import { CheckCircle } from "lucide-react";

// type Feature = {
//   title: string;
//   desc: string;
// };

// type ProductData = {
//   title: string;
//   highlight: string;
//   features: Feature[];
//   ctaText: string;
//   phone: string;
//   productCard: {
//     image: string;
//     title: string;
//     desc: string;
//   };
// };

// export default function MainProductHero({ data }: { data: ProductData }) {
//   return (
//     <section className="w-full py-20 bg-white">
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

//         {/* LEFT SIDE */}
//         <div className="lg:col-span-2 space-y-10">

//           {/* SMALLER HEADING */}
//           <div>
//             <h1 className="text-3xl md:text-4xl font-bold leading-snug max-w-3xl">
//               {data.title}{" "}
//               <span className="text-red-600">{data.highlight}</span>
//             </h1>
//           </div>

//           {/* FEATURES */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {data.features.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border"
//               >
//                 <CheckCircle className="text-green-500 w-6 h-6 mt-1" />
//                 <div>
//                   <h3 className="font-semibold text-lg">{item.title}</h3>
//                   <p className="text-gray-600 text-sm mt-1">
//                     {item.desc}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* CTA */}
//           <div>
//             <a
//               href={`https://wa.me/${data.phone.replace("+", "")}`}
//               target="_blank"
//               className="inline-block bg-black text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition"
//             >
//               {data.ctaText}
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="space-y-8">

//           {/* CALL CARD */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-4">
//             <h3 className="text-red-600 font-bold text-xl">
//               Your Car in Trouble?
//             </h3>
//             <p className="text-gray-700">Don't worry, we got you!</p>
//             <p className="text-sm text-gray-500">Talk to Our Expert</p>

//             <a
//               href={`tel:${data.phone}`}
//               className="block bg-black text-white py-4 rounded-lg font-semibold text-lg"
//             >
//               {data.phone}
//             </a>
//           </div>

//           {/* PRODUCT CARD */}
//           <div className="bg-white rounded-2xl shadow-lg p-8 text-center space-y-6">
//             <div className="w-full flex justify-center">
//               <img
//                 src={data.productCard.image}
//                 alt={data.productCard.title}
//                 className="w-40 h-auto"
//               />
//             </div>

//             <h3 className="text-xl font-bold">
//               {data.productCard.title}
//             </h3>
//             <p className="text-gray-600 text-sm leading-relaxed">
//               {data.productCard.desc}
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }
