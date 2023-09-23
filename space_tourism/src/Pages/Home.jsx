import React from 'react'
import {HomeButton, HomeText, NavBar} from '../Components'

export default function Home() {
  return (
    <section className='home w-full h-full bg-home-mobile lg:bg-home-tablet xl:bg-home-desktop'>
      <NavBar />
      <HomeText />
      <HomeButton />
    </section>
  )
}