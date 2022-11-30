import { useState, useEffect } from "react"
import * as datas from "../../public/app-data/library/picture-library.json"

export default function Modal2({ isVisible, onClose, contentIndex }) {
    if (isVisible ==-1) return null;

    const handleClose2 = (e) => {
        if (e.target.id === 'wrapper') onClose();
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
        <div id="wrapper" className=" fixed top-0 flex justify-center w-full h-full bg-black bg-opacity-25  outline-none overflow-x-hidden overflow-y-auto" onClick={handleClose2}>
            
            <div className="w-[80rem] flex flex-col">
                <button className="text-white text-xl 
            place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-hero-pattern border-white border-2 p-2 
            rounded">


                    <div class="flex flex-row justify-center">
                        <button class="p-3 text-lg text-white hover:bg-blue-50 hover:text-blue-500" onClick={() => setSelectedTab("highRes")}>high res</button>
                        <button class="p-3 text-lg text-white hover:bg-blue-50 hover:text-blue-500" onClick={() => setSelectedTab("lowRes")}>low res</button>
                    </div>
                    <p>hello: {contentIndex}</p>
                    <p>hello: {getData()[contentIndex].title}</p>

                 
                
                    {
                        (contentIndex >= 0) && (
                            <div >
                                <h1>{getData()[contentIndex].title}</h1>
                                <h1>{getData()[contentIndex].pictures.length}</h1>

                                <div class="flex flex-row flex-wrap space-x-6 px-6 py-4 ">
                                    <div className="flex flex-col items-center">
                                        {(getData()[contentIndex].pictures).map((picture) => {
                                            return <>
                                            <p className="font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-orange-300 hover:from-orange-500 hover:to-blue-500"> {picture.title} </p>
                                            <p className="italic text-center"> {picture.comment} </p>
                                                {selectedTab === "lowRes" && <img src={getData()[contentIndex].path + "/" + picture.imgLoRes}></img>}
                                                {selectedTab === "highRes" && <img src={getData()[contentIndex].path + "/" + picture.imgHiRes}></img>}
                                            </>
                                        })}
                                    </div>

                                </div>
                            </div>
                        )
                    }
                    <div class="flex flex-row ">
                        <button class="border-solid border-2 rounded-md p-2 text-white bg-gray-300 hover:bg-gray-200" onClick={() => onClose()}>Close</button>

                    </div>

                </div>
            </div>
        </div>
    )
}