// eslint-disable-next-line no-unused-vars
import React from 'react';

//import data
import { product } from '../data';

//import components
import Cards from './Cards'

const Product = () => {
  //destructure product data
  const { title, subtitle } = product;
  return (
    <section>
      <div className='container mx-auto'>
        {/* title and subtitle */}
        <div className='flex flex-col lg:flex-row items-center mb-10 lg:mb-20'>
          <h2 
          className='section-title' 
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-offset="400"
          >{title}</h2>
          <p 
          className='lead lg:max-w-[350px]'
           data-aos="fade-up"
           data-aos-delay="300"
           data-aos-offset="400"
          >{subtitle}</p>
        </div>
        {/* cards */}
    <Cards />
      </div>
    </section>
  )
}

export default Product