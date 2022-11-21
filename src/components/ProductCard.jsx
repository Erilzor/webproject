import { useState, useEffect } from "react"
import * as datas from "../../../app-data/library/picture-library.json"


export default function ProductCard() {
    const [data,setData]=useState([]);
    const getData=()=>{
      return datas.albums;
     
    }

    useEffect(()=>{
      const dd = getData()
      setData(dd)
    },[])
    return (
      <div className="App" class="flex flex-col">
       
       <button>XX</button>
  
       <div class="flex flex-row space-x-6 px-6 py-4 ">
       { 
         data && data.length>0 && data.map((item)=><img key={item.id} src={item.headerImage} className="h-52"/>)   
       }
        
         
        </div>   
        <div className="px-6 py-4 ">
            <div className="flex flex-row font-bold text-blue-300 hover:text-blue-400 text-xl mb-2 space-x-6">{data && data.length>0 && data.map((item)=><p key={item.id}>{item.title}</p>)} </div>
        </div>   
      </div>
    );
  }
  