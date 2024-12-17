import React from 'react'

const Button = ({onClick,icon,text,active=false}) => {
  return (
    <div onClick={onClick} className={`p-2 flex justify-center items-center gap-x-2 cursor-pointer rounded-md border-[1px] border-solid border-black hover:bg-[black] hover:text-white transition-all  ${active ? 'bg-black text-white' : 'bg-white text-black'}`}>{icon &&  <i>{icon}</i>}  <span>{text}</span></div>
  )
}

export default Button