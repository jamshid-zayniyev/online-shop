import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';

// images
import en from "../../assets/en.png"
import ru from "../../assets/ru.png"
import uz from "../../assets/uz.png"

const LanguageSelector = () => {
  const [show, setShow] = useState(false);
  const { changeLanguage,language } = useLanguage();


  const handleChange = (language) =>{
    changeLanguage(language)
    setShow(!show)
  }
  
  const languages = [
    {id:1,lang:'en',img:en},
    {id:2,lang:'ru',img:ru},
    {id:3,lang:'uz',img:uz},
  ];



  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          onClick={()=>setShow(!show)}
          type="button"
          className="inline-flex justify-between w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <img src={languages.find(x=>x.lang == language).img} alt="" />
          <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      <div className={`absolute ${show ? '' : 'hidden'}  right-0 z-10 mt-2  rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5`}>
        <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          {languages.map((language) => (
            <button
              key={language.id}
              onClick={() => handleChange(language.lang)}
              className="flex justify-center items-center gap-x-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <span className='text-[12 px] font-bold uppercase'>{language.lang}</span>
              <span><img className='mt-1' src={language.img} alt="flags..." /></span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSelector;