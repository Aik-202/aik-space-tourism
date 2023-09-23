import React from 'react'
import NavItems from './NavItems'
import { Logo, Hamburger } from '../../Data'

export default function NavBar() {
  const [menuActive, setMenuActive] = React.useState(false);

  const menuOpen = () => {
    setMenuActive(true)
  }

  const menuClose = () => {
    setMenuActive(false)
  }

  return (
    <nav>
      <figure className="flex flex-row justify-between p-5 cursor-pointer">
        <img src={Logo} alt="logo" className='self-center'/>
        {!menuActive && <img src={Hamburger} alt="menu-bar" className="self-center" onClick={menuOpen}/>}
      </figure>
      <NavItems menuStatus={menuActive} close={menuClose}/>
    </nav>
  )
}
