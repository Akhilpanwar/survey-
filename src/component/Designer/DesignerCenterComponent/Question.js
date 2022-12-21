import React from 'react';
import {IoMdArrowDropdown } from 'react-icons/io';
import {
    StyledDiv,
    SurveyInput,
    StyledButton,
    Heading,
    StyledInput,
    Duplicate,
    Delete,
    Required,
    B,
    BottomBorder,
  } from "../../mainComponent/Styles";
  import { useDispatch, useSelector } from "react-redux";
function Question(){
const ID=useSelector((state)=>state.QuestionReducer.component)
console.log(ID.indexOf())
return(

    <StyledDiv
BG="white !important"
BR="8px"
BS="2px 2px 2px 2px lightgrey"
DP="contents"
WD="fit-content">
<StyledDiv AI="right" >
  <SurveyInput
    DP="flex"
    ML="12px"
    MT="12px"
    role="textBox"
    contentEditable="true"
    placeholder='Question'
    FS="20px"
    BD="none"
    OT="none"
    FBG="white"
    FBD="3px solid rgb(25, 179, 148)"
    FWD="fit-content"
    OW="break-word"
    WW="break-word"
    WB="break-word"
    FBR="5px"
   
  />
</StyledDiv>
<StyledDiv DP="flex" JC="center">
  <StyledInput
    WD="90%"
    MT="4%"
    HG="50px"
    FOT="none"
    BR="5px"
    DP="flex"
    FS="40px"
    BG="whiteSmoke"
    BD="none"
  />
</StyledDiv>



<StyledDiv>

  <StyledDiv DP="flex">
 
    <StyledButton WD="140px" PD="none" BC="white">
      Single Input
      <IoMdArrowDropdown />
    </StyledButton>
  </StyledDiv>
  <StyledDiv FL="right">
    <Delete WD="140px" PD="none" BC="white">
      Delete
    </Delete>
    <Required WD="140px" PD="none" BC="white">
      Required
    </Required>
    <Duplicate WD="140px" PD="none" BC="white">
      Duplicate
    </Duplicate>
  </StyledDiv>
</StyledDiv>
</StyledDiv>




)
} 
export default Question;