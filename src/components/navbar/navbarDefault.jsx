import React from 'react'


// routes
import routes from '../../routes'

// react-dom
import { Link } from 'react-router-dom'

// components ui
import Button from '../ui/button';

// icons
import { RiLoginCircleLine } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

const NavbarDefault = () => {
  return (
    <div className='container lg:flex hidden  justify-between items-center w-full'>
      <div className='font-[700] text-[25px]'>Crystal Shop</div>
      <div>
        {routes.map((route)=>(
          <Link className='mx-2 text-[18px] hover:text-[red]' key={route.id} to={route.path}>{route.element}</Link>
        ))}
      </div>
      <div className='flex justify-center items-center gap-x-2'>
        <Link to={'/login'}><Button icon={<RiLoginCircleLine/>} text={'Login'}/></Link>
        <Link to={'/register'}><Button icon={<IoPersonAddSharp/>} text={'Register'}/></Link>
        <Link to={'/cart'}><Button icon={<FaCartArrowDown/>} text={'Cart'}/></Link>
      </div>
    </div>
  )
}

export default NavbarDefault