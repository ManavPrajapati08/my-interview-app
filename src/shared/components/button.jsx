import React from 'react'

const Button = ({ children, ...props }) => {
  return (
    <button className='font-bold py-2 px-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white' {...props}>{children}</button>
  )
}

export default Button