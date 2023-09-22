import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
const Alert = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className='h-screen'>
      <main className="max-h-screen max-w-screen">
        <div className="px-6 py-8">
          <div className=" mx-auto">
            <div className="bg-white rounded-3xl p-8 mb-5">
              <h1 className="text-3xl font-bold mb-10 bg-orange-100 border-l-4 border-orange-300 text-orange-500 p-4 rounded-md">Urgent Evacuation Notice</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-stretch">
                  <div className="text-gray-400 text-xs mt-2">Created By</div>
                  <div className="h-100 border-l mx-4"></div>
                  <div className="flex flex-nowrap -space-x-3">
                    <div className="h-9 w-9">
                      Fire Department
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-x-2">
                  September 15, 2023, 6:00 PM
                </div>
              </div>

              <hr className="my-10" />

              <div className="grid grid-cols-2 gap-x-20">
                <div>
                  <h2 className="text-2xl font-bold mb-2">Description</h2>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <div className="p-1 shadowrounded-xl">
                        <div className="font-semibold text-gray-700">A powerful hurricane, named Hurricane Maria, is rapidly approaching the coastal areas of XYZ County. Your safety is our top priority. Please take immediate action to protect yourself and your family.</div>
                      </div>
                    </div>
                  </div>
                  <img className='mt-2 rounded-md' src="/map.jpeg" alt="" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4">Updates</h2>

                  <div className="space-y-4">
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-400 text-xs">IMD</div>
                        <div className="text-gray-400 text-xs">09:00 AM</div>
                      </div>
                      <div className="font-semibold leading-none">Good morning, everyone. Cyclone Delta has intensified. It's currently a Category 3 cyclone and is expected to make landfall in our coastal region within 48 hours. Please be prepared for rapid response.
                      </div>
                    </div>
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-400 text-xs">Red Cross volunteers</div>
                        <div className="text-gray-400 text-xs">9:00 AM</div>
                      </div>
                      <div className="font-semibold leading-none">Red Cross volunteers are on standby. We'll assist with medical support, shelter, and relief distribution as needed.
                      </div>
                    </div>
                    <div className="p-4 bg-white border rounded-xl text-gray-800 space-y-2">
                      <div className="flex justify-between">
                        <div className="text-gray-400 text-xs">NDRF</div>
                        <div className="text-gray-400 text-xs">02:00 AM</div>
                      </div>
                      <div className="font-semibold leading-none">Shelter locations are updated on our website and shared through local media. Please encourage residents to follow official channels for information.
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-10" />


          <div className='flex gap-10'>
            {/* chatbox */}
            {/* heading */}
            <div class="w-2/6 flex flex-col border shadow-md bg-white h-full">
              <div class="flex items-center justify-between border-b p-2">
                <div class="flex items-center">
                  <div class="pl-2">
                    <div class="font-semibold">
                      <div>Actions</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* actuals chats */}
              <div class="flex-1 p-4 overflow-y-auto">
                <div class="flex items-center mb-4">
                  <div class="flex-1 p-4 bg-indigo-100 text-gray-800 rounded-lg mb-2 relative">
                    <div className='font-semibold'>NDRF</div>
                    <ul className='list-disc ml-5'>
                      <li>Tents and clothing</li>
                      <li>Rescue teams</li>
                    </ul>
                    <div className='flex justify-between m-2'>
                      <div class="text-green-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1">Status: Fulfilled</div>
                      <button disabled={true} class=" text-white bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1">
                        Respond
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex items-center mb-4">
                  <div class=" p-4 flex-1 bg-indigo-100 text-gray-800 rounded-lg mb-2 relative">
                    <div className='font-semibold'>Red Cross</div>
                    <ul className='list-disc ml-5'>
                      <li> Clothing, blankets, hygiene items</li>
                      <li>Non-perishable food and water for 3 days</li>
                      <li>Medications and medical supplies
                      </li>
                    </ul>
                    <div className='flex justify-between m-2'>
                      <div class="text-red-500 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1">Status: Pending</div>
                      <button class=" text-white bg-blue-600 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-2 py-1">
                        Respond
                      </button>
                    </div>
                  </div>
                </div>

              </div>


              {/* bottom */}
              <div class="flex items-center border-t p-2">
                <div class="w-full mx-2">
                  <input class="w-full rounded-full border border-gray-200" type="text" value="" placeholder="" autofocus />
                </div>
                <div>
                  <button class="inline-flex hover:bg-indigo-50 rounded-full p-2" type="button">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </button>
                </div>


              </div>
            </div>


            {/* agencylist */}
            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
              <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 ">Collaborating Agencies</h5>
                {/* <a href="#" class="text-sm font-medium text-blue-600 hover:underline ">
                View all
              </a> */}
              </div>
              <div class="flow-root">
                <ul role="list" class="divide-y divide-gray-200">
                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">
                          IMD (India Meteorological Department)
                        </p>

                      </div>
                    </div>
                  </li>

                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">
                          NDRF (National Disaster Response Force)
                        </p>

                      </div>
                    </div>
                  </li>


                  <li class="py-3 sm:py-4">
                    <div class="flex items-center space-x-4">
                      <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 truncate">
                          SDMA (State Disaster Management Authority)
                        </p>

                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>


            {/* status */}


            <div class="w-full max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 ">
              <div class="flex items-center justify-between mb-4">
                <h5 class="text-xl font-bold leading-none text-gray-900 ">Status</h5>
              </div>
              <ul
                class="relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out"
                data-te-stepper-init
                data-te-stepper-type="vertical">

                <li
                  data-te-stepper-step-ref
                  class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] ">
                  <div
                    data-te-stepper-head-ref
                    class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none ">
                    <span
                      data-te-stepper-head-icon-ref
                      class="bg-green-500 mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full text-sm font-medium text-[#40464f]">
                      1
                    </span>
                    <span
                      data-te-stepper-head-text-ref
                      class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content]">
                      Preparedness
                    </span>
                  </div>
                  <div
                    data-te-stepper-content-ref
                    class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                    Making arrangements, sharing information to prepare communities should an emergency eventuate. 
                  </div>
                </li>


                <li
                  data-te-stepper-step-ref
                  class="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] ">
                  <div
                    data-te-stepper-head-ref
                    class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none ">
                    <span
                      data-te-stepper-head-icon-ref
                      class="bg-green-500 mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full text-sm font-medium text-[#40464f]">
                      2
                    </span>
                    <span
                      data-te-stepper-head-text-ref
                      class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
                      Response
                    </span>
                  </div>
                  <div
                    data-te-stepper-content-ref
                    class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                    The assistance and intervention during or immediately after an emergency. 
                  </div>
                </li>

                <li data-te-stepper-step-ref class="relative h-fit">
                  <div
                    data-te-stepper-head-ref
                    class="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none ">
                    <span
                      data-te-stepper-head-icon-ref
                      class="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                      3
                    </span>
                    <span
                      data-te-stepper-head-text-ref
                      class="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] ">
                      Recovery
                    </span>
                  </div>
                  <div
                    data-te-stepper-content-ref
                    class="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 duration-300 ease-in-out">
                    The coordinated process of supporting emergency-affected communities in reconstruction .
                  </div>
                </li>
              </ul>


            </div>










          </div>









        </div>

      </main>

    </div>
  )
}

export default Alert
