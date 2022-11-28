import React, { useState } from 'react'

export default function Navbar() {
  const [showMenu, setShowMenu]  = useState(false)

    return  <>
    <nav class="relative  mx-auto p-2 bg-gradient-to-r from-neutral-800 to-neutral-900">
      {/* <!--Flex container--> */}
     <div class="flex items-center justify-between">
       {/* <!--Logo--> */}
       <div class="pt-2">
         <img src="/img/newton.png" class="h-14 rounded-2xl" alt="Picture of Newton logo"/>
       </div>
       {/* <!--Menu Items--> */}
       <div class="hidden md:flex space-x-6 text-xl">
         <a href="/" class="text-white hover:text-newtoncolor hover:italic">Home</a>
         <a href="/about"  class="text-white hover:text-newtoncolor hover:italic">About</a>
         <a href="/albums"  class="text-white hover:text-newtoncolor hover:italic">Albums</a>
         <a href="/edit" class="text-white hover:text-newtoncolor hover:italic">Edit</a>
       </div>    
       {/* <!--Button--> */}
       <a href="#"
       class="hidden p-3 px-6 pt-2 text-white
       rounded-full baseline bg-newtoncolor hover:bg-opacity-90 md:block">
         JB</a>
         {/* <!--Hamburger Icon--> */}
         <button id="menu-btn" class="text-white text-3xl md:hidden cursor-pointer " onClick={() => setShowMenu(!showMenu)}> 
           &#9776;
         </button>
     </div> 
     {/* <!--Mobil Menu--> */}
     {
      showMenu && <div id="mobile-menu" class="absolute top-0 text-white bg-gradient-to-r from-neutral-800 to-neutral-900 w-full text-2xl flex flex-col justify-content-center origin-top
      animate-open-menu">
       <button type="button" class="text-3xl self-end px-6" onClick={() => setShowMenu(false)} > &times;
       </button>
       <nav class="flex flex-col items-center py-8 space-y-5 " aria-label="mobile">
        <a href="/" class="w-full text-center hover:text-newtoncolor hover:italic">Home</a>
        <a href="/about" class="w-full text-center hover:text-newtoncolor hover:italic">About</a>
        <a href="/albums" class="w-full text-center hover:text-newtoncolor hover:italic">Albums</a>
        <a href="/edit" class="w-full text-center hover:text-newtoncolor hover:italic">Edit</a>
       </nav>      
      </div>
     }
     
       
     
  </nav>
    </>
     
  }