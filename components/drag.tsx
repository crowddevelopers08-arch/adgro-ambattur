// components/BeforeAfterWithForm.tsx
"use client";
import React, { useRef, useState, useCallback, useEffect } from "react";

// --- BeforeAfter Component (Integrated) ---
interface BeforeAfterProps {
  width?: string;
  height?: string;
  showLabels?: boolean;
  beforeLabel?: string;
  afterLabel?: string;
  defaultPosition?: number;
}

const BeforeAfter: React.FC<BeforeAfterProps> = ({
  width = "100%",
  height = "500px",
  showLabels = true,
  beforeLabel = "Before",
  afterLabel = "After",
  defaultPosition = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPosition, setSliderPosition] = useState(defaultPosition);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    percentage = Math.min(Math.max(percentage, 0), 100);
    setSliderPosition(percentage);
  }, []);

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.clientX);
    },
    [updatePosition]
  );

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.clientX);
    },
    [isDragging, updatePosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      setIsDragging(true);
      updatePosition(e.touches[0].clientX);
    },
    [updatePosition]
  );

  const handleTouchMove = useCallback(
    (e: TouchEvent) => {
      if (!isDragging) return;
      e.preventDefault();
      updatePosition(e.touches[0].clientX);
    },
    [isDragging, updatePosition]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
      document.body.style.overflow = 'hidden';
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.overflow = '';
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      document.body.style.overflow = '';
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  const handleSize = containerWidth < 400 ? "w-7 h-7" : "w-8 h-8";
  const grabBarSize = containerWidth < 400 ? "h-2.5" : "h-3";
  const labelSize = containerWidth < 400 ? "text-[10px] px-1.5 py-0.5" : "text-xs px-2 py-0.5";
  const labelPosition = containerWidth < 400 ? "top-1.5 left-1.5" : "top-2 left-2";
  const labelPositionRight = containerWidth < 400 ? "top-1.5 right-1.5" : "top-2 right-2";

  if (!isMounted) {
    return (
      <div
        ref={containerRef}
        className="relative overflow-hidden select-none rounded-lg shadow-md w-full bg-gray-100 animate-pulse"
        style={{ width, height }}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden select-none rounded-lg shadow-md w-full"
      style={{
        width,
        height,
        cursor: isDragging ? "grabbing" : "col-resize",
        aspectRatio: "1/1",
      }}
    >
      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
        }}
      >
        <img
          src="after.png"
          alt="After"
          className="absolute top-0 left-0 w-full h-full object-cover"
          draggable={false}
          loading="eager"
        />
      </div>

      <div
        className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
        }}
      >
        <img
          src="before-8.png"
          alt="Before"
          className="absolute top-0 left-0 w-full h-full object-cover"
          draggable={false}
          loading="eager"
        />
      </div>

      <div
        className="absolute top-0 bottom-0 pointer-events-none"
        style={{
          left: `${sliderPosition}%`,
          transform: "translateX(-50%)",
          zIndex: 20,
        }}
      >
        <div className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg" />
        <div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${handleSize} bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-auto transition-transform hover:scale-110 active:scale-95`}
          onMouseDown={handleMouseDown}
          onTouchStart={handleTouchStart}
          style={{ 
            cursor: "grab", 
            touchAction: "none",
            boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          }}
        >
          <div className="flex gap-1 text-gray-700">
            <span className={`w-0.5 ${grabBarSize} bg-gray-500 rounded-full`} />
            <span className={`w-0.5 ${grabBarSize} bg-gray-500 rounded-full`} />
          </div>
        </div>
      </div>

      {sliderPosition === 50 && !isDragging && (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded-full backdrop-blur-sm pointer-events-none md:opacity-50 opacity-0 md:opacity-50">
          Drag
        </div>
      )}

      {showLabels && (
        <>
          <span
            className={`absolute ${labelPosition} bg-black/70 text-white ${labelSize} rounded-full pointer-events-none backdrop-blur-sm font-medium shadow`}
            style={{ 
              opacity: sliderPosition > 15 ? 1 : 0.4,
              transition: 'opacity 0.2s ease',
              zIndex: 25,
            }}
          >
            {beforeLabel}
          </span>
          <span
            className={`absolute ${labelPositionRight} bg-black/70 text-white ${labelSize} rounded-full pointer-events-none backdrop-blur-sm font-medium shadow`}
            style={{ 
              opacity: sliderPosition < 85 ? 1 : 0.4,
              transition: 'opacity 0.2s ease',
              zIndex: 25,
            }}
          >
            {afterLabel}
          </span>
        </>
      )}
    </div>
  );
};

// --- Simplified AppointmentForm Component ---
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

const AppointmentForm: React.FC = () => {
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

  const treatments = [
    "Oxygen Laser Therapy",
    "Cosmetic Hair Systems",
    "Mesotherapy",
    "Hair Transplant",
    "Beard Transplant",
    "Eyebrow Transplant",
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    const phoneRegex = /^\d{10}$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10 digit phone number";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.treatment) {
      newErrors.treatment = "Please select a treatment";
    }

    const pinRegex = /^\d{6}$/;
    if (!formData.pinCode) {
      newErrors.pinCode = "PIN code is required";
    } else if (!pinRegex.test(formData.pinCode)) {
      newErrors.pinCode = "Please enter a valid 6-digit PIN code";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
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
    if (submitError) setSubmitError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const pageUrl = window.location.href;
      const userAgent = navigator.userAgent;

      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          procedure: formData.treatment,
          city: formData.pinCode,
          source: 'Adgor Hair Ambattur Website',
          formName: 'website leads',
          pageUrl: pageUrl,
          userAgent: userAgent,
          consent: true
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit form');
      }

      setSubmitSuccess(true);
      
      setFormData({
        fullName: "",
        phone: "",
        email: "",
        treatment: "",
        pinCode: "",
      });
      
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);

      setTimeout(() => {
        window.location.href = '/thank-you';
      }, 500);

    } catch (error: any) {
      console.error("Submission error:", error);
      setSubmitError(error.message || "Failed to submit. Please try again.");
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
              Appointment booked successfully! Redirecting to thank you page...
            </p>
          </div>
        )}

        {submitError && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-3 py-2 rounded-lg text-sm">
            <p className="text-center font-medium">
              {submitError}
            </p>
          </div>
        )}
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-xs font-semibold text-gray-700 mb-1">
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
            <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
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
            <label htmlFor="email" className="block text-xs font-semibold text-gray-700 mb-1">
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
            <label htmlFor="treatment" className="block text-xs font-semibold text-gray-700 mb-1">
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
              {treatments.map((treatment) => (
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
            <label htmlFor="pinCode" className="block text-xs font-semibold text-gray-700 mb-1">
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
            disabled={isSubmitting}
            className="w-full text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed text-sm tracking-wide shadow-md hover:shadow-lg"
            style={{ backgroundColor: "#e82625" }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#c41e1d"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#e82625"}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Booking...
              </span>
            ) : (
              "Book Your Appointment"
            )}
          </button>
        </form>

        <p className="mt-4 text-[10px] text-center text-gray-500">
          By booking, you agree to our Terms of Service and Privacy Policy
        </p>
      </div>
    </div>
  );
};

// --- Main Combined Component ---
export const BeforeAfterWithForm: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-red-50 to-white py-10 px-4 sm:px-6 lg:px-8 flex items-center justify-center" id="form">
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex flex-col md:flex-row gap-6 items-stretch">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-[500px]">
              <BeforeAfter 
                width="100%" 
                height="500px"
                showLabels={true}
                beforeLabel="Before"
                afterLabel="After"
                defaultPosition={50}
              />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="w-full max-w-[500px]">
              <AppointmentForm />
            </div>
          </div>
        </div>
        
        <p className="text-center text-xs text-gray-500 mt-8">
          Drag the slider to compare results • Book your appointment today
        </p>
      </div>
    </div>
  );
};

export default BeforeAfterWithForm;