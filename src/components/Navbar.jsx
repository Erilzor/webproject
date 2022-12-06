import React, { useState } from 'react'

export default function Navbar() {
  const [showMenu, setShowMenu]  = useState(false)

    return  <>
    <nav className="relative  mx-auto p-4 bg-gradient-to-tr from-neutral-900 to-neutral-700">
     
     <div className="flex items-center justify-between">
       
       <div className="pt-2">
         <img src="/img/newton.png" class="h-14 rounded-2xl hover:opacity-90" alt="Picture of Newton logo"/>
       </div>
       
       <div className="hidden md:flex space-x-6 text-2xl ">
         <a href="/" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">Home</a>
         <a href="/about"  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">About</a>
         <a href="/albums"  className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">Albums</a>
         <a href="/live" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">LiveStream</a>
       </div>    
       
       <a href="#"
       className="hidden px-4 pt-2
       rounded-full h-16 baseline bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 md:block">
         <img className="h-8 " src='/img/user.png'/>
         <p className='text-xs font-bold text-center'>User 3</p></a>
         
         <button id="menu-btn" className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 text-3xl md:hidden cursor-pointer " onClick={() => setShowMenu(!showMenu)}> 
           &#9776;
         </button>
     </div> 
     
     {
      showMenu && <div id="mobile-menu" className="absolute top-0 bg-gradient-to-tr from-neutral-900 to-neutral-700 w-full 
      text-2xl flex flex-col origin-top animate-open-menu z-20">
       <button type="button" class="text-3xl self-end px-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200" 
       onClick={() => setShowMenu(false)} > &times;
       </button>
       <nav className="flex flex-col  py-8 space-y-5 " aria-label="mobile">
        <a href="/" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">Home</a>
        <a href="/about" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">About</a>
        <a href="/albums" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">Albums</a>
        <a href="/live" className=" text-center font-bold 
        text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">LiveStream</a>
       </nav>      
      </div>
     }
     
       
     
  </nav>
    </>
     
  }