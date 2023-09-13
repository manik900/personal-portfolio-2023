// eslint-disable-next-line no-unused-vars
import React from 'react';
import Typed from "react-typed"

const Banner = () => {
  return (
    <div className='bg-[#2699fb] w-full py-[180px]'>
<div className='max-w-[1240px] mx-auto text-center'>

<div className='text-black/100 tracking-widest text-md md:text-xl font-manik '>Learn with us.</div>

<h2 className='text-white font-bold text-5xl md:text-7xl mb-5 font-manik tracking-wider mt-3'>Grow with us.</h2>

<div className='font-manik'>Learn
                              <Typed className="pl-3 text-gradientt text-lg md:text-2xl"
                              strings={['Web Development', 'Web Design', 'Digital Marketing']}
                              typeSpeed={40}
                              loop={true}
                              backSpeed={50}
                              />
                             

                     </div>
                     <button className='btn rounded-lg bg-black px-3 font-manik text-[0.9rem] mt-5'>Get Started</button>

</div>
    </div>
  )
}

export default Banner