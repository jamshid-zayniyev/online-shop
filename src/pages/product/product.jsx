import React, { useEffect, useState } from 'react'
import logo from "../../assets/logo.webp"

import { Rating } from 'react-simple-star-rating';
import { Link, useLocation, useParams } from 'react-router-dom';
import Allproducts from '../../data/mockData';
import { FaArrowLeft } from "react-icons/fa";


const Product = () => {


    const [active,setActive] = useState(null)

    // const {slug} = usePathname()
    // const params = useParams()
    // console.log(params.slug);

    const {slug} = useParams()

    useEffect(()=>{
        const findProduct = Allproducts.find(x=>x.id === +slug)

        if(findProduct?.id){
            setActive(findProduct)
        }else{
            setActive(null)
        }

    },[slug])



  return (
    <div className='container'>
    <Link to={'/'} className='flex items-center gap-x-2 text-[20px] mt-2'><FaArrowLeft/> Back</Link>
    { active?.id ? 

// -------------------------------
        <div className=' flex justify-center items-center gap-5 my-5'>
            <div className='w-[50%] flex justify-center'><img className='w-full max-w-[400px]' src={logo} alt="image product" /></div>
        <div className='w-[50%]'>

            <h1 class="text-3xl my-5 line-clamp-3">{active.title}</h1>
            <p class="mb-5 line-clamp-3">{active.description}</p>
            <h2 class="font-semibold mb-5">{active.price}</h2>
            <div>
                <Rating initialValue={3} readonly={true} />
            </div>
            <button class="mt-4 p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
        </div>
        </div>
        
//  ----------------------------

        : 
        <div className='mx-auto w-full text-center my-2'>
            <img className='w-full mx-auto max-w-[400px]' src={logo} alt="image product" />
            <p className='text-[40px] font-bold'>Bu mahsulot topilmadi !!!</p>
        </div>
        }
    </div>
  )
}

export default Product