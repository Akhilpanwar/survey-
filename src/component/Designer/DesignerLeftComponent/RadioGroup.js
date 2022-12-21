import React, { useState, useRef } from "react";
import {
  StyledDiv,
  SurveyInput,
  StyledInput,
} from "../../mainComponent/Styles";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
import Draggable from "react-draggable";
function RadioGroup() {
  const dragItem = useRef();
  const dragOverItem = useRef();
  const dragEnterItem = useRef();
  const dragLeaveItem = useRef();
  const increment = useRef(4);

  const [NoneValue, setNoneValue] = useState(true);
  const [OthersValue, setOthersValue] = useState(true);

  const [items, setItems] = useState([
    { name: "item", id: 1, value: false },
    { name: "item", id: 2, value: false },
    { name: "item", id: 3, value: false },
  ]);
  const addNone = () => {
    setNoneValue(false);
  };
  const removeNone = () => {
    setNoneValue(true);
  };
  const addOthers = () => {
    setOthersValue(false);
  };
  const removeOthers = () => {
    setOthersValue(true);
  };
  const addItem = () => {
    setItems([...items, { id: increment.current }]);

    increment.current++;
  };
  const removeItem = (index) => {
    const removed = items.filter((item) => {
      return index !== item;
    });
    setItems(removed);
  };

  const handleDrag = (e, index) => {
    e.preventDefault();
    dragItem.current = index;
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    dragOverItem.current = index;
  };
  const handleDrop = (e, index) => {
    e.preventDefault();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    const copy = [...items];
    const item1 = copy[dragItem.current];
    const item2 = copy[dragOverItem.current];
    copy.splice(dragItem.current, 1, item2);
    copy.splice(dragOverItem.current, 1, item1);

    setItems(copy);
  };
  return (
    <StyledDiv WD="38rem">
      {items.map((item, index) => {
        return (
          <StyledDiv DP="flex" WD="18rem" HG="4rem" >
            <StyledDiv
              DP="flex"
              HG="2rem"
              WD="15rem"
              BG="white"
              BD="1px solid black"
              BR="12px"
              AI="center"
              onDragEnter={(e) => handleDragEnter(e)}
              onDragOver={(e) => handleDragOver(e, index)}
              onDrop={(e) => handleDrop(e)}
              onDrag={(e) => handleDrag(e, index)}
              draggable
            >
              <StyledDiv DP="flex">
                <IoIosRemoveCircle
                  size={20}
                  color="red"
                  onClick={() => removeItem(item)}
                />

                <StyledDiv DP="flex">
                  <StyledInput
                    style={{
                      display: "flex",

                      width: "calc(3 * var(--base-unit, 8px))",
                      height: "calc(3 * var(--base-unit, 8px))",
                      boxSizing: "border-box",
                      background: "whiteSmoke",
                      boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",
                      flexShrink: "0",
                    }}
                    BR="12px"
                    BD="none"
                    ML="12px"
                    disabled
                  />
                </StyledDiv>
              </StyledDiv>
              <StyledDiv MIS="1rem" DP="flex">
                <SurveyInput
                  DP="flex"
                  contentEditable="true"
                  OW="none"
                  WW="break-word"
                  WB="break-word"
                  placeholder={`item${item.id}`}
                  BR="20px"
                  FBR="calc(.5 * var(--base-unit, 8px))"
                  OT="none"
                  FOT="3px solid rgb(25, 179, 148)"
                />
              </StyledDiv>
            </StyledDiv>
          </StyledDiv>
        );
      })}

      <StyledDiv AI="center" MBS="1.5rem" DP="flex">
        <StyledDiv DP="flex" JC="center">
          <StyledDiv DP="flex">
            <IoIosAddCircle
              color="rgb(25, 179, 148)"
              size={20}
              onClick={() => addItem()}
            />
            <StyledDiv DP="flex">
              <StyledInput
                style={{
                  display: "flex",

                  justifyContent: "center",
                  width: "calc(3 * var(--base-unit, 8px))",
                  height: "calc(3 * var(--base-unit, 8px))",
                  boxSizing: "border-box",
                  background: "whiteSmoke",
                  boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                  flexShrink: "0",
                }}
                BR="12px"
                BD="none"
                ML="12px"
                disabled
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv DP="flex" MIS="1rem">
            <SurveyInput
              DP="flex"
              contentEditable="true"
              OW="none"
              WW="break-word"
              WB="break-word"
              placeholder={`item${items.length + 1}`}
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv AI="center" MBS="1.5rem" DP="flex">
        <StyledDiv DP="flex" JC="center">
          <StyledDiv DP="flex">
            {NoneValue ? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={addNone}
              />
            ) : (
              <IoIosRemoveCircle size={20} color="red" onClick={removeNone} />
            )}
            <StyledDiv DP="flex">
              <StyledInput
                style={{
                  display: "flex",

                  justifyContent: "center",
                  width: "calc(3 * var(--base-unit, 8px))",
                  height: "calc(3 * var(--base-unit, 8px))",
                  boxSizing: "border-box",
                  background: "whiteSmoke",
                  boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                  flexShrink: "0",
                }}
                BR="12px"
                BD="none"
                ML="12px"
                disabled
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv DP="flex" MIS="1rem">
            <SurveyInput
              DP="flex"
              contentEditable="true"
              OW="none"
              WW="break-word"
              WB="break-word"
              placeholder="None"
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>

      <StyledDiv AI="center" MBS="1.5rem" DP="flex">
        <StyledDiv DP="flex" JC="center">
          <StyledDiv DP="flex">
            {OthersValue ? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={addOthers}
              />
            ) : (
              <IoIosRemoveCircle size={20} color="red" onClick={removeOthers} />
            )}

            <StyledDiv DP="flex">
              <StyledInput
                style={{
                  display: "flex",

                  justifyContent: "center",
                  width: "calc(3 * var(--base-unit, 8px))",
                  height: "calc(3 * var(--base-unit, 8px))",
                  boxSizing: "border-box",
                  background: "whiteSmoke",
                  boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                  flexShrink: "0",
                }}
                BR="12px"
                BD="none"
                ML="12px"
                disabled
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv MIS="1rem">
            <SurveyInput
              DP="flex"
              contentEditable="true"
              OW="none"
              WW="break-word"
              WB="break-word"
              placeholder="Others(Describe)"
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default RadioGroup;
