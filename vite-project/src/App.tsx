import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    }
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
