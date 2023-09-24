import React from 'react'
import {NavBar, PlanetInfo} from '../'
import { destinations } from '../../Data/demo'

export default function Planet() {
  const [planetActive, setPlanetActive] = React.useState("moon");

  const planetChange = (e) => {
    if (e.target.innerHTML == "Moon") {
      setPlanetActive("moon")
    } 
    if (e.target.innerHTML == "Mars") {
      setPlanetActive("mars")
    } 
    if (e.target.innerHTML == "Europa") {
      setPlanetActive("europa")
    } 
    if (e.target.innerHTML == "Titan") {
      setPlanetActive("titan")
    } 
  }
  return (
    <section className='flex flex-col flex-wrap content-center items-center justify-center space-y-5 sm:space-y-10 xl:items-start xl:content-start xl:justify-start'>
      <h1 className='text-white font-font-two uppercase tracking-widest mb-5 sm:self-start sm:ml-10 sm:text-[20px] lg:text-[23px] xl:ml-32'>
        <span className='tracking-widest mr-4 font-extrabold opacity-[15%]'>01</span>
        Pick your destination
      </h1>
      <div className='flex flex-col space-y-5 sm:space-y-7 lg:space-y-0 lg:flex-row lg:space-x-24 xl:space-x-40 xl:mx-18'>
        {destinations.map(item => 
          <figure key={item.images.png} className=
          {`
            ${item.name =="Moon" && planetActive == "moon" ? 'block lg:ml-10 xl:ml-40':
            item.name =="Mars" && planetActive == "mars" ? 'block':
            item.name =="Europa" && planetActive == "europa" ? 'block':
            item.name =="Titan" && planetActive == "titan" ? 'block':
            'hidden'
            }
            self-center w-[13rem] sm:w-[20rem] lg:w-[23rem]
          `}
          >
            <img src={item.images.png} alt={item.name} />
          </figure>
        )}
        <div className='flex flex-col lg:items-start space-y-5'>
          <NavBar for={"dest"} active={planetActive} navClick={planetChange}/>
          <PlanetInfo active={planetActive}/>
        </div>
      </div>
    </section>
  )
}
