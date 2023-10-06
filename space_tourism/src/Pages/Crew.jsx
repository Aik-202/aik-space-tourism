import React from 'react';
import {CrewMemebers, NavBar} from '../Components'

export default function Crew() {
  const [crewActive, setCrewActive] = React.useState("Douglas");

  const crewChange = (e) => {
    if (e.target.innerHTML == "Douglas Hurley") {
      setCrewActive("Douglas")
    } 
    if (e.target.innerHTML == "Mark Shuttleworth") {
      setCrewActive("Mark")
    } 
    if (e.target.innerHTML == "Victor Glover") {
      setCrewActive("Victor")
    } 
    if (e.target.innerHTML == "Anousheh Ansari") {
      setCrewActive("Ansari")
    } 
  }
  return (
    <section className='home w-full h-full bg-[#444457] bg-opacity-5`'>
      <NavBar homeActive={false} destActive = {false} crewActive= {true} techActive={false} for={"main"}/>
      <CrewMemebers crewActive={crewActive} crewChange={crewChange}/>
  </section>
    
  )
}
