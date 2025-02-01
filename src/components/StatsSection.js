import HeroCard from "./HeroCard";

export default function StatsSection() {
  return (
    <section className="snap-start flex flex-col items-center py-20 lg:min-h-screen">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-center">
        Meet the heroes behind the magic
      </h2>
      <div className="w-full px-4 sm:px-[8vw] mb-10">
        <div className="flex flex-wrap justify-center gap-4">
          <HeroCard img="/images/Avatar1.png" name="Esther Howard" role="Founder" />
          <HeroCard img="/images/Avatar2.png" name="Cody Fisher" role="Developer" />
          <HeroCard img="/images/Avatar3.png" name="Brooklyn Simmons" role="Designer" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full px-4 sm:px-8 lg:px-24 py-14 bg-inputBorder text-white">
        {[
          { value: "350+", label: "Clients Worldwide" },
          { value: "20+", label: "Team Members" },
          { value: "100+", label: "Projects Completed" },
          { value: "85M+", label: "Revenue Generated" },
        ].map((stat, index) => (
          <div key={index} className="flex flex-col gap-4 w-full items-center text-center">
            <p className="text-primaryDark text-3xl sm:text-4xl md:text-5xl font-semibold">
              {stat.value}
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-normal">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}


