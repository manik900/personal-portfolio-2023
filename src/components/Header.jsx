// eslint-disable-next-line no-unused-vars
import React from 'react';
import Logo from '../img/windo.jpg'

const Header = () => {
  return (
    <header className='h-[15px]'>

      <div className='mb-[-82px]'>
        <div className='flex justify-between'>
          {/* logo */}
          {/* <a href='#'>
          <h2 className='bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 text-[1rem] font-extrabold'>Manik <span>Hasan</span> </h2>
          
          </a> */}
          <div className=' '>
          <img className='w-[3rem] h-[3rem] m-2 rounded-full' src={Logo} alt='' />
          </div>
                    <div className='mt-1'>
               <button className='btnn mr-1'>Work with me</button>
          </div>
       
        </div>
      </div>
    </header>
  )
}

export default Header