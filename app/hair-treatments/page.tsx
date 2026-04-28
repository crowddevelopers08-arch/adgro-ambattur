import SimpleMap from "@/components/comparison-section";
import HairTreatmentsBeforeAfter from "@/components/hair-treatments-before-after";
import FAQ from "@/components/faq";
import ContactFooterReplica from "@/components/footer";
import AdvertisementBanner from "@/components/hairtrans";
import GrohairTopBar from "@/components/header";
import AdGloHeroReplica from "@/components/hero-section";
import GloskinHighlightSection from "@/components/logoslider";
import AppointmentFormnew from "@/components/offer-highlight";
import AppointmentForm from "@/components/offer-highlight";
import HairTreatmentsGrid from "@/components/results-section";
import TestimonialCard from "@/components/review";
import HairConsultationCardExact from "@/components/skinpopup";
import ImageCarouselGrid from "@/components/video";
import InstagramVideoSection from "@/components/instagram-video-section";
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        {/* <RedTopAnnouncementBar /> */}
        <GrohairTopBar />

        <section id="hero">
          <AdGloHeroReplica />
        </section>
        <AdvertisementBanner />
     

        <HairConsultationCardExact />
        <HairTreatmentsGrid />
        <section id="why">
          <ImageCarouselGrid />
        </section>
        <section id="instagram-videos">
          <InstagramVideoSection />
        </section>


        <GloskinHighlightSection />
        <TestimonialCard />
        <HairTreatmentsBeforeAfter />
        {/* <section id="faq">
          <FAQ />
        </section> */}
        <section id="services">
          <SimpleMap />
        </section>

        {/* <AppointmentFormnew /> */}

        <ContactFooterReplica />
      </main>
    </>
  );
}
