
import { mainProducts } from "@/data/products";
import MainHero from "@/app/components/MainHero";

import MainProductHero from "@/app/components/MainProductHero";
import EngineHero from "@/app/components/EngineHero";
import OurEngineBrand from "@/app/components/OurEngineBrand";
import EngineOilSection from "@/app/components/EngineOilSection";
import EngineOilTypes from "@/app/components/EngineOilTypes";
import EngineBrands from "@/app/components/EngineBrands";

export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
     
        <MainHero title="Main Products" breadcrumb="Oil Services" />
          
       <MainProductHero data={mainProducts.oil} />
       <EngineHero />
       
       <EngineOilSection />
       <EngineOilTypes />
       <EngineBrands />
      {/* <OurEngineBrand /> */}
      {/* NEXT SECTIONS WILL COME HERE */}
    </main>
  );
}