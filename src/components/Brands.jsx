// eslint-disable-next-line no-unused-vars
import React from 'react';
//import data
import { overview } from '../data';

const Brands = () => {
  //destructure overview
  const { brands } = overview;
  return (
    <section className='py-9 bg-pink-100'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-between space-y-6'>
    {/* brands */}
    { brands.map((manik, index)=>{
      //destructure item
      const {image, delay}= manik;
      return (
        <div key={index} data-aos="fade-down"
        data-aos-delay={delay}>
          {/* brand image */}
          <img src={image} alt="" />
        </div>
      )
    }) }
      </div>
    </section>
  )
}

export default Brands