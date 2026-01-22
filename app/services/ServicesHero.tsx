




// import Image from "next/image";
// import Link from "next/link";

// export default function ServicesHero() {
//   return (
//     <section className="relative h-[360px] md:h-[340px] w-full overflow-hidden">
      
//       {/* Background Image */}
//       <Image
//         src="/services/services-hero.jpg"
//         alt="All Services"
//         fill
//         priority
//         className="object-cover object-top"
//       />

//       {/* DARK OVERLAY (IMPORTANT PART) */}
//       <div className="absolute inset-0 bg-black/45" />

//       {/* Optional gradient for premium look */}
//       <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

//       {/* CONTENT */}
//       <div className="absolute bottom-12 left-0 w-full">
//         <div className="max-w-7xl mx-auto px-6 text-white">
          
//           <h1 className="text-3xl md:text-3xl font-bold tracking-wide">
//             ALL SERVICES
//           </h1>

//           <div className="mt-2 text-sm text-gray-300">
//             <Link href="/" className="hover:text-white transition">
//               Home
//             </Link>
//             <span className="mx-2">›</span>
//             <span className="text-gray-200">All Services</span>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }




































import Image from "next/image";
import Link from "next/link";

type ServicesHeroProps = {
  title: string;
  breadcrumb: string;
};

export default function ServicesHero({
  title,
  breadcrumb,
}: ServicesHeroProps) {
  return (
    <section className="relative h-[360px] md:h-[340px] w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/services/services-hero.jpg"
        alt={title}
        fill
        priority
        className="object-cover object-top"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

      {/* CONTENT */}
      <div className="absolute bottom-12 left-0 w-full">
        <div className="max-w-7xl mx-auto px-6 text-white">
          
          <h1 className="text-3xl md:text-3xl font-bold tracking-wide uppercase">
            {title}
          </h1>

          <div className="mt-2 text-sm text-gray-300">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>
            <span className="mx-2">›</span>
            <span className="text-gray-200">{breadcrumb}</span>
          </div>

        </div>
      </div>
    </section>
  );
}
