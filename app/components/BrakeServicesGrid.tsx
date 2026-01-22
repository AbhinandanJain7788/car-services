import Image from "next/image";
import { brakeServices } from "@/data/brakeServices";

export default function BrakeServicesGrid() {
  return (
    <section className="mt-20">
      <h2 className="text-3xl font-semibold mb-10">
        Brake System Services & Prices
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {brakeServices.map((service, index) => (
          <div
            key={index}
            className="
              bg-white border border-gray-200 rounded-lg overflow-hidden
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-xl
            "
          >
            {/* IMAGE */}
            <div className="relative h-[180px] w-full">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-3">
                {service.title}
              </h3>

              <div className="text-sm text-gray-600 space-y-1 mb-4">
                <p>
                  <span className="font-medium text-gray-800">Price:</span>{" "}
                  {service.price}
                </p>
                <p>
                  <span className="font-medium text-gray-800">Time:</span>{" "}
                  {service.time}
                </p>
              </div>

              <button
                className="
                  w-full bg-red-600 text-white py-2 text-sm
                  hover:bg-red-700 transition
                "
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
