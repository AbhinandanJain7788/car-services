

import ServicesHero from "./ServicesHero";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/data/services";
import ServicesHighlights from "../components/ServicesHighlights";
import StatsCounter from "../components/StatsCounter";
import ServicePackages from "../components/ServicePackages";

export default function ServicesPage() {
  return (
    <>
  

      <ServicesHero title="All Services" breadcrumb="All Services"/>
     <ServicesHighlights/>


      {/* SERVICES GRID */}
     
      {/* SERVICES SECTION */}
      <section className="bg-[#1f2a30] py-28">
        <div className="max-w-6xl mx-auto px-6">
          
          {/* HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-3xl font-bold tracking-widest uppercase text-white">
              We Provide Professional Services
            </h2>

            <p className="mt-6 text-[15px] leading-7 text-gray-300">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour or randomised words.
            </p>
          </div>

          {/* GRID */}
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white overflow-hidden group"
              >
                {/* IMAGE */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* CONTENT */}
                <div className="px-7 py-8">
                  <h3 className="text-sm font-semibold tracking-widest uppercase text-gray-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-gray-600">
                    {service.shortDescription}
                  </p>

                  <Link
                    href={`/services/${service.id}`}
                    className="inline-block mt-7 bg-red-600 text-white px-7 py-3 text-xs font-semibold tracking-widest uppercase hover:bg-black transition"
                  >
                    View Services
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <StatsCounter />
      <ServicePackages />
    </>
  );
}

