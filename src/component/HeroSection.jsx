import React from 'react'
import hero from "../assets/images/hero.jpg";
import MainBtn from "./MainBtn";

function HeroSection() {
  return (
    <div>
      <div className="container">
        <div
          className="bg-cover h-[700px] flex items-center justify-center rounded-xl"
          style={{ backgroundImage: `url(${hero})` }}
        >
          <div className="flex flex-col justify-start gap-6 lg:pl-[25px] pl-[5%]">
            <p
              data-aos="zoom-in-left"
              className="text-white lg:text-6xl lg:leading-[70px] leading-[40px] text-4xl  font-semibold w-[60%] "
            >
              Find your next Home in Las Vegas
            </p>
            <p
              data-aos="zoom-in-left"
              className="text-white lg:text-xl text-md w-[60%]"
            >
              Through our proprietary platform, WpResidence is changing how
              agents and clients navigate the process of finding or selling a
              home.
            </p>
          </div>
        </div>

        {/* forms */}
        <div
          data-aos="zoom-in"
          className=" bg-white  rounded-xl text-black lg:w-[70%] w-full m-auto shadow-xl 
        -mt-14 p-8 grid lg:grid-cols-4 grid-cols-1 gap-8"
        >
          <div className="w-full">
            <h1 className=" uppercase font-semibold mb-3">Location</h1>
            <input
              type="text"
              placeholder="Enter an address or state or city"
              className="w-full border-b-[1px] border-[#c9c7c1] pt-2 pl-1"
            />
          </div>
          <div>
            <h1 className=" uppercase font-semibold mb-3">Type</h1>
            <select
              name="type"
              id="type"
              className="w-full border-b-[1px] border-[#c9c7c1] pt-2 pl-1 text-gray-500 text-md"
            >
              <option value="selectProperty" disabled selected>
                Select property
              </option>
              <option value="rentals">Rentals</option>
              <option value="sales">Sales</option>
              <option value="commercial">Commercial</option>
            </select>
          </div>

          <div>
            <h1 className=" uppercase font-semibold mb-3">Category</h1>
            <select
              name="type"
              id="type"
              className="w-full border-b-[1px] border-[#c9c7c1] pt-2 pl-1 text-gray-500 text-md"
            >
              <option value="selectProperty" disabled selected>
                Select category
              </option>
              <option value="appartments">Appartments</option>
              <option value="rentals">Rentals</option>
              <option value="duplex">Duplex</option>
              <option value="condos">Condos</option>
              <option value="villas">Villas</option>
            </select>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="w-full bg-[#f53838ce]  py-4 px-6 rounded-xl font-semibold text-lg
            hover:bg-black hover:text-white text-white"
            >
              Sumbit
            </button>
            {/* <MainBtn data = "Submit" className = "w-full"/> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection
