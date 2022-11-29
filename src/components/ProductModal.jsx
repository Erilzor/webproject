import React, { useState } from 'react'
import HighRes from "../components/HighRes"

export default function Modal2({ isVisible, onClose }) {
    if (!isVisible) return null;

    const handleClose2 = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    const [selectedTab, setSelectedTab]  = useState("highRes")

    return (
        <div id="wrapper" className="fixed inset-0 bg-black bg-opacity-25  backdrop-blur-sm
        flex justify-center pt-16" onClick={handleClose2}>
            <div className="w-[60rem] flex flex-col">
                <button className="text-white text-xl 
            place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-hero-pattern border-white border-2 p-2 
            rounded">

                   
                    <div class="flex flex-row justify-center">
                        <button class="p-3 text-lg text-white hover:bg-blue-50 hover:text-blue-500"onClick={() => setSelectedTab("highRes")}>high res</button>
                        <button class="p-3 text-lg text-white hover:bg-blue-50 hover:text-blue-500"onClick={() => setSelectedTab("lowRes")}>low res</button>
                    </div>

                    <div class="flex flex-row py-6 justify-between">
                        <div class="w-1/4">
                        { 
                            (selectedTab === "lowRes") &&<div>
                           
                           </div>                             
                           } 
                            {
                              (selectedTab === "highRes") &&<div class="space-y-2 flex flex-col ">
                                    <HighRes/>
                              </div>      
                            }                       
                        </div>
                       
                    </div>
                    <div class="flex flex-row ">
                        <button class="border-solid border-2 rounded-md p-2 text-white bg-gray-300 hover:bg-gray-200" onClick={() => onClose()}>Close</button>
                      
                    </div>

                </div>
            </div>
        </div>
    )
}