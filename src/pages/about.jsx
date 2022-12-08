import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import {GoMail} from 'react-icons/go'
import {BsGithub} from 'react-icons/bs'

export default function Test() {
  return <main>

    <Navbar />

    <section id="aboutsection" class="bg-hero-pattern py-10 text-white">
      <div className="flex flex-row justify-center ">
        <h1 className="font-bold text-6xl flex justify-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300
      w-72 ">The Team</h1>
      </div>
      <div className="flex flex-col justify-center space-x-8 md:flex-row mx-14 md:mx-0">
        <div className="flex flex-col justify-center items-center w-80 text-center">
          <img src="/img/me.png"/>
          <h2 className="text-3xl underline underline-offset-4 hover:opacity-90">Jennifer Björklund</h2>
          <p className="text-xl font-bold flex text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300"> ◌ Expert on nebulas and dark materia ◌</p>
          <p className="hover:opacity-90"> Loves taking long walks, especially at nighttime to look up at the sky wishing for supernovas.
            With 100 years of experience, the astronauts are in good hands when this woman take the lead.</p>
          <a className=" flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300"
            href="https://github.com/Erilzor"><BsGithub className="text-orange-400 text-2xl mr-1"/>Erilzor</a>
          <a className="bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300
                 text-black text-xl mt-10 border-solid-white border-2 p-2 rounded-md flex flex-row" href="mailto:jennifer.bjorklund@edu.newton.se" class="button">Contact me <GoMail className="mx-2 my-1"/></a>
        </div>

        <div className="flex flex-col justify-center items-center w-80 text-center ">
          <img src="/img/rnddude.png"/>
          <h2 className="text-3xl underline underline-offset-4 hover:opacity-90">John Doe</h2>
          <p className="text-xl font-bold flex text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300"> ◌ Founder of Earth and expert on planet development ◌</p>
          <p className="hover:opacity-90"> Enjoy finding new technics to create even brighter stars. With a calm and peaceful apperance he often look for new ways to discover planets yet unseen and create new ones.</p>
          <a className=" flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300"
            > <BsGithub className="text-orange-400 text-2xl mr-1"/>DoeMAN</a>
          <a className="bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300
                 text-black text-xl mt-10 border-solid-white border-2 p-2 rounded-md flex flex-row" href="mailto:john.doe@edu.newton.se" class="button">Contact me <GoMail className="mx-2 my-1"/></a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
}