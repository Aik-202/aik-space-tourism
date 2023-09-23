import React from 'react'
import { Close } from '../../Data'

export default function NavItems(props) {
  return (
    <div className={`${props.menuStatus ? 'flex' : 'hidden sm:flex'} flex-col absolute top-0 bottom-0 right-0 left-32 bg-white 
    bg-opacity-5 sm:static sm:content-end sm:items-end sm:flex-wrap sm:justify-center sm:px-8`}>
      {props.menuStatus &&<figure className='self-end mt-8 mr-8'>
        <img src={Close} alt="menu-bar" className="self-center" onClick={props.close}/>
      </figure>}
      <ul className='flex flex-col content-start space-y-10 flex-wrap text-white pl-10 pt-32 sm:flex-row sm:space-y-0 sm:p-0 sm:space-x-8 sm:m-0 sm:h-full'>   
      <li className='hover:border-b-2 hover:border-white hover:border-solid sm:h-full sm:flex sm:flex-row sm:justify-center sm:content-center sm:flex-wrap'>
        <span className='mr-4 font-extrabold sm:hidden'>00</span>
        <span className='self-center'>Home</span>
      </li>
      <li className='hover:border-b-2 hover:border-white hover:border-solid sm:h-full sm:flex sm:flex-row sm:justify-center sm:content-center sm:flex-wrap'>
        <span className='mr-4 font-extrabold sm:hidden'>01</span>
        <span className='self-center'>Destination</span>
      </li>
      <li className='hover:border-b-2 hover:border-white hover:border-solid sm:h-full sm:flex sm:flex-row sm:justify-center sm:content-center sm:flex-wrap'>
        <span className='mr-4 font-extrabold sm:hidden'>02</span>
        <span className='self-center'>Crew</span>
      </li>
      <li className='hover:border-b-2 hover:border-white hover:border-solid sm:h-full sm:flex sm:flex-row sm:justify-center sm:content-center sm:flex-wrap'>
        <span className='mr-4 font-extrabold sm:hidden'>03</span>
        <span className='self-center'>Technology</span>
      </li>
    </ul>
    </div>
  )
}