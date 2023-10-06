import React from 'react'
import { crew } from '../../Data/demo';

export default function CrewInfo (props) {
  return (
      <article className='flex flex-col-reverse space-y-10 sm:flex-col'>
        {crew.map(info => 
          <section key={info.name} className={`
          ${info.name =="Douglas Hurley" && props.crewActive == "Douglas" ? 'flex mt-5':
          info.name =="Mark Shuttleworth" && props.crewActive == "Mark" ? 'flex':
          info.name =="Victor Glover" && props.crewActive == "Victor" ? 'flex':
          info.name =="Anousheh Ansari" && props.crewActive == "Ansari" ? 'flex':
          'hidden'}
          `}>
              <div className='flex flex-col flex-wrap justify-center content-center items-center lg:justify-start lg:content-start lg:items-start'>
                <h2 className='font-font-one uppercase text-small text-white opacity-[55%] sm:text-smallest-medium'>{info.role}</h2>
                <h1 className='font-font-one uppercase text-smallest-medium text-white sm:text-small-medium lg:text-[42px]'>{info.name}</h1>
                <p className='text-center font-font-two text-small text-light-blue mx-6 tracking-wider pb-5 sm:mx-16 sm:tracking-wide 
                sm:text-smallest-medium lg:tracking-wider lg:leading-5 lg:text-small lg:mx-0 lg:w-[23rem] lg:text-left xl:w-[22rem]'>{info.bio}</p>
              </div>
          </section>
        )}
        <nav className='flex flex-row flex-wrap content-center items-center justify-center space-x-4 lg:justify-start lg:content-start lg:items-start cursor-pointer'>
            <span className={`rounded-[100%] bg-white 
            ${ props.crewActive == "Douglas" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`}
            id='Douglas Hurley' onClick={props.change}></span>
            <span className={`rounded-[100%] bg-white 
            ${ props.crewActive == "Mark" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`}
            id='Mark Shuttleworth' onClick={props.change}></span>
            <span className={`rounded-[100%] bg-white 
            ${ props.crewActive == "Victor" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`}
            id='Victor Glover' onClick={props.change}></span>
            <span className={`rounded-[100%] bg-white 
            ${ props.crewActive == "Ansari" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`}
            id='Anousheh Ansari' onClick={props.change}></span>
        </nav>
      </article>
  )
}
