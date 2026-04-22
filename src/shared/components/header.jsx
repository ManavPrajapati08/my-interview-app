import React from 'react'
import Button from './button'

const Header = ({ title = 'Products', onLogout }) => {
  return (
    <header className='bg-white border-b-2 h-16 flex items-center justify-between px-6'>
      <h1 className='text-xl font-bold text-gray-800'>{title}</h1>
      <div>
        <Button onClick={onLogout}>Logout</Button>
      </div>
    </header>
  )
}

export default Header