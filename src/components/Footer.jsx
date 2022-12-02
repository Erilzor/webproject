export default function Footer(){
    return <>
     <footer class="p-6 bg-gradient-to-r from-neutral-800 to-neutral-900">
    {/* <!--Flex container--> */}
    <div class="container flex flex-col-reverse justify-between px-6
      mx-auto space-y-8 md:flex-row md:space-y-0">
      {/* <!--Logo and the sociallinks container--> */}
      <div class="flex flex-row items-center justify-between
      space-y-12 md:flex-row md:space-y-0 md:items-start">
          {/* <!--Logo--> */}
          <div>
            <img src="img/newton.png" alt="" class="h-8 rounded-full"/>
          </div>   
      </div>  
      </div>

     {/* <!--List Container--> */}
     <div class="flex justify-around space-x-32 pb-10">
      <div class="flex flex-col space-y-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">
        <a href="/" class="text-transparent bg-clip-text bg-gradient-to-r hover:from-orange-600 hover:to-orange-300">Home</a>
        <a href="/about" class="text-transparent bg-clip-text bg-gradient-to-r hover:from-orange-600 hover:to-orange-300">About</a>
        <a href="/albums" class="text-transparent bg-clip-text bg-gradient-to-r hover:from-orange-600 hover:to-orange-300">Albums</a>
        <a href="/live" class="text-transparent bg-clip-text bg-gradient-to-r hover:from-orange-600 hover:to-orange-300">LiveStream</a>
      </div>
      <div class="flex flex-col space-y-3 font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200">
        <a href="#" class="text-transparent bg-clip-text bg-gradient-to-r hover:from-orange-600 hover:to-orange-300">Help</a>
        <a href="#" class="text-transparent bg-clip-text bg-gradient-to-r hover:from-orange-600 hover:to-orange-300">Community</a>
        <a href="#" class="text-transparent bg-clip-text bg-gradient-to-r hover:from-orange-600 hover:to-orange-300">Privacy Policy</a>
      </div>
     </div>  
    
  </footer>
    </>
}