import React from 'react';
import {CrewMemebers, NavBar} from '../Components'

export default function Crew() {
  const [crewActive, setCrewActive] = React.useState("Douglas");

  const crewChange = (e) => {
    if (e.target.id == "Douglas Hurley") {
      setCrewActive("Douglas")
    } 
    if (e.target.id == "Mark Shuttleworth") {
      setCrewActive("Mark")
    } 
    if (e.target.id == "Victor Glover") {
      setCrewActive("Victor")
    } 
    if (e.target.id == "Anousheh Ansari") {
      setCrewActive("Ansari")
    } 
  }

  return (
    <section className='home w-full h-full bg-[#282B34] xl:bg-[#20222A]'>
      <NavBar homeActive={false} destActive = {false} crewActive= {true} techActive={false} for={"main"}/>
      <CrewMemebers crewActive={crewActive} change={crewChange}/>
  </section>
    
  )
}
