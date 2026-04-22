import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {

    const navLinkStyles = ({ isActive }) => {
        return `block px-4 py-2 rounded font-medium ${isActive ? 'bg-blue-600 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`
    }

    return (
        <aside className='w-64 bg-gray-800 h-screen flex flex-col'>
            <div className='h-16 flex items-center justify-center border-b border-gray-700'>
                <h2 className='text-2xl font-bold text-white'>My App</h2>
            </div>

            <nav className='flex-1 px-4 py-6 space-y-2'>
                <NavLink to='/products' className={navLinkStyles}>Products</NavLink>
            </nav>
        </aside>
    )
}

export default Sidebar