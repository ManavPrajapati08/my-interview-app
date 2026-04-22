import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Products from './features/products/products'


const router = createBrowserRouter([{
  path: '/',
  element: <Layout />,
  children: [
    { index: true, element: <Navigate to='/products' replace /> },
    {
      path: 'products',
      element: <Products />
    }
  ]
}
])

function App() {
  return <RouterProvider router={router} />

}

export default App
