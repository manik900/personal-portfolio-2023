// eslint-disable-next-line no-unused-vars
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import about from "../img/manik.jpg"

const About = () => {
  const [ref] = useInView({
    threshold: 0.5,
  })
  return (
    <section className='section p-2 h-screen'  id='about' ref={ref}>
    <div className='container mx-auto'>
    <div className='flex flex-col lg:flex-row lg:items-center -lg:gap-x-4  lg:gap-y-0 h-screen '>
      <div 
        
      className=' mx-auto'>
        <motion.img 
          variants={fadeIn('up', 0.3)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once:false, amount:0.3}}
        className=' flex-1 lg:ml-6 rounded-[40px]  h-[15rem] w-[14rem] mx-auto mix-blend-luminosity ' src={about} alt="" />
      </div>
      <motion.div
        variants={fadeIn('left', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.7}}
        className='mx-auto lg:max-w-[30rem]'
      >
        <h2 className='text-accent underline'>About Me.</h2>
        <h3 className='text-[0.9rem] leading-normal text-gradient font-tertiary h2'>I am a front-end Developer with over 5 years of experience.</h3>
        <p className='text-[0.7rem] text-black leading-4 p-1 lg:max-w-[60%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo atque molestiae, aperiam, tenetur itaque at perspiciatis nam tempora reiciendis illo harum? Molestiae</p>
        <div className=''>
          <div className='flex gap-x-4'>
            <div className='text-[30px] text-gradient flex-row'>
            <CountUp  start={0} end={8} duration={3} />
            </div>
            <div className='font-primary text-[10px] leading-3'>
             
            
            </div>
<div className='text-[30px] text-gradient'>
<CountUp  start={0} end={10} duration={3} /> k+
            </div>
            <div className='font-primary text-[10px] leading-3'>
              
            </div>
            <div className='text-[30px] text-gradient'>
            <CountUp  start={0} end={13} duration={3} /> k+ 
            </div>
            <div className='font-primary text-[10px] leading-3'>
            
            </div>
          
          </div>
          <div className='flex text-[0.7rem] gap-x-4 text-black'>
            <p className='leading-3'>Years of <br />Experience</p>
            <p className='leading-3'>Projects <br /> Completed</p>
            <p className='leading-3 pl-9'>Clients <br />Satisfied.</p>
          </div>
        </div>

      <div>
      <button className='text-[0.6rem]  btn text-sm font-serif font-semibold bg-gradient-to-r from-fuchsia-500 from-40% to-rose-400 to-60%  rounded-full px-3 text-slate-700 focus:ring-2 hover:ring-rose-500'>Contact me</button>
            <a href='#' className=' ml-3 text-[10px] text-gradient btn-link  font-bold' >My Portfolio</a>
      </div>

      </motion.div>
    </div>
    </div>
    </section>
  )
}

export default About