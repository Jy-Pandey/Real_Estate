import React from "react";
import Headings from "./Headings";
import { property } from "./export";
import SingleProp from "./SingleProp";
import MainBtn from "./MainBtn";

function Properties() {
  return (
    <div className="container bg-[#F3F3F3] flex flex-col lg:p-20 p-7 gap-6">
      <div className="flex flex-col gap-4 lg:p-12 p-7">
        <Headings
          subHeading="Properties"
          heading="Explore the latest
            properties available"
        />
      </div>
      {/* Properties */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 p-10">
        {property.map((proper, index) => {
          return <SingleProp key={index} props={proper} />;
        })}
      </div>
      <div className="flex justify-center">
        <MainBtn data="Load more" />
      </div>
    </div>
  );
}

export default Properties;
