import HeroCard from "./HeroCard";

function StatsSection() {
  return (
    <section className="flex flex-col items-center">
      <h2>Meet the heroes behind the magic</h2>
      <div className="flex flex-row flex-wrap w-full justify-between px-32">
        <HeroCard img={"/images/Avatar1.png"} name={"Esther Howard"} role={"Founder"} />
        <HeroCard img={"/images/Avatar2.png"} name={"Cody Fisher"} role={"Developer"} />
        <HeroCard img={"/images/Avatar3.png"} name={"Brooklyn Simmons"} role={"Designer"} />
      </div>
      <div className="grid md:grid-cols-4 w-full items-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>
  );
}

export default StatsSection;
