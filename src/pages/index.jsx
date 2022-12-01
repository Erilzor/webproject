import Head from "next/head";
import Link from "next/link";


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <> 
      
  <Navbar/>

  <section id="hero" class=" py-96 bg-homepage bg-cover">

    <h1 class="flex justify-center animate-bounce text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 via-orange-400 to-orange-200 hover:from-orange-600 hover:to-orange-300">OPF NASA </h1><p className="text-white flex justify-center">Official PhotoPage For NASA</p>
  
  </section>

  


 
  <Footer/>
    </>
  );
};

export default Home;
