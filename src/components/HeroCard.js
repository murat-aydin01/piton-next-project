import React from 'react'

function HeroCard({img, name, role}) {
  return (
    <div className='w-[433px] h-[560px] flex flex-col shadow-md p-5  '>
      <img src={img}/>
      <div>
        <p>{name}</p>
        <p>{role}</p>
      </div>
    </div>
  )
}

export default HeroCard