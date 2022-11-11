import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
  
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { FaBars , FaTimes,FaRegEdit} from "react-icons/fa";

export default function PopupGfg(props:any){
  return(
   <Popup
    trigger={<button className="button"> <FaRegEdit/> </button>}
    modal
    nested
    contentStyle={{ width: '85%' , height:'60%'}}
  >
    <div>
       <div>
        <h1>Edit Page</h1>
        <FaBars style={{ position: 'absolute',
    top: '14%',
    left: '95%'}}
   /><FaTimes style={{ position: 'absolute',
   top: '14%',
   left: '98%'}}/>
       </div>
                <Editor
         toolbarClassName="toolbarClassName"
         wrapperClassName="wrapperClassName"
         editorClassName="editorClassName"
         wrapperStyle={{ width: '100%', border: "2px solid black", height:'50%' }}
      />
              
    </div>
  </Popup>
  )
};