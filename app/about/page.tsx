
import AboutHero from "../components/AboutHero";
import AboutHighlights from "../components/AboutHighlights";
import OurCommitment from "../components/OurCommitment";
import WhyChoose from "../components/WhyChoose";
import TestimonialsAndTeam from "../components/TestimonialsAndTeam";
import OurClients from "../components/OurClients";
export default function AboutPage() {
  return (
    <main>
      {/* HERO SECTION */}
      <AboutHero title="About Us" breadcrumb="About Us"/>
      <AboutHighlights />
        <OurCommitment /> 
        <WhyChoose />  
        <TestimonialsAndTeam />
        <OurClients />

      {/* NEXT SECTIONS WILL COME HERE */}
    </main>
  );
}
