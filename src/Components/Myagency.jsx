import React from "react";
import AgencyDetailsCard from "./AgencyDetailsCard"
export default function Myagency() {
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="mt-[2rem]">
          <img
            className=" rounded-2xl w-[70rem] h-[25rem]"
            src="./ndrf_location.jpeg"
          ></img>
        </div>
        <div className="">
          <img
            className=" mt-[-8rem] mr-[45rem] w-[15rem] h-[15rem] rounded-full border-4 border-white bg-white"
            src="https://upload.wikimedia.org/wikipedia/hi/9/9f/%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF_%E0%A4%86%E0%A4%AA%E0%A4%A6%E0%A4%BE_%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE_%E0%A4%AC%E0%A4%B2_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.png"
          ></img>
        </div>
        <AgencyDetailsCard></AgencyDetailsCard>
        <div className="w-[70rem] flex flex-col gap-1">
          <div className="flex justify-evenly m-10">
            <a
              href="#_"
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Create Alert
              </span>
            </a>
            <a
              href="#_"
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Send requests
              </span>
            </a>
            <a
              href="#_"
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                View Responses
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
