import React from 'react'
import RangeSlider from './RangeSlider';
import ToggleBox from './ToggleBox';

 const Modal = ({isVisible, onClose}) => {
    if(!isVisible) return null;
    
    const handleClose = (e) => {
        if(e.target.id === 'wrapper') onClose();
    }
    return (
        <div id="wrapper" className="fixed inset-0 bg-black bg-opacity-25 
        backdrop-blur-sm flex justify-left pt-16" onClick={handleClose}>
            <div className="w-[20rem] flex flex-col">
            <button className="text-white text-xl 
            place-self-end" onClick={() => onClose()}>X</button>
            <div className="bg-white p-2 
            rounded"> 
            
                <div class="space-y-8">
                    <div class="flex justify-between">
                    <button class="bg-gray-200 hover:bg-gray-300 border-solid border-2 border-gray-400 justify-right rounded">Apply filter</button>
                    <button class="bg-gray-200 hover:bg-gray-300 border-solid border-2 border-gray-400 justify-right rounded">Clear filter</button>

                    </div>
                    <ToggleBox header="Campaign">
                        <label class="hover:bg-gray-200">
                            <input type="checkbox" />
                            Summer 2022 
                            <span class="text-xs text-gray-400">  (120) </span> <br></br> 
                        </label>
                        <label class="hover:bg-gray-200">
                            <input type="checkbox"/>
                            Halloween 2022
                            <span class="text-xs text-gray-400"> (98)</span> <br></br> 
                        </label>
                        <label class="hover:bg-gray-200">
                            <input type="checkbox" />
                            Black Friday 2022
                            <span class="text-xs text-gray-400"> (160)</span> <br></br> 
                        </label>
                        <label class="hover:bg-gray-200">
                            <input type="checkbox" />
                            Christmas 2022
                            <span class="text-xs text-gray-400"> (2564)</span>
                        </label>     
                    </ToggleBox>

                    <ToggleBox header="Changed">
                    <label class="border-dashed border-2 py-1 mt-2">
                        <input type="date"/>
                        <input type="date"/>
                    </label>
                    </ToggleBox>

                    <ToggleBox header="Price">
                    
                    {/* <RangeSlider></RangeSlider> */}
            
                    <label>
                         <p class="hover:bg-gray-200">50-150kr<span class="text-xs text-gray-400">(120)</span></p>
                    </label>
                    <label >
                        <p class="hover:bg-gray-200">150-300kr<span class="text-xs text-gray-400">(67)</span></p>
                    </label>
                    <label>
                        <p class="hover:bg-gray-200">300-500kr<span class="text-xs text-gray-400">(12)</span></p>
                    </label>
                    <label>
                        <p class="hover:bg-gray-200">500-1000kr<span class="text-xs text-gray-400">(7)</span></p>
                    </label>
                    <label>
                        <p class="hover:bg-gray-200">Over 1000kr<span class="text-xs text-gray-400">(2)</span></p>
                    </label>
                   
                  
                    
                    
                    </ToggleBox>

                    <ToggleBox header="Format">
                    <label class="hover:bg-gray-200">
                      <input type="checkbox"/>
                      Portrait A4 <br></br> 
                    </label>
                    <label class="hover:bg-gray-200">
                      <input type="checkbox"/>
                      Portrait A5  <br></br>            
                    </label>
                    <label class="hover:bg-gray-200">
                      <input type="checkbox"/>
                      Landscape A4 <br></br> 
                    </label>
                    <label class="hover:bg-gray-200">
                      <input type="checkbox"/>
                      Landscape A5
                    </label>
                    </ToggleBox>

                    <ToggleBox header="Color">
                    <label>
                        <input type="color"value="#3264fe"/>
                    </label>
                    
                    </ToggleBox>
                </div>

                   

                       

                        

                     
              


            
            </div>
            </div>
        </div>
    )
 }

export default Modal