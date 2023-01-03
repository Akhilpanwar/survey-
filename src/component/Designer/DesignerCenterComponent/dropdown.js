import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { MdOutlineSearch } from "react-icons/md";
import Form from "react-bootstrap/Form";
import {
  CenteredLink,
  StyledInput,
  StyledDiv,
} from "../../mainComponent/Styles";
import { Items,Items2,Items3 } from "./Items";
import { useNavigate } from "react-router-dom";
function AddDropdown() {
  const Navigate = useNavigate();
  const [value, setValue] = useState("");
  const [drop, setDrop] = useState("Single Input");

  const handleChange = (e) => {
    setValue(e.target.value);
    
  };
  const handleClick = (e, item) => {
  
    switch (item.title) {
      case "Single Input":
        Navigate("/Designer/singleInput");

        break;
      case "RadioGroup":
        Navigate("/Designer/radioGroup");
        break;
      case "CheckBox":
        Navigate("/Designer/CheckBox");
        break;
      case "File":
        Navigate("/Designer/File");
        break;
      case "ImagePicker":
        Navigate("/Designer/ImagePicker");
        break;
      default:
        Navigate("/Designer/singleInput");
    }
  };

  return (
 
      <DropdownButton
        style={{position:"relative",right:"-7.5rem",display:"flex",marginTop:".4rem"}}
        variant="white"
      
        className="DropUp "
        
        title="..."
      >
        <StyledDiv
          style={{
            display: "flex",
            border: "1px solid lightgrey",
            borderRadius: ".5rem",
           
          }}
        >
          <MdOutlineSearch size={40} color={"lightGrey"} />
          <StyledInput
            placeholder="Type to search......"
            style={{ border: "none", outline: "none" }}
            onChange={(e) => handleChange(e)}
          ></StyledInput>
        </StyledDiv>
        <StyledDiv style={{overflowY:'scroll',height:"36rem",zIndex:"10"}}>
        {Items.map((item, index) => {
          return (
            <>
              <Dropdown.Item style={{padding:'12px',fontSize:"20px"}} eventKey="1" onClick={(e) => handleClick(e, item)}>
               <span style={{color:"rgb(25, 179, 148)",background:'none'}}> {item.icons}</span>
                {item.title}
              </Dropdown.Item>
            </>
          );
        })}
        <Dropdown.Divider />
        {Items2.map((item,index)=>{
          return(<>
          <Dropdown.Item style={{padding:'12px',fontSize:"20px"}} eventKey="1" onClick={(e) => handleClick(e, item)}>
               <span style={{color:"rgb(25, 179, 148)",background:'none'}}> {item.icons}</span>
                {item.title}
              </Dropdown.Item>
        </>)})}
        <Dropdown.Divider />
        {Items3.map((item,index)=>{
          return(<>
          <Dropdown.Item style={{padding:'12px',fontSize:"20px"}} eventKey="1" onClick={(e) => handleClick(e, item)}>
               <span style={{color:"rgb(25, 179, 148)",background:'none'}}> {item.icons}</span>
                {item.title}
              </Dropdown.Item>
        </>)})}
        </StyledDiv>
      </DropdownButton>

  );
}

export default AddDropdown;
