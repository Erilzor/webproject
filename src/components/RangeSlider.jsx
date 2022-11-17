import { useState } from "react"

export default function RangeSlider() {

    const [leftSliderValue, setLeftSliderValue] = useState(0)
    const [rightSliderValue, setRightSliderValue] = useState(0)

    return <div class="pricewrapper">
        <p>{leftSliderValue}</p>
        <p>{rightSliderValue}</p>
    <div class="pricevalues">
        <span id="range1">
            0
        </span>
        <span> - </span>
        <span id="range2">
            100
        </span>
    </div>
    <div class="relative">
        <div class="absolute bg-red-500 w-full h-6 inset-y-0"></div>
        <input class="absolute w-full h-6 appearance-none inset-y-0 outline-none pointer-events-none bg-transparent"
            type="range" min="0" max="100" id="slider-1" 
            value={leftSliderValue} onChange={e => setLeftSliderValue(e.target.valueAsNumber)}/>
        <input class="absolute w-full h-6 appearance-none inset-y-0 outline-none pointer-events-none bg-transparent"
            type="range" min="0" max="100" id="slider-2" 
            value={rightSliderValue} onChange={e => setRightSliderValue(e.target.valueAsNumber)}/>
    </div>
</div>
}