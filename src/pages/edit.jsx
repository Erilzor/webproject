import { useState } from "react"
import { Fragment } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Test() {
 return <Fragment>
      
      <Navbar/>

   <section id="editsection" class="bg-hero-pattern py-96">
   <img src="/img/astronaut.png" className="  animate-spin" />   
   </section>

   <section id="edit" class="bg-hero-pattern py-20">
   
    </section>
  

  <Footer/>

  
    </Fragment>
}