import HeroCard from "./HeroCard";

function StatsSection() {
  return (
    <section className="flex flex-col items-center  py-[5vh] ">
      <h2 className="text-4xl font-bold">Meet the heroes behind the magic</h2>
      <div className="flex flex-wrap justify-center gap-6 w-full px-[8vw]">
  <HeroCard img={"/images/Avatar1.png"} name={"Esther Howard"} role={"Founder"} 
    className="w-full sm:w-1/2 lg:w-1/3" />
  <HeroCard img={"/images/Avatar2.png"} name={"Cody Fisher"} role={"Developer"} 
    className="w-full sm:w-1/2 lg:w-1/3" />
  <HeroCard img={"/images/Avatar3.png"} name={"Brooklyn Simmons"} role={"Designer"} 
    className="w-full sm:w-full md:w-1/2 lg:w-1/3" />
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full place-items-center px-4 sm:px-8 lg:px-24 py-14 bg-inputBorder text-white">
  <div className="flex flex-col gap-4">
    <p className="text-primaryDark text-6xl font-bold">350 +</p>
    <p className="text-3xl font-normal">Clients Worldwide</p>
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-primaryDark text-6xl font-semibold">20 +</p>
    <p className="text-3xl font-normal">Team Members</p>
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-primaryDark text-6xl font-semibold">100 +</p>
    <p className="text-3xl font-normal">Projects Completed</p>
  </div>
  <div className="flex flex-col gap-4">
    <p className="text-primaryDark text-6xl font-semibold">85M +</p>
    <p className="text-3xl font-normal">Revenue Generated</p>
  </div>
</div>



    </section>
  );
}

export default StatsSection;
