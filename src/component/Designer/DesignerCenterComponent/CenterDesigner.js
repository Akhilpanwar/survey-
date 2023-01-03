import React, { useState, useEffect, useRef } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {
  StyledDiv,
  SurveyInput,
  StyledButton,
  Heading,
  Duplicate,
  Delete,
  Required,
  B,
  BottomBorder,
  QuestionNumber,
} from "../../mainComponent/Styles";
import { Routes, Route } from "react-router-dom";
import SingleInput from "../DesignerLeftComponent/singleInput";
import Rating from "../DesignerLeftComponent/Rating";
import Switch from "react-bootstrap/Switch";
import { IoMdArrowDropdown } from "react-icons/io";
import { HiOutlineDuplicate } from "react-icons/hi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsImage } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";
import dropdown from './dropdown';
function CenterDesigner({ show, callQuestion, Question, Remove, DUP, props }) {
  console.log(props);
  const [Title, setTitle] = useState(true);

  const [error, setError] = useState(false);

  const Require = () => {
    setError(!error);
  };

  return (
    <StyledDiv MBS="2%">
      {Title ? (
        <StyledDiv MT="15%">
          <StyledDiv ML="25%">
            <Heading
              FS="calc(2 * var(--base-unit, 10px))"
              FF="var(--font-family)"
              FST="normal"
              FW="normal"
            >
              This survey is empty.Drag an element from the toolbox or click the
              button below
            </Heading>
          </StyledDiv>
          <StyledDiv ML="38%">
            <StyledButton
              color="rgb(25, 179, 148)"
              BG="white"
              FS="20px"
              BD="none"
              PL="10%"
              PB="2%"
              BSS="2px 2px 2px 2px lightgrey"
              PR="10%"
              PT="2%"
              HOT="3px solid rgb(25, 179, 148)"
              onClick={() => setTitle(false)}
            >
              Add Question
            </StyledButton>
          </StyledDiv>
        </StyledDiv>
      ) : (
        <StyledDiv>
          <StyledDiv MIS="7%" MIE="5%">
            <StyledDiv DP="flex">
              <SurveyInput
                DP="flex"
                placeholder="Survey Title"
                contentEditable="true"
                FWD="fit-content"
                FS="44px"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
                FBR="calc(.5 * var(--base-unit, 8px));"
              />
            </StyledDiv>
            <StyledDiv>
              <B style={{ float: "right", display: "flex" }}>
                <BsImage />
              </B>
            </StyledDiv>
            <StyledDiv DP="flex">
              <SurveyInput
                DP="flex"
                FS="18px"
                role="textBox"
                contentEditable="true"
                placeholder="Description"
                OT="none"
                FBG="white"
                BG="WhiteSmoke"
                FOT="3px solid rgb(25, 179, 148)"
                FWD="fit-content"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                FBR="5px"
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv MIS="3%" MIE="3%">
            <BottomBorder></BottomBorder>
          </StyledDiv>
          {/* this is rendering part */}

          <StyledDiv
            tabIndex="1234"
            FBD="2px solid orange"
            HOT="2px solid orange"
            FBG="rgba(251,235,221,1.00)"
            MIS="2%"
            PD="1% 6% 1% 6%"
            MIE="2%"
            
            HBG="rgba(251,235,221,1.00)"
            HIB="rgba(251,235,221,1.00)"
            BR="4px"
            
          >
            <StyledDiv>
              <StyledDiv>
                <StyledDiv DP="flex" MBS="5%">
                  <SurveyInput
                    DP="flex"
                    FS="30px"
                    contentEditable="true"
                    placeholder="Page"
                    OT="none"
                    FBG="white"
                    BG="WhiteSmoke"
                    FOT="3px solid rgb(25, 179, 148)"
                    FWD="fit-content"
                    OW="break-word"
                    WW="break-word"
                    WB="break-word"
                    FBR="3px"
                  />
                </StyledDiv>
                <StyledDiv MBS="1%">
                  <SurveyInput
                    FS="15px"
                    role="textBox"
                    contentEditable="true"
                    placeholder="Description"
                    OT="none"
                    FBG="white"
                    BG="WhiteSmoke"
                    FOT="3px solid rgb(25, 179, 148)"
                    FWD="fit-content"
                    OW="break-word"
                    WW="break-word"
                    WB="break-word"
                    FBR="3px"
                  />
                </StyledDiv>
              </StyledDiv>
              {/* two div left */}

              <StyledDiv>
                {Question.map((index, id, value) => {
                  return (
                    <StyledDiv
                  
                      key={index}
                      JC="center"
                   HBDP="flex"
                   FBDP="flex"
               PT="8%"
               PB="8%"
                      HBS="0 0 0 2px var(--secondary, #ff9814)"
                      BG="white !important"
                      BR="4px"
                      FBS="0 0 0 2px var(--secondary, #ff9814)"
                 
                      MBE="2%"
                      MBS="1%"
                      tabIndex="1234"
                      FOT="2px solid orange"
                      style={{
                        maxHeight: "fit-content",
                        height: "fit-content",
                        boxSizing: "border-box",
                      }}
                      POT="relative"
                    >
                      <StyledDiv DP="flex">
                        <StyledDiv MIS="2%" MBS="2%">
                          <QuestionNumber key={id}>{id + 1}.</QuestionNumber>
                        </StyledDiv>
                        <StyledDiv DP="flex" MIS=".5%" MBS="2%">
                          <SurveyInput
                            key={index}
                            DP="flex"
                            BG="white !important"
                            role="textBox"
                            contentEditable="true"
                            TC="black"
                            placeholder={`${index.name}${id + 1}`}
                            BD="none"
                            OT="none"
                            FBG="white !important"
                            FOT="3px solid rgb(25, 179, 148)"
                            OW="break-word"
                            WW="break-word"
                            WB="break-word"
                            FBR="5px"
                            FS="24px"
                          />
                          <StyledDiv
                            key={index}
                            style={{ marginLeft: "2px", color: "red" }}
                          >
                            {error ? index.value : ""}
                          </StyledDiv>
                        </StyledDiv>
                      </StyledDiv>
                      <StyledDiv  WD="90%"MIS="4%" MBS="3%">
                        {props}
                      </StyledDiv>

                      <StyledDiv MBS="2%" MIS="2%" MIE="2%">
                        <StyledDiv FL="left" DP="flex">
                          <StyledButton
                         
                            WD="140px"
                            PD="none"
                            BD="none"
                            BG="white"
                            OT="none"
                            BC="white"
                            DP="none"
                          >
                            Single Input
                            <IoMdArrowDropdown />
                          </StyledButton>
                        </StyledDiv>
                        <StyledDiv FL="right" DP="flex">
                          <StyledDiv>
                            <Delete
                      
                              JC="right"
                              WD="140px"
                              PD="none"
                              BG="white"
                              onClick={(e) => Remove(e, index)}
                            >
                              <RiDeleteBin6Line color="orange" /> Delete
                            </Delete>
                          </StyledDiv>

                          <StyledDiv DP="flex">
                            <Required>
                              <Switch
                                role="switch"
                                type="checkBox"
                                name="switch"
                                label="Required"
                                onClick={() => Require()}
                              />
                            </Required>
                          </StyledDiv>
                          <StyledDiv DP="flex">
                            <Duplicate
                              WD="140px"
                              PD="none"
                              BG="white"
                              onClick={(e) => DUP(e, id)}
                            >
                              <HiOutlineDuplicate color="orange" /> Duplicate
                            </Duplicate>
                          </StyledDiv>
                        </StyledDiv>
                      </StyledDiv>
                    </StyledDiv>
                  );
                })}

                <StyledDiv MBS="2%">
                  <StyledButton
                    PR={show ? "13px" : "46.5% !important"}
                    BG="white"
                    color="rgb(25, 179, 148)"
                    bg="white"
                    FS="20px"
                    BR="5px"
                    PD="2% 40% 2% 42%"
                    HOT="2px solid rgb(25, 179, 148)"
                    BD="none"
                    BSS="1px 1px 1px 1px lightgrey"
                    onClick={() => callQuestion()}
                  >
                    ADDQuestion
                  </StyledButton>
                </StyledDiv>
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
        </StyledDiv>
      )}
    </StyledDiv>
  );
}

export default CenterDesigner;
