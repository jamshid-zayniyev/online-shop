import React, { useContext, useEffect } from 'react'
import MyContext from '../../context/MyContext'
import { ButtonV2 } from '../../components/ui/button';
import TitleText from '../../components/ui/titletext';

const Cart = () => {

  const {basket,setBasket} = useContext(MyContext)


  const MinusQuantity = (itemId) => {
    let newBasket = basket
        .map((x) => {
            if (x.product.id === itemId) {
                return { ...x, q: Math.max(x.q - 1, 0) }; // Decrease quantity but not below 0
            }
            return x;
        })
        .filter((x) => x.q > 0); // Remove items where q is 0

    setBasket(newBasket);
};

  const PlusQuantity = (itemId) =>{
    let newBasket =  basket.filter(x=>{
      if(x.product.id == itemId){
        x.q = x.q+1;

      }
      return basket
    })
    setBasket(newBasket)

  }

  const TotalPrice = () =>{
    const summa = basket.reduce((total,current)=>  {return total +  current.q * current.product.price},0)
    
    return summa
  }

  useEffect(()=>{
    TotalPrice()
  },[basket])


  return (
    <div className='container mx-auto mt-2 w-[95%] shadow-xl p-3 rounded-md'>

    {basket.length === 0 ? <TitleText text={'Your Cart is Empty'}/> : 
      
      basket.map((item,index)=>(
        <div className='flex my-10 justify-between items-center' key={index}>
        <div className='w-full lg:w-[50%]'><img src={item.product.image} className='w-full mx-auto max-w-[200px] flex justify-center' alt="" /></div>
        <div className='w-full lg:w-[50%]'>
          <TitleText text={item.product.title}/>
          <TitleText text={`${item.q} x ${item.product.price}$ = ${(item.q*item.product.price).toFixed(2)}$`}/>
        <div className='flex gap-x-2'>
          <ButtonV2 onClick={()=>MinusQuantity(item.product.id)} style={'p-2 w-[50px] h-[50px] flex justify-center  items-center text-[30px]'}>-</ButtonV2>
          <ButtonV2 onClick={()=>PlusQuantity(item.product.id)} style={'p-2 w-[50px] h-[50px] flex justify-center  items-center text-[30px]'}>+</ButtonV2>
        </div>
        </div>
      </div>
      ))

    }

      <div className='flex justify-between items-center'>
        <TitleText text={`Total: $${TotalPrice().toFixed(1)}`}/>
        <ButtonV2 style={'p-2'}>Buy Product</ButtonV2>
      </div>
    </div>
  )
}

export default Cart