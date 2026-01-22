
import { mainProducts } from "@/data/products";
import MainHero from "@/app/components/MainHero";
import MainProductHero from "@/app/components/MainProductHero";

import OurTyreBrand from "@/app/components/OurTyreBrand";
import TyreHero from "@/app/components/TyreHero";
import EngineHero from "@/app/components/EngineHero";
import OurEngineBrand from "@/app/components/OurEngineBrand";
import TyresSection from "@/app/components/TyreSection";
import TyreRangeSection from "@/app/components/TyreRangeSelection";



export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
     
        <MainHero title="Main Products" breadcrumb="Tyre Services" />
          
       <MainProductHero data={mainProducts.tyres} />
       <TyreHero /> 
       <TyresSection />
       <TyreRangeSection />
       <OurTyreBrand />  
       
      {/* NEXT SECTIONS WILL COME HERE */}
    </main>
  );
}