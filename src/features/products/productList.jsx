import React from 'react'
import Button from '../../shared/components/button'

const ProductList = ({ products, onEdit, onDelete }) => {
    if (!products || products.length === 0) {
        return <div className='text-center p-10 mt-6 border-2 border-dashed text-gray-500 font-medium'>No product Found</div>
    }
    return (
        <div className='overflow-x-auto mt-6 bg-white rounded-lg border border-gray-200 shadow-sm'>
            <table className='min-w-full text-left border-collapse'>
                <thead className='bg-gray-100 text-gray-600 uppercase text-xs font-bold'>
                    <tr>
                        <th className='py-3 px-4 border-b'>Title</th>
                        <th className='py-3 px-4 border-b'>Brand</th>
                        <th className='py-3 px-4 border-b'>Category</th>
                        <th className='py-3 px-4 border-b'>Price</th>
                        <th className='py-3 px-4 border-b'>Actions</th>
                    </tr>
                </thead>
                <tbody className='text-sm'>
                    {products.map((product) => (
                        <tr key={product.id}>
                            <td className='py-3 px-4 font-medium text-gray-900'>{product.title}</td>
                            <td className='py-3 px-4 font-medium text-gray-900'>{product.brand}</td>
                            <td className='py-3 px-4 font-medium text-gray-900'>{product.category}</td>
                            <td className='py-3 px-4 font-medium text-gray-900'>{product.price}</td>
                            <td className='py-3 px-4 text-center'>
                                <Button onClick={() => onEdit(product)} className='text-blue-600 font-medium mr-4'>Edit</Button>
                                <Button onClick={() => onDelete(product.id)} className='text-red-600 font-medium mr-4'>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ProductList