import React from 'react'
import {HomeButton, HomeText, NavBar} from '../Components'

export default function Home() {
  return (
    <section className='home w-full h-full bg-home-mobile sm:bg-home-tablet xl:bg-home-desktop bg-no-repeat bg-cover flex flex-col space-y-5 sm:space-y-8 md:space-y-10'>
      <NavBar />
      <div className='flex flex-col lg:flex lg:flex-row'>
        <HomeText />
        <HomeButton />
      </div>
    </section>
  )
}