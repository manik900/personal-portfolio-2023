// eslint-disable-next-line no-unused-vars
import React from 'react'

const Plans = () => {
  return (
    <div className='py-[100px]'>
      <div className='max-w-[1240px] md:mx-auto grid grid-rows md:grid-cols-3  gap-x-4 md:max-w-[98%] text-center gap-y-7'>
            <div className='shadow-xl h-[380px] w-[325px] md:h-[345px]  mx-auto rounded-md md:pr-2 hover:scale-110 duration-300 text-black py-6 bg-green-100  '>
                 <h2 className='text-2xl mb-2 font-manik'>Web development</h2>
                 <h1 className='font-bold text-lg mb-2 '>$149.01</h1>
                 <p className='leading-normal max-w-[90%] ml-3.5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam blanditiis ea eius suscipit voluptas fuga, soluta veritatis., sunt  voluptates nesciunt fugiat sed et nobis?</p>
                 <button className='btn rounded-lg bg-black px-3 font-manik text-[0.9rem] mt-5'>Start Trial</button>
            </div>
<div className='shadow-xl h-[380px] w-[325px] md:h-[363px] bg-gray-100 mx-auto rounded-md hover:scale-110 duration-300 text-black py-6'>
<h2 className='text-2xl mb-2 font-manik'>Web design</h2>
                 <h1 className='font-bold text-lg mb-2 '>$200.8</h1>
                 <p className='leading-normal max-w-[90%] ml-3.5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam blanditiis ea eius suscipit voluptas fuga, soluta veritatis., sunt  voluptates nesciunt fugiat sed et nobis?</p>
                 <button className='btn rounded-lg bg-black px-3 font-manik text-[0.9rem] mt-5'>Start Trial</button>
            </div>
<div className='shadow-xl h-[380px] w-[325px] md:h-[345px]  mx-auto rounded-md hover:scale-110 duration-300 bg-green-100 text-black py-6'>
<h2 className='text-2xl mb-2 font-manik'>App development</h2>
                 <h1 className='font-bold text-lg mb-2 '>$279.01</h1>
                 <p className='leading-normal max-w-[90%] ml-3.5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam blanditiis ea eius suscipit voluptas fuga, soluta veritatis., sunt  voluptates nesciunt fugiat sed et nobis?</p>
                 <button className='btn rounded-lg bg-black px-3 font-manik text-[0.9rem] mt-5'>Start Trial</button>
            </div>
            
      </div>
    </div>
  )
}

export default Plans