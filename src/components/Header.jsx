
// eslint-disable-next-line no-unused-vars
import React from 'react';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai';
import { useState } from 'react';

const Header = () => {
  const [toggle, setToggle]=useState(false);
  return (
    <div className='bg-[#2648fb] p-5'>
        <div className='max-w-[1240px]  mx-auto items-center flex justify-between'>
        <div className='text-3xl font-bold font-manik tracking-wider text-gradient'>
            AramCo
            </div>

      {
        toggle ?

        <AiOutlineMenu onClick={() => setToggle(!toggle)} className='text-2xl md:hidden block' />
        :
         <AiOutlineClose onClick={() => setToggle(!toggle)}  className='text-2xl md:hidden block' />
      }
  {/* Responsive menu start*/}
      {
        toggle ?

        
          <ul className='md:hidden  fixed bg-black/80 left-[0] top-[76px] text-white w-[50%] text-center duration-700 font-manik'
            >
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5' >Resources</li>
                <li className='p-5' >About</li>
                <li className='p-5'>Contact</li>
                
            </ul>
          :
           <ul className='md:hidden  fixed bg-black/80  top-[76px] text-white w-[50%] text-center duration-700 left-[-100%]'
            >
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5' >Resources</li>
                <li className='p-5' >About</li>
                <li className='p-5'>Contact</li>
                
            </ul>
      } 
         {/* Responsive menu end*/}

           <ul className='hidden md:flex text-white gap-10'>
                <li className='p-5'>Home</li>
                <li className='p-5'>Company</li>
                <li className='p-5' >Resources</li>
                <li className='p-5' >About</li>
                <li className='p-5'>Contact</li>
                
            </ul>
          
        </div>
    </div>
  )
}

export default Header