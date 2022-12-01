
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

export default function Test() {
  return <main>

    <Navbar />


    <section id="aboutsection" class="bg-hero-pattern pt-10">
      <h1 className="text-white font-bold text-6xl flex justify-center">The Team</h1>
      <div className="flex flex-row justify-center">

        <img src="/img/me.png" className="   " />
        <img src="/img/rnddude.png" className="   " />
      </div>
    </section>


    <section id="aboutus" class="bg-hero-pattern pb-52">
      <div className="flex flex-row justify-between mx-96 text-white">

        <div className="flex flex-col justify-center items-center w-80 text-center">
          <h2 className="text-3xl underline underline-offset-4">Jennifer Björklund</h2>
          <p className="text-xl flex pb-4"> ◌ Expert on nebulas and dark materia ◌</p>
          <p> Loves taking long walks, especially at nighttime to look up at the sky wishing for supernovas.
          With an IQ of 465, the astronauts are in good hands when this woman take the lead.</p>
          <a className=" flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300"
            href="https://github.com/Erilzor"> @Erilzor</a>
          <a className="bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300
                 text-black text-xl mt-10 border-solid-white border-2 p-2 rounded-md" href="mailto:jennifer.bjorklund@edu.newton.se" class="button">Contact me</a>
        </div>

        <div className="flex flex-col justify-center items-center w-80 text-center pl-8">
          <h2 className="text-3xl underline underline-offset-4">John Doe</h2>
          <p className="text-xl flex pb-4"> ◌ Founder and owner of Earth ◌</p>
          <p> Enjoy finding new technics to create even brighter stars. With a calm and peaceful apperance he often look for new ways to discover planets yet unseen.</p>
          <a className=" flex text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300"
            href="https://github.com/Erilzor"> @DoeMAN</a>
          <a className="bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300
                 text-black text-xl mt-10 border-solid-white border-2 p-2 rounded-md" href="mailto:john.doe@edu.newton.se" class="button">Contact me</a>
        </div>
      </div>
    </section>

    <Footer />
  </main>
}