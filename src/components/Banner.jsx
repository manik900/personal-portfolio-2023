// eslint-disable-next-line no-unused-vars
import React from 'react';

import {FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa';
import { TypeAnimation} from 'react-type-animation';

import { motion } from 'framer-motion';

import {fadeIn} from "../variants"




const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center lg:gap-x-7' id='header'>

      <div className='container mx-auto'>
        <div className='flex flex-col  lg:items-center '>
          <div className='flex-1 text-center lg:text-left'>
            <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}

            className='text-black leading-[0.8] font-manik uppercase tracking-wide font-bold text-center text-[26px] lg:text-[90px] mt-[8rem]'>Manik<span className='bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-blue-500 pl-6'>Hasan</span>
            </motion.h1>
            
          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}

          className='mb-6  font-manik font-semibold text-purple-600 uppercase leading-normal text-center text'>
            <span className='mr-4 text-white text-[12px] lg:text-[28px] font-bold tracking-wider'>I am a</span>
            <TypeAnimation sequence={[
              'Developer',
              2000,
              'Designer',
              2000,
              'Youtuber',  
              2000,
            ]}
            speed={50}
            className='text-accent text-[15px] lg:text-[36px] tracking-[0.2rem]'
            wrapper='span'
            repeat={Infinity}
            
            />
          </motion.div
          
          >
         
            <motion.p 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className=' text-[0.5rem] tracking-widest lg:text-[1rem] text-black leading-normal mb-3 lg:text-center lg:max-w-[100%] lg:ml-7 font-primary '>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Dolores aspernatur possimus consequatur suscipit <br /> dolor eligendi esse aperiam  </motion.p>
          <motion.div 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.7}}
          className='mx-auto lg: flex max-w-max gap-x-6 items-center mb-12'>
            <button className='text-[0.6rem] px-3  btn text-sm font-serif font-semibold bg-gradient-to-r from-indigo-500 from-10% via-yellow-400 via-60% to-emerald-600 to-90%  rounded-full px-1 text-slate-900 focus:ring-2 hover:ring-rose-500'>Contact me</button>
            <a href='#' className=' ml-3 text-[10px] text-gradient btn-link  font-bold' >My Portfolio</a>
          </motion.div>
            <motion.div 
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once:false, amount:0.7}}
            className='flex gap-x-6 max-w-max mx-auto lg:mx- mb-2 text-white '>
              <a className='focus:text-orange-800 hover:btn-link ' href='#'>
                <FaYoutube />
              </a>
              <a className='focus:text-purple-800 ' href='#'>
                <FaGithub />
              </a>
               <a className='focus:text-rose-800' href='#'>
                <FaDribbble />
              </a>
            </motion.div>
          
        </div>
        <motion.div 
        variants={fadeIn('down', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='hidden lg:flex flex-1 max-w-[320px] lg:max-w-[300px] lg:mt-5'>
          <img className='rounded-[37%] ' src={Image} alt='' />
        </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Banner