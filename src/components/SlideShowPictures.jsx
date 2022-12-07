import { useState } from "react"

export default function SlideShowPictures({ picture, picturepath, selectedTab }) {

    const [isEditable, setEditable] = useState(false)
    const [title, setTitle] = useState(picture.title)
    const [comment, setComment] = useState(picture.comment)

    return <>    
            <div className="p-1 bg-gradient-to-tr from-stone-900 border-white border-2 border-dotted flex flex-col items-center  m-4  justify-center ">
                <button onClick={() => setEditable(!isEditable)} className="border-solid border-2 rounded-md px-3 py-1 mr-2 text-black text-xl font-bold
                 bg-gradient-to-r from-orange-200 to-orange-500 hover:from-orange-300 hover:to-orange-600">{isEditable ? "Save" : "Edit"}</button>

                {!isEditable && <p className="py-4 font-bold text-2xl text-transparent bg-clip-text 
                 bg-gradient-to-r from-orange-500 to-orange-200 hover:from-orange-600 hover:to-orange-300 flex underline underline-offset-4"> {title} </p>}
                {isEditable && <input type="text" className="text-black" value={title} onChange={(e) => setTitle(e.target.value)} />}

                {!isEditable && <p className="pb-6 italic text-center"> {comment} </p>}
                {isEditable && <input type="text" className="text-black" value={comment} onChange={(e) => setComment(e.target.value)} />}


                {selectedTab === "lowRes" && <img className="h-52" src={picturepath + "/" + picture.imgLoRes}></img>}
                {selectedTab === "highRes" && <img src={picturepath + "/" + picture.imgHiRes}></img>}
            </div>
    </>
}








