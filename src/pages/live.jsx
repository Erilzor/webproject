import { useState } from "react"
import { Fragment } from "react"

import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Test() {
  return <Fragment>

    <Navbar />

    <section id="editsection" class="bg-hero-pattern pb-96">
      <div className="flex flex-row justify-center p-10">
        <img src="/img/earth.png" className="h-64 animate-spinslower h-40-sm" />
      </div>
      <div className="flex flex-row justify-center">
      <img src="/img/X.png" className="pl-96 animate-spinslow h-80" />

      <img src="/img/satellite.png" className="h-64 animate-wiggle pr-40" /> 
      </div>
     
    </section>

    <section id="edit" class="bg-hero-pattern py-20">

    </section>


    <Footer />


  </Fragment>
}