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
  // const [selectedTab, setSelectedTab] = useState("lowRes")


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


    <section id="hero" class="bg-hero-pattern py-10 text-white">

      <p>hello: {shownModal}</p>
      <div class="flex flex-row space-x-6 px-6 py-4 ">
        {
          data && data.length > 0 && data.map((item, index) => {

            return <div onClick={() => setShownModal(index)}> <img key={item.id} src={item.headerImage} className="h-52" /></div>
          })
        }
      </div>

      {/* {
        (shownModal >= 0) && (
          <div>
            <h1>{data[shownModal].title}</h1>
            <h1>{data[shownModal].pictures.length}</h1>

            <div class="flex flex-row flex-wrap space-x-6 px-6 py-4 ">
              <div>
                {(data[shownModal].pictures).map((picture) => {
                  return <><p>
                    title: {picture.title} - id:
                    {picture.comment}
                  </p>
                    <p>{data[shownModal].path}</p>
                    {selectedTab === "lowRes" && <img src={data[shownModal].path + "/" + picture.imgLoRes}></img>}
                    {selectedTab === "highRes" && <img src={data[shownModal].path + "/" + picture.imgHiRes}></img>}
                  </>
                })}
              </div>

            </div>
          </div>
        )
      } */}

      <Modal isVisible={shownModal} onClose={() => setShownModal(-1)} contentIndex={shownModal}/>


    </section>


    <section id="picture" class="bg-hero-pattern py-72 ">
    </section>

    <Footer />

  </main>
}