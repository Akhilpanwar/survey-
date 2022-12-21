import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";

//===================================styledDiv===============================//
export const StyledDiv = styled.div`
text-align:${(props)=>props.TA};
  margin-left: ${(props) => props.ML};
  margin-right: ${(props) => props.MR};
  margin-top: ${(props) => props.MT};
  margin-bottom: ${(props) => props.MB};
  display: ${(props) => props.DP};
  height: ${(props) => props.HG};
  width: ${(props) => props.WD};
  padding: ${(props) => props.PD};
  padding-right: ${(props) => props.PR};
  padding-bottom: ${(props) => props.PB};
  border-bottom: ${(props) => props.BB};
  background: ${(props) => props.BG};
  flex-direction: ${(props) => props.FD};
  position: ${(props) => props.PT};
visibility:${(props)=>props.VI};
  justify-content: ${(props) => props.JC};
  top: ${(props) => props.TP};
  border-box: ${(props) => props.BBX};
  border: ${(props) => props.BD};
  float: ${(props) => props.FL};
  margin-block-start: ${(props) => props.MBS};
  left: ${(props) => props.LT};
  outline: ${(props) => props.OT};
  margin-block-end: ${(props) => props.MBE};
  margin-inline-start: ${(props) => props.MIS};
  margin-inline-end: ${(props) => props.MIE};
  box-shadow: ${(props) => props.BS};
  border-radius: ${(props) => props.BR};
  transition: ${(props) => props.TRA};
  opacity: ${(props) => props.OP};
  overflow:${(props)=>props.OW};
  word-wrap:${(props)=>props.WW};
  word-break:${(props)=>props.WB};
  text-color:${(props)=>props.TC};
  content:${(props)=>props.CO};
  align-items:${(props)=>props.AI};
  cursor:${(props)=>props.CUR};
  &:focus {
    background: ${(props) => props.FBG};
    border: ${(props) => props.FBD};
  }
  b {
    font-size: ${(props) => props.BFS};
    color: ${(props) => props.TC};
  }
  &:hover span {
    background: ${(props) => props.HIB};
  }
  &:hover {
    background: ${(props) => props.HBG};
    background-color: ${(props) => props.HBC};
    z-index: ${(props) => props.HZI};
    outline: ${(props) => props.HOT};
    box-shadow: ${(props) => props.HBS};
  }
  &:hover button {
    display: ${(props) => props.HBDP};
  }
  &:focus button {
    display: ${(props) => props.FBDP};
  }
`;

export const SideMenu = styled.div`
  margin-left: ${(props) => props.ML};

  b {
    font-size: 25px;
    color: grey;
  }
`;
//===================================Links============================
export const StyledLink = styled(Link)`
  margin-top: ${(props) => props.MT};
  position: ${(props) => props.PS};
  color: ${(props) => props.TC || "black"};
  font-size: ${(props) => props.FS || "18px"};
  text-decoration: none;
  padding: ${(props) => props.PD || "25px"};
  b {
    font-size: ${(props) => props.BFS || "25px"};
    color: ${(props) => props.BTC || "grey"};
  }
  &:hover {
    background: whiteSmoke;
  }
  &:focus {
    font-weight: bold;
    border-bottom: 1px solid rgb(25, 179, 148);
  }
`;
//================================DropDown Menu Css=======================//
export const DropDown = styled.button`
  margin-top: 23%;
  display: inline-block;
  position: relative;
  outline: none;
  border: none;
  background: white;
  &:focus div {
    display: block;
  }
`;

export const DropMenu = styled.div`
  color: black;
  padding: 12px;
  font-size: 26px;
  border: none;

  &:hover {
    background: whiteSmoke;
  }
`;

export const DropContent = styled.div`
  margin-left: -52px;
  display: none;
  position: absolute;
  background-color: white;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  min-width: 160px;
  z-index: 1;

  Link {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
`;
export const DropLink = styled(Link)`
  display: inline-block;
  color: black;
  font-size: 18px;
  text-decoration: none;
  padding: 25px;
  float: left;
  &:hover {
    background: whiteSmoke;
  }
`;
//============================separators==============================//
export const DivSideMenu = styled.div`
  display: ${(props) => props.Dp};
  margin-left: ${(props) => props.ML};
`;
export const DivIcon = styled.div`
  padding-left: ${(props) => props.PL};
  margin-top: ${(props) => props.MT};
`;
export const LineSeparator = styled.div`
  border-left: ${(props) => props.BL};
  margin-top: ${(props) => props.MT};
  margin-bottom: ${(props) => props.MB};
`;
//============================styledUl=============================
export const StyledUl = styled.ul`
  position: ${(props) => props.PT};
  list-style-type: ${(props) => props.LT};
  width: ${(props) => props.WD};
  background: ${(props) => props.BG};
  margin: ${(props) => props.MG};
  margin-left: ${(props) => props.ML};
  margin-right: ${(props) => props.MR};
  margin-top: ${(props) => props.MT};
  margin-bottom: ${(props) => props.MB};
  padding: ${(props) => props.PD};
  padding-left: ${(props) => props.PL};
  transition: ${(props) => props.TR};
  padding-right: ${(props) => props.PR};
  width: ${(props) => props.WD};
  padding-top: ${(props) => props.PT};
  padding-down: ${(props) => props.PD};
  float: ${(props) => props.FL || "left"};
  overflow: ${(props) => props.OF};
  display: ${(props) => props.DP};
  border: ${(props) => props.BD};
  border-top: ${(props) => props.BT};
  align-item: ${(props) => props.AI || "left"};
`;

export const StyledLi = styled.li`
  align-items: center;
  list-style: none;

  white-space: nowrap;
  margin-right: 70px;
  border-radius: 25px;
  display: inline-block;
  position: static;

  &:hover {
    background-color: white;
    box-shadow: 0px 2px 6px rgb(0 0 0 / 10%);
  }
  a {
    opacity: 0;
    color: black;
    max-width: 0;
    display: inline-block;
    text-decoration: none;
    transition: max-width 1s ease-out 0.1s, opacity 0.1s ease-out 0.1s, color;
  }
  a:hover {
    color: rgb(25, 179, 148);
  }
  a i {
    display: inline-block;
    padding-right: 1em;
    font: 1em/1 "rokkitt", sans-serif;

    vertical-align: 7px;
  }
  i {
  }

  b {
    padding-top: 12px;
    color: grey;
    line-height: 1;
    font-size: 25px;
    display: inline-block;
    padding: 0.375em 0.375em;
  }

  &:hover a {
    opacity: 1;
    max-width: 500px;
    transition: max-width 1s ease-out 0.1s, opacity 1s ease-out 0.1s, color;
  }

  & b:hover {
    color: rgb(25, 179, 148);
  }
`;
export const StyledLI = styled.li`
list-style-type:none;
  background: ${(props) => props.BG};
  margin: ${(props) => props.MG};
  margin-left: ${(props) => props.ML};
  margin-right: ${(props) => props.MR};
  margin-top: ${(props) => props.MT};
  margin-bottom: ${(props) => props.MB};
  padding: ${(props) => props.PD};
  padding-left: ${(props) => props.PL};
  width: ${(props) => props.WD};
  padding-right: ${(props) => props.PR};
  padding-top: ${(props) => props.PT};
  padding-down: ${(props) => props.PD};
  float: ${(props) => props.FL};
  overflow: ${(props) => props.OF};
  display: ${(props) => props.DP};
  border: ${(props) => props.BD};
`;
//=========================================button css ===============
export const StyledButton = styled.button`
  position: ${(props) => props.POT};
  background: ${(props) => props.BG};
  color: ${(props) => props.color};
  font-size: ${(props) => props.FS};
  float: ${(props) => props.FL};

  border: ${(props) => props.BD};
  border-radius: ${(props) => props.BR};
  padding-left: ${(props) => props.PL};
  padding-right: ${(props) => props.PR};
  padding-top: ${(props) => props.PT};
  padding-bottom: ${(props) => props.PB};
  padding: ${(props) => props.PD};
  left: ${(props) => props.LEFT};
  box-shadow: ${(props) => props.BSS};
  outline: ${(props) => props.OT};
  flex-grow: ${(props) => props.FG};
  margin-right: ${(props) => props.MR};
  margin-left: ${(props) => props.ML};
  width: ${(props) => props.WD};
  font-size: ${(props) => props.FS};
  margin-bottom: ${(props) => props.MB};
  text-align: ${(props) => props.TA};
  border-bottom: ${(props) => props.BB};
  border-style: ${(props) => props.BS};
  color: ${(props) => props.TC};
  margin-inline-start: ${(props) => props.MIS};
  margin-inline-end: ${(props) => props.MIE};
  display: ${(props) => props.DP};

  &:hover {
    outline: ${(props) => props.HOT};
    background: ${(props) => props.HBG};
    cursor: pointer;
    border: ${(props) => props.HBD};
  }
  &:focus {
    background: ${(props) => props.FBG};
    color: ${(props) => props.FC};

    cursor: pointer;
  }
`;

export const DataButton = styled.button`
  background: white;
  height: 45px;
  width: 50%;
  font-size: 20px;
  border: 1px solid lightgrey;
  &:focus {
    background: white;
    cursor: pointer;
    color: rgb(25, 179, 148);
  }
  &:active {
    background: white;
    cursor: pointer;
  }
  &:hover {
    background: lightgrey;
  }
`;

export const Duplicate = styled.button`
  border: none;
  color: black;
  margin-left: 12px;
  background: white;
  cursor: pointer;
  float: ${(props) => props.FL};
  display: none;
  &:hover {
    background: white;
  }
`;
export const Delete = styled.button`
  margin-left: ${(props) => props.ML};
  cursor: pointer;
  border: none;
  display: none;
  background: ${(props) => props.BG || "white"};
  &:hover {
    background: white;
  }
`;
export const Required = styled.button`
  border: none;
  margin-left: 12px;
  cursor: pointer;
  background: white;
  display: none;

  &:hover {
    background: var(--background-dim, #f3f3f3);
    borderradius: 5px;
  }
  &:focus: {
    background: var(--background-dim, #f3f3f3);
    borderradius: 5px;
  }
`;
export const QuestionNumber = styled.span`
  font-size: 25px;
  background: white !important;
  color: grey;
`;
export const Heading = styled.h1`
  font-family: ${(props) => props.FF};
  line_height: ${(props) => props.LH};
  font-style: ${(props) => props.FST};
  font-weight: ${(props) => props.FW};
  background: ${(props) => props.BG};
  margin: ${(props) => props.MG};
  width: ${(props) => props.WD};
  margin-left: ${(props) => props.ML};
  margin-right: ${(props) => props.MR};
  margin-top: ${(props) => props.MT};
  margin-bottom: ${(props) => props.MB};
  padding: ${(props) => props.PD};
  padding-left: ${(props) => props.PL};
  font-size: ${(props) => props.FS || "15px"};
  padding-right: ${(props) => props.PR};
  color: ${(props) => props.TC || "Grey"};
  padding-top: ${(props) => props.PT};
  padding-down: ${(props) => props.PD};
  float: ${(props) => props.FL};
  overflow: ${(props) => props.OF};
  display: ${(props) => props.DP};
  border: ${(props) => props.BD};
  text-align: ${(props) => props.TA};
`;
export const StyledInput = styled.input`
  margin-top: ${(props) => props.MT};
  margin-left: ${(props) => props.ML};
  display: ${(props) => props.DP};
  width: ${(props) => props.WD};
  height: ${(props) => props.HG};
  border: ${(props) => props.BD};
  outline: ${(props) => props.OT};
  font-size: ${(props) => props.FS};
  background: ${(props) => props.BG};
  position: ${(props) => props.PT};
  box-shadow: ${(props) => props.BS};
  border-radius: ${(props) => props.BR};
  &:focus {
    width: ${(props) => props.FWD};
    outline: ${(props) => props.FOT};
    border: ${(props) => props.FBD};
    border-radius: ${(props) => props.FBR};
  }
  &:hover {
    background: ${(props) => props.HBG};
  }
`;

//============================checkbox========
export const CheckBox = styled.input`
  display: flex;
  flex-direction: column;
  width: 25px;
  height: 25px;
  margin-top: 12px;
`;
//========================centerDesigner css=================================
export const SurveyHead = styled.input`
  font-size: 30px;
  border: none;
  display: block;
  outline: none;
  background: whiteSmoke;
  white-space: pre-wrap;

  &:focus {
    border-padding: none;
    border: 2px solid rgb(25, 179, 148);
    text-align: justify-content;
    border-radius: 5px;
  }
`;

export const SurveyDes = styled.input`
  margin-top: 1%;
  outline: none;
  border: none;
  background: whiteSmoke;

  &:focus {
    border-radius: 5px;
    border: 1px solid rgb(25, 179, 148);
  }
`;

export const ImageInput = styled.input`
  float: right;
`;

export const BottomBorder = styled.h1`
  border-bottom: 2px solid rgb(25, 179, 148);
`;
export const B = styled.b`
  float: right;
  color: lightGrey;
  font-size: 30px;
  margin-right: 12px;
`;
export const PageHead = styled.input`
  color: black;
  margin-left: ${(props) => props.ML};
  border: none;
  outline: none;
  word-break: break-word;
  z-index: 12;
  cursor: text;
  white-space: pre-wrap;
  display: inline-block;
  word-break: break-word;
  z-index: 12;
  background: whiteSmoke;
  position: relative;
  &:focus {
    max-length: 10;
    size: 1;
    max-size: 100;
    padding: 0px !important;
    min-width: -100px !important;
    max-width: 200px !important;
    border: 1px solid rgb(25, 179, 148);
    border: justify-content;
    border-radius: 5px;
  }
`;
export const PageData = styled.div`
  display: inline-block;
`;
//=======================center Designer============
export const SurveyInput = styled.span`
  background: ${(props) => props.BG};
  display: ${(props) => props.DP};
  outline: ${(props) => props.OT};
  font-size: ${(props) => props.FS};
  border: ${(props) => props.BD};
  font-size: ${(props) => props.FS};
  overflow-wrap: ${(props) => props.OW};
  word-wrap: ${(props) => props.WW};
  word-break: ${(props) => props.WB};
  color: ${(props) => props.TC};
  padding: ${(props) => props.PD};
  margin-left: ${(props) => props.ML};
  max-width: ${(props) => props.MW};
  height: ${(props) => props.HG};
  &:focus {
    overflow:${(props)=>props.FOW};
    word-break:${(props)=>props.FWB};
    word-wrap:${(props)=>props.FWW};
    border-radius: ${(props) => props.FBR};
    outline: ${(props) => props.FOT};
    width: ${(props) => props.FWD};
    color: black;
    background: white !important;
    text-decoration: none;
    display: ${(props) => props.FDP};
    position: ${(props) => props.FPT};
    white-space: ${(props) => props.FWS};
    z-index: ${(props) => props.FZI};
  }
  [placeholder]:empty&:before {
    content: Attr(placeholder);
    cursor: text;
    opacity: 0.5;
    color: ${(props) => props.PTC};

    text-decoration: none;
  }
 &:hover{
  background:${(props)=>props.HBG};
 }
`;
export const ScrollBar = styled.div`
  overflow-y: auto;
  scroll-background-color:whiteSmoke;
  scroll-behavior: smooth;
  scrollbar-width: fit-content;
  scrollbar-height: 400px;
  width: 1200px;
  height: 600px;
  position: static;
`;

export const styledBox = styled.div``;
export const DropDiv = styled.div`
  position: relative;

  &:focus ul {
    display: block;
  }
`;

export const DropButton = styled.button`
  border: none;
  background: whiteSmoke;
  margin-left: 12px;
`;
export const DropUpContent = styled.ul`
  display: none;
  box-size: border-box;
  position: relative;
  border: none;
  width: 200px;
  height: 200px;
  background: whiteSmoke;
`;
export const DropUpLink = styled(Link)`
  padding: 20px;
  background: white;
  text-decoration: none;
  color: black;
  &:hover {
    background: whiteSmoke;
    color: black;
  }
`;
export const DropUpBorder = styled.div`
  border-bottom: 1px solid lightgrey;
  margin-top: 1px;
`;
