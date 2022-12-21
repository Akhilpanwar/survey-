import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";

import Designer from "../Designer/Designer";
import RadioGroup from "../Designer/DesignerLeftComponent/RadioGroup";
import Rating from "../Designer/DesignerLeftComponent/Rating";
import CheckBox from "../Designer/DesignerLeftComponent/CheckBox";
import TagBox from "../Designer/DesignerLeftComponent/TagBox";
import  File from "../Designer/DesignerLeftComponent/File";
import ImagePicker from "../Designer/DesignerLeftComponent/ImagePicker";
import DropDown from '../Designer/DesignerLeftComponent/LeftDropDown';

import Boolean from "../Designer/DesignerLeftComponent/Boolean";
import Extra from "../Designer/DesignerLeftComponent/Extra";
import SingleInput from "../Designer/DesignerLeftComponent/singleInput";
import Preview from "../Preview/Preview";
import Logic from "../Logic/Logic";
import JsonEditor from "../JsonEditor/JsonEditor";
import EmbededSurvey from "../EmbededSurvey/EmbededSurvey";
import Translation from "../Translation/Translation";

import About from "../About/About";

function Routing() {
  return (

    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/Designer" element={<Designer />}>
        <Route  path="/Designer/SingleInput" element={<SingleInput/>}/>
        <Route path="/Designer/RadioGroup" element={<RadioGroup/>}/>
        <Route path="/Designer/Rating" element={<Rating/>}/>
        <Route path="/Designer/RadioGroup" element={<RadioGroup/>}/>
       <Route path="/Designer/DropDown" element={<DropDown />}/>
        <Route path="/Designer/CheckBox" element={<CheckBox />}/>
        <Route path="/Designer/TagBox" element={<TagBox />}/>
        <Route path="/Designer/Boolean" element={<Boolean />}/>
        <Route path="/Designer/Extra" element={<Extra />}/>
        <Route path="/Designer/ImagePicker" element={<ImagePicker />}/>
        <Route path="/Designer/File" element={<File />}/>
        
         </Route>
        <Route path="/Preview" element={<Preview />} />
        <Route path="/Logic" element={<Logic />} />
        <Route path="/JsonEditor" element={<JsonEditor />} />
        <Route path="/EmbededSurvey" element={<EmbededSurvey />} />
        <Route path="/Translation" element={<Translation />} />
        <Route  path="/About" element={<About />} />
       

      </Routes>
    </BrowserRouter>

  );
}

export default Routing;
