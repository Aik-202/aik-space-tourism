import React from 'react'
import { technology } from '../../Data/demo';
import {About} from '../'

export default function Term(props) {
  window.onresize = () => {location.reload()}
  return (
    <section className='flex flex-col flex-wrap content-center items-center justify-center space-y-5 sm:space-y-10 xl:items-start xl:content-start xl:justify-start'>
      <h1 className='text-white font-font-two uppercase tracking-widest mb-5 self-start ml-10 sm:text-[20px] lg:text-[23px] xl:ml-40 xl:mt-5'>
        <span className='tracking-widest mr-4 font-extrabold opacity-[15%]'>03</span>
        Space Launch 101 
      </h1>
      <div className='flex flex-col-reverse lg:flex-row lg:space-x-10 lg:ml-10 xl:ml-40 xl:space-x-32'>
      <About techActive={props.techActive} change={props.change}/>
        <div className='flex flex-col space-y-5 sm:space-y-7 lg:space-y-0 lg:flex-row lg:space-x-24 xl:space-x-40 xl:mx-18'>
          {technology.map(item => 
            <figure key={item.images.portrait} className=
            {`
              ${item.name =="Launch vehicle" && props.techActive == "Launch" ? 'block lg:ml-24 xl:ml-40':
              item.name =="Spaceport" && props.techActive == "Port" ? 'block':
              item.name =="Space capsule" && props.techActive == "Capsule" ? 'block':
              'hidden'
              } flex flex-col cursor-pointer`}
            >
              <img src={window.screen.availWidth <= 912 ? item.images.landscape : item.images.portrait } alt={item.name} className='self-center w-full lg:w-[20rem]'/>
            </figure>
          )}
        </div>
      </div>
    </section>
  )
}
