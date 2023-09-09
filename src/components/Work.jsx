// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import Img1 from "../img/img1.jpg";
import Img2 from "../img/img2.jpg";

const Work = () => {
  return (
    <section className='section h-[600px]items-center   mt-[10rem]' id='work' >
      <div className="container  mx-auto">
        <div className='flex flex-col lg:flex-row gap-x-10'>

          <motion.div 
           variants={fadeIn('down', 0.3)}
           initial='hidden'
           whileInView={'show'}
           viewport={{once:false, amount:0.3}}
          className='flex-1 flex flex-col gap-y-10  mb-10 lg:mb-0 '>
            <div>
              <h2 className='h2 leading-tight text-accent font-manik'>My Latest <br />
              Work.
              </h2>
              <p className='max-w-sm mb-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi, et voluptatibus! Voluptatem obcaecati labore, deserunt expedita doloremque accusamus ratione odit vero, optio rem </p>
              <button className='btnn text-[1rem] font-semibold text-black/60 lg:mb-8'>View all Projects</button>
           </div>

            <div className='group  relative overflow-hidden border-2 border-white/50 rounded-xl'> 
          
          <div className='group-hover:bg-black/40  absolute z-40 transition-all duration-300'></div>
         
           <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[100%] lg:w-[100%] lg:h-[100%]' src={Img1} alt="" />
          
           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
             <span className='text-gradient'>UI/UX Design </span>
           </div>
           
           <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 '>
             <span className='text-2xl'>Projects Title</span>
         </div> 

         </div>

        </motion.div>


      <motion.div 
       variants={fadeIn('up', 0.3)}
       initial='hidden'
       whileInView={'show'}
       viewport={{once:false, amount:0.3}}
      className='flex-1 flex-col '>
      <div className='group  relative overflow-hidden border-2 border-white/50 rounded-xl '> 
          
          <div className='group-hover:bg-black/40  absolute z-40 transition-all duration-300'></div>
         
           <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[100%] ' src={Img2} alt="" />
          
           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
             <span className='text-gradient'>FIGMA Design </span>
           </div>
           
           <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 '>
             <span className='text-2xl'>Projects Title</span>
         </div> 
        </div> 

        <div className='group  relative overflow-hidden border-2 border-white/50 rounded-xl mt-12'> 
          
          <div className='group-hover:bg-black/40  absolute z-40 transition-all duration-300'></div>
         
           <img className='group-hover:scale-125 transition-all duration-500 w-[100%] h-[100%] ' src={Img2} alt="" />
          
           <div className='absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 '>
             <span className='text-gradient'>MATERIAL Design </span>
           </div>
           
           <div className='absolute -bottom-full left-12 group-hover:bottom-16 transition-all duration-700 z-50 '>
             <span className='text-2xl'>Projects Title</span>
         </div> 
         </div> 
</motion.div>
</div> 
</div>
      
    </section>
  )
}

export default Work