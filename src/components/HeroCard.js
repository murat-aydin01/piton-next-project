import React from "react";

export default function HeroCard({ img, name, role }) {
  return (
    <div
      className="flex flex-col justify-between shadow-md px-4 pt-4 pb-6 
                 w-full min-w-[220px] max-w-[320px] mx-auto text-center bg-white rounded-lg"
    >
      <img src={img} alt={name} className="w-full h-auto rounded-md shadow-sm" />
      <div className="mt-3">
        <p className="text-xl md:text-2xl font-semibold">{name}</p>
        <p className="text-lg md:text-xl font-normal text-gray-600">{role}</p>
      </div>
    </div>
  );
}
