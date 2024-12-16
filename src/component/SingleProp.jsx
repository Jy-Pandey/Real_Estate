import React from 'react'
import Button from './Button';
import { FaBath } from "react-icons/fa";
import { FaBed } from "react-icons/fa";
import { IoTabletLandscape } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaCamera } from "react-icons/fa";
import { FaVideo } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";

function SingleProp({props}) {

    const {images, address, name, price, about, bed, bath, area, owner} = props;
  return (
    <>
      <div className="w-[90%] bg-white rounded-xl flex flex-col items-center  border border-red-700">
        <div
          className="w-full h-[250px] bg-cover bg-center rounded-xl"
          style={{ backgroundImage: `url(${images})` }}
        >
          <div className="h-full flex flex-col justify-between">
            {/* header */}
            <div className="flex justify-between mx-4 my-2">
              <Button data="featured" />
              <div className="flex justify-between gap-3">
                <Button data="sales" />
                <Button data="active" />
              </div>
            </div>

            {/* footer */}
            <div className="flex justify-between text-white text-sm mx-3 my-2">
              <div>
                <CiLocationOn className="inline text-xl font-semibold mr-1" />
                {address}
              </div>
              <div className="flex justify-between gap-3">
                <div>
                  <FaCamera className="text-lg text-gray-300" />
                </div>
                <div>
                  <FaVideo className="text-lg text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* mid */}
        <div className=" px-4 py-2 flex flex-col gap-2">
          <h1 className="font-bold text-lg">{name}</h1>
          <p className="font-bold text-xl text-red-600">{price}</p>
          <p className="text-md text-gray-700 leading-6">{about}</p>
          <div className="flex gap-4">
            <div>
              <FaBath className="inline mr-1 text-lg text-red-400" />
              {bath}
            </div>
            <div>
              <FaBed className="inline mr-1 text-lg text-red-400" />
              {bed}
            </div>
            <div>
              <IoTabletLandscape className="inline mr-1 text-lg text-red-400" />
              {area}
            </div>
          </div>
        </div>

        {/* footer */}
        <h1 className="w-[90%] border-b-[1px] border-gray-300 mt-3"></h1>
        <div className="w-full px-4 py-2 flex justify-between">
          <div>
            <FaUserCircle className="inline text-red-500 text-xl mr-2" />
            {owner}
          </div>
          <div className="flex gap-2">
            <div>
              <FaShareAlt
                className="border-2 border-gray-200 p-[6px] h-8 w-8 text-xl  text-red-400
                hover:bg-black hover:text-white cursor-pointer"
              />
            </div>
            <div>
              <FaHeart className="border-2 border-gray-200 p-[6px] h-8 w-8 text-xl  text-red-400 hover:bg-black hover:text-white cursor-pointer" />
            </div>
            <div>
              <FaPlus className="border-2 border-gray-200 p-[6px] h-8 w-8 text-xl  text-red-400 hover:bg-black hover:text-white cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SingleProp
