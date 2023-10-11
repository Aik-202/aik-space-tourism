import React from 'react';
import {NavBar, Planet, Music} from '../Components'

export default function Destination() {
  return (
    <section className='dest h-full bg-destination-mobile sm:bg-destination-tablet xl:bg-destination-desktop bg-no-repeat 
    bg-cover flex flex-col sm:space-y-10'>
      <NavBar homeActive={false} destActive = {true} crewActive= {false} techActive={false} for={"main"}/>
      <Planet />
    </section>
  )
}
