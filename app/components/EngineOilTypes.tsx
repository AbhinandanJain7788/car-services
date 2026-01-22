'use client';

import { Droplets, Settings } from 'lucide-react';

interface OilType {
  title: string;
  description: string;
  icon: 'oil' | 'settings';
  color: 'red' | 'black';
}

const EngineOilTypes = () => {
  const oilTypes: OilType[] = [
    {
      title: "Synthetic Engine Oil",
      description: "Provides superior protection, enhanced fuel economy, and better performance in extreme conditions.",
      icon: "oil",
      color: "red"
    },
    {
      title: "Semi-Synthetic Engine Oil",
      description: "A blend of mineral and synthetic oils, offering improved protection and affordability.",
      icon: "settings",
      color: "black"
    },
    {
      title: "Mineral Engine Oil",
      description: "Ideal for older vehicles and budget-friendly maintenance.",
      icon: "oil",
      color: "red"
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              Types of Engine Oil We Offer
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              We stock a wide range of engine oils, including:
            </p>

            {/* Oil Types List with Icons */}
            <div className="space-y-0">
              {oilTypes.map((oil, index) => (
                <div key={index} className="flex items-start gap-6 relative">
                  {/* Connecting Line */}
                  {index < oilTypes.length - 1 && (
                    <div className="absolute left-6 top-20 w-0.5 h-20 bg-gray-300"></div>
                  )}
                  
                  {/* Icon Box */}
                  <div className={`flex-shrink-0 w-20 h-20 ${
                    oil.color === 'red' ? 'bg-red-600' : 'bg-black'
                  } rounded-lg flex items-center justify-center z-10`}>
                    {oil.icon === 'oil' ? (
                      <Droplets className="w-10 h-10 text-white" />
                    ) : (
                      <Settings className="w-10 h-10 text-white" />
                    )}
                  </div>

                  {/* Text Content */}
                  <div className="flex-1 pb-12">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {oil.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {oil.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/mianproduct/oil2.jpg"
                alt="Engine oil being poured"
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineOilTypes;