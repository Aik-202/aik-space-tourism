import React from 'react';
import {NavBar, Planet, Music} from '../Components'

export default function Destination() {
  return (
    <section className='h-max w-full pb-16 sm:pb-0 sm:h-full bg-destination-mobile sm:bg-destination-tablet xl:bg-destination-desktop bg-no-repeat 
    bg-cover flex flex-col sm:space-y-10'>
      <NavBar homeActive={false} destActive = {true} crewActive= {false} techActive={false} for={"main"}/>
      <Planet />
    </section>
  )
}
