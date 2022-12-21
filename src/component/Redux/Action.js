//=================NAV TOGGLE=======================///
export const setToggle = () => {
  return {
    type: "Set_Toggle",
  };
};
export const RemoveToggle = () => {
  return {
    type: "Unset_Toggle",
  };
};
//=====================RightHeader===============================
export const DesignerCall = () => {
  return {
    type: "Designer_Header",
  };
};
export const PreviewCall = () => {
  return {
    type: "Preview_Header",
 
  };
};
export const LogicCall = () => {
  return {
    type: "Logic_Header",
  
  };
};
export const EmbededSurveyCall  = () => {
  return {
    type: "EmbededSurvey_Header",
    
  };
};
export const JsonEditorCall = () => {
  return {
    type: "JsonEditor_Header",
    
  };
};
export const AboutCall = () => {
return{

   type: "About_Header",
    
  };
};

export const TranslationCall = () => {
  return {
    type: "Translation_Header",
    
  };
};
//===================QuestionReducer===============
