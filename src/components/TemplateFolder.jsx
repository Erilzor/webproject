import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFolder, 
  faFolderOpen
} from "@fortawesome/free-solid-svg-icons";
export default function FolderCard({foldername, icon}) {
    var FolderIcon;
    if(icon == 'open')
    FolderIcon = faFolderOpen;
    else if (icon == 'closed')
    FolderIcon = faFolder;
   
    return  <div class="flex flex-row m-2 w-48 h-16 pl-6 justify-items-center bg-white border-solid border-0 border-border-color">           
            <div class="flex flex-row items-center">
            <FontAwesomeIcon icon={FolderIcon} />     
            <p>{foldername ?? "Promotion"}</p> 
            </div>
        </div>               
  }