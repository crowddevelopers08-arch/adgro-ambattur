import Head from "next/head";
import Script from "next/script";
import TestimonialCard from "@/components/transplant/review";
import GrohairTopBar from "@/components/transplant/header";
import InstagramVideoSection from "@/components/transplant/instagram-video-section";
import SimpleMap from "@/components/transplant/comparison-section";
import IVFHeroExact from "@/components/transplant/hero-section";
import ImageGridCarousel from "@/components/transplant/video";
import CareFeaturesExact from "@/components/transplant/logoslider";
import Footer from "@/components/transplant/footer";
import WhyChooseUs from "@/components/transplant/why-choose-us";
import HairProblems from "@/components/transplant/hair-problems";
import CareSection from "@/components/transplant/care-section";
import WhyBestClinic from "@/components/transplant/why-best-clinic";
import FaqSection from "@/components/transplant/faq-section";
import HairTreatmentsBeforeAfter from "@/components/transplant/hair-treatments-before-after";
import ClinicIntro from "@/components/transplant/clinic-intro";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <GrohairTopBar />
        <IVFHeroExact />
        <HairTreatmentsBeforeAfter />
        <ImageGridCarousel />
        <ClinicIntro />
        <WhyChooseUs />
        <HairProblems />
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
