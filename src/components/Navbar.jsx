import React, { useState } from 'react'
import {AiOutlineHome} from'react-icons/ai'
import {GiAstronautHelmet} from'react-icons/gi'
import {AiOutlinePicture} from'react-icons/ai'
import {BsCollectionPlay} from'react-icons/bs'
import {FaUserAstronaut} from'react-icons/fa'

export default function Navbar() {
  const [showMenu, setShowMenu]  = useState(false)

    return  <>
    <nav className="relative  mx-auto p-4 bg-gradient-to-tr from-neutral-900 to-neutral-700">
     
     <div className="flex items-center justify-between">
       
       <div className="pt-2">
         <img src="/img/newton.png" class="h-14 rounded-2xl hover:opacity-90" alt="Picture of Newton logo"/>
       </div>
       
       <div className="hidden md:flex space-x-6 text-2xl ">
         <a href="/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row"><AiOutlineHome className='text-orange-400 mx-2 my-1'/>Home</a>
         <a href="/about"  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row"><GiAstronautHelmet className='text-orange-400 mx-2 my-1'/>About</a>
         <a href="/albums"  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row"><AiOutlinePicture className='text-orange-400 mx-2 my-1'/>Albums</a>
         <a href="/live" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row"><BsCollectionPlay className='text-orange-400 mx-2 my-1 text-xl'/>LiveStream</a>
       </div>    
       
       <a href="#"
       className="hidden px-4 pt-2
       rounded-full h-16 baseline bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 md:block">
         <p className='text-xs font-bold text-center'><FaUserAstronaut className='text-4xl'/>User 3</p></a>
         
         <button id="menu-btn" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 text-3xl md:hidden cursor-pointer " onClick={() => setShowMenu(!showMenu)}> 
           &#9776;
         </button>
     </div> 
     
     {
      showMenu && <div id="mobile-menu" className="md:hidden absolute top-0 left-0 bg-gradient-to-tr from-neutral-900 to-neutral-700 w-full 
      text-2xl flex flex-col origin-top animate-open-menu z-20">
       <button type="button" class="text-3xl self-end px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200" 
       onClick={() => setShowMenu(false)} > &times;
       </button>
       <nav className="flex flex-col py-8 space-y-5 " aria-label="mobile">
        <a href="/" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row justify-center"><AiOutlineHome className='text-orange-400 mx-2 my-1'/>Home</a>
        <a href="/about" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row justify-center"><GiAstronautHelmet className='text-orange-400 mx-2 my-1'/>About</a>
        <a href="/albums" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row justify-center"><AiOutlinePicture className='text-orange-400 mx-2 my-1'/>Albums</a>
        <a href="/live" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex flex-row justify-center"><BsCollectionPlay className='text-orange-400 mx-2 my-1'/>LiveStream</a>
       </nav>      
      </div>
     }
     
       
     
  </nav>
    </>
     
  }