import React from 'react'
import { crew } from '../../Data/demo';

export default function CrewInfo (props) {
  return (
      <article>
        {crew.map(info => 
          <section key={info.name} className={`
          ${info.name =="Douglas Hurley" && props.crewActive == "Douglas" ? 'flex lg:ml-10 xl:ml-40':
          info.name =="Mark Shuttleworth" && props.crewActive == "Mark" ? 'flex':
          info.name =="Victor Glover" && props.crewActive == "Victor" ? 'flex':
          info.name =="Anousheh Ansari" && props.crewActive == "Ansari" ? 'flex':
          'hidden'}
          `}>
              <div className='flex flex-col flex-wrap justify-center content-center items-center'>
                <h2>{info.role}</h2>
                <h1>{info.name}</h1>
                <p>{info.bio}</p>
              </div>
          </section>
        )}
        <nav className='flex flex-row flex-wrap content-center items-center justify-center space-x-4'>
            <span className={`rounded-[100%] bg-white ${ props.crewActive == "Douglas" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`} onClick={props.crewChange}></span>
            <span className={`rounded-[100%] bg-white ${ props.crewActive == "Mark" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`} onClick={props.crewChange}></span>
            <span className={`rounded-[100%] bg-white ${ props.crewActive == "Victor" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`} onClick={props.crewChange}></span>
            <span className={`rounded-[100%] bg-white ${ props.crewActive == "Ansari" ? 'opacity-1' : 'opacity-[20%]'} px-1 py-1 border-2 border-solid`} onClick={props.crewChange}></span>
        </nav>
      </article>
  )
}
