import CareSection from "@/components/regrowth/care-section";
import ClinicIntro from "@/components/regrowth/clinic-intro";
import SimpleMap from "@/components/regrowth/comparison-section";
import FaqSection from "@/components/regrowth/faq-section";
import Footer from "@/components/regrowth/footer";
import HairProblems from "@/components/regrowth/hair-problems";
import GrohairTopBar from "@/components/regrowth/header";
import IVFHeroExact from "@/components/regrowth/hero-section";
import InstagramVideoSection from "@/components/regrowth/instagram-video-section";
import CareFeaturesExact from "@/components/regrowth/logoslider";
import TestimonialCard from "@/components/regrowth/review";
import ImageGridCarousel from "@/components/regrowth/video";
import WhyBestClinic from "@/components/regrowth/why-best-clinic";
import WhyChooseUs from "@/components/regrowth/why-choose-us";



export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <GrohairTopBar />
        <IVFHeroExact />
        {/* <HairTreatmentsBeforeAfter /> */}
        <ImageGridCarousel />
        <ClinicIntro />
        <WhyChooseUs />
        <HairProblems />
        {/* <CareSection /> */}
        <WhyBestClinic />
        <CareFeaturesExact />
        <FaqSection />
        <InstagramVideoSection />
        <TestimonialCard />
        <SimpleMap />
        <Footer />
      </main>
    </>
  );
}
