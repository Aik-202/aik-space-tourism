import React from 'react'
import {HomeButton, HomeText, NavBar} from '../Components'

export default function Home() {
  return (
    <section className='home w-full h-full bg-home-mobile sm:bg-home-tablet xl:bg-home-desktop bg-no-repeat bg-cover space-y-5'>
      <NavBar />
      <HomeText />
      <HomeButton />
    </section>
  )
}