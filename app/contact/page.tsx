

import ContactHero from "../components/ContactHero";
import ContactSection from "../components/ContactSection";


export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
    
     <ContactHero title="Contact Us" breadcrumb="Contact Us" />
       <ContactSection />
      {/* NEXT SECTIONS WILL COME HERE */}
    </main>
  );
}
