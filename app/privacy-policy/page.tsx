"use client";

import ThankTopBar from "@/components/thanknavbar";
import React from "react";

export default function SimplePrivacyPolicyPage() {
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
          {/* Header */}
          <div className="text-center pt-6 max-[470px]:pt-0 mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <div className="h-1 w-16 bg-[#e82625] mx-auto rounded-full"></div>
          </div>

          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-600 text-lg">
              At Adgor Hair Ambattur, we are committed to protecting the privacy of our website visitors. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to safeguard your data.
            </p>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                1. Information We Collect
              </h2>

              <div className="ml-4 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    1.1 Personal Information
                  </h3>
                  <p className="text-gray-600 mb-2">
                    We may collect the following types of information from visitors to our website:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>Name, email address, phone number, and other contact details that you provide when you fill out forms on our website, such as booking a consultation or requesting more information</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    1.2 Technical Information
                  </h3>
                  <p className="text-gray-600 mb-2">
                    We may also collect general information to improve our services:
                  </p>
                  <ul className="list-disc pl-6 text-gray-600 space-y-1">
                    <li>IP address, browser type, device information, and other data related to your use of our website</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                2. How We Use Your Information
              </h2>
              <p className="text-gray-600 mb-3">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc pl-6 text-gray-600 space-y-2">
                <li>To provide you with information about our hair transplant services</li>
                <li>To schedule consultations and respond to your inquiries</li>
                <li>To improve our website and tailor content to your preferences</li>
                <li>To send you updates, promotions, or newsletters if you have opted to receive them</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                3. Data Security
              </h2>
              <p className="text-gray-600">
                We take reasonable measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is entirely secure, so we cannot guarantee absolute security.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                4. Cookies
              </h2>
              <p className="text-gray-600 mb-3">
                Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you use our site. You can disable cookies in your browser settings, but this may affect the functionality of our website.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                5. Third-Party Links
              </h2>
              <p className="text-gray-600">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any websites you visit.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                6. Your Rights
              </h2>
              <p className="text-gray-600 mb-3">
                You have the right to access, correct, or delete your personal information held by us. If you wish to exercise any of these rights, please contact us at:
              </p>
              <div className="bg-gray-50 rounded-lg p-4 border-l-4" style={{ borderLeftColor: "#e82625" }}>
                <p className="text-gray-700 font-medium">
                  customercare@adgrohairambattur.in
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                7. Changes to This Privacy Policy
              </h2>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date at the top. We encourage you to review this policy periodically.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                8. Contact Us
              </h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4 border-l-4" style={{ borderLeftColor: "#e82625" }}>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Email:</span> customercare@adgrohairambattur.in
                  </p>
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Phone:</span> +91 7409256789
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Address:</span> Sai Health and Beauty Ventures, KAVITHA RAVIKUMAR, New No 122/124/1, New No 124/102, Redhills Main Road, Vijaylakshmipuram, NVA FTTH RSU, Ambattur, Thiruvallur, Tamil Nadu, 600053
                  </p>
                </div>
              </div>

              <div className="mt-6 p-6 rounded-lg border" style={{ 
                background: "linear-gradient(to right, rgba(232,38,37,0.1), rgba(232,38,37,0.05))",
                borderColor: "rgba(232,38,37,0.2)"
              }}>
                <p className="text-center text-gray-700 text-lg">
                  <span className="font-bold" style={{ color: "#e82625" }}>
                    Adgor Hair Ambattur:
                  </span>{" "}
                  Committed to protecting your privacy while helping you achieve healthier, fuller hair.
                </p>
              </div>
            </div>
          </div>
          
          {/* Decorative element */}
          <div className="mt-12 text-center">
            <p className="text-xs text-gray-400">
              © {new Date().getFullYear()} Adgor Hair Ambattur. All rights reserved.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}