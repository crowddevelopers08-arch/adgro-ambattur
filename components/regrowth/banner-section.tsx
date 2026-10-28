"use client";

import Image from "next/image";

const scrollToForm = () =>
  document.getElementById("form")?.scrollIntoView({ behavior: "smooth" });

export default function BannerSection() {
  return (
    <>
      <section className="relative block w-full overflow-hidden md:hidden">
        <Image
          src="/ambattur-regrowth-mbl.png"
          alt="Advanced Grohair Ambattur - #1 GFC Hair Regrowth"
          width={941}
          height={1672}
          priority
          className="h-auto w-full"
        />
        <button
          type="button"
          aria-label="Book Your Consultation"
          onClick={scrollToForm}
          className="absolute inset-0 h-full w-full cursor-pointer"
        />
      </section>
      <section className="relative hidden w-full overflow-hidden md:block lg:hidden">
        <Image
          src="/ambattur-regrowth-tab.png"
          alt="Advanced Grohair Ambattur - #1 GFC Hair Regrowth"
          width={1639}
          height={960}
          priority
          className="h-auto w-full"
        />
        <button
          type="button"
          aria-label="Book Your Consultation"
          onClick={scrollToForm}
          className="absolute inset-0 h-full w-full cursor-pointer"
        />
      </section>
      <section className="relative hidden w-full overflow-hidden lg:block">
        {/* Full width with a shorter height (image height reduced, nothing cropped) */}
        <div
          className="relative mx-auto w-full"
          style={{
            aspectRatio: "2.55 / 1",
          }}
        >
          <Image
            src="/ambattur-regrowth.png"
            alt="Advanced Grohair Ambattur - #1 GFC Hair Regrowth"
            fill
            priority
            className="object-fill"
            sizes="100vw"
          />

          {/* Whole banner is clickable and jumps to the form */}
          <button
            type="button"
            aria-label="Book Your Consultation"
            onClick={scrollToForm}
            className="absolute inset-0 h-full w-full cursor-pointer"
          />
        </div>
      </section>
    </>
  );
}
