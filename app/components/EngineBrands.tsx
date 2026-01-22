'use client';

import { useState } from 'react';

interface BrandCard {
  title: string;
  description: string;
  isMiddle?: boolean;
}

const EngineBrandCard = ({ title, description, isMiddle = false }: BrandCard) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`rounded-2xl p-8 transition-all duration-300 ${
        isMiddle
          ? 'bg-black text-white'
          : isHovered
          ? 'bg-red-600 text-white'
          : 'bg-white text-gray-700'
      }`}
    >
      <h3 className={`text-2xl font-bold mb-4 ${
        isMiddle ? 'text-white' : isHovered ? 'text-white' : 'text-gray-900'
      }`}>
        {title}
      </h3>
      <p className={`leading-relaxed ${
        isMiddle ? 'text-white' : isHovered ? 'text-white' : 'text-gray-600'
      }`}>
        {description}
      </p>
    </div>
  );
};

const EngineBrands = () => {
  const brands: BrandCard[] = [
    {
      title: "Castrol",
      description: "Engine oils from Castrol hold advanced technological capabilities to deliver both enhanced wear protection alongside reduced fuel consumption and spotless engine operation. Their product selection contains synthetic along with mineral-based lubricants which suit every type of vehicle."
    },
    {
      title: "Mobil 1",
      description: "Mobil 1 provides its customers globally recognized fully synthetic engine oils to protect vehicles from sludge formation while resisting high heat and friction at the same time. The product extends engine operational life by giving ideal performance when vehicles face harsh driving situations.",
      isMiddle: true
    },
    {
      title: "Total Quartz",
      description: "Total Quartz engine oils are equipped with Age-Resistance Technology to reduce engine wear thus delivering prolonged engine performance. The lubricants perform exceptionally well against oxidation and thermal changes therefore providing ideal performance under hot UAE conditions."
    },
    {
      title: "Shell Helix",
      description: "The Active Cleansing Technology of Shell Helix engine oils prevents the accumulation of sludge and dirt which maintains a clean and efficient operation. The company provides synthetic and semi-synthetic options that yield better fuel efficiency and strong high-performance lubrication."
    },
    {
      title: "Petromin",
      description: "Petromin offers premium quality engine oils specially formulated for Middle Eastern climate conditions. Their advanced lubricants provide exceptional thermal stability and oxidation resistance, ensuring optimal engine performance and longevity even in extreme heat conditions prevalent in the UAE."
    },
    {
      title: "Gulf Oil",
      description: "Gulf Oil delivers high-performance synthetic and semi-synthetic engine oils designed to meet international standards. Their products offer superior protection against engine wear, excellent viscosity control, and enhanced fuel economy, making them ideal for both modern and conventional engines in UAE's demanding environment."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Best Engine Oil Brands 
          </h1>
          <p className="text-gray-600 max-w-6xl mx-auto text-base leading-relaxed">
            We supply high-quality engine oils from top global brands, ensuring superior performance, engine protection, and efficiency. Here are some of the most trusted engine oil brands in the UAE:
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {brands.map((brand, index) => (
            <EngineBrandCard
              key={index}
              title={brand.title}
              description={brand.description}
              isMiddle={brand.isMiddle}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EngineBrands;