import React from 'react'

const Button = ({icon,text}) => {
  return (
    <div className='p-2 flex justify-center items-center gap-x-2 cursor-pointer rounded-md border-[1px] border-solid border-black hover:bg-[black] hover:text-white transition-all'><i>{icon}</i> <span>{text}</span></div>
  )
}

export default Button