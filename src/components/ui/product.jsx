import React, { useState } from 'react'

//components
import Category from './category'
import Card from './card'


// database
import Allproducts from '../../data/mockData'

const Product = () => {
    const [filterData,setFilterData] = useState(Allproducts)

    const filterProducts = (category) =>{

        if(category === 'all'){
            setFilterData(Allproducts)
        }else{
            const filteredData = Allproducts.filter(x=> x.category === category)
            setFilterData(filteredData)
        }

        
        
        
    }

    

  return (
    <div>
    <Category  filterProducts={filterProducts}/>
    <Card data={filterData}/>
    </div>
  )
}

export default Product