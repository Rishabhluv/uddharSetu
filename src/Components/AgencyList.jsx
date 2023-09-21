import React from 'react'
import AgencyCard from './AgencyCard'
export default function AgencyList() {
  return (
    <div className="p-4 rounded-lg">
      <h1 className='text-xl font-bold mb-5'>Agencies</h1>
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
