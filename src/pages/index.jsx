import Head from "next/head";
import Link from "next/link";


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>

      <Navbar />

      <section id="hero" class=" pt-64 pb-96 bg-homepage bg-cover ">
    
 

        <div className="flex flex-row justify-center">
          <div className="flex flex-col text-center">
          <h1 className="font-bold text-6xl text-transparent bg-clip-text bg-gradient-to-r 
        from-orange-500 to-orange-200 hover:from-orange-600  via-orange-400 hover:to-orange-300">OPWNASA</h1>
          <p className="font-bold text-transparent bg-clip-text bg-gradient-to-r
       from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">Official Photography Website For NASA</p>
       
          </div>
         </div>

      </section>

      <Footer />
    </>
  );
};

export default Home;
