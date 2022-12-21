import React, { useState, useRef } from "react";
import {
  StyledDiv,
  SurveyInput,
  StyledInput,
} from "../../mainComponent/Styles";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
function CheckBox() {
  const DragPosition = useRef();
  const DropPosition = useRef();
  const [NoneValue, setNoneValue] = useState(true);
  const [OthersValue, setOthersValue] = useState(true);
  const [select, setSelect] = useState(true);
  const [increment, setIncrement] = useState(2);
  const [show, setShow] = useState(true);
  const [items, setItems] = useState([
    { name: "item", id: 1, background: "" },
    { name: "item", id: 2 },
    { name: "item", id: 3 },
  ]);
  const AddSelect = () => {
    setSelect(false);
  };
  const RemoveSelect = () => {
    setSelect(true);
  };
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
    setItems([...items, { id: increment }]);

    setIncrement(increment + 1);
  };
  const removeItem = (index) => {
    const removed = items.filter((item) => {
      return item !== index;
    });
    setItems(removed);
    console.log("hello");
  };

  const handleDragStart = (e, index) => {
    e.preventDefault();

    DragPosition.current = index;
  };
  const handleDragOver = (e, index) => {
    e.preventDefault();
    DropPosition.current = index;
    const copyItems = [...items];
    const item1 = copyItems[DragPosition.current];
    const item2 = copyItems[DropPosition.current];

    copyItems.splice(DragPosition.current, 1, item2);
    copyItems.splice(DropPosition.current, 1, item1);
    DragPosition.current = null;
    DropPosition.current = null;

    setItems(copyItems);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const copyItems = [...items];
    const item1 = copyItems[DragPosition.current];
    const item2 = copyItems[DropPosition.current];

    copyItems.splice(DragPosition.current, 1, item2);
    copyItems.splice(DropPosition.current, 1, item1);
    DragPosition.current = null;
    DropPosition.current = null;

    setItems(copyItems);
  };

  return (
    <StyledDiv DP="flex">
      <StyledDiv DP="flex">
        <StyledDiv DP="flex" FD="column">
          <StyledDiv DP="flex">
            {select ? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={AddSelect}
              />
            ) : (
              <IoIosRemoveCircle size={20} color="red" onClick={RemoveSelect} />
            )}
            <StyledInput
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "calc(3 * var(--base-unit, 8px))",
                height: "calc(3 * var(--base-unit, 8px))",
                boxSizing: "border-box",
                background: "whiteSmoke",
                boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                flexShrink: "0",
              }}
              BD="none"
              ML="12px"
              disabled
            />
            <StyledDiv DP="flex" MIE="15%">
              <SurveyInput
                ML="12px"
                DP="flex"
                contentEditable="true"
                placeholder="SelectAll"
                BG="white"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                BR="20px"
                FBR="calc(.5 * var(--base-unit, 8px))"
              />
            </StyledDiv>
          </StyledDiv>

          {items.map((item, index) => {
            return (
              <StyledDiv
                DP="flex"
                MBS="5%"
                style={{ background: item.background }}
                onDrag={(e) => handleDragStart(e, index)}
                onDrop={(e) => handleDrop(e)}
                onDragOver={(e) => {
                  handleDragOver(e, index);
                }}
                draggable
              >
                <IoIosRemoveCircle
                  size={20}
                  color="red"
                  key={index}
                  onClick={() => removeItem(index)}
                />
                <StyledInput
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "calc(3 * var(--base-unit, 8px))",
                    height: "calc(3 * var(--base-unit, 8px))",
                    boxSizing: "border-box",
                    background: "whiteSmoke",
                    boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                    flexShrink: "0",
                  }}
                  BD="none"
                  ML="12px"
                  disabled
                />
                <StyledDiv DP="flex" MIE="15%">
                  <SurveyInput
                    ML="12px"
                    DP="flex"
                    contentEditable="true"
                    placeholder={`item${item.id}`}
                    BG="white"
                    OT="none"
                    FOT="3px solid rgb(25, 179, 148)"
                    OW="break-word"
                    WW="break-word"
                    WB="break-word"
                    BR="20px"
                    FBR="calc(.5 * var(--base-unit, 8px))"
                  />
                </StyledDiv>
              </StyledDiv>
            );
          })}
          <StyledDiv DP="flex" MBS="5%">
            <IoIosAddCircle
              color="rgb(25, 179, 148)"
              size={20}
              onClick={() => addItem()}
            />
            <StyledInput
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "calc(3 * var(--base-unit, 8px))",
                height: "calc(3 * var(--base-unit, 8px))",
                boxSizing: "border-box",
                background: "whiteSmoke",
                boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",

                flexShrink: "0",
              }}
              BD="none"
              ML="12px"
              disabled
            />
            <StyledDiv MIE="15%">
              <SurveyInput
                ML="12px"
                DP="flex"
                contentEditable="true"
                BG="white"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                BR="20px"
                FBR="calc(.5 * var(--base-unit, 8px))"
                placeholder={`item${items.length + 1}`}
              />
            </StyledDiv>
          </StyledDiv>

          <StyledDiv DP="flex" MBS="5%">
            {NoneValue ? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={addNone}
              />
            ) : (
              <IoIosRemoveCircle size={20} color="red" onClick={removeNone} />
            )}
            <StyledInput
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "calc(3 * var(--base-unit, 8px))",
                height: "calc(3 * var(--base-unit, 8px))",
                boxSizing: "border-box",
                background: "whiteSmoke",
                marginLeft: "12px",
              }}
              BD="none"
              disabled
            />
            <StyledDiv MIE="15%">
              <SurveyInput
                ML="12px"
                DP="flex"
                contentEditable="true"
                placeholder="None"
                BG="white"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
                OW="break-word"
                WW="break-word"
                WB="break-word"
                BR="20px"
                FBR="calc(.5 * var(--base-unit, 8px))"
                ML="12px"
              />
            </StyledDiv>
          </StyledDiv>
          <StyledDiv DP="flex" MBS="5%">
            {OthersValue ? (
              <IoIosAddCircle
                size={20}
                color="rgb(25, 179, 148)"
                onClick={addOthers}
              />
            ) : (
              <IoIosRemoveCircle size={20} color="red" onClick={removeOthers} />
            )}
            <StyledInput
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "calc(3 * var(--base-unit, 8px))",
                height: "calc(3 * var(--base-unit, 8px))",
                boxSizing: "border-box",
                background: "whiteSmoke",
              }}
              BD="none"
              ML="12px"
              disabled
            />

            <SurveyInput
              ML="12px"
              DP="flex"
              contentEditable="true"
              placeholder="others(Describe)"
              BG="white"
              OT="none"
              FOT="3px solid rgb(25, 179, 148)"
              OW="break-word"
              WW="break-word"
              WB="break-word"
              BR="20px"
              FBR="calc(.5 * var(--base-unit, 8px))"
            />
          </StyledDiv>
        </StyledDiv>
      </StyledDiv>
    </StyledDiv>
  );
}

export default CheckBox;
