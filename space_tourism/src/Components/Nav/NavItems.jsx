import React from 'react'
import { Close } from '../../Data'
import { nav } from '../../Data/demo'

export default function NavItems(props) {
  return (
    <div className={`${props.menuStatus ? 'flex' : 'hidden sm:flex'} flex-col absolute top-0 bottom-0 right-0 left-32 bg-white 
    bg-opacity-10 sm:static sm:content-end sm:items-end sm:flex-wrap sm:justify-center sm:px-8 lg:pr-52 lg:pl-20 cursor-pointer`}>
      {props.menuStatus &&<figure className='self-end mt-8 mr-8'>
        <img src={Close} alt="menu-bar" className="self-center" onClick={props.close}/>
      </figure>}
      <ul className='flex flex-col content-start space-y-10 flex-wrap text-white pl-10 pt-32 sm:flex-row sm:space-y-0 sm:p-0 sm:space-x-8 sm:m-0 sm:h-full font-font-two'>   
        {nav.map(item => (<li key={item.id} className='hover:border-b-2 hover:border-light-blue hover:border-solid sm:h-full sm:flex sm:flex-row sm:justify-center sm:content-center sm:flex-wrap'>
        <span className='tracking-widest mr-4 font-extrabold sm:hidden lg:block'>{item.id}</span>
        <span className='text-light-blue tracking-widest uppercase text-smallest self-center'>{item.name}</span>
      </li>))}
    </ul>
    </div>
  )
}
