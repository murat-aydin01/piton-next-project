import React from 'react'

function HeroCard({img, name, role}) {
  return (
    <div className=' flex flex-col justify-between shadow-md px-5 pt-5 pb-7  '>
      <img src={img} className='shadow-md'/>
      <div>
        <p className='text-3xl font-semibold '>{name}</p>
        <p className='text-2xl font-normal '>{role}</p>
      </div>
    </div>
  )
}

export default HeroCard