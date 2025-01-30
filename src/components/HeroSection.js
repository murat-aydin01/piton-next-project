function HeroSection() {
  return (
    <section className=" h-screen bg-[url('/images/HeroShape.png')] bg-cover bg-center bg-heroBg flex flex-col justify-between items-center ">
      <h1 className="mt-[10vw] text-8xl px-72 text-center "><span className="block">Let’s create something</span> <span className="block">great together.</span></h1>
      <div className="flex flex-row">
      <img src="/images/Hands1.png" alt="hands 1"/>
      <img src="/images/Hands2.png" alt="hands 2"/>
      </div>
    </section>
  )
}

export default HeroSection