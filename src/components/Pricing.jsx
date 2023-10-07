// eslint-disable-next-line no-unused-vars
import React ,{useState}from 'react';
//import data
import { pricing } from "../data";
//import icons
import { HiCheck, HiOutlineArrowNarrowRight } from "react-icons/hi"

const Pricing = () => {
//index state
const [index, setIndex] =useState(1);
//destructure pricing
const { cards, title } =pricing;
  return (
    <section className='section'>
      <div className='container mx-auto'>
    {/* title */}
    <h2 
    data-aos="fade-up" 
    data-aos-delay="400"
    className='mb-10 h2 lg:mb-20 text-center'>{title}</h2>
    {/* cards */}
    <div className='flex flex-col lg:flex-row lg:gap-x-[30px] gap-y-[30px] lg:gap-y-[0px] justify-center items-center'>
      {cards.map((card, cardIndex) =>{
        //destructure card
        const { icon, title, services, price, userAmount, btnText, delay } = card;
        //card
        return <div 
        data-aos="fade-up" 
        data-aos-delay={delay}
        data-aos-offset="300"
        key={cardIndex}>
          <div 
          onClick={() => setIndex(cardIndex)}
          className={`${
            cardIndex === index ? 'bg-white shadow-2xl':'border border-grey'
          } w-[350px] lg:w-[310px] h-[500px] bg-pink-50 rounded-[12px] p-[40px] cursor-pointer transition-all `}>
            {/* card icon*/}
        <div className='mb-8'>
          <img src={icon} alt="" />
        </div>
        {/* //card title */}
        <div className='text-[32px] font-semibold mb-8'> {title} </div>
        {/* card services */}
        <div className='flex flex-col gap-y-2 mb-6'>
          { 
          services.map((service, index)=>{
            //destructure service
            const { name } = service;

            return <div 
            className='flex items-center gap-x-[10px]'
            key={index}> 
            <HiCheck className='text-light' />
              <div>{name}</div>
            </div>
          })
             }
        </div>

        <div className='mb-10'>
          <div className=''>
            <span className='text-2xl font-semibold'>{price}/</span>
            <span className='text-xl font-light text-light'>year</span>
          </div>
          <div className='text-base text-light'>{userAmount}</div>
        </div>
        {/* btn */}
        <button className={`${cardIndex === index ? 'bg-accent hover:bg-accentHover':'border border-accent text-accent'} btn btn-sm space-x-[14px]`}>
          <span>{btnText}</span>
          <HiOutlineArrowNarrowRight />
        </button>
          </div>
        </div>
      })}
      </div>
      </div>
    </section>
  )
}

export default Pricing