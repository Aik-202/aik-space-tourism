import React from 'react';
import {NavBar, Term, Music} from '../Components'

export default function Technology() {
  const [techActive, settechActive] = React.useState("Launch");

  const techChange = (e) => {
    if (e.target.id == "Launch vehicle") {
      settechActive("Launch")
    } 
    if (e.target.id == "Spaceport") {
      settechActive("Port")
    } 
    if (e.target.id == "Space capsule") {
      settechActive("Capsule")
    }  
  }
  return (
    <section className='home w-full h-max sm:h-full bg-technology-mobile sm:bg-technology-tablet xl:bg-technology-desktop bg-no-repeat 
    bg-cover'>
      <NavBar homeActive={false} destActive = {false} crewActive= {false} techActive={true} for={"main"}/>
      <Term techActive={techActive} change={techChange}/>
    </section>
  )
}
