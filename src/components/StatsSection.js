import HeroCard from "./HeroCard";

export default function StatsSection() {
  return (
<section className="snap-start flex flex-col items-center py-10 lg:min-h-screen">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
        Meet the heroes behind the magic
      </h2>
      <div className="w-full px-4 sm:px-[8vw] mb-10">
<div className="flex flex-wrap justify-center gap-6">
          <HeroCard
            img="/images/Avatar1.png"
            name="Esther Howard"
            role="Founder"
            className="flex-1 min-w-[280px] max-w-[400px]"
          />
          <HeroCard
            img="/images/Avatar2.png"
            name="Cody Fisher"
            role="Developer"
            className="flex-1 min-w-[280px] max-w-[400px]"
          />
          <HeroCard
            img="/images/Avatar3.png"
            name="Brooklyn Simmons"
            role="Designer"
            className="flex-1 min-w-[280px] max-w-[400px] self-center"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full place-items-center px-4 sm:px-8 lg:px-24 py-14 bg-inputBorder text-white">
        <div className="flex flex-col gap-4">
          <p className="text-primaryDark text-4xl sm:text-5xl md:text-6xl font-bold">
            350 +
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal">
            Clients Worldwide
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primaryDark text-4xl sm:text-5xl md:text-6xl font-semibold">
            20 +
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal">
            Team Members
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primaryDark text-4xl sm:text-5xl md:text-6xl font-semibold">
            100 +
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal">
            Projects Completed
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-primaryDark text-4xl sm:text-5xl md:text-6xl font-semibold">
            85M +
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl font-normal">
            Revenue Generated
          </p>
        </div>
      </div>
    </section>
  );
}
