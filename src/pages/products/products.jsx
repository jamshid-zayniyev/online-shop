import React, { useState } from 'react'

// components
import Card from '../../components/ui/card'
import Category from '../../components/ui/category'

//data
import products from "../../data/mockData"

const Products = () => {
  const [filterData,setFilterData] = useState(products)
  // const filteredData = 
  return (
    <div className='px-10'>
      <Category/>
      <Card data={filterData}/>
    </div>
  )
}

export default Products