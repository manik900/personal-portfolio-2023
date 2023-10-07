// eslint-disable-next-line no-unused-vars
import React from 'react';
//import data
import { testimonials } from '../data';
//import components
import ClientSlider from "../components/ClientSlider"

const Testimonials = () => {
  //destructure testimonials
  const { title, clients } =testimonials;

  return (
    <section className='bg-pink-200 section'>
      <div className='mx-auto container'>
        {/* title */}
        <h2 className='title mb-10 lg:mb-20 text-center max-w-[930px] mx-auto'
        data-aos='fade-up'
        data-aos-delay="300"
        >{title}</h2>
        {/* slider */}
        <div data-aos='fade-up'
        data-aos-delay="400">
          <ClientSlider clients={clients} />

        </div>
      </div>
    </section>
  )
}

export default Testimonials