import React from 'react'

const Button_dark = ({ className, onClick, href, text, dark, white }) => {
  return (
    <>
      <button className={`border-solid border-[1px] rounded-md
        // ${dark ? "text-black" : "text-gray-300 "}
        // ${dark ? "border-black" : "border-gray-300 "}
        ${white ? "text-white" : "text-gray-300 "}
        ${white ? "border-white" : "border-gray-300 "}
        w-[100px] h-[35px]
        transition-colors delay-100 hover:border-red-600 hover:text-red-600  active:bg-red-900`}
        onClick={onClick}>{text}</button>
    </>
  )
}

export default Button_dark
