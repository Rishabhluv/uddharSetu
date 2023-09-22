import React from 'react'
import AgencyCard from './AgencyCard'
import { LuSettings2 } from 'react-icons/lu'
import { FaMapLocationDot } from 'react-icons/fa6'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { GrResources } from 'react-icons/gr'
import { useState } from 'react'
export default function AgencyList() {
  const [filterOpen, setFilterOpen] = useState(false);
  function handleClick(e)
  {
    e.preventDefault();
    setFilterOpen(!filterOpen)
  }
  return (
    <div className="p-4 rounded-lg">
      <h1 className='text-xl font-bold mb-5 space-y-5 px-16'>
        <span>Agencies</span>
        <form>
          <div className='flex items-center justify-between'>
            <div class="relative grow">
              <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              </div>
              <input type="search" id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 " placeholder="Search Agencies...." required />
              <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </button>
            </div>
            <button className='m-5' onClick={handleClick}><LuSettings2 size={20} /></button>
          </div>
          {filterOpen && <div className='flex m-3 justify-evenly'>
            <span className='flex items-center gap-2'> <FaMapLocationDot size={25}></FaMapLocationDot> <input className='p-2 text-sm font-normal border rounded-md' type="text" placeholder='location' /></span>
            <span className='flex items-center gap-2'> <AiOutlineQuestionCircle size={25}></AiOutlineQuestionCircle> <input className='p-2 text-sm font-normal border rounded-md' type="text" placeholder='Type' /></span>
            <span className='flex items-center gap-2'> <GrResources size={25}></GrResources> <input className='p-2 text-sm font-normal border rounded-md' type="text" placeholder='Resources' /></span>
          </div>}
        </form>
      </h1>
      <div className="flex flex-wrap justify-evenly items-center gap-16">
        <AgencyCard
          imageUrl="https://upload.wikimedia.org/wikipedia/hi/9/9f/%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF_%E0%A4%86%E0%A4%AA%E0%A4%A6%E0%A4%BE_%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE_%E0%A4%AC%E0%A4%B2_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.png"
          title="National Disaster Response Force"
          description="Special response to a threatening disaster situation or disaster"
        />
        <AgencyCard
          imageUrl="https://media.istockphoto.com/id/1370231537/vector/medical-concept-with-hospital-building-in-flat-style.jpg?s=2048x2048&w=is&k=20&c=VZZl7KDdGP9lCb2qZK4pS7POZbSJ1LJrqR6xGmpLA5g="
          title="Accident Care and Transport Service"
          description="A voluntary organisation providing free emergency assistance to accident victims"
        />
        <AgencyCard
          imageUrl="https://media.istockphoto.com/id/1370231537/vector/medical-concept-with-hospital-building-in-flat-style.jpg?s=2048x2048&w=is&k=20&c=VZZl7KDdGP9lCb2qZK4pS7POZbSJ1LJrqR6xGmpLA5g="
          title="Accident Care and Transport Service"
          description="A voluntary organisation providing free emergency assistance to accident victims"
        />
        <AgencyCard
          imageUrl="https://upload.wikimedia.org/wikipedia/hi/9/9f/%E0%A4%B0%E0%A4%BE%E0%A4%B7%E0%A5%8D%E0%A4%9F%E0%A5%8D%E0%A4%B0%E0%A5%80%E0%A4%AF_%E0%A4%86%E0%A4%AA%E0%A4%A6%E0%A4%BE_%E0%A4%85%E0%A4%A8%E0%A5%81%E0%A4%95%E0%A5%8D%E0%A4%B0%E0%A4%BF%E0%A4%AF%E0%A4%BE_%E0%A4%AC%E0%A4%B2_%E0%A4%B2%E0%A5%8B%E0%A4%97%E0%A5%8B.png"
          title="National Disaster Response Force"
          description="Special response to a threatening disaster situation or disaster"
        />
      </div>
    </div>

  )
}
