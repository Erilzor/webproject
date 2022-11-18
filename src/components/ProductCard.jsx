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
       
  
       <div class="flex flex-row space-x-6">
       { 
         data && data.length>0 && data.map((item)=><img key={item.id} src={item.headerImage} />)
       }
       </div>
       
        <div class="flex flex-row space-x-6 ">
          {
             data && data.length>0 && data.map((item)=><p key={item.id}>{item.title}</p>)
          }
           
        </div>
         
       
      
      
      </div>
    );
  }
  