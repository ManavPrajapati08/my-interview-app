import React from 'react'
import Sidebar from '../shared/components/sidebar'
import Header from '../shared/components/header'
import { Outlet } from 'react-router-dom'

const Layout = () => {
    return (
        <div className='flex h-screen bg-gray-50'>
            <Sidebar />
            <div className='flex-1 flex flex-col'>
                <Header />
                <main className='flex-1 overflow-y-auto p-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout