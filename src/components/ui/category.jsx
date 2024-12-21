import React, { useState } from 'react'
import {Button} from "./button"

const Category = ({filterProducts}) => {
    const [active,setActive] = useState('all')

    const changeCategory = (category) =>{
        setActive(category)
        filterProducts(category)
    }
  return (
    <div className='mt-10 flex flex-wrap md:flex-nowrap gap-2 justify-center'>
        <Button text={"All"} active={active === 'all'}   onClick={()=>changeCategory('all')}/>
        <Button text={"Men's clothes"} active={active === "men's clothing"} onClick={()=>changeCategory("men's clothing")}/>
        <Button text={"Women's clothes"} active={active === "women's clothing"}  onClick={()=>changeCategory("women's clothing")}/>
        <Button text={"Jewellery"} active={active === "jewellery"} onClick={()=>changeCategory('jewelery')}/>
        <Button text={"Electronics"} active={active === "electronics"} onClick={()=>changeCategory('electronics')}/>
    </div>
  )
}

export default Category