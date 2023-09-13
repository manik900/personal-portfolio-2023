// eslint-disable-next-line no-unused-vars
import React from 'react';
import laptop from "../img/laptop.jpg"

const Experts = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-[100px] md:flex-row flex flex-col items-center justify-center gap-x-16 '>
      <div className=''>
      <img src={laptop} alt="" />
      </div>
      <div className=' max-w-[25rem] md:max-w-[30rem] items-center justify-center text- md:justify-start md:text-start  '>
            <h1 className='uppercase text-blue-500 font-manik mt-6'>learn from <span className='bg-rose-400 text-white font-manik text-xl'>expert's </span></h1>
            <p className='text-cyan-600 font-manik font-extralight text-md mt-2 '>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi ullam quos, explicabo voluptate cum dolor doloremque aliquam illo deleniti iure nam error sit fuga veritatis consequuntur voluptates.</p>
            <button className='btn rounded-lg bg-black px-3 font-manik text-[0.9rem] mt-2'>Get Started</button>
      </div>
    </div>
  )
}

export default Experts