import React from 'react'

// Link
import { Link } from 'react-router-dom'

// components
import Carousel from '../../components/ui/carousel'
import TitleText from '../../components/ui/titletext'
import { ButtonV2 } from '../../components/ui/button'

// icons
import { FaInstagram, FaTelegram, FaXTwitter } from "react-icons/fa6";


const About = () => {
  return (
    <div className='container lg:flex gap-5 items-center my-5'>
      <div className='w-full lg:w-[50%]'>
        <Carousel/>
      </div>
      <div>
        <TitleText text='About Us'/>
        <p className='text-[grey] text-[20px]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores, quaerat.</p>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor, eligendi culpa facere repudiandae modi voluptatibus commodi maiores tempora fugiat quasi. Eligendi fugit facilis, dolorum cum architecto vitae officia autem eos magni numquam nisi et atque dignissimos aliquid modi, dolores voluptate esse! Obcaecati iste est deleniti veniam reiciendis officia ab ullam.</p>
        <ButtonV2 style={'p-3 mt-4'}>Read more</ButtonV2>
        <div className='flex gap-x-2 mt-4'>
          <ButtonV2 style={'p-2 flex items-center justify-center'}><Link to={''}><i className='flex items-center justify-center text-[20px]'><FaInstagram/></i></Link></ButtonV2>
          <ButtonV2 style={'p-2 flex items-center justify-center'}><Link to={''}><i className='flex items-center justify-center text-[20px]'><FaTelegram/></i></Link></ButtonV2>
          <ButtonV2 style={'p-2 flex items-center justify-center'}><Link to={''}><i className='flex items-center justify-center text-[20px]'><FaXTwitter/></i></Link></ButtonV2>
        </div>
      </div>
    </div>
  )
}

export default About