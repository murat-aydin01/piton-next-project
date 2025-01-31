function HeroSection() {
  return (
    <section className="h-[40vh] md:h-[60vh] lg:h-[90vh] w-screen bg-[url('/images/HeroShape.png')] bg-cover bg-center bg-heroBg flex flex-col justify-between items-center">
      <h1 className="w-full my-auto text-center px-[20%] 
                 text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
    Let’s create something great together.
  </h1>
      <div className="flex px-[10%] w-full h- justify-center md:justify-between">
        <img src="/images/Hands1.png" alt="hands 1" className="w-1/2 " />
        <img src="/images/Hands2.png" alt="hands 2" className="  w-1/2" />
      </div>
    </section>
  );
}

export default HeroSection;
