import React from 'react'
import { Close } from '../../Data'

export default function NavItems(props) {
  return (
    <div className={`${props.menuStatus ? 'flex' : 'hidden'} flex-col absolute top-0 bottom-0 right-0 left-32 bg-white bg-opacity-5`}>
      {props.menuStatus &&<figure className='self-end mt-8 mr-8'>
        <img src={Close} alt="menu-bar" className="self-center" onClick={props.close}/>
      </figure>}
      <ul className='flex flex-col content-start space-y-10 flex-wrap text-white pl-10 pt-32'>
      
      <li>
        <span className='mr-4 font-extrabold'>00</span>
        Home
      </li>
      <li>
        <span className='mr-4 font-extrabold'>01</span>
        Destination
      </li>
      <li>
        <span className='mr-4 font-extrabold'>02</span>
        Crew
      </li>
      <li>
        <span className='mr-4 font-extrabold'>03</span>
        Technology
      </li>
    </ul>
    </div>
  )
}