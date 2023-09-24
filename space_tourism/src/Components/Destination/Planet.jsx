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
    <section className='flex flex-col flex-wrap content-center items-center justify-center space-y-5'>
      <h1 className='text-light-blue font-font-two uppercase tracking-widest'>
        <span className='tracking-widest mr-4 font-extrabold'>01</span>
        Pick your destination
      </h1>
      {destinations.map(item => 
        <figure key={item.images.png} className=
        {`
          ${item.name =="Moon" && planetActive == "moon" ? 'block':
          item.name =="Mars" && planetActive == "mars" ? 'block':
          item.name =="Europa" && planetActive == "europa" ? 'block':
          item.name =="Titan" && planetActive == "titan" ? 'block':
          'hidden'
          }
          self-center mx-auto w-[13rem]
        `}
        >
          <img src={item.images.png} alt={item.name} />
        </figure>
      )}
      <NavBar for={"dest"} active={planetActive} navClick={planetChange}/>
      <PlanetInfo active={planetActive}/>
    </section>
  )
}
