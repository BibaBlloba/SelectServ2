import React from 'react'

const Button_dark = ({ className, onClick, href, text, onChange }) => {
  return (
    <>
      <button className='border-solid border-[1px] rounded-md text-gray-300 border-gray-300 w-[100px] h-[35px]
        transition-colors delay-100 hover:border-red-600 hover:text-red-600  active:bg-red-900'
        onChange={onChange}>{text}</button>
    </>
  )
}

export default Button_dark
