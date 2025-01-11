import React, { useState } from 'react'

//icons 
import { FaBarsStaggered } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

//routes
import routes from '../../routes';

//
import { Link } from 'react-router-dom';
import {Button} from '../ui/button';
import LanguageSelector from '../ui/LanguageSelector';
import { useTranslation } from '../../context/LanguageContext';

const NavbarMobile = () => {

      // Tilni o'zgartirish va tarjima qilish
      const t = useTranslation();

  const [toggle,setToggle] = useState(false)
  return (
    <div className='container lg:hidden block py-4'>
      <div className='flex justify-between items-center'>
        <Link to={'/'} className='text-[20px] font-bold'>Crystal Shop</Link>
        <div className='cursor-pointer text-[20px]' onClick={()=>setToggle(!toggle)}>
          {toggle ? <i><IoMdClose/></i> :  <i className='text-[24px]'><FaBarsStaggered/></i>}
        </div>
      </div>
      <div className={`flex flex-col gap-y-4 transition-all duration-300 ${toggle ? ' py-4  opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        <div className='flex flex-col gap-y-3'>
        {routes.map((route)=>(
          <Link className='text-[18px] hover:text-[red]' key={route.id} to={route.path}>{t(route.element)}</Link>
          ))}
        </div>
        <div><LanguageSelector/></div>
        <div className='flex  items-center gap-x-2'>
        <Link to={'/login'}><Button icon={<RiLoginCircleLine/>} text={'Login'}/></Link>
        <Link to={'/register'}><Button icon={<IoPersonAddSharp/>} text={'Register'}/></Link>
        <Link to={'/cart'}><Button icon={<FaCartArrowDown/>} text={'Cart'}/></Link>
      </div>
      </div>
    </div>
  )
}

export default NavbarMobile