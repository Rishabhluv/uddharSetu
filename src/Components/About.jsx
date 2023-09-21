import React from 'react'

export default function About() {
  return (
    <div className='flex items-start mt-10'>
      <div className="flex flex-col space-y-8 md:w-1/2 p-10 h-[80vh]">

        <div
          className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >

          <div className="rounded-l-full md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div
                className="px-4 py-2 text-white rounded-full md:py-1 bg-red-600"
              >
                01
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Register your Agency
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Register your Agency
            </h3>
            <p className="text-gray-400">
              Users representing rescue agencies register within the application
              by providing detailed agency information, including name, type, contact
              details, location, available resources, areas of expertise, and their role within the agency.
            </p>
          </div>
        </div>


        <div
          className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >

          <div className="rounded-l-full md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div
                className="px-4 py-2 text-white rounded-full md:py-1 bg-red-600"
              >
                02
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Create Alerts or Request Resources
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Create Alerts or Request Resources
            </h3>
            <p className="text-gray-400">
              Registered agencies can create alerts to signal their need
              for assistance or resource requests specifying required resources,
              quantities, and special instructions.
              These alerts/requests are submitted and made available to other agencies.
            </p>
          </div>
        </div>


        <div
          className="flex flex-col space-y-3 md:space-y-0 md:space-x-6 md:flex-row"
        >

          <div className="rounded-l-full md:bg-transparent">
            <div className="flex items-center space-x-2">
              <div
                className="px-4 py-2 text-white rounded-full md:py-1 bg-red-600"
              >
                03
              </div>
              <h3 className="text-base font-bold md:mb-4 md:hidden">
                Respond to Requests
              </h3>
            </div>
          </div>

          <div>
            <h3 className="hidden mb-4 text-lg font-bold md:block">
              Respond to Requests
            </h3>
            <p className="text-gray-400">
              Agencies willing and able to provide assistance can browse and respond to alerts or resource requests.

            </p>
          </div>
        </div>
      </div>
      <img src="https://cdn.narendramodi.in/cmsuploads/0.52965600_1642441185_636x400-text-of-prime-minister-narendra-modi-s-state-of-the-world-address-at-world-economic-forum-s-davos-summit.jpg"
        className="rounded-xl object-contain mt-5" alt="" />
    </div>


  )
}
