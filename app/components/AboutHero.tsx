// "use client";

// import Image from "next/image";

// export default function AboutHero() {
//   return (
//     <section className="relative h-[90vh] w-full overflow-hidden">

//       {/* BACKGROUND IMAGE */}
//       <Image
//         src="/About/banner2.jpg"   // put your hero image in /public
//         alt="About Us Hero"
//         fill
//         priority
//         className="object-cover"
//       />

//       {/* DARK OVERLAY */}
//       <div className="absolute inset-0 bg-black/70" />

//       {/* CONTENT */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-7xl mx-auto w-full px-6">

//           <div className="relative max-w-2xl pl-6 border-l-[10px] border-red-600 animate-hero">

//             <span className="block text-sm tracking-widest uppercase text-red-500 mb-4">
//               About Us
//             </span>

//             <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight mb-6">
//               We Are Passionate <br />
//               About Car Care
//             </h1>

//             <p className="text-gray-200 text-sm md:text-base max-w-md mb-8">
//               We provide trusted auto repair services with certified technicians,
//               modern tools, and a commitment to quality on every job.
//             </p>

//           </div>

//         </div>
//       </div>

//     </section>
//   );
// }









import Image from "next/image";
import Link from "next/link";

type AboutHeroProps = {
  title: string;
  breadcrumb: string;
};

export default function AboutHero({
  title,
  breadcrumb,
}: AboutHeroProps) {
  return (
    <section className="relative h-[360px] md:h-[340px] w-full overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/about/banner2.jpg"
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
