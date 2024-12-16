import React from 'react'

function Headings({subHeading, heading}) {
  return (
    <>
      <p
        data-aos="zoom-in"
        className="uppercase text-[#f8060690]"
      >
        {subHeading}
      </p>
      <h1
        data-aos="zoom-in"
        data-aos-delay="200"
        className="font-semibold lg:text-[40px] lg:leading-[50px] text-4xl"
      >
        {heading}
      </h1>
    </>
  );
}

export default Headings
