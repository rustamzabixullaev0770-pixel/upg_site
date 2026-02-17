import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from './modules/NavBar'
import Footer from './modules/Footer'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
