
import React, { useState } from 'react'

export default function Modal2({ isVisible, onClose }) {
    if (!isVisible) return null;

    const handleClose2 = (e) => {
        if (e.target.id === 'wrapper') onClose();
    }

    const [selectedTab, setSelectedTab]  = useState("layout")

    return (
        <div id="wrapper" className="fixed inset-0 bg-black bg-opacity-25 
        flex justify-end pt-16" onClick={handleClose2}>
            <div className="w-[42rem] flex flex-col">
                <button className="text-white text-xl 
            place-self-end" onClick={() => onClose()}>X</button>
                <div className="bg-white p-2 
            rounded">

                    <div class="pb-4">
                        <p class="text-2xl">Candy Promotion</p>
                        <p>Milk Chocolate</p>
                    </div>
                    <div class="flex flex-row">
                        <button class="p-3 text-lg hover:bg-blue-50 hover:text-blue-500"onClick={() => setSelectedTab("layout")}>Layout</button>
                        <button class="p-3 text-lg hover:bg-blue-50 hover:text-blue-500"onClick={() => setSelectedTab("properties")}>Properties</button>
                    </div>

                    <div class="flex flex-row py-6 justify-between">
                        <div class="w-1/4">
                        { 
                            (selectedTab === "properties") &&<div>
                            <div class="border-dashed border-2 ">
                                <p class="text-xs text-center p-10">Drop your item here</p>
                            </div>
                            <p>Brand</p>
                            <input type="text" class="text-xs" placeholder="Fazer" />
                            <p>Product Name</p>
                            <input type="text" class="text-xs" placeholder="Milk Chocolate" />
                            <p>Price</p>
                            <input type="text" class="text-xs" placeholder="20" />
                           </div>                             
                           } 
                            {
                              (selectedTab === "layout") &&<div class="space-y-2 flex flex-col">
                              <h2 class="text-md  underline">Portrait</h2>
                              <button class="hover:bg-blue-50 py-2" type="button">Portrait A4</button>
                              <button class="hover:bg-blue-50 py-2" type="button">Portrait A5</button>
                              <h2 class="text-md underline">Landscape</h2>
                              <button class="hover:bg-blue-50 py-2" type="button">Landscape A4</button>
                              <button class="hover:bg-blue-50 py-2" type="button">Landscape A5</button>
                              </div>      
                            }                       
                        </div>
                        <div class="border-dashed border-red-400 p-3 border-2 h-96 w-1/2">
                            <h2 class="font-bold text-xl">Fazer</h2>
                            <p class="italic">Milk Chocolate</p>
                            <img src="../img/fazer.png" />
                            <p class="text-green-500 font-bold flex justify-end">20kr</p>
                        </div>
                    </div>
                    <div class="flex flex-row justify-between">
                        <button class="border-solid border-2 rounded-md p-2 hover:bg-gray-200" onClick={() => onClose()}>Close</button>
                        <button class="border-solid border-2 rounded-md p-2 hover:bg-blue-600 bg-blue-500 text-white"> Add to queue</button>
                    </div>

                </div>
            </div>
        </div>
    )
}