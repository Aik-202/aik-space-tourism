import React from 'react';
import {NavBar} from '../Components'

export default function Technology() {
  return (
    <section className='home w-full h-full bg-technology-mobile sm:bg-technology-tablet xl:bg-technology-desktop bg-no-repeat 
    bg-cover'>
      <NavBar homeActive={false} destActive = {false} crewActive= {false} techActive={true} for={"main"}/>
      <div>Technology</div>
    </section>
  )
}
