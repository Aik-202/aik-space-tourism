import React from 'react'
import { destinations } from '../../Data/demo'

export default function PlanetInfo (props) {
  return (
    <article className='dest-info self-end'>
      {destinations.map(info => 
        <section key={info.name} className=
        {`
          ${info.name =="Moon" && props.active == "moon" ? 'flex':
          info.name =="Mars" && props.active == "mars" ? 'flex':
          info.name =="Europa" && props.active == "europa" ? 'flex':
          info.name =="Titan" && props.active == "titan" ? 'flex':
          'hidden'
          }
          flex-col flex-wrap content-center items-center justify-center mx-8 space-y-5 sm:space-y-10 sm:mx-20 lg:mx-0 lg:content-end
        `}>
        <div className={`flex flex-col flex-wrap content-center items-center justify-center xl:content-start lg:items-start lg:space-y-5 
        ${info.name =="Mars" ? 'lg:-ml-14' : '-ml-0'}`}>
          <h1 className='text-white font-font-one uppercase text-medium tracking-widest leading-tight sm:text-[55px] lg:text-medium'>{info.name}</h1>
          <p className='text-light-blue self-center text-small text-center font-font-two tracking-wide 
          sm:text-[20px] lg:text-small lg:text-left lg:w-[23rem] lg:self-start'>{info.description}</p>
        </div>
        <hr className='bg-white self-center h-[0.15rem] opacity-10 border-t-[1px] w-full'/>
        <div className='flex flex-col space-y-5 sm:flex-row sm:space-y-0 sm:space-x-32 lg:self-start'>
          <p className='flex flex-col text-light-blue font-font-two text-smallest text-center sm:text-small lg:text-smallest lg:text-left'>
            <span>AVG. DISTANCE</span>
            <span className='text-white mt-3 font-font-one text-small-medium uppercase lg:mt-1 lg:text-smallest-medium'>{info.distance}</span>
          </p>
          <p className='flex flex-col text-light-blue font-font-two text-smallest text-center sm:text-small lg:text-smallest lg:text-left'>
            <span>EST. TRAVEL TIME</span>
            <span className='text-white mt-3 font-font-one text-small-medium uppercase lg:mt-1 lg:text-smallest-medium'>{info.travel}</span>
          </p>
        </div>
      </section>
    )}
    </article>
  )
}
