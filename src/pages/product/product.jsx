import React, { useContext, useEffect, useState } from 'react'
import logo from "../../assets/logo.webp"

import { Rating } from 'react-simple-star-rating';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Allproducts from '../../data/mockData';
import { FaArrowLeft } from "react-icons/fa";
import MyContext from '../../context/MyContext';


const Product = () => {


    const {addToCart} = useContext(MyContext)


    const [active,setActive] = useState(null)
    const navigate = useNavigate()

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
        <div className='md:flex justify-center items-center gap-5 my-5'>
            <div className='md:w-[50%] flex justify-center'><img className='w-full max-w-[300px]' src={active.image} alt="image product" /></div>
        <div className='md:w-[50%]'>

            <h1 className="text-3xl my-5 line-clamp-3">{active.title}</h1>
            <p className="mb-5 line-clamp-3">{active.description}</p>
            <h1 className="font-semibold mb-5">${active.price} </h1>
            <div>
                <Rating initialValue={3} readonly={true} />
            </div>
            <button onClick={()=>addToCart({product:active, q:1})} className="mt-4 mr-2 p-2 px-6 bg-purple-500 text-white rounded-md hover:bg-purple-600">Add To Cart</button>
            <button onClick={()=>navigate('/cart')} className="mt-4 p-2 px-6 bg-gray-500 text-white rounded-md hover:bg-purple-600">Go To Cart</button>
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