"use client";

import { useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    instgrm?: {
      Embeds?: {
        process: () => void;
      };
    };
  }
}

const instagramPosts = [
  {
    url: "https://www.instagram.com/p/DXBK5T3y51N/",
    title: "Hair treatment success story",
  },
  {
    url: "https://www.instagram.com/p/DXgH3ONyrl-/",
    title: "Client transformation highlight",
  },
];

export default function InstagramVideoSection() {
  useEffect(() => {
    window.instgrm?.Embeds?.process();
  }, []);

  return (
    <section className="w-full bg-[#fff7f7] py-10 max-[470px]:py-6 md:py-10 lg:py-12">
      <Script
        src="https://www.instagram.com/embed.js"
        strategy="lazyOnload"
        onLoad={() => window.instgrm?.Embeds?.process()}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-8 max-w-3xl text-center md:mb-10">
          <h2 className="mb-3 text-2xl font-bold text-[#e82625] sm:text-3xl md:text-4xl">
            Watch Real Client Results on Instagram
          </h2>
          <p className="text-sm leading-relaxed text-[#6b7280] sm:text-base md:text-lg">
            See quick treatment highlights, transformations, and real moments
            from our clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2 lg:gap-8">
          {instagramPosts.map((post) => (
            <div
              key={post.url}
              className="flex w-full justify-center overflow-hidden rounded-2xl border border-[#f3d2d2] bg-white p-3 shadow-[0_14px_40px_rgba(232,38,37,0.08)] sm:p-4"
            >
              <div className="w-full max-w-[360px] overflow-hidden rounded-xl">
                <blockquote
                  className="instagram-media !mx-auto !my-0 !min-w-0 !max-w-full rounded-xl"
                  data-instgrm-permalink={post.url}
                  data-instgrm-version="14"
                  aria-label={post.title}
                  style={{
                    maxHeight: "620px",
                    overflow: "hidden",
                  }}
                >
                  <a href={post.url} target="_blank" rel="noreferrer">
                    View this Instagram post
                  </a>
                </blockquote>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
