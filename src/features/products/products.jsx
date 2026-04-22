import React, { useEffect, useState } from 'react'
import ProductHeader from './productHeader'
import ProductForm from './productForm'
import Modal from '../../shared/components/modal'
import ProductList from './productList'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProducts, fetchProducts } from './productSlice'

const Products = () => {
    const [isFormOpen, setIsFormOpen] = useState(false)

    const [selectedProduct, setSelectedProduct] = useState(false)

    const { products, isLoading, error } = useSelector((state) => state.products)

    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const toggleFormModal = () => {
        setIsFormOpen(!isFormOpen)
    }

    const handleOpenEdit = (product) => {
        setSelectedProduct(product)
        setIsFormOpen(true)
    }

    const handleDelete = (id) => {
        if (id) {
            window.confirm("Are you sure you want to delete this product");
            dispatch(deleteProducts(id))
        }
    }

    return (
        <div className='bg-white p-6 rounded-lg shadow-sm border border-gray-200'>
            <ProductHeader onAddProduct={toggleFormModal} />
            <Modal isOpen={isFormOpen} onClose={toggleFormModal} title="Add Product">
                <ProductForm onClose={toggleFormModal} existingProduct={selectedProduct} />
            </Modal>
            {isLoading && <p>Loading Products.....</p>}

            {error && <p>Error {error}</p>}
            <ProductList products={products} onEdit={handleOpenEdit} onDelete={handleDelete} />
        </div>
    )
}

export default Products