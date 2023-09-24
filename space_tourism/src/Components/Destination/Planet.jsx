import React from 'react'
import NavBar from '../Nav/NavBar'
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
    <section>
      <h1><span>01</span>Pick your destination</h1>
      {/* {destinations.map(item => <figure key={item.images.png}>
        <img src={item.images.webp} alt={item.name} />
      </figure>)} */}
      <NavBar for={"dest"} active={planetActive} navClick={planetChange}/>
    </section>
  )
}
