import React from 'react'

const TitleText = ({style,text='Title Text'}) => {
  return (
    <div className={`text-[black]  font-[700] text-[30px]  lg:text-[40px]  my-[10px]  ${style}`}>{text}</div>
  )
}

export default TitleText