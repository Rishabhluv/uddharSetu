import React from "react";
import Alert from "./AlertCard";
import AgencyList from "./AgencyList";
import About from "./About";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  let location = useLocation()
  useEffect(() => {
    if (location.hash) {
      let elem = document.getElementById(location.hash.slice(1))
      if (elem) {
        elem.scrollIntoView({ behavior: "smooth" })
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location,])
  return (
    <div>
      <div className="bg-[url('/back3.png')] bg-cover w-8/10 m-8 mt-0 p-2 rounded-3xl">
        <div className="flex justify-between items-center w-full rounded-md">
          <div className="p-20">
            <div className="text-left text-4xl font-bold">
              What is Uddhar Setu ?
            </div>
            <div className=" text-left text-black text-md font-normal font-['Abyssinica SIL'] mt-5 pr-20">
              In the face of natural and man-made calamities, the need for a centralized application that facilitates the registration and coordination of rescue agencies is paramount. This application aims to streamline disaster response efforts by providing a comprehensive platform for rescue agencies to register their information, display their locations, and collaborate efficiently during emergencies.
            </div>
          </div>
          <img className="w-1/3 mr-10" src="/herooo.png" />
        </div>

      </div>
      <div className="flex justify-evenly text-center">
        <div className="w-1/4 h-full m-10">
          <Alert />
        </div>
        <div className="w-3/4">
          <AgencyList />
        </div>
      </div>
      <div className="flex items-start" id="about">
        <About />
      </div>
    </div>
  );
}
