import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronRight
} from "@fortawesome/free-solid-svg-icons";
export default function ToggleBox({header, children}) {
    const [showChildren, setShowChildren] = useState(true)

    return <>
    <div className="flex flex-row">
    {showChildren ? <FontAwesomeIcon icon={faChevronDown}/>  : <FontAwesomeIcon icon={faChevronRight}/> }
        <h1 className="font-bold" onClick={(e) => setShowChildren(!showChildren)}>{header}</h1>
    </div>
        
        {showChildren ? children : undefined}
    </>
}