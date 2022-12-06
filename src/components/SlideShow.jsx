import { useState, useEffect } from "react"
import * as datas from "../../public/app-data/library/picture-library.json"

export default function SlideShow({ isVisible, onClose, contentIndex, selectedPictureIds }) {
    if (isVisible == -1) return null;

    const handleClose2 = (e) => {
        if (e.target.id === 'slideShow') onClose();
    }

    const [selectedTab, setSelectedTab] = useState("lowRes")

    const [data, setData] = useState([]);
    const getData = () => {
        return datas.albums;
    }

    useEffect(() => {
        const dd = getData()
        setData(dd)
    })

    return (
        <div id="slideShow" className=" fixed top-0 pt-14 flex justify-center w-full h-full bg-black backdrop-blur-sm bg-opacity-75 outline-none overflow-x-hidden overflow-y-auto z-10" onClick={handleClose2}>
               
            <div className="w-[80rem] flex flex-col">
                <button className="text-white text-xl 
            place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-hero-pattern border-white border-2 p-2 
            rounded">
                <h1 className="text-white">---------SLIDESHOW---------</h1>

                    <div class="flex flex-row justify-center space-x-6">
                  
                        <button class="border-solid border-2 rounded-md px-4 py-2 text-black text-xl font-bold
                     bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 text-left" onClick={() => setSelectedTab("highRes")}>High Resolution</button>
                        <button class="border-solid border-2 rounded-md px-4 py-2 text-black text-xl font-bold
                    bg-gradient-to-r from-orange-200 to-orange-500 hover:from-orange-300 hover:to-orange-600 text-left" onClick={() => setSelectedTab("lowRes")}>Low Resolution</button>
                    </div>

                    {
                        (contentIndex >= 0) && (
                            <div >                              
                                <div class="flex flex-row flex-wrap space-x-6 px-6 py-4">
                                    <div className="flex flex-row flex-wrap">
                                        {(getData()[contentIndex].pictures).filter(p => selectedPictureIds.includes(p.id)).map((picture) => {
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
                                        })}
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    <div class="flex flex-row ">
                        <button class="border-solid border-2 rounded-md px-4 py-2 text-black text-xl font-bold
                     bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 text-left" onClick={() => onClose()}>Close</button>

                    </div>
                </div>
            </div>
        </div>
    )
}