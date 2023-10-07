// eslint-disable-next-line no-unused-vars
import React from 'react';
//import data
import { cta } from "../data";
//import icon
import {HiOutlineChevronDown} from 'react-icons/hi';

const Cta = () => {
  //destructure cta data
  const { title, subtitle, btnText, img1, img2 } =cta;
  return (
    <section className='section bg-cta bg-cover bg-left-top'>
<div className='mx-auto max-w-[1340px] px-[25px]'>
{/* text */}
<div className='max-w-[920px] mx-atuo text-center'>
  <h2 
  data-aos='fade-up'
  data-aos-delay="200"
  className='h2 mb-5'>{title}</h2>
  <p 
   data-aos='fade-up'
  data-aos-delay="200"
  className='text-2xl lg:text-4xl '>{subtitle}</p>
</div>
{/* btn & images */}
<div className='flex justify-between'>
  <img className='hidden mt-2 xl:flex' src={img1} alt="" data-aos='zoom-out-right'
        data-aos-delay="700" />
  <button className='btn btn-md btn-white mt-[40px] lg:text-[22px] gap-x-[10px] mx-auto'>
    {btnText} <HiOutlineChevronDown />
  </button>
  <img className='hidden xl:flex' src={img2} alt='' data-aos='zoom-out-left'
        data-aos-delay="700" />
</div>
</div>
    </section>
  )
}

export default Cta