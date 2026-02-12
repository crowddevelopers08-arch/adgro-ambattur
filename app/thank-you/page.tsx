"use client";

import ThankTopBar from "@/components/thanknavbar";
import Script from "next/script";
import { useEffect } from "react";

// Add type declaration for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function SimpleThankYouPage() {
  useEffect(() => {
    // Track conversion when component mounts
    const trackConversion = () => {
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'conversion', {
          'send_to': 'AW-17773968064/9VdWCPnnzdsbEMD1pJtC',
          'value': 1.0,
          'currency': 'INR'
        });
      }
    };

    // Try to track conversion
    trackConversion();
    
    // Set up interval to check if gtag is available
    const intervalId = setInterval(() => {
      if (typeof window !== 'undefined' && window.gtag) {
        trackConversion();
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <ThankTopBar />

      <section
        className="w-full min-h-[80vh] mt-4 max-[470px]:mt-0 flex items-center justify-center bg-gradient-to-b from-gray-50 to-white py-8 max-[470px]:py-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-gradient-to-br from-[#d3315c]/10 to-[#d3315c]/20 rounded-full flex items-center justify-center mx-auto shadow-md">
              <span className="text-5xl text-[#e72528] font-bold">✓</span>
            </div>
          </div>

          {/* Main Content - Updated */}
          <h1 className="text-4xl font-bold text-gray-900 mb-6">
            THANK YOU FOR REACHING OUT TO ADGRO HAIR AMBATTUR
          </h1>

          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Your inquiry is valuable to us, and we're thrilled to have the opportunity to assist you. Our team of experts will review your submission and get back to you shortly with personalized recommendations tailored to your needs.
          </p>

          <p className="text-gray-700 text-lg mb-10 leading-relaxed">
            In the meantime, if you have any immediate questions or concerns, please don't hesitate to contact us directly. We're here to ensure your journey towards achieving your desired look is smooth and rewarding.
          </p>

          <p className="text-gray-700 text-lg mb-10 font-medium">
            Thank you once again for considering our clinic for your hair care needs. We look forward to the possibility of helping you transform your appearance and boost your confidence.
          </p>

          {/* Contact Info */}
          <div className="bg-gradient-to-r from-[#d3315c]/5 to-[#d3315c]/10 rounded-xl p-6 mb-10 border border-[#d3315c]/20 shadow-sm">
            <p className="text-gray-700 mb-3 font-medium">
              Need immediate assistance?
            </p>
            <a
              href="tel:+917409256789"
              className="text-2xl font-bold text-[#e72528] hover:text-[#e72528] transition-colors inline-flex items-center gap-2"
            >
              <span className="inline-block w-8 h-8 bg-[#e72528] text-white rounded-full flex items-center justify-center text-sm">
                📞
              </span>
              +91 74092 56789
            </a>
            <p className="text-gray-500 text-sm mt-3">
              Available Monday to Saturday, 9AM to 6PM
            </p>
          </div>

          {/* Back Home Button */}
          <a
            href="/"
            className="inline-block bg-gradient-to-r from-[#e72528] to-[#e72528] text-white font-semibold px-10 py-4 rounded-xl hover:from-[#e72528] hover:to-[#e72528] transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
          >
            Back to Home
          </a>

          {/* Thank You Message */}
          <div className="mt-12 pt-6 border-t border-gray-200">
            <p className="text-gray-500 italic">With gratitude,</p>
            <p className="text-xl font-semibold text-[#e72528] mt-2">
              AdGro Hair Ambattur Team
            </p>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-sm text-gray-400">
            <p>You will receive a confirmation message shortly.</p>
          </div>
        </div>
      </section>
    </>
  );
}