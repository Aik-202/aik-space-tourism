import React from 'react'
import { crew } from '../../Data/demo';

export default function CrewInfo (props) {
  return (
      <article className='flex flex-col-reverse space-y-10'>
        {crew.map(info => 
          <section key={info.name} className={`
          ${info.name =="Douglas Hurley" && props.crewActive == "Douglas" ? 'flex mt-5':
          info.name =="Mark Shuttleworth" && props.crewActive == "Mark" ? 'flex':
          info.name =="Victor Glover" && props.crewActive == "Victor" ? 'flex':
          info.name =="Anousheh Ansari" && props.crewActive == "Ansari" ? 'flex':
          'hidden'}
          `}>
              <div className='flex flex-col flex-wrap justify-center content-center items-center'>
                <h2 className='font-font-one uppercase text-small text-white opacity-[55%]'>{info.role}</h2>
                <h1 className='font-font-one uppercase text-smallest-medium text-white'>{info.name}</h1>
                <p className='text-center font-font-two text-small text-light-blue mx-6 tracking-wider pb-5'>{info.bio}</p>
              </div>
          </section>
        )}
        <nav className='flex flex-row flex-wrap content-center items-center justify-center space-x-4'>
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
