import { useState, useEffect } from "react"
import * as datas from "../../public/app-data/library/picture-library.json"
import SlideShowPictures from "./SlideShowPictures";
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';
import { BsInfoCircle } from "react-icons/bs";
import { BsArrowLeftCircle } from "react-icons/bs";

export default function SlideShow({ isVisible, onClose, contentIndex, selectedPictureIds }) {
    if (isVisible == -1) return null;

    const handleClose2 = (e) => {
        if (e.target.id === 'none') onClose();
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

    SwiperCore.use([Autoplay])

    return (
        <div id="slideShow" className=" fixed top-0 pt-14 flex justify-center w-full h-full bg-black backdrop-blur-sm bg-opacity-75 outline-none overflow-x-hidden overflow-y-auto z-10" onClick={handleClose2}>
            <div className="w-[70rem] flex flex-col">
                <button className="text-white text-xl 
                place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-hero-pattern border-white border-2 p-2 
                rounded">
                    <div className="flex flex-row justify-between">
                        <h1 className="font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r 
                        from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300">{getData()[contentIndex].title}</h1>
                        <button onClick={() => alert('Swipe to see more pictures')} className="border-solid border-2 rounded-full px-3 py-2 text-black text-xl font-bold
                        bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300"> <BsInfoCircle /> </button>
                    </div>
                    <div class="flex flex-row justify-center space-x-6">
                        <button class="border-solid border-2 rounded-md px-4 py-2 text-black text-xl font-bold
                         bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 text-left" onClick={() => setSelectedTab("highRes")}>High Resolution</button>
                        <button class="border-solid border-2 rounded-md px-4 py-2 text-black text-xl font-bold
                         bg-gradient-to-r from-orange-200 to-orange-500 hover:from-orange-300 hover:to-orange-600 text-left" onClick={() => setSelectedTab("lowRes")}>Low Resolution</button>
                    </div>
                    <div class="flex flex-row ">
                        <button class="border-solid border-2 rounded-md px-4 py-2 text-black text-xl font-bold
                          bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 text-left" onClick={() => onClose()}><BsArrowLeftCircle/></button>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        loop={true}
                    // autoplay={{
                    //     delay: 5000
                    // }}
                    >{
                            (contentIndex >= 0) && (
                                (getData()[contentIndex].pictures).filter(p => selectedPictureIds.includes(p.id)).map((picture) => {
                                    return <SwiperSlide><SlideShowPictures picture={picture} picturepath={getData()[contentIndex].path} selectedTab={selectedTab} /></SwiperSlide>
                                })
                            )
                        }
                    </Swiper>
                </div>
            </div>
        </div>
    )
}