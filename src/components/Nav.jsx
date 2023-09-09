// eslint-disable-next-line no-unused-vars
import React from 'react'
import { BiHomeAlt, BiUser} from 'react-icons/bi';
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs'
import {Link} from "react-scroll"
const Nav = () => {
  return (
    <nav className='fixed bottom-2 lg:bottom-8  w-full  overflow-hidden z-50'>
      
      <div className='container mx-auto'>

    <div className='w-full bg-black/50 h-[30px] backdrop-blur-2xl rounded-full max-w-[250px] mx-auto flex px-2 justify-around text-[0.7rem] items-center text-white/70 cursor-grabbing'>

      <Link 
      to='header'
      activeClass='active'
      smooth={true}
      offset={-200}
      spy={true}
     className='cursor-pointer w-[27px] h-[25px] flex items-center justify-center rounded-full px-1 py-1.5 '
     >
      <BiHomeAlt />
      </Link>
    <Link to='about'
    activeClass='active'
    smooth={true}
    spy={true}
    className='cursor-pointer w-[27px] h-[25px] flex items-center justify-center rounded-full px-1 py-1.5 '
    >
      <BiUser />
      </Link>
<Link to='services'
activeClass='active'
smooth={true}
spy={true}
className='cursor-pointer w-[27px] h-[25px] flex items-center justify-center rounded-full px-1 py-1.5'

>
<BsClipboardData />
      </Link>

<Link to='work'
activeClass='active'
smooth={true}
spy={true}
className='cursor-pointer w-[27px] h-[25px] flex items-center justify-center rounded-full px-1 py-1.5'
>
      <BsBriefcase />
      </Link>
<Link to='contact'
activeClass='active'
smooth={true}
spy={true}
className='cursor-pointer w-[27px] h-[25px] flex items-center justify-center rounded-full px-1 py-1.5 '
>
      <BsChatSquareText />
      </Link>
 </div>
      </div>
    </nav>
  ) 
}

export default Nav