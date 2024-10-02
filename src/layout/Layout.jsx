import React from 'react'
import NavBar from '../components/navigation/NavBar'
import Footer from '../components/navigation/Footer'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
        <NavBar />
        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout