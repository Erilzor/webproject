import Head from "next/head";
import Link from "next/link";


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <> 
      
  <Navbar/>
   

  <section id="hero" class=" py-96 bg-homepage bg-cover">
    <h1 class="flex justify-center font-bold text-6xl text-transparent bg-clip-text hover:text-newtoncolor bg-gradient-to-r from-neutral-600 via-blue-800 to-yellow-300">Picture Library</h1>
  
  </section>

 


 
  <Footer/>
    </>
  );
};

export default Home;
