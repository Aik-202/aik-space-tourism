import React from 'react'
import NavItems from './NavItems'
import { Logo, Hamburger } from '../../Data'

export default function NavBar(props) {
  const [menuActive, setMenuActive] = React.useState(false);

  const menuOpen = () => {
    setMenuActive(true)
  }

  const menuClose = () => {
    setMenuActive(false)
  }

  return (
    <nav className='sm:flex sm:flex-row sm:justify-between'>
      {props.for == "main" && 
        <figure className="flex flex-row justify-between p-5 cursor-pointer">
          <img src={Logo} alt="logo" className='self-center'/>
          {!menuActive && <img src={Hamburger} alt="menu-bar" className="self-center sm:hidden" onClick={menuOpen}/>}
        </figure>
      }
      {props.for == "main" && 
        <hr className='hidden lg:block bg-white self-center h-[0.188rem] opacity-10 border-t-[1px] w-[10rem] 
        -mr-20 xl:w-[32rem] xl:-mr-24' />
      }
      <NavItems menuStatus={menuActive} close={menuClose} homeActive={props.homeActive} destActive = {props.destActive} 
      crewActive= {props.crewActive} techActive={props.techActive} use={props.for} active={props.active} navClick={props.navClick}/>
    </nav>
  )
}
