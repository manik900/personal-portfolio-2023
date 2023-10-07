/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';


//import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
//import swiper styles
import "swiper/css";


// eslint-disable-next-line react/prop-types
const ClientSlider = ( {clients} ) => {

  return (
    <Swiper slidesPerView={1} spaceBetween={30} grabCursor={true} loop={true} breakpoints={{
      490: {
        slidesPerView:1,
        spaceBetween:10
      },
      668: {
        slidesPerView:2,
        spaceBetween:30
      },
   900: {
        slidesPerView:3,
        spaceBetween:0
      },
   1200: {
        slidesPerView:5,
        spaceBetween:40
      },
      
    }}
    
    >
      { clients.map((client, index) =>{
        //destructure client
        const { message, image, name, position, borderColor } =client;
        return (
        <SwiperSlide  key={index}
        style={{borderColor: borderColor}}
        className='border-t-[10px] rounded-t-[12px] '>
        
        {/* card */}
        <div className='w-full mx-auto lg:max-w-[280px] xl:max-w-[290px] h-[250px] rounded-[12px] border border-grey py-4 px-[20px]'>
          {/* person message */}
          <div className='mb-[30px]'>{message}</div>
          {/* person name , img & position */}
          <div className='flex gap-x-[8px]'>
            <img src={image} alt="" />
            <div className='font-bold '>{name}</div>
            <div className='text-light/90'>{position}</div>
          </div>
        </div>

        </SwiperSlide>
        )

      }) }
    </Swiper>
  )
}

export default ClientSlider