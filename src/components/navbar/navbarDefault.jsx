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
  console.log(routes);
  return (
    <div className='lg:flex hidden  justify-between w-full'>
      <div className='font-[700] text-[25px]'>Crystal Shop</div>
      <div>
        {routes.map((route)=>(
          <Link className='mx-2 text-[18px] hover:text-[red]' key={route.id} to={route.path}>{route.element}</Link>
        ))}
      </div>
      <div className='flex justify-center items-center gap-x-2'>
        <Button icon={<RiLoginCircleLine/>} text={'Login'}/>
        <Button icon={<IoPersonAddSharp/>} text={'Register'}/>
        <Button icon={<FaCartArrowDown/>} text={'Cart'}/>
      </div>
    </div>
  )
}

export default NavbarDefault