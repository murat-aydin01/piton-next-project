function HeroSection() {
  return (
    <section className=" h-screen w-screen bg-[url('/images/HeroShape.png')] bg-cover bg-center bg-heroBg flex flex-col justify-between items-center ">
      <h1 className="w-full mt-[10vw] text-8xl px-72 text-center ">Let’s create something great together.</h1>
      <div className="flex px-32 w-full">
      <img src="/images/Hands1.png" alt="hands 1" className="w-1/2"/>
      <img src="/images/Hands2.png" alt="hands 2" className="w-1/2"/>
      </div>
    </section>
  )
}

export default HeroSection