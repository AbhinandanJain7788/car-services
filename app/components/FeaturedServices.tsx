"use client";

const services = [
  {
    title: "Brake Repair",
    price: "₹3,000",
    discount: "₹2,100",
  },
  {
    title: "Engine Oil Change",
    price: "₹2,000",
    discount: "₹1,400",
  },
  {
    title: "AC Service",
    price: "₹2,500",
    discount: "₹1,750",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        Featured <span className="text-[#FF3B30]">Services</span>
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <div
            key={i}
            className="bg-[#111827] p-6 rounded-2xl hover:-translate-y-2 hover:shadow-xl transition-all duration-300"
          >
            <span className="text-sm bg-yellow-400 text-black px-3 py-1 rounded-full">
              30% OFF
            </span>

            <h3 className="mt-4 text-xl font-semibold">
              {service.title}
            </h3>

            <p className="mt-2 text-gray-400 line-through">
              {service.price}
            </p>
            <p className="text-lg font-bold text-[#FF3B30]">
              {service.discount}
            </p>

            <button className="mt-4 w-full bg-[#FF3B30] py-2 rounded-lg hover:bg-red-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
