import { useState } from "react"
import { Fragment } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Test() {
  return <Fragment>

    <Navbar />

    <section class="bg-hero-pattern pb-96">
      <div className="flex flex-row justify-center pt-32">
      
        <img src="/img/earth.png" className="h-64 animate-spinslower h-40-sm" />
        <img src="/img/satellite.png" className="h-20 rotate-90  pr-40" /> 
      </div>

      <div className="flex flex-row justify-center">
      <img src="/img/astronaut.png" className="pl-96 animate-spinslow h-80" />

      
      </div>
     
    </section>

    <section class="bg-hero-pattern py-20">

    </section>


    <Footer />


  </Fragment>
}