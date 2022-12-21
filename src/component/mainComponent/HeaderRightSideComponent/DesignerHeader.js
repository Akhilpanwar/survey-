import React, { useState } from "react";
import { RiEraserLine } from "react-icons/ri";
import { GiSettingsKnobs } from "react-icons/gi";
import { BiUndo, BiRedo, BiArrowToRight, BiArrowToLeft } from "react-icons/bi";

import { StyledLink, StyledDiv, LineSeparator } from "../Styles";
import { useDispatch, useSelector } from "react-redux";
import { setToggle, RemoveToggle } from "../../Redux/Action";

function DesignerHeader({ props }) {
  const [Active, setActive] = useState(false);
  let Dispatch = useDispatch();
  const show = useSelector((state) => state.NavReducer.Toggle);
  console.log(show);
  const handleClickRight = () => {
    Dispatch(setToggle());
    setActive(false);
  };
  const handleClickLeft = () => {
    Dispatch(RemoveToggle());
    setActive(true);
  };
  return (
    <StyledDiv  DP="flex"  MR={Active?"":"29.1%"}>
      <StyledLink MT="35%"to="/About">
        <b>
          <BiUndo />
        </b>
      </StyledLink>

      <StyledLink MT="35%" to="/About">
        <b>
          <BiRedo />
        </b>
      </StyledLink>
<LineSeparator BL="1px Solid lightgrey" MT="40%" MB="7%"></LineSeparator>
      <StyledLink MT="35%" to="/About">
        <b>
          <GiSettingsKnobs />
        </b>
      </StyledLink>
      <StyledLink MT="35%" to="/About">
        <b>
          <RiEraserLine  TC="lightgrey"/>
        </b>
      </StyledLink>
      <LineSeparator BL="1px Solid lightgrey" MT="40%"  MB={Active?"6%":""}></LineSeparator>
      {show ? (
        <>
          <StyledDiv MT="43%" BFS="25px" TC="grey">
            <b>
            <BiArrowToRight onClick={handleClickLeft}  />
            </b>
          </StyledDiv>
        </> 
      ) : (
        <>
          <StyledDiv MT="43%"  BFS="25px" TC="grey">
            <b>
            <BiArrowToLeft onClick={handleClickRight} />
     </b>
          </StyledDiv>
        </>
      )}
    </StyledDiv>
  );
}

export default DesignerHeader;
