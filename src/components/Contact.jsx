// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='lg:section py-16 mt-[20rem] lg:mt-[18rem]' id='contact'>
      <div className='container mx-auto'>
        <div className='flex gap-y-6 flex-col lg:flex-row'>

      <motion.div 
        variants={fadeIn('down', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
      className='flex-1 flex justify-start items-center'>
        <div className='gap-y-10'>
          <h4 className='text-2xl tracking-wider uppercase text-accent font-bold mb-2 '>Get in touch</h4>
          <h2 className='tracking-wider leading-none text-[45px] lg:text-[90px]'>Let's work <br /> together</h2>
        </div>
      </motion.div>

      <motion.form 
        variants={fadeIn('up', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
      className='flex-1  border-2 gap-y-6 rounded-2xl items-start p-5 pb-24'>
        <input 
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
        type="text"
        placeholder='Your name'
        />
            <input 
        className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
        type="text"
        placeholder='Your email'
        />
        <textarea  className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
        placeholder='Your message'>

        </textarea>
        <button className='text-[1.2rem] w-[80%] tracking-widest btn text-xl font-serif font-semibold bg-gradient-to-r from-fuchsia-500 from-40% to-rose-400 to-60%  rounded-full px-3 text-slate-700 focus:ring-2 hover:ring-rose-500'>Send message</button>
      </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact