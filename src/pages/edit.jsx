import { useState } from "react"
import { Fragment } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Test() {
  const [showModal, setShowModal] = useState(false);
    return <Fragment>
      
      <Navbar/>

   <section id="filtersection" class="bg-primary-background-color py-10">
            
   </section>

  
   <section id="product" class="bg-primary-background-color py-10">
          
   </section>

  <Footer/>

  {/* <Modal isVisible={showModal} onClose= {() => setShowModal(false)} /> */}
    </Fragment>
}