// eslint-disable-next-line no-unused-vars
import React from 'react'

const NewsLetter = () => {
  return (
    <div className='bg-[#2699fb] py-[120px]  '>
      <div className='flex flex-col md:flex-row md:max-w-[90%]'>
      <div className='max-w-[1240px] mx-auto '>
      <h1 className='text-xl md:text-[30px] font-bold font-manik tracking-wider mb-3'>Want to learn latest I.T skills</h1>
      <span className=''><span className='text-gradientt'>Sign up</span> to our newsletter and stay up to date.</span>
      </div>
      <div className='text-center md:-mt-4 mt-4'>
        <input type="text" className='text-slate-500 p-1' placeholder=' type your email' />
        <button className='btn rounded-md bg-black px-3 py-[5px] ml-2 font-manik text-[0.9rem] mt-5'>Get Started</button>
        <br />
        <p className='md:mt-4'>We care bout the protection of your data.Read our <br /> <a href='#' className='text-red-600'>Privacy Policy+</a></p>
      </div>
      </div>
    </div>
  )
}

export default NewsLetter