// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BsArrowUpRight } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

// services data
const services = [
  {
    name: "UI/UX Design",
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur soluta eum maiores et veniam exercitationem quia ',
    link:"learn more"
  },
  {
    name: "Digital Marketing",
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur soluta eum maiores et veniam exercitationem quia ',
    link:"learn more"
  },
  {
    name: "Web Development",
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur soluta eum maiores et veniam exercitationem quia ',
    link:"learn more"
  },
    {
    name: "Web Design",
    description:' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur soluta eum maiores et veniam exercitationem quia ',
    link:"learn more"
  },
]
const Services = () => {
  return (
    <section className='section lg:mt-24 ' id='services'>
      <div className='container  mx-auto lg:mt-16'>
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 lg:bg-about bg-no-repeat w-[20rem] h-[35rem] lg:bg-center mx-7 mix-blend-darken'>
          <div className='lg:mt-32 -ml-7'>
          <h2 className='h2 text-accent font-manik'>What I Do.</h2>
          <h3 className='h3 max-w-[440px] leading-normal text-rose-500'>I am a Freelancer Front-end Developer with over 5 years of experience</h3>
          <button className='bg-accent rounded-full px-3 hover:bg-violet-600 focus:ring-rose-500 focus:ring-2 font-bold text-white mt-3 '>See my work</button>
          </div>
        </motion.div>
      <motion.div 
      variants={fadeIn('left', 0.5)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once:false, amount:0.3}}
      >
        <div>
          {services.map((service, index)=>{
            const {name, description, link}=service;
            return (
            <div 
            className='flex lg:pt-11 border-b border-white h-[114px] mb-[30px]'
            key={index}>
              <div className='max-w-[475px]'>
                <h4 className='text-[20px]  tracking-widest mb-3 font-semibold text-accent font-manik'>{name}</h4>
                <p className='font-secondary leading-tight'>{description}</p>
              </div>
              <div className='flex flex-col flex-1 items-end'>
                <a href="#"
                className='bttn'
                >
                  <BsArrowUpRight fill={0.5}/>
                </a>
                <a href="#" className='text-gradientt text-[0.8rem]'>
                  {link}
                </a>
              </div>
            </div>)
          })}
        </div>
      </motion.div>
      </div>
      </div>
    </section>
  )
}

export default Services