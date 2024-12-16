import React from "react";
import prop1 from "../assets/images/prop1.jpg";
import prop2 from "../assets/images/prop2.jpg";
import prop3 from "../assets/images/prop3.jpg";
import Views from "./Views";
import Headings from "./Headings";

const data = [
  {
    like: "6k",
    text: "Active listings",
  },
  {
    like: "7k",
    text: "Solids listings",
  },
  {
    like: "9k",
    text: "Clients served",
  },
];
function PopularAreas() {
  return (
    <div className="container bg-[#fee2e2]  flex flex-col lg:p-20 p-7 gap-20">
      <div className="grid lg:grid-cols-[1fr_2fr] grid-cols-1 ">

        <div className="flex flex-col justify-center gap-6 lg:p-12 p-7">
          <Headings
            subHeading="POPULAR AREAS"
            heading="Explore most popular areas"
          />
        </div>

        <div className="grid lg:grid-cols-3 grid-cols-1 lg:gap-8 gap-6">
          <div className="lg:h-full h-auto">
            <img
              data-aos="zoom-in"
              className="h-[100%] w-full rounded-xl"
              src={prop1}
              alt="prop1"
            />
          </div>
          <div className="lg:h-full h-auto">
            <img
              data-aos="zoom-in"
              className="h-[100%] w-full rounded-xl"
              src={prop2}
              alt="prop2"
            />
          </div>
          <div className="lg:h-full h-auto">
            <img
              data-aos="zoom-in"
              className="h-[100%] w-full rounded-xl"
              src={prop3}
              alt="prop3"
            />
          </div>
        </div>
      </div>

      {/* //Views */}
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-6">
        {data.map((d, idx) => {
          return <Views key={idx} props={d} />;
        })}
      </div>
    
    </div>
  );
}

export default PopularAreas;
