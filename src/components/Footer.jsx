// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AiFillFacebook,AiFillYoutube, AiFillGithub, } from 'react-icons/ai';
import img from "../img/manik.jpg";

const Footer = () => {
  return (
    <div className='py-[120px] bg-[#2699fb]'>
      <div className='max-w-[1240px] md:mx-auto md:max-w-[90%] flex flex-col md:flex-row'>
      <div className='text-black md:max-w-[40%] px-5'>
            <h1 className='text-start text-xl text-gradientt'>M.H Technology</h1>
            <p className='text-start mt-5 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, fugit quam aperiam maxime id doloremque adipisci.</p>
            <div className='flex gap-x-5 text-4xl text-red-500 mt-5'>
     <AiFillFacebook />
     <AiFillYoutube />
      <AiFillGithub />
      
            </div>
      </div>
{/* footer section */}

  <div className='flex mt-5 md:mt-0'>
  <div className='text-black px-16'>
            <h1 className='text-gradientt '>Solutions</h1>
            <ul className='mt-6'>
                  <li>Analysis</li>
<li>Marketing</li>
<li>Communication</li>
           <li>Investigation</li>       
            </ul>
      </div>
      <div className='text-black px-16 '>
             <h1 className='text-gradientt'>Support</h1>
            <ul className='mt-6'>
                  <li>Analysis</li>
            <li>Marketing</li>
            <li>Team</li>
           <li>Projects</li>       
            </ul>  
      </div>
  </div>
   
      </div>
     <div className='flex pt-5'>
     <p className='text-center mt-4  ml-16 md:ml-60'>copyed by- <span className='text-gradientt'>Manik Hasan </span></p>
<img className='w-16 h-16 rounded-full ml-2' src={img} />
     </div>
    </div>
  )
}

export default Footer