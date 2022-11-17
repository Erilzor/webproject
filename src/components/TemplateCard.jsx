export default function TemplateCard({infotext, image, infotext2, title }) {
    return  <div class="flex flex-col m-2 w-28 h-36 text-xxs text-center bg-white border-solid border-2 border-indigo-500/25 ">     
    <p>{infotext ?? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. "}</p> 
    <img src={image ?? "/img/fazer.png"} class="h-16 object-contain"/>
    <p>{infotext2 ?? "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum, magnam?"} </p> 
    <p class="text-xs"><b>{title ?? "Candy Promotion"}</b> </p>                  
   </div>
  }