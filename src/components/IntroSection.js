import React from "react";

function IntroSection() {
  return (
    <section className="flex flex-col justify-between px-[6vw] gap-y-[10vh]">
      <div className="flex flex-col gap-y-8">
        <h2 className="text-5xl font-bold">Who we are</h2>
        <p className="text-3xl font-normal">
          We love what we do and create partnerships with our clients to ensure
          their digital transformation is positioned for long-term success.We
          believe that the human dimensions essential to start any successful
          project and that this is where splendid emotional relationships
          between the company and people are born.
        </p>
      </div>
      <img src="/images/MidImage.png" alt="Middle Image" />
    </section>
  );
}

export default IntroSection;
