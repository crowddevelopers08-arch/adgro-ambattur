"use client";

import React from "react";
import Link from "next/link";
import ThankTopBar from "@/components/thanknavbar";

export default function HairTreatmentsPrivacyPolicyPage() {
  return (
    <>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
      `}</style>

      <ThankTopBar />

      <section
        className="w-full bg-white py-10 sm:py-8 max-[470px]:py-6"
        style={{ fontFamily: "'Outfit', sans-serif" }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center pt-6 max-[470px]:pt-0 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Hair Treatments Privacy Policy
            </h1>
            <div className="h-1 w-16 bg-[#e82625] mx-auto rounded-full" />
          </div>

          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              This Privacy Policy applies specifically to visitors who submit
              enquiry or appointment forms through the Adgor Hair Ambattur hair
              treatments page. It explains what information we collect, how we
              use it, and how we protect it when you request details about our
              hair treatment services.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>
              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    1.1 Information You Provide
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Full name</li>
                    <li>Phone number</li>
                    <li>Email address</li>
                    <li>Selected treatment</li>
                    <li>PIN code</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    1.2 Technical Information
                  </h3>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Page URL from which the form was submitted</li>
                    <li>Browser and device information</li>
                    <li>Other technical data used for analytics and lead tracking</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To contact you about the hair treatment you selected</li>
                <li>To schedule consultations and appointments</li>
                <li>To share service details, pricing, and treatment guidance</li>
                <li>To record and manage leads in our internal dashboard and TeleCRM</li>
                <li>To improve the performance of our hair treatments landing page</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Lead Management
              </h2>
              <p className="text-gray-600">
                When you submit the hair treatments form, your information may be
                stored in our secure systems and shared with our lead management
                platform so our team can follow up on your enquiry efficiently.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Data Security
              </h2>
              <p className="text-gray-600">
                We use reasonable administrative and technical safeguards to
                protect your personal data. While we take care to secure the
                information you submit, no internet-based transmission can be
                guaranteed to be fully secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Your Choices
              </h2>
              <p className="text-gray-600 mb-3">
                If you would like to access, correct, or delete your submitted
                information, please contact us using the details below.
              </p>
              <div
                className="bg-gray-50 rounded-lg p-4 border-l-4"
                style={{ borderLeftColor: "#e82625" }}
              >
                <p className="text-gray-700 font-medium">
                  customercare@adgrohairambattur.in
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Contact Us
              </h2>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4" style={{ borderLeftColor: "#e82625" }}>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Email:</span>{" "}
                  customercare@adgrohairambattur.in
                </p>
                <p className="text-gray-700 mb-2">
                  <span className="font-medium">Phone:</span> +91 7409256789
                </p>
                <p className="text-gray-700">
                  <span className="font-medium">Address:</span> Sai Health and
                  Beauty Ventures, KAVITHA RAVIKUMAR, New No 122/124/1, New No
                  124/102, Redhills Main Road, Vijaylakshmipuram, NVA FTTH RSU,
                  Ambattur, Thiruvallur, Tamil Nadu, 600053
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/hair-treatments"
              className="text-[#e82625] font-semibold hover:underline"
            >
              Back to Hair Treatments
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
