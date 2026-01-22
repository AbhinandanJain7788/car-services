'use client';

interface FlipCardProps {
  title: string;
  description: string;
}

const FlipCard = ({ title, description }: FlipCardProps) => {
  return (
    <div className="h-64 w-full [perspective:1000px]">
      <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] hover:[transform:rotateY(180deg)]">
        {/* Front Side - White */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
          <div className="flex flex-col items-center justify-center h-full bg-white rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
          </div>
        </div>

        {/* Back Side - Red */}
        <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
          <div className="flex flex-col items-center justify-center h-full bg-red-600 rounded-2xl shadow-lg p-6 text-center">
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-white text-sm leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const EngineOilSection = () => {
  const leftCards = [
    {
      title: "Premium Quality Oils",
      description: "Our company distributes advanced lubricants obtained from leadership brands worldwide."
    },
    {
      title: "Compatibility",
      description: "The oil suits every vehicle brand and type thus promoting smooth engine operation."
    }
  ];

  const rightCards = [
    {
      title: "Enhanced Engine Efficiency",
      description: "Our engine oils serve three functions to enhance the flow of lubrication while reducing engine friction and maintaining the system clean"
    },
    {
      title: "Affordable Pricing",
      description: "Our company allows clients to obtain the highest quality engine oils at economical prices while providing bulk purchasing opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-red-600">Best Engine</span>
            <span className="text-gray-900"> Oil in UAE</span>
          </h1>
          <p className="text-gray-600 max-w-5xl mx-auto text-base leading-relaxed">
            Vehicle engine health depends heavily on selecting proper engine oil which ensures both efficiency and durability. The top engine oil available in UAE delivers exceptional lubrication protection opposed to wear and tear in vehicles while improving engine operational efficiency. Your vehicle's fuel efficiency and engine durability will benefit greatly when you use superior engine oil regardless of your vehicle type between sedan, SUV or heavy-duty vehicle.
          </p>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {/* Left Column - Why Choose */}
          <div className="space-y-6">
            <div className="bg-gray-50 py-30 ">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Why Choose Our Engine Oil?
              </h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Motor oil solutions from our company match all vehicle requirements within UAE's difficult climate conditions. Our engine oils offer:
              </p>
              <button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded transition-colors duration-300">
                Contact Us
              </button>
            </div>
          </div>

          {/* Middle Column - Left Cards */}
          <div className="space-y-6">
            {leftCards.map((card, index) => (
              <FlipCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>

          {/* Right Column - Right Cards */}
          <div className="space-y-6">
            {rightCards.map((card, index) => (
              <FlipCard
                key={index}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineOilSection;