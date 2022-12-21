import React, { useState } from "react";
import {
  StyledDiv,
  StyledUl,
  StyledLi,
  StyledLink,
 
} from "../mainComponent/Styles";
import { Outlet } from "react-router-dom";

//git commit
import {
  MdRadioButtonChecked,
  MdStarOutline,
  MdOutlineCheckBox,
  MdOutlineArrowDropDown,
  MdOutlineImage,
  MdPowerInput,
} from "react-icons/md";
import { TbBoxMargin, TbSwitchHorizontal, TbFile } from "react-icons/tb";
import { GiRank2 } from "react-icons/gi";
import DesignerDrop from "./DesignerDropMenu/DesignerDrop";
import { useSelector } from "react-redux";
import CenterDesigner from "./DesignerCenterComponent/CenterDesigner";
import DesignerDropDown from "./DesignerDropMenu/dropdown";
function Designer() {
  const Show = useSelector((state) => state.NavReducer.Toggle);
  console.log(Show);
  const [color, setColor] = useState("white");
  const [increment, setIncrement] = useState(2);
  const [value, setValue] = useState([{ name: "question", id: 1, value: "*" }]);

  // all my function call start from here
  const AddQuestion = () => {
    setValue([...value, { name: "question", id: increment, value: "*" }]);
    setIncrement(increment + 1);
  };

  const DeleteQuestion = (e, index) => {
    console.log("---->>", e, index);
    const DeleteItem = value.filter((id) => {
      return id !== index;
    });
    setValue(DeleteItem);
  };
  const DuplicateQuestion = (e, id) => {
    setValue([...value, { name: "question", id: id }]);
  };
  // document.getElementByClassName('dragZone').addEventListener('dragStart',function(e){
  //   e.preventDefault();
  // setColor('black')

  // })

  return (
    <StyledDiv DP="flex" POT="absolute" HG="580px">
      <StyledDiv DP="flex" WD="10%" ML="calc(-1.5 * var(--base-unit, 8px))">
        <StyledUl DP="inline-block">
          <StyledLi>
            <b>
              <MdRadioButtonChecked />
            </b>

            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/RadioGroup"
              id="Radio"
              style={{ background: color }}
             
            >
              <i>Radio group</i>
            </StyledLink>
          </StyledLi>

          <StyledLi>
            <b>
              <MdStarOutline />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/Rating"
            >
              <i>Rating </i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <MdOutlineCheckBox />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/Checkbox"
            >
              <i>Check box</i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <MdOutlineArrowDropDown />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/DropDown"
            >
              <i>Dropdown</i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <TbBoxMargin />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/Tagbox"
            >
              <i>TagBox</i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <TbSwitchHorizontal />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/boolean"
            >
              <i>boolean</i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <TbFile />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/File"
            >
              <i>File</i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <MdOutlineImage />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/ImagePicker"
            >
              <i>image Picker</i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <GiRank2 />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/Ranking"
            >
              <i style={{ justifyCenter: "center" }}>Ranking</i>
            </StyledLink>
          </StyledLi>
          <StyledLi>
            <b>
              <MdPowerInput />
            </b>
            <StyledLink
              TC="none"
              FS="none"
              PD="none"
              BFS="none"
              BTC="none"
              to="/Designer/singleInput"
            >
              <i>Single Input</i>
            </StyledLink>
          </StyledLi>

          <DesignerDropDown />
        </StyledUl>
      </StyledDiv>
      <StyledDiv
        WD={Show ? "59.9%" : "92%"}
        style={{ overflowY: "scroll", scrollbar: "10px", maxHeight: "590px" }}
      >
        <CenterDesigner
          show={Show}
          callQuestion={AddQuestion}
          Question={value}
          DUP={DuplicateQuestion}
          Remove={DeleteQuestion}
          props={<Outlet />}
        />
      </StyledDiv>
      <StyledDiv DP={Show ? "flex" : "none"}>
        <DesignerDrop />
      </StyledDiv>
    </StyledDiv>
  );
}

export default Designer;
