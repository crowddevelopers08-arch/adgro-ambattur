"use client";

import React, { useState } from "react";
import Link from "next/link";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  treatment: string;
  pinCode: string;
}

interface FormErrors {
  fullName?: string;
  phone?: string;
  email?: string;
  treatment?: string;
  pinCode?: string;
}

const TREATMENTS = [
  "Oxygen Laser Therapy",
  "Cosmetic Hair Systems",
  "Mesotherapy",
  "Hair Transplant",
  "Beard Transplant",
  "Eyebrow Transplant",
];

export default function HairTreatmentsForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    treatment: "",
    pinCode: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const isFormComplete =
    formData.fullName.trim().length > 0 &&
    /^\d{10}$/.test(formData.phone) &&
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) &&
    formData.treatment.trim().length > 0 &&
    /^\d{6}$/.test(formData.pinCode);

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = "Full name is required";
    }

    if (!formData.phone) {
      nextErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(formData.phone)) {
      nextErrors.phone = "Please enter a valid 10 digit phone number";
    }

    if (!formData.email) {
      nextErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (!formData.treatment) {
      nextErrors.treatment = "Please select a treatment";
    }

    if (!formData.pinCode) {
      nextErrors.pinCode = "PIN code is required";
    } else if (!/^\d{6}$/.test(formData.pinCode)) {
      nextErrors.pinCode = "Please enter a valid 6-digit PIN code";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }

    if (submitError) {
      setSubmitError(null);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      treatment: "",
      pinCode: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          procedure: formData.treatment,
          city: formData.pinCode,
          source: "Adgor Hair Ambattur Website",
          formName: "hairtreatment leads",
          pageUrl: window.location.href,
          userAgent: navigator.userAgent,
          consent: true,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to submit form");
      }

      setSubmitSuccess(true);
      resetForm();

      window.setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error("Hair treatments form submission error:", error);
      setSubmitError(
        error instanceof Error
          ? error.message
          : "Failed to submit. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="h-full w-full bg-white rounded-lg shadow-md overflow-y-auto">
      <div className="py-4 px-6" style={{ backgroundColor: "#e82625" }}>
        <h2 className="text-xl font-bold text-white text-center">
          Regrow Your Happiness Now !
        </h2>
      </div>

      <div className="p-5">
        {submitSuccess && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 px-3 py-2 rounded-lg text-sm">
            <p className="text-center font-medium">
              Appointment booked successfully! We&apos;ll contact you soon.
            </p>
          </div>
        )}

        {submitError && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
            <p className="text-center font-medium">{submitError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className={`w-full px-3 py-2 text-sm rounded-lg border ${
                errors.fullName ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#e82625] focus:border-transparent transition duration-200`}
            />
            {errors.fullName && (
              <p className="mt-1 text-xs text-red-600">{errors.fullName}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Valid 10 Digit Phone No.
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter 10 digit mobile number"
              maxLength={10}
              className={`w-full px-3 py-2 text-sm rounded-lg border ${
                errors.phone ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#e82625] focus:border-transparent transition duration-200`}
            />
            {errors.phone && (
              <p className="mt-1 text-xs text-red-600">{errors.phone}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Example@gmail.com"
              className={`w-full px-3 py-2 text-sm rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#e82625] focus:border-transparent transition duration-200`}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="treatment"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              Choose your Treatment
            </label>
            <select
              id="treatment"
              name="treatment"
              value={formData.treatment}
              onChange={handleChange}
              className={`w-full px-3 py-2 text-sm rounded-lg border ${
                errors.treatment ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#e82625] focus:border-transparent transition duration-200 bg-white`}
            >
              <option value="">Select a treatment</option>
              {TREATMENTS.map((treatment) => (
                <option key={treatment} value={treatment}>
                  {treatment}
                </option>
              ))}
            </select>
            {errors.treatment && (
              <p className="mt-1 text-xs text-red-600">{errors.treatment}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="pinCode"
              className="block text-xs font-semibold text-gray-700 mb-1"
            >
              6-Digit Pin Code
            </label>
            <input
              type="text"
              id="pinCode"
              name="pinCode"
              value={formData.pinCode}
              onChange={handleChange}
              placeholder="Enter 6-digit PIN code"
              maxLength={6}
              className={`w-full px-3 py-2 text-sm rounded-lg border ${
                errors.pinCode ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-[#e82625] focus:border-transparent transition duration-200`}
            />
            {errors.pinCode && (
              <p className="mt-1 text-xs text-red-600">{errors.pinCode}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || !isFormComplete}
            className="w-full text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#e82625" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#c41e1d";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#e82625";
            }}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Booking...
              </span>
            ) : (
              "Book Your Appointment"
            )}
          </button>
        </form>

        <p className="mt-4 text-[10px] text-center text-gray-500">
          By booking, you agree to our Terms of Service and{" "}
          <Link
            href="/hair-treatments/privacy-policy"
            className="text-[#e82625] underline underline-offset-2"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
