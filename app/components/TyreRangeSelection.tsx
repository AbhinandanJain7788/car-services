'use client';

import { ChevronRight } from 'lucide-react';

interface ZoomCardProps {
  title: string;
  description: string;
  isMiddle?: boolean;
}

const ZoomCard = ({ title, description, isMiddle = false }: ZoomCardProps) => {
  return (
    <div className="h-80 w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-all duration-500 ease-in-out hover:scale-105">
        {/* Front Side - White/Black */}
        <div 
          className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${
            isMiddle ? 'opacity-100' : 'opacity-100 hover:opacity-0'
          }`}
        >
          <div 
            className={`flex flex-col items-center justify-center h-full rounded-2xl shadow-lg p-8 text-center ${
              isMiddle ? 'bg-black' : 'bg-white'
            }`}
          >
            <h3 className={`text-2xl font-bold mb-4 ${isMiddle ? 'text-white' : 'text-gray-800'}`}>
              {title}
            </h3>
            <p className={`text-base leading-relaxed ${isMiddle ? 'text-white' : 'text-gray-600'}`}>
              {description}
            </p>
          </div>
        </div>

        {/* Back Side - Red (only for non-middle cards) */}
        {!isMiddle && (
          <div className="absolute inset-0 w-full h-full transition-opacity duration-500 opacity-0 hover:opacity-100">
            <div className="flex flex-col items-center justify-center h-full bg-red-600 rounded-2xl shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-base text-white leading-relaxed">{description}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const TyreRangeSection = () => {
  const tyres = [
    {
      title: "All-Season Tyres",
      description: "Tyres engineered to provide all-season performance, ensuring reliable performance in wet as well as dry conditions, for year-round use.",
      isMiddle: false
    },
    {
      title: "Performance Tyres",
      description: "Designed to give stability at high speed, handling, and control, perfect for sports cars and enthusiasts.",
      isMiddle: true
    },
    {
      title: "Off-Road Tyres",
      description: "Durable tyres with deeper treads and reinforced sidewalls, built to handle rough terrains like gravel, mud, and sand.",
      isMiddle: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Tyre Range
          </h1>
          <p className="text-gray-600 max-w-5xl mx-auto text-lg leading-relaxed">
            At Best Auto Parts, we carry a wide variety of tyres to suit diverse driving needs and environments. For the road warriors and off-road adventurers, we have our tyres designed for any vehicle or lifestyle.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {tyres.map((tyre, index) => (
            <ZoomCard
              key={index}
              title={tyre.title}
              description={tyre.description}
              isMiddle={tyre.isMiddle}
            />
          ))}
        </div>

        {/* Bottom Text */}
        <div className="text-center mb-10">
          <p className="text-gray-600 max-w-5xl mx-auto text-base leading-relaxed">
            At Best Auto Parts, our team of experts stands ready to provide you with the advice you need in choosing just the right tyres for your vehicle. We believe in customer safety and satisfaction, and that's why Best Auto Parts only deals with well-esteemed tyre brands.
          </p>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-10 py-4 rounded transition-colors duration-300 inline-flex items-center gap-2 text-lg">
            Enquire Now
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TyreRangeSection;