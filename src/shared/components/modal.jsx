import React from 'react'
import Button from './button'

const Modal = ({ isOpen, title, onClose, children }) => {
    if (!isOpen) return null
    return (
        <div className='h-auto fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50'>
            <div className='bg-white rounded-lg shadow-xl w-full max-w-md mx-4 overflow-hidden'>
                <div className='flex justify-between items-center p-4 border-b'>
                    <h3 className='text-lg font-semibold'>{title}</h3>
                    <Button onClick={onClose} className="text-gray-500 hover:text-gray-700 text-2xl font-bold">X</Button>

                </div>
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal