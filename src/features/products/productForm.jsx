import React, { useState } from 'react'
import Input from '../../shared/components/input'
import Button from '../../shared/components/button'
import { useDispatch } from 'react-redux'
import { addProducts, updateProducts } from './productSlice'

const ProductForm = ({ existingProduct, onClose }) => {

    const [formData, setFormData] = useState({
        title: existingProduct?.title || '',
        price: existingProduct?.price || '',
        category: existingProduct?.category || '',
        brand: existingProduct?.brand || '',
    })

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (existingProduct) {
            dispatch(updateProducts({ id: existingProduct.id, ...formData }))
        } else {
            dispatch(addProducts(formData))
        }

        if (onClose) onClose();
    }

    return (
        <form onSubmit={handleSubmit} className='space-y-4'>
            <Input label='Product Title' name='title' value={formData.title} onChange={handleChange} placeholder='Enter Title' required />
            <Input label='Brand' name='brand' value={formData.brand} onChange={handleChange} placeholder='Enter Brand' required />
            <Input label='Category' name='category' value={formData.category} onChange={handleChange} placeholder='Enter category' required />
            <Input label='Price' name='price' value={formData.price} onChange={handleChange} placeholder='Enter Price' required />
            <div className='flex justify-end gap-3 mt-6 pt-4 border-t border-gray-100'>
                <Button type="button" onClick={onClose}>Cancel</Button>

                <Button type="submit">{existingProduct ? 'Update Product' : 'Add Product'}</Button>
            </div>
        </form>
    )
}

export default ProductForm