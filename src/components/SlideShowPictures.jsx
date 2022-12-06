import { useState } from "react"


export default function PictureCard() {
    
    const [selectedPictureIds, setSelectedPictureIds] = useState([])
   return <>
   <div className="p-1 bg-gradient-to-tr from-stone-900 border-white border-2 border-dotted flex flex-col items-center  m-4  ">
    <button className="border-solid border-2 rounded-md px-3 py-1 mr-2 text-black text-xl font-bold
    bg-gradient-to-r from-orange-200 to-orange-500 hover:from-orange-300 hover:to-orange-600">Edit</button>
    <p className="py-4 font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex underline underline-offset-4"> {picture.title} </p>
    <p className="pb-6 italic text-center"> {picture.comment} </p>                                                  
    {selectedTab === "lowRes" && <img className="h-52" src={getData()[contentIndex].path + "/" + picture.imgLoRes}></img>}
    {selectedTab === "highRes" && <img src={getData()[contentIndex].path + "/" + picture.imgHiRes}></img>}

</div> 

 

   </>
  }








