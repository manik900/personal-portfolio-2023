// eslint-disable-next-line no-unused-vars
import React from 'react';
//import data
import {nav} from '../data'

const MobileNav = () => {
  return (
    <div className='bg-accent/95 w-full h-full '>
      <ul className='h-full flex flex-col justify-center items-center gap-y-8 '>
        {nav.map((item, index)=> {
          //item destructure
          const {href, name} =item
          return <li key={index}>
            <a className='link text-black  text-xl' href={href}>{name}</a>
          </li>
        })}
      </ul>
    </div>
  )
}

export default MobileNav