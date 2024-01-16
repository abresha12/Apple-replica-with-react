import React from 'react'
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import { Outlet } from 'react-router-dom'

const SharedLayout = () => {
  return (
    <div>
        <Nav/>
        <Outlet />
        <Footer/>
    </div>
  )
}

export default SharedLayout