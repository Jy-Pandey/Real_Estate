import React from "react";
import about from "../assets/images/about.jpg";
import Headings from "./Headings";
import MainBtn from "./MainBtn";

function About() {
  return (
    <div className="container bg-[#F3F3F3] grid lg:grid-cols-2 grid-cols-1 gap-16 ">
      <div
        data-aos="zoom-in"
        className="p-10 w-full lg:h-[700px] h-full flex justify-center items-center"
      >
        <img src={about} alt="" className="h-full  rounded-2xl" />
      </div>

      <div className="flex flex-col justify-center gap-6 lg:p-12 p-7">
        <Headings
          subHeading="WHO WE ARE"
          heading="We help clients buy and sell houses since 1989"
        />

        <h2
          data-aos="zoom-in"
          data-aos-delay="400"
          className="text-gray-600 text-xl"
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quam
          eaque inventore voluptatum rem consectetur quae magni optio quis
          incidunt?
        </h2>
        <div>
          <MainBtn data="View more" />

        </div>
      </div>
    </div>
  );
}

export default About;
