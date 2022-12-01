import { useState } from "react"
import { Fragment } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Test() {
  return <Fragment>

    <Navbar />

    <section id="editsection" class="bg-hero-pattern pb-96">
      <div className="flex flex-row justify-center p-10">
        <img src="/img/earth.png" className="h-64" />
      </div>
      <div className="flex flex-row justify-between">
      <img src="/img/astronaut.png" className="pl-96 animate-spinslow h-80 flex align-middle" />

      <img src="/img/satellite.png" className="h-64" /> 
      </div>
     
    </section>

    <section id="edit" class="bg-hero-pattern py-20">

    </section>


    <Footer />


  </Fragment>
}