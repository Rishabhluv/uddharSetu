import React from "react";
import { NavLink } from "react-router-dom";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('/back3.png')] bg-cover w-8/10 m-8 mt-16 p-2 rounded-3xl">
        <div className="flex justify-between w-full rounded-md">
          <div className="p-20">
            <div className="text-left text-4xl font-bold">
              What is Uddhar Setu ?
            </div>
            <div className=" text-left text-black text-md font-normal font-['Abyssinica SIL'] mt-5 pr-20">
              The National Disaster Response Force (NDRF) is a specialized force
              in India responsible for disaster response and rescue operations.
              It was established in 2006 to handle a wide range of natural and
              man-made disasters, including earthquakes, floods, cyclones,
              landslides, and industrial accidents.
            </div>
          </div>
          <img className="w-1/3 mr-10" src="/herooo.png" />
        </div>
       
      </div>
      <div className="flex justify-evenly mt-10 text-center">
          <div className="w-1/4">ALERT</div>
          <div className="w-3/4">AGENCIES</div>
        </div>
    </div>
  );
}
