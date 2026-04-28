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
import InstagramVideoSection from "@/components/instagram-video-section";
import Head from 'next/head'
import Script from 'next/script'

export default function Home() {
  return (
    <>
      <Head>
        {/* Meta Pixel Code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1428141432021314');
              fbq('track', 'PageView');
            `
          }}
        />
        {/* End Meta Pixel Code */}
      </Head>

      {/* Meta Pixel Noscript */}
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=1428141432021314&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

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
    </>
  );
}
