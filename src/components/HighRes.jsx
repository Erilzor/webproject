import { useState, useEffect } from "react"
import * as datas from "../../public/app-data/library/picture-library.json"


export default function ProductCard() {
    const [data, setData] = useState([]);
    const getData = () => {
        return datas.albums;

    }

    useEffect(() => {
        const dd = getData()
        setData(dd)
    }, [])
    return (
        <div className="App" class="flex flex-row flex-wrap bg-red-100
      ">



            <div class="flex flex-row flex-wrap space-x-6 px-6 py-4 ">
                {
                    data && data.length > 0 && data.map((item) => {
                        return (<>
                           
                            <div>
                                {item.pictures.map((picture) => {
                                    return <><p>
                                        title: {picture.title} - id: 
                                        {picture.comment}
                                        </p>
                                        <img src={picture.imgHiRes}></img></>
                                })}
                            </div>
                        </>)
                    })
                }


            </div>
          
        </div>
    );
}
