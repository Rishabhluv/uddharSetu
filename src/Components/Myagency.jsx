import React from "react";

export default function Myagency() {
  return (
    <div>
      <div className="w-full h-full bg-green-100 flex flex-col items-center justify-center">
        <div className="mt-[2rem]">
          <img
            className=" rounded-2xl w-[70rem] h-[25rem]"
            src="./back3.png"
          ></img>
        </div>
        <div className="">
          <img
            className=" mt-[-8rem] mr-[45rem] w-[15rem] h-[15rem] rounded-full border border-4 border-white"
            src="./herooo.png"
          ></img>
        </div>
        <div className=" text-[1.1rem] w-[25rem] mt-[-5rem] flex flex-col gap-1">
          <div>Name :- Rescue Team A</div>
          <div>Type :- Emergency Response Team</div>
          <div>Location :- 456 First Avenue, Cityville, State</div>
          <div>Number of Workers :- 400 </div>
          <div>Email :- alice@example.com</div>
          <div>Phone No :- +1 (555) 789-1234</div>
          <div>Co-ordinate :- -73.989 , 40.742</div>
          <div>Resources :- Medical equip</div>
        </div>
        <div className="w-[70rem] flex flex-col gap-1 mt-[2rem]">
          <div className="text-center  text-xl">About Us</div>
          <div>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos aperiam doloribus culpa cumque minus ducimus obcaecati
            in vitae. Quaerat nemo iusto sint obcaecati voluptatem provident
            aliquid dolor molestiae adipisci alias voluptas quam ducimus
            voluptate beatae earum, ipsum, deleniti nesciunt. Doloremque sequi
            id nihil nam et quibusdam aliquid accusamus ipsa corporis.
          </div>
          <div className="flex justify-evenly">
            <a
              href="#_"
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Alert
              </span>
            </a>
            <a
              href="#_"
              class="relative inline-block px-4 py-2 font-medium group"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Responses
              </span>
            </a>
            <button
              type="button"
              class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Purple
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
