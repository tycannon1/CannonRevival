import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { createBrowserRouter, Route, Link, NavLink, createRoutesFromElements, RouterProvider } from 'react-router-dom'

//Pages:
import Home from './pages/Home'
import Stores from './pages/Stores'
import Products from './pages/Products'
import Profile from './pages/Profile'

// layouts
import RootLayout from './layouts/RootLayout'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home />} />
        <Route path="stores" element={<Stores />} />
        <Route path="products" element={<Products />} />
        <Route path="profile" element={<Profile />} />
      </Route>
  )
)

function App() {
  return (
     

   <RouterProvider router={router} /> 
  )
}

export default App
