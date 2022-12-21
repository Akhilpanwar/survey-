import React, { useState } from "react";
import { StyledDiv, SurveyInput } from "../../mainComponent/Styles";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosRemoveCircle } from "react-icons/io";
function Rating() {
  const [increment, setIncrement] = useState(3);
  const [items, setItems] = useState([{ id: 1 }, { id: 2 }]);

  const addItem = () => {
    if (items.length < 20) {
      setItems([...items, { id: increment }]);
      setIncrement(increment + 1);
      console.log(items);
    }
  };
  const removeItem = () => {
    items.pop();
    setItems([...items]);
  };
  return (
    <StyledDiv DP="flex" BG="white" HIB="white" WD="fit-content">
      <StyledDiv DP="flex">
        <IoIosRemoveCircle color="red" size={40} onClick={() => removeItem()} />
        <IoIosAddCircle color="blue" size={40} onClick={() => addItem()} />
      </StyledDiv>

      {items.map((item, index) => {
        return (
          <>
            <StyledDiv DP="flex" BG="white" style={{ flexWrap: "wrap" }}>
              <SurveyInput
                style={{
                  display: "flex",
                   alignItems: "center",
                  justifyContent: "center",
                  textAlign: "center",
                  height: "calc(3 * var(--base-unit, 8px))",
                  boxShadow: "inset 0px 1px 2px rgb(0 0 0 / 15%)",
                  borderRadius: "20px",
                  flexShrink: "0",
                }}
                key={item}
                BG="white"
                FDP="flex"
                placeholder={`${index + 1}`}
                contentEditable="true"
                OW="hidden"
                WW="break-word"
                WB="break-word"
                HG="18px"
                FS="18px"
                PD="20px"
                OT="none"
                FOT="3px solid rgb(25, 179, 148)"
                FBR="40px"
                BSS="10px 1pox 1opx 10px lightgrey"
              />
            </StyledDiv>
          </>
        );
      })}
    </StyledDiv>
  );
}

export default Rating;
