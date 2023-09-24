import React from 'react'
import { destinations } from '../../Data/demo'

export default function PlanetInfo (props) {
  return (
    <article>
      {destinations.map(info => 
        <section key={info.name} className=
        {`
          ${info.name =="Moon" && props.active == "moon" ? 'block':
          info.name =="Mars" && props.active == "mars" ? 'block':
          info.name =="Europa" && props.active == "europa" ? 'block':
          info.name =="Titan" && props.active == "titan" ? 'block':
          'hidden'
          }
          flex flex-col flex-wrap content-center items-center justify-center mx-5
        `}>
        <h1 className='text-white font-font-one uppercase text-medium'>{info.name}</h1>
        <p className='text-light-blue text-center'>{info.description}</p>
        <hr className='bg-white self-center h-[0.15rem] opacity-10 border-t-[1px] w-full'/>
        <p className='flex flex-col text-light-blue'>
          AVG. DISTANCE
          <span className='text-white'>{info.distance}</span>
        </p>
        <p className='flex flex-col text-light-blue'>
          EST. TRAVEL TIME
          <span className='text-white'>{info.travel}</span>
        </p>
      </section>
    )}
    </article>
  )
}
