import React from 'react'


// routes
import routes from '../../routes'

// react-dom
import { Link } from 'react-router-dom'

// components ui
import {Button} from '../ui/button';

// icons
import { RiLoginCircleLine } from "react-icons/ri";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaCartArrowDown } from "react-icons/fa";

// lang
import { useLanguage, useTranslation } from '../../context/LanguageContext';
import LanguageSelector from '../ui/LanguageSelector';

const NavbarDefault = () => {

  
    // Tilni o'zgartirish va tarjima qilish
    const t = useTranslation();

  return (
    <div className='container lg:flex hidden  justify-between items-center w-full'>
      <Link to={'/'} className='font-[700] text-[25px]'>Crystal Shop</Link>
      <div>
        {routes.map((route)=>(
          <Link className='mx-2 text-[18px] hover:text-[red]' key={route.id} to={route.path}>{t(route.element)}</Link>
        ))}
      </div>
      <div className='flex justify-center items-center gap-x-2'>
        <Link to={'/login'}><Button icon={<RiLoginCircleLine/>} text={t('login')}/></Link>
        <Link to={'/register'}><Button icon={<IoPersonAddSharp/>} text={'Register'}/></Link>
        <Link to={'/cart'}><Button icon={<FaCartArrowDown/>} text={'Cart'}/></Link>
        <LanguageSelector/>
      </div>
    </div>
  )
}

export default NavbarDefault