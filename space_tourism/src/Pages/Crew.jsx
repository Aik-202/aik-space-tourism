import React from 'react';
import {NavBar} from '../Components'

export default function Crew() {
  return (
    <section className='home w-full h-full bg-crew-mobile sm:bg-crew-tablet xl:bg-crew-desktop bg-no-repeat bg-cover'>
      <NavBar homeActive={false} destActive = {false} crewActive= {true} techActive={false}/>
      <div>Crew</div>
  </section>
    
  )
}
