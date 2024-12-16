import React from 'react'

function Button({data}) {
  return (
    <>
      <button
        className="rounded-2xl bg-red-600 text-xs text-white px-3 py-1 
            hover:bg-white hover:text-black"
      >
        {data}
      </button>
    </>
  );
}

export default Button
