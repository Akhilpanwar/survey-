import React, { useState } from "react";
import {  StyledButton, StyledLI, StyledDiv } from "../../mainComponent/Styles";
import { useDispatch, useSelector } from "react-redux";
import {
  GeneralCall,
  LogoCall,
  NavigationCall,
  PagesCall,
  QuestionCall,
  LogicCall,
  DataCall,
  ValidationCall,
  SurveyCompleteCall,
  QuizCall,
} from "../../Redux/Action";
const DesignerContent = ({ faq, onToggle, active }) => {
  const { question, answer } = faq;

  return(
    <StyledLI BG="whiteSmoke" ML="-32px"   >
      <StyledButton
        
        ABG="lightgrey"
        HBG="whiteSmoke"
        BG="white"
        WD="100%"
        FS="18px"
        PD="15px"
        BS="none"
        TA="left" 
        BB="1px solid darkGrey!important"
        FBG="white"
        TC="grey"
        FC="Black"
        OF="hidden"
        onClick={onToggle}
      >
        {question}
      </StyledButton>
      <StyledDiv  DP={active?"show":"none"}>
        <StyledDiv>{answer}</StyledDiv>
      </StyledDiv>
    </StyledLI>
  );
};

export default DesignerContent;
