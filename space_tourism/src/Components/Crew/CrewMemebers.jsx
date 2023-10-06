import React from 'react'
import { crew } from '../../Data/demo';
import {CrewInfo} from '../'

export default function CrewMemebers(props) {
  return (
    <section className='flex flex-col flex-wrap content-center items-center justify-center space-y-5 sm:space-y-10 xl:items-start xl:content-start xl:justify-start'>
      <h1 className='text-white font-font-two uppercase tracking-widest mb-5 self-start ml-10 sm:text-[20px] lg:text-[23px] xl:ml-40 xl:mt-5'>
        <span className='tracking-widest mr-4 font-extrabold opacity-[15%]'>02</span>
        Meet your Crew
      </h1>
     <div className='flex flex-col-reverse sm:flex-col lg:flex-row lg:space-x-32 lg:ml-10 xl:ml-40 xl:-space-x-10'>
      <CrewInfo crewActive={props.crewActive} change={props.change}/>
        <div className='flex flex-col space-y-5 sm:space-y-7 lg:space-y-0 lg:flex-row lg:space-x-24 xl:space-x-40 xl:mx-18'>
          {crew.map(item => 
            <figure key={item.images.png} className=
            {`
              ${item.name =="Douglas Hurley" && props.crewActive == "Douglas" ? 'block lg:ml-24 xl:ml-52':
              item.name =="Mark Shuttleworth" && props.crewActive == "Mark" ? 'block':
              item.name =="Victor Glover" && props.crewActive == "Victor" ? 'block':
              item.name =="Anousheh Ansari" && props.crewActive == "Ansari" ? 'block':
              'hidden'
              } flex flex-col mx-3`}
            >
              <img src={item.images.png} alt={item.name} className='self-center w-[13rem] sm:w-[24rem] lg:w-[18rem] xl:w-[25rem]' />
              <hr className='bg-white self-center h-[0.12rem] opacity-5 border-t-[1px] w-full sm:hidden'/>
            </figure>
          )}
        </div>
     </div>
    </section>
  )
}
