import Head from "next/head";
import Link from "next/link";


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const Home = () => {
  return (
    <>

      <Navbar />

<<<<<<< HEAD
      <section id="hero" class=" pt-52 pb-96 bg-homepage bg-cover ">
=======
    <h1 class="flex justify-center animate-pulse text-6xl text-center font-bold text-transparent bg-clip-text bg-gradient-to-tr from-orange-500 via-orange-400 to-orange-200 hover:from-orange-600 hover:to-orange-300">OPF NASA </h1><p className="text-white flex justify-center">Official PhotoPage For NASA</p>
  
  </section>
>>>>>>> 517bf5566cea2aed195bd5c2d444b48749b0ed88

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
