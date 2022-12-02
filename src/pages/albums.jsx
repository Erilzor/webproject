import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState, useEffect } from "react"
import Modal from "../components/ProductModal"

import * as datas from "../../public/app-data/library/picture-library.json"


// import ProductCard from "../components/ProductCard"
// // import * as images from "../../../app-data/library/picture-library.json" 
// import AlbumHeaders from "../components/AlbumHeaders"


export default function Album() {

  const [shownModal, setShownModal] = useState(-1);

  const [data, setData] = useState([]);
  const getData = () => {
    return datas.albums;
  }

  useEffect(() => {
    const dd = getData()
    setData(dd)
  }, [])


  return <main>

    <Navbar />

    <section id="hero" class="bg-hero-pattern pt-20 pb-96 text-white">
      {/* Headers with hover name effect */}
      <div class="flex flex-row flex-wrap space-x-6 justify-center">
        {
          data && data.length > 0 && data.map((item, index) => {

            return <div onClick={() =>
              setShownModal(index)}>
              <div className="w-56 h-56 relative mb-6 bg-gradient-to-tr from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 rounded-full">
                <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-3xl text-white">
                  <p className="flex justify-center opacity-0 hover:opacity-100 ">{item.title}</p>
                </div>
                <div className="p-2 absolute inset-0 bg-cover bg-center z-0">
                  <img key={item.id} src={item.headerImage} className="h-52 w-52 rounded-full hover:opacity-75" />
                </div>
              </div>


            </div>
          })
        }
      </div>

      <Modal isVisible={shownModal} onClose={() => setShownModal(-1)} contentIndex={shownModal} />


    </section>

   

    <Footer />

  </main>
}