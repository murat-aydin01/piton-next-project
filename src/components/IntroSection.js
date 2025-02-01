import React from "react";

export default function IntroSection() {
  return (
    <section className="snap-start flex flex-col justify-center px-4 sm:px-[6vw] gap-y-6 xl:min-h-screen">
      <div className="flex flex-col gap-y-4 sm:gap-y-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          Who we are
        </h2>
        <p className="text-base sm:text-lg md:text-xl">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success. We
          believe that the human dimensions are essential to start any successful
          project and that this is where splendid emotional relationships between
          the company and people are born.
        </p>
      </div>
      <img src="/images/MidImage.png" alt="Middle Image" className="w-full h-auto" />
    </section>
  );
}
