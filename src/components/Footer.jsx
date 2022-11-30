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
      <div class="flex flex-col space-y-3 text-white">
        <a href="/" class="hover:text-newtoncolor">Home</a>
        <a href="/about" class="hover:text-newtoncolor">About</a>
        <a href="/albums" class="hover:text-newtoncolor">Albums</a>
        <a href="/edit" class="hover:text-newtoncolor">Edit</a>
      </div>
      <div class="flex flex-col space-y-3 text-white">
        <a href="#" class="hover:text-newtoncolor">Help</a>
        <a href="#" class="hover:text-newtoncolor">Community</a>
        <a href="#" class="hover:text-newtoncolor">Privacy Policy</a>
      </div>
     </div>  
    
  </footer>
    </>
}