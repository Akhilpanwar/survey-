import React, { useState } from "react";
import { StyledLink, StyledDiv } from "./Styles";
import { useDispatch, useSelector } from "react-redux";
import HeaderDropDown from "./HeaderDropDown";

import { DesignerCall ,PreviewCall,LogicCall,TranslationCall,EmbededSurveyCall,JsonEditorCall,AboutCall} from ".././Redux/Action";
function Header() {
  let Dispatch = useDispatch();

  const Show = useSelector((state) => state.NavReducer.Toggle);
  const element = useSelector((state) => state.NavReducer.component);
  
  console.log(Show);
  return (
    <StyledDiv DP="flex" POT="absolute" BG="white" BB="1px solid lightgrey" HG="4%" >
      <StyledDiv WD="80%"  DP="flex"  POT="absolute">
        {!Show ? (
          <StyledDiv DP="flex" POT="absolute">
            <StyledLink
              MT="15%"
              to="/Designer"
              onClick={() => Dispatch(DesignerCall())}
            >
              Designer
            </StyledLink>
            <StyledLink MT="15%" to="/Preview" onClick={()=>Dispatch(PreviewCall())} >
              Preview
            </StyledLink>
            <StyledLink MT="15%" to="/Logic"  onClick={()=>Dispatch(LogicCall())}>
              Logic
            </StyledLink>
            <StyledLink MT="15%" to="/JsonEditor" onClick={()=>Dispatch(JsonEditorCall())}>
              JsonEditor
            </StyledLink>
            <StyledLink MT="15%" to="/EmbededSurvey" onClick={()=>Dispatch(EmbededSurveyCall())}>
              EmbededSurvey
            </StyledLink>
            <StyledLink MT="15%" to="/Translation" onClick={()=>Dispatch(TranslationCall())}>
              Translation
            </StyledLink>
            <StyledLink MT="15%" to="/About" onClick={()=>Dispatch(AboutCall())}>
              About
            </StyledLink>
          </StyledDiv>
        ) : (
          <StyledDiv DP="flex" POT="absolute">
            <StyledLink MT="35%" to="/Designer" onClick={()=>Dispatch(DesignerCall())}>
              Designer
            </StyledLink>
            <StyledLink MT="35%" to="/Preview" onClick={()=>Dispatch(PreviewCall())}>
              Preview
            </StyledLink>
      
            <StyledLink MT="35%" to="/Logic" onClick={()=>Dispatch(LogicCall())}>
              Logic
            </StyledLink>
     
            <StyledDiv DP="flex" MT="30%">
            <HeaderDropDown />
            </StyledDiv>
          </StyledDiv>
        )}
      </StyledDiv>

      {element}


    </StyledDiv>
  );
}

export default Header;
