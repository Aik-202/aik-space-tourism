import React from 'react'
import { technology } from '../../Data/demo'

export default function About(props) {
  return (
    <article className='flex flex-col-reverse lg:flex-row-reverse'>
      <div className='flex flex-col-reverse lg:ml-10 lg:mb-8'>
        {technology.map(info => 
          <section key={info.name} className={`
          ${info.name =="Launch vehicle" && props.techActive == "Launch" ? 'flex pb-10 sm:pb-0':
          info.name =="Spaceport" && props.techActive == "Port" ? 'flex pb-10 sm:pb-0':
          info.name =="Space capsule" && props.techActive == "Capsule" ? 'flex':
          'hidden'}
          `}>
              <div className='flex flex-col flex-wrap justify-center content-center items-center lg:justify-start lg:content-start lg:items-start'>
                <h1 className='font-font-one uppercase text-smallest-medium text-white sm:text-small-medium lg:text-[42px]'>{info.name}</h1>
                <p className='text-center font-font-two text-small text-light-blue mx-6 tracking-wider pb-5 sm:mx-16 sm:tracking-wide 
                sm:text-smallest-medium lg:tracking-wider lg:leading-5 lg:text-small lg:mx-0 lg:w-[23rem] lg:text-left xl:w-[22rem]'>{info.description}</p>
              </div>
          </section>
        )}
        <h2 className='text-center font-font-one uppercase text-small text-light-blue opacity-[55%] tracking-wider sm:text-small lg:text-left'>The Terminology...</h2>
      </div>
      <nav className='flex flex-row flex-wrap cursor-pointer content-center items-center justify-center space-x-4 mt-10 mb-10 
      lg:flex-col lg:space-x-0 lg:space-y-10 lg:text-smallest-medium'>
          <span className={`rounded-[100%] 
          ${ props.techActive == "Launch" ? 'bg-white' : 'bg-transparent text-white'} px-3 py-1 lg:px-5 lg:py-2 border-2 border-solid`}
          id='Launch vehicle' onClick={props.change}>1</span>
          <span className={`rounded-[100%] bg-white 
          ${ props.techActive == "Port" ? 'bg-white' : 'bg-transparent text-white'} px-3 py-1 lg:px-5 lg:py-2 border-2 border-solid`}
          id='Spaceport' onClick={props.change}>2</span>
          <span className={`rounded-[100%] bg-white 
          ${ props.techActive == "Capsule" ? 'bg-white' : 'bg-transparent text-white'} px-3 py-1 lg:px-5 lg:py-2 border-2 border-solid`}
          id='Space capsule' onClick={props.change}>3</span>
      </nav>
    </article>
)
}
