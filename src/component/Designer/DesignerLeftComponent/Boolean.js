import React from "react";
import {
  StyledDiv,
  SurveyInput,
  LineSeparator,
} from "../../mainComponent/Styles";
import Toggle from "react-bootstrap-toggle";

function Boolean() {
  return (
    <StyledDiv BG="white" DP="flex" MBS="12px" MIS="12px">
      <StyledDiv
        WD="fit-content"
        tabIndex="1234"
        OT="none"
        BG="whiteSmoke"
        MW="400px"
        BR="50px"
        DP="flex"
      >
        <StyledDiv>
          <SurveyInput
            FOT="2px solid rgb(25, 179, 148)"
            contentEditable="true"
            placeholder="YES"
            FBR="6px"
            PT="absolute"
          />
        </StyledDiv>
        <StyledDiv DP="flex" MIS="12px">
          <SurveyInput
            FOT="2px solid rgb(25, 179, 148)"
            contentEditable="true"
            FBR="6px"
            DP="flex"
            PT="relative"
            FDP="inline-block"
            BG="whiteSmoke"
            placeholder="NO"
            OT="none"
            BD="none"
          />
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default Boolean;
