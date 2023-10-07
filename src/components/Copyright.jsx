// eslint-disable-next-line no-unused-vars
import React from 'react';
//import data
import { copyright } from '../data';

const Copyright = () => {
  //destructure copyright
  const {link1, link2, copyText, social }= copyright;
  return (
    <div className='flex flex-col items-center gap-y-2 lg:flex-row lg:justify-between ' 
    data-aos="fade-up" data-aos-offset="0" data-aos-delay="700">
      {/* links */}
      <div className='flex gap-x-6'>
        <a className='hover:text-accent transition' href={link1.href}>{link1.name}</a>
        <a className='hover:text-accent transition' href={link2.href}>{link2.name}</a>
      </div>
      {/* copyright Text */}
      <div>{copyText}</div>
      {/* social icons */}
      <ul className='flex gap-x-5'>
        {
          social.map((item, index)=>{
            //destructure icon
            const { href, icon } = item
            return ( 
              <li key={index}>
              <a href={href}>
                <img  src={icon} alt='' />
              </a>
            
            </li>
            )
          }) 
        }
      </ul>
    </div>
  )
}

export default Copyright