import React from 'react'

// navbars
import NavbarDefault from './navbarDefault'
import NavbarMobile from './navbarMobile'

const Navbar = () => {
  return (
    <div className='container bg-[#f8f9fa] w-full h-[80px] flex justify-center items-center'>
        <NavbarDefault/>
        <NavbarMobile/>
    </div>
  )
}

export default Navbar