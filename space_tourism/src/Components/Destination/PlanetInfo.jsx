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
          flex flex-col flex-wrap content-center items-center justify-center mx-8 space-y-5 sm:space-y-10 sm:mx-20 
        `}>
        <div className='flex flex-col flex-wrap content-center items-center justify-center'>
          <h1 className='text-white font-font-one uppercase text-medium leading-tight sm:text-big'>{info.name}</h1>
          <p className='text-light-blue self-center text-small text-center font-font-two tracking-wide sm:text-smallest-medium'>{info.description}</p>
        </div>
        <hr className='bg-white self-center h-[0.15rem] opacity-10 border-t-[1px] w-full'/>
        <div className='flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-32'>
          <p className='flex flex-col text-light-blue font-font-two text-smallest text-center sm:text-small'>
            <span>AVG. DISTANCE</span>
            <span className='text-white mt-3 font-font-one text-small-medium uppercase'>{info.distance}</span>
          </p>
          <p className='flex flex-col text-light-blue font-font-two text-smallest text-center sm:text-small'>
            <span>EST. TRAVEL TIME</span>
            <span className='text-white mt-3 font-font-one text-small-medium uppercase'>{info.travel}</span>
          </p>
        </div>
      </section>
    )}
    </article>
  )
}
