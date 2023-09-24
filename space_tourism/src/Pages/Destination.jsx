import React from 'react';
import {NavBar, Planet} from '../Components'

export default function Destination() {
  return (
    <section className='home w-full h-full bg-destination-mobile sm:bg-destination-tablet xl:bg-destination-desktop bg-no-repeat 
    bg-cover'>
      <NavBar homeActive={false} destActive = {true} crewActive= {false} techActive={false} for={"main"}/>
      <Planet />
    </section>
  )
}
