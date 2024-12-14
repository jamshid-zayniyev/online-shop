import React from 'react'

// image
import home from "../../assets/home.jpg"


const Home = () => {
  return (
    <div>
      <div className='relative'>
        <img className='absolute w-full h-[100vh] object-cover' src={home} alt="home" />
        <div className=' container absolute flex flex-col text-white justify-center items-start w-full min-h-[100vh]'>
          <div className='backdrop-blur-md  bg-opacity-40 w-full rounded-[15px] p-2'>
          <h1 className='text-[26px] md:text-[50px] font-bold '>NEW SEASON ARRIVALS</h1>
          <p className='text-[20px] md:text-[25px] '>CHECK OUT ALL TRENDS</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home