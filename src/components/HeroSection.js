"use client";

export default function HeroSection() {
  return (
    <section
      className="snap-start min-h-[40vh] md:min-h-[60vh] lg:min-h-screen xl:h-[90vh] 
                 bg-[url('/images/HeroShape.png')] bg-cover bg-center bg-heroBg 
                 flex flex-col justify-between items-center px-4 text-center "
    >
      <h1
        className="w-full my-auto 
                   sm:px-[15%] md:px-[20%] 
                   text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 
                   font-bold leading-tight"
      >
        Let’s create something great together.
      </h1>
      <div className="flex px-4 sm:px-[10%] w-full justify-center md:justify-between">
        <img src="/images/Hands1.png" alt="hands 1" className="w-1/2" />
        <img src="/images/Hands2.png" alt="hands 2" className="w-1/2" />
      </div>
    </section>
  );
}
