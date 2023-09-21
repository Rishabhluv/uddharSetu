import React from "react";
import { Link, NavLink } from "react-router-dom";
export default function Navbar({ children }) {
  return (
    <nav className="relative">
      <div className="fixed w-full h-14 flex items-center font-sans justify-between top-0 bg-white">
        <div className=" text-2xl font-bold font-['Anek Devanagari'] flex gap-5 ml-8">
          <img
            src="https://presentations.gov.in/wp-content/uploads/2020/01/NE_Preview1.png?x28904"
            alt=""
            className="h-10"
          />
          <span className="mt-1"> Uddhar Setu</span>
        </div>
        <div className="flex justify-evenly grow">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Myagency">My Agency</NavLink>
        </div>
      </div>
      <div className="mt-16">{children}</div>
    </nav>
  );
}
