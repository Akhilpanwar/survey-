import React from "react";
import { DropLink, DropDown, DropMenu, DropContent,Shapes } from "./Styles";
import {JsonEditorCall,EmbededSurveyCall,TranslationCall,AboutCall} from './../Redux/Action';
import {useDispatch} from  'react-redux';
import Button from '@mui/material/Button';
import Tooltip from "@mui/material/Tooltip";
function HeaderDropDown() {
const Dispatch=useDispatch();
const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (

    <DropDown >
    
      
      <DropMenu>...</DropMenu>
     
      <DropContent >
     
      <DropLink to="JsonEditor" onClick={()=>Dispatch(JsonEditorCall())}>JsonEditor</DropLink>
        <DropLink to="EmbededSurvey" onClick={()=>Dispatch(EmbededSurveyCall())} >
          EmbededSurvey
        </DropLink>

        <DropLink to="Translation" onClick={()=>Dispatch(TranslationCall())} >
          Translation
        </DropLink>
        <DropLink to="About" onClick={()=>AboutCall()}  >
          About
        </DropLink>
      </DropContent>
    
    </DropDown>
   
  );
}

export default HeaderDropDown;
