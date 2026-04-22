import React from 'react'

const Input = ({ label, className = '', ...props }) => {
  return (
    <div>
      {label && <label className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>}
      <input className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2'{...props} />
    </div>
  )
}

export default Input