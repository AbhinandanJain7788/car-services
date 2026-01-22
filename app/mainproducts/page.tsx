

import { mainProducts } from "@/data/products";
import MainHero from "../components/MainHero";
import MainProductHero from "../components/MainProductHero";
import ServicesHighlights from "../components/ServicesHighlights";
import OurTyreBrand from "../components/OurTyreBrand";
import TyreHero from "../components/TyreHero";
import EngineHero from "../components/EngineHero";
import OurEngineBrand from "../components/OurEngineBrand";
import TyresSection from "../components/TyreSection";
import TyreRangeSection from "../components/TyreRangeSelection";
export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
     
        <MainHero title="Main Products" breadcrumb="Main Products" />
          
       <MainProductHero data={mainProducts.tyres} />
       <TyreHero /> 
       <TyresSection />
       <TyreRangeSection />
       <OurTyreBrand />  
       <EngineHero />
       <OurEngineBrand /> 
      {/* NEXT SECTIONS WILL COME HERE */}
    </main>
  );
}