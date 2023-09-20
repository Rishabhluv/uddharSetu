import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
    <NavLink to='\Home'>
      <div>home</div>
    </NavLink>
    <NavLink to='\About'>
       <div>About</div>
    </NavLink>
    <NavLink to='\Myagency'>
       <div>Contact</div>
    </NavLink>
    </>
  )
}
