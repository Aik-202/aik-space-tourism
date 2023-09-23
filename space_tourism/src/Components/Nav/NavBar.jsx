import React from 'react'
import NavItems from './NavItems'
import { Logo } from '../../Data'

export default function NavBar() {
  return (
    <nav>
      <figure>
        <img src={Logo} alt="logo" />
      </figure>
      <NavItems />
    </nav>
  )
}
