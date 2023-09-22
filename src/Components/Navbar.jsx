import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar({ children }) {
  return (
    <nav className="relative">
      <div className="fixed w-full h-14 flex items-center font-sans justify-between top-0 bg-white z-10">
        <div className=" text-2xl font-bold font-['Anek Devanagari'] flex gap-5 ml-8">
          <img
            src="https://presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png?x28904"
            alt=""
            className="h-10"
          />
          <span className="mt-1"> Uddhar Setu</span>
        </div>
        <div className="flex justify-evenly grow items-center">
          <NavLink to="/" className="transform hover:scale-105 ease-in-out duration-50 p-2">Home</NavLink>
          <NavLink to="/#about" className="transform hover:scale-105 ease-in-out duration-50 p-2">About</NavLink>
          <NavLink to="/Myagency" className="transform hover:scale-105 ease-in-out duration-50 p-2">My Agency</NavLink>
          <NavLink className="bg-[#d5d9ff] rounded-lg px-3 py-2 mt-1 transform hover:scale-105 ease-in-out duration-50"
          >
            Register
          </NavLink>
        </div>
      </div>
      <div className="mt-16">{children}</div>
    </nav>
  );
}
