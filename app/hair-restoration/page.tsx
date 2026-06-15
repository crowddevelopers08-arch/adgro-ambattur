import CareSection from "@/components/restoration/care-section";
import ClinicIntro from "@/components/restoration/clinic-intro";
import SimpleMap from "@/components/restoration/comparison-section";
import FaqSection from "@/components/restoration/faq-section";
import Footer from "@/components/restoration/footer";
import HairProblems from "@/components/restoration/hair-problems";
import GrohairTopBar from "@/components/restoration/header";
import IVFHeroExact from "@/components/restoration/hero-section";
import InstagramVideoSection from "@/components/restoration/instagram-video-section";
import CareFeaturesExact from "@/components/restoration/logoslider";
import TestimonialCard from "@/components/restoration/review";
import ImageGridCarousel from "@/components/restoration/video";
import WhyBestClinic from "@/components/restoration/why-best-clinic";
import WhyChooseUs from "@/components/restoration/why-choose-us";


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
        {/* <HairProblems /> */}
        <CareSection />
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
