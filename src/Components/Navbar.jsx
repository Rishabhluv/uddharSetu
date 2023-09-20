import React from 'react'
import { Link, NavLink } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className='relativ'>
   
      <div className='fixed w-full h-10 flex items-center font-sans justify-evenly shadow-md top-0'>
      <span className=" text-2xl font-bold font-['Anek Devanagari'] flex gap-5">
      <img src="https://presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png?x28904" alt="" className='h-10' />
            <span className='mt-1'>  Uddhar Setu</span>
          
          </span>
      <NavLink to="/">  
          Home
      </NavLink>
      <NavLink to="/About">
         About
      </NavLink>
      <NavLink to="/Myagency">
          My Agency
      </NavLink>
      </div>
    </nav>
  )
}
