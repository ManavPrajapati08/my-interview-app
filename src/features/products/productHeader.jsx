import React from 'react'
import Button from '../../shared/components/button'

const ProductHeader = ({ onAddProduct }) => {
    return (
        <div className='flex flex-col sm:flex-row justify-between items-center mb-6 gap-4 pb-4 border-b border-gray-200'>
            <h2 className='text-2xl font-bold text-gray-800'>Products</h2>
            <Button onClick={onAddProduct}>+ Add Product</Button>
        </div>
    )
}

export default ProductHeader