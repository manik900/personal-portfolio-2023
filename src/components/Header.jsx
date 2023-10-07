// eslint-disable-next-line no-unused-vars
import React, {useState, useEffect, } from 'react';
//import data
import { header } from '../data';
//import icons
import { HiMenuAlt4, HiOutlineX } from "react-icons/hi";
//import conponents
import MobileNav from '../components/MobileNav';
import Nav from '../components/Nav';

const Header = () => {
  //mobile nav state
  const [mobileNav, setMobileNav] = useState(false);
  //header state
  const [isActive, setIsActive] = useState(false);
  //destructure header data
  const { logo, btnText } = header;
  //scroll event
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    })
  
   
  }, [])
  
  return (
    <header className={`${isActive ? "lg:top-0 bg-white shadow-2xl" : "lg:top-[60px]"} py-6 lg:py-4 fixed w-full transition-all z-10 `}>
      <div className='container mx-auto flex justify-between items-center'>
        {/* logo */}
        <a href='#'data-aos="fade-right"
        data-aos-delay="1000" >
          <img src={logo} alt="" />
        </a>
        {/* nav- initially hidden - show on desktop mode*/}
      <div className='hidden lg:flex'
      data-aos="fade-down"
      data-aos-delay="1200"
      >
        <Nav />
      </div>
      {/* Cta button - initially hidden - show on desktop mode */}
      <button className='btn btn-sm btn-outline hidden lg:flex' data-aos="fade-down"
        data-aos-delay="1400">
    {btnText}
      </button>
      {/* mobile nav trigger btn - hidden on desktop */}
      <button className='lg:hidden' onClick={() =>
      setMobileNav(!mobileNav)
      }>
        { mobileNav ? <HiOutlineX className='text-3xl text-accent' /> : <HiMenuAlt4 className='text-3xl text-accent' />}
      </button>
      {/* mobile nav hidden on desktop */}
      <div 
      className={`${
        mobileNav ? 'left-0' : '-left-full'
      } fixed top-0 botton-0 w-[60vw] h-[30rem]  lg:hidden transition-all bg-pink-400`}
      >
        <MobileNav />
      </div>

      </div>
      </header>
  )
}

export default Header