import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import ProductCard from "../components/ProductCard"
import * as images from "../../../app-data/library/picture-library.json" 
import AlbumHeaders from "../components/AlbumHeaders"


export default function Album() {

return <main>

      <Navbar/>


  <section id="hero" class="bg-hero-pattern py-10">

   <AlbumHeaders/>

  
    <div className="flex flex-row flex-wrap space-x-4">
      <div className="bg-blue-700 h-64 rounded-full">
      <img src="app-data\library\pictures\album-header\A Galactic Spectacle_4862916839_o~small.jpg" className="h-52 rounded-full " />
      <p class="flex justify-center font-bold text-white" >Newborn stars </p>
      </div>
      <div className="bg-blue-700 h-64 rounded-full">
      <img src="app-data\library\pictures\album-header\GSFC_20171208_Archive_e000383~small.jpg"  className="h-52 rounded-full " />
      <p class="flex justify-center font-bold text-white" >Nebulas </p>
      </div>
      <div className="bg-blue-700 h-64 rounded-full">
      <img src="app-data\library\pictures\album-header\hubble-captures-vivid-auroras-in-jupiters-atmosphere_28000029525_o~small.jpg" className="h-52 rounded-full " />
      <p class="flex justify-center font-bold text-white" >Planets </p>
      </div>
      <div className="bg-blue-700 h-64 rounded-full">
      <img src="app-data\library\pictures\album-header\A Galactic Spectacle_4862916839_o~small.jpg" className="h-52 rounded-full " />
      <p class="flex justify-center font-bold text-white" >Galaxies </p>
      </div>
      <div className="bg-blue-700 h-64 rounded-full">
      <img src="app-data\library\pictures\album-header\PIA04921~small.jpg" className="h-52 rounded-full " />
      <p class="flex justify-center font-bold text-white" >Hubble telescope </p>
      </div>

 
     
      
      
    </div>



  </section>


  <section id="picture" class="bg-blue-800 py-72 ">
  </section>

  <Footer/>

    </main>
}