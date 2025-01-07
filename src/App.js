import React, { lazy, createContext, Fragment, useState } from 'react'

// navbar and footer components
import Navbar from "./components/navbar"
import Footer from './components/footer'
import { Route, Routes, useNavigate } from 'react-router-dom'
// context
import MyContext from './context/MyContext.js'

//translate
import { useTranslation } from 'react-i18next';
import './i18n';

const Home = lazy(()=> import('./pages/home/home.jsx'))
const About = lazy(()=> import('./pages/about/about.jsx'))
const Products = lazy(()=> import('./pages/products/products.jsx'))
const Contact = lazy(()=> import('./pages/contact/contact.jsx'))
const Login = lazy(()=> import('./pages/login/login.jsx'))
const Register = lazy(()=> import('./pages/register/register.jsx'))
const Cart = lazy(()=> import('./pages/cart/cart.jsx'))
const Product = lazy(()=> import('./pages/product/product.jsx'))

const App = () => {
  
  // cart basket
  const [basket,setBasket] = useState([])
  const navigate = useNavigate()

  // translate
  const { t, i18n } = useTranslation();
  
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };
  
  const addToCart = (item) =>{

    let findItem = basket.find(x=>x.product.id == item.product.id)
   


    if(!findItem?.product?.id){
      //
      navigate('/cart')
      basket.unshift(item)
      setBasket(basket)
    }
  } 

  
  return (
    <Fragment>
    <MyContext.Provider value={{addToCart,basket,setBasket}}>
    <div>
      <h1>{t('welcome')}</h1>
      <p>{t('greeting')}</p>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
      <button onClick={() => changeLanguage('uz')}>O'zbek</button>
    </div>
      <Navbar/>

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/product/:slug' element={<Product/>}/>
        <Route path='*' element={<h1>Page not Found</h1>}/>
      </Routes>

      <Footer/>
    </MyContext.Provider>
    </Fragment>
  )
}

export default App