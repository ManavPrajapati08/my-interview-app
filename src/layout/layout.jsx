import React from 'react'
import Sidebar from '../shared/components/sidebar'
import Header from '../shared/components/header'
import { Outlet, replace, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

const Layout = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login', { replace: true })
    }
    return (
        <div className='flex h-screen bg-gray-50'>
            <Sidebar />
            <div className='flex-1 flex flex-col'>
                <Header onLogout={handleLogout} />
                <main className='flex-1 overflow-y-auto p-6'>
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default Layout