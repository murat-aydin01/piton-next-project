import React from 'react';

function HeroCard({ img, name, role}) {
  return (
    <div
      className={`flex flex-col justify-between shadow-md px-5 pt-5 pb-7 w-full max-w-md mx-auto`}
    >
      <img src={img} alt={name} className="w-full h-auto shadow-md" />
      <div className="mt-4">
        <p className="text-2xl md:text-3xl font-semibold">{name}</p>
        <p className="text-xl md:text-2xl font-normal">{role}</p>
      </div>
    </div>
  );
}

export default HeroCard;
