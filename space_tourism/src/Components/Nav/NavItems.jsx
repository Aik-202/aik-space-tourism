import React from 'react'
import { Close } from '../../Data'
import { nav, destinations } from '../../Data/demo'
import { useNavigate } from 'react-router-dom'

export default function NavItems(props) {
  const navigate = useNavigate();
  const newPage = (e) => {
    if(e.target.innerHTML == "Home") {
      navigate('/home');
    } 
    if(e.target.innerHTML == "Destination") {
      navigate('/destination');
    } 
    if(e.target.innerHTML == "Crew") {
      navigate('/crew');
    } 
    if(e.target.innerHTML == "Technology") {
      navigate('/technology');
    } 
  }
  return (
    <section className='nav flex'>
      {props.use == "main" && <div className=
      {`
      ${props.menuStatus ? 'flex' : 'hidden sm:flex'}
      flex-col absolute top-0 bottom-0 right-0 bg-light-blue bg-opacity-10 sm:static sm:content-end sm:items-end 
      sm:flex-wrap sm:justify-center sm:px-8 lg:pr-52 lg:pl-20 cursor-pointer w-[68%] overflow-x-hidden
      `}>
        {props.menuStatus && 
          <figure className='flex items-end justify-center content-end flex-wrap mt-8 -mr-48 sm:hidden cursor-pointer'>
            <img src={Close} alt="menu-bar" className="self-end" onClick={props.close}/>
          </figure>
        }
        <ul className='flex flex-col content-start space-y-10 flex-wrap text-white pl-10 pt-32 sm:flex-row sm:space-y-0 
        sm:p-0 sm:space-x-8 xl:space-x-10 sm:m-0 sm:h-full font-font-two' onClick={newPage}>     
        {nav.map(item => (
          <li key={item.id} className=
          {`
          ${
            item.id =="00" && props.homeActive ? 'border-b-white border-b-2 border-solid':
            item.id =="01" && props.destActive ? 'border-b-white border-b-2 border-solid':
            item.id =="02" && props.crewActive ? 'border-b-white border-b-2 border-solid':
            item.id =="03" && props.techActive ? 'border-b-white border-b-2 border-solid':
            'border-b-transparent'
          }
          hover:border-b-2 hover:border-light-blue hover:border-solid sm:h-full sm:flex sm:flex-row sm:justify-center 
          sm:content-center sm:flex-wrap
          `}>
          <span className='tracking-widest mr-3 font-extrabold sm:hidden lg:block'>{item.id}</span>
          <span className='text-white font-thin opacity-[90%] tracking-widest uppercase text-smallest self-center'>{item.name}</span>
          </li>
        ))}
      </ul>
      </div>
      }
      {props.use == "dest" &&
        <ul className='self-center flex flex-row flex-wrap content-center justify-center space-x-10 items-center 
        text-light-blue w-screen cursor-pointer font-font-two uppercase tracking-wider sm:text-[20px] lg:w-max lg:text-small'>
          {destinations.map(items => (
            <li key={items.name} className=
            {`
              ${items.name =="Moon" && props.active == "moon" ? 'border-b-white border-b-2 border-solid text-white':
              items.name =="Mars" && props.active == "mars" ? 'border-b-white border-b-2 border-solid text-white':
              items.name =="Europa" && props.active == "europa" ? 'border-b-white border-b-2 border-solid text-white':
              items.name =="Titan" && props.active == "titan" ? 'border-b-white border-b-2 border-solid text-white':
              'border-b-transparent'
              }
              hover:border-solid hover:border-b-2 hover:border-white
            `} onClick={props.navClick}>
              {items.name}
            </li>
          ))}
        </ul>
      }
    </section>
  )
}
