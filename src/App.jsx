import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import Layout from './layout/layout'
import Products from './features/products/products'
import Login from './features/auth/login'
import { useSelector } from 'react-redux'

const ProctectedRoute = ({ children }) => {
  const { token } = useSelector((state) => state.auth)

  if (!token) {
    return <Navigate to='/login' replace />
  }

  return children
}


const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/',
    element: (
      <ProctectedRoute>
        <Layout />
      </ProctectedRoute>),
    children: [
      { index: true, element: <Navigate to='/products' replace /> },
      {
        path: 'products',
        element: <Products />
      }
    ]
  }, {
    path: '*', element: <div className='p-10 text-center'>404 -Page Not Found</div>
  }
])

function App() {
  return <RouterProvider router={router} />

}

export default App
