import React from 'react'

function Views({props}) {
    const {like, text} = props;
  return (
    <div className="flex justify-center items-center lg:gap-6 gap-4">
      <h1
        data-aos="slide-up"
        className="uppercase lg:text-7xl text-5xl font-semibold"
      >
        {like}
      </h1>
      <h1
        data-aos="slide-up"
        className="text-gray-800 h-full flex justify-center items-center pt-auto lg:text-[20px] lg:leading-6 text-[15px] w-min font-semibold "
      >
        {text}
      </h1>
    </div>
  );
}

export default Views
