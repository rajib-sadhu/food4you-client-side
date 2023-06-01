import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { router } from './components/Routes/Routes'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './components/provider/AuthProvider'

import { Toaster } from 'react-hot-toast';



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster/>
    </AuthProvider>
  </React.StrictMode>,
)
