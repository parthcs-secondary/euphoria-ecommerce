import React from 'react'
import Routers from '../routes/Routers'
import Navbar from '../components/navbar/Navbar'
import Footer from '../components/footer/Footer'

const Layout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Routers/>
      </div>
      <Footer/>
    </>
  )
}

export default Layout