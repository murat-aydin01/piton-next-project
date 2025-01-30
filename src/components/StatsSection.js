function StatsSection() {
  return (
    <section className="flex flex-col items-center">
      <h2>Meet the heroes behind the magic</h2>
      <div className="flex flex-row flex-wrap justify-center">
        <img src="/images/Avatar1.png" alt="avatar 1" />
        <img src="/images/Avatar2.png" alt="avatar 1" />
        <img src="/images/Avatar3.png" alt="avatar 1" />
      </div>
      <div className="grid md:grid-cols-4 w-screen items-center">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
      </div>
    </section>
  );
}

export default StatsSection;
