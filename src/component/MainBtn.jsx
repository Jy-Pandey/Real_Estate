import React from 'react'

function MainBtn({data}) {
  return (
    <>
      <button
        data-aos="zoom-in"
        className="bg-[#f53838ce]  py-4 px-8 rounded-xl font-semibold text-lg text-white
                        hover:bg-black hover:text-white"
      >
        {data}
      </button>
    </>
  );
}

export default MainBtn
