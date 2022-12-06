import { useState, useEffect } from "react"
import * as datas from "../../public/app-data/library/picture-library.json"
import SlideShow from "../components/SlideShow"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function ProductModal({ isVisible, onClose, contentIndex }) {
    if (isVisible == -1) return null;

    const handleClose2 = (e) => {
        if (e.target.id === 'productModal') onClose();
    }
    const [shownModal, setShownModal] = useState(-1);

    const [selectedPictureIds, setSelectedPictureIds] = useState([])

    const [data, setData] = useState([]);
    const getData = () => {
        return datas.albums;
    }

    useEffect(() => {
        const dd = getData()
        setData(dd)
    })

    return (
        <div id="productModal" className=" fixed top-0 pt-14 flex justify-center w-full h-full bg-black backdrop-blur-sm bg-opacity-75 outline-none overflow-x-hidden overflow-y-auto z-10" onClick={handleClose2}>

            <div className="w-[80rem] flex flex-col">
                <button className="text-white text-xl 
            place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-hero-pattern border-white border-2 p-2 
            rounded">
                    {
                        (contentIndex >= 0) && (
                            <div >
                                <div className="py-10 flex flex-row justify-between ">
                                    <div>
                                        <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">{getData()[contentIndex].title}</h1>
                                        <h1 className="text-xl text-white italic">{getData()[contentIndex].comment}</h1>
                                    </div>
                                    <div>
                                        <h1 className="font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-500 hover:from-orange-300 hover:to-orange-600">Amount of pictures: {getData()[contentIndex].pictures.length}</h1>
                                    </div>
                                </div>
                                <div class="flex flex-row ">
                                    <button class="border-solid border-2 rounded-md px-4 py-2 text-black text-xl font-bold
                                    bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 text-left" onClick={() =>
                                            setShownModal(contentIndex)}>View Pictures</button>
                                </div>
                                <div class="flex items-center space-x-6 px-6 py-4">
                                    <div className="flex flex-row flex-wrap justify-center">
                                        {(getData()[contentIndex].pictures).map((picture) => {
                                            return <>
                                                <div className="p-1 bg-gradient-to-tr from-stone-900 border-white border-2 border-dotted flex flex-col m-4 w-64">
                                                    <div className="flex justify-between m-2">
                                                        
                                                        <input
                                                            type="checkbox"
                                                            className="w-5 h-5"
                                                            checked={selectedPictureIds.includes(picture.id)}
                                                            onChange={e => {
                                                                if (selectedPictureIds.includes(picture.id)) {
                                                                    setSelectedPictureIds(selectedPictureIds.filter(id => id !== picture.id))
                                                                } else {
                                                                    setSelectedPictureIds([...selectedPictureIds, picture.id])
                                                                }
                                                            }}
                                                        />
                                                    </div>
                                                    <p className="py-4 font-bold text-xl text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex underline underline-offset-4"> {picture.title} </p>
                                                    <p className="pb-6 text-sm italic text-center truncate"> {picture.comment}  </p>
                                                    <img className="overflow-hidden h-52 mb-0" src={getData()[contentIndex].path + "/" + picture.imgHiRes}></img>
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

            <SlideShow isVisible={shownModal} onClose={() => setShownModal(-1)} selectedPictureIds={selectedPictureIds} contentIndex={shownModal} />
        </div>

    )
}