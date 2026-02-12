import SimpleMap from "@/components/comparison-section";
import BeforeAfterSliderdrag from "@/components/drag";
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

export default function Home() {
  return (
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


      <GloskinHighlightSection />
<TestimonialCard />
<BeforeAfterSliderdrag />
      {/* <section id="faq">
        <FAQ />
      </section> */}
      <section id="services">
        <SimpleMap />
      </section>

        {/* <AppointmentFormnew /> */}

      <ContactFooterReplica />
    </main>
  );
}
