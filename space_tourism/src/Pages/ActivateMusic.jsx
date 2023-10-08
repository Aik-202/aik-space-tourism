import React from 'react'
import { Music } from '../Data'

export default function ActivateMusic(){
  return (
    <section className='flex justify-center align-center items-center flex-wrap bg-[#000] bg-opacity-[0.5] h-screen'>
        <div className='flex flex-col justify-center align-center items-center flex-wrap border-2 
        border-solid border-transparent bg-white shadow-lg space-y-5 rounded-md'>
            <div className='flex flex-row space-x-2 pt-5'>
                <figure className='self-center'>
                    <img src={Music} alt="musical-note" />
                </figure>
                <h1 className='text-center font-font-two text-smallest-medium tracking-wider'>Activate Music</h1>
            </div>
            <p className='px-5 font-font-one text-[18px] text-black'>For a feeling of nostalgia, activate music!</p>
            <div className='flex flex-row justify-between space-x-10 font-font-one pb-5'>
                <button className='text-white bg-dark-blue rounded-lg px-5 py-2'>NO</button>
                <button className='text-white bg-dark-blue rounded-lg px-5 py-2'>OK</button>
            </div>
        </div>
    </section>
  )
}
