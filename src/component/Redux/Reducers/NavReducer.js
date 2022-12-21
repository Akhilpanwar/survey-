import DesignerHeader from "../../mainComponent/HeaderRightSideComponent/DesignerHeader";
import  LogicHeader from "../../mainComponent/HeaderRightSideComponent/LogicHeader";
import  PreviewHeader from "../../mainComponent/HeaderRightSideComponent/PreviewHeader";
import  TranslationHeader from "../../mainComponent/HeaderRightSideComponent/TranslationHeader";
import  EmbededSurveyHeader from "../../mainComponent/HeaderRightSideComponent/EmbededSurveyHeader";
import  AboutHeader from "../../mainComponent/HeaderRightSideComponent/AboutHeader";
import  JsonEditorHeader from "../../mainComponent/HeaderRightSideComponent/JsonEditorHeader";

const NavReducer = (state = {}, action) => {
  switch (action.type) {
    case "Set_Toggle":
      return {
        ...state,
        Toggle: true,
      };
    case "Unset_Toggle":
      return {
        ...state,
        Toggle: false,
      };

    case "Designer_Header":
      return {
        ...state,
        component: <DesignerHeader />,
      };
    case "Logic_Header":
      return {
        ...state,
        component: <LogicHeader />,
      };
    case "Preview_Header":
      return {
        ...state,
        component: <PreviewHeader />,
      };
    case "Translation_Header":
      return {
        ...state,
        component: <TranslationHeader />,
      };
    case "EmbededSurvey_Header":
      return {
        ...state,
        component: <EmbededSurveyHeader />,
      };
    case "About_Header":
      return {
        ...state,
        component: <AboutHeader />,
      };
    case "JsonEditor_Header":
      return {
        ...state,
        component: <JsonEditorHeader />,
      };
      
    default:
      return {
        ...state,
        Toggle: false,
        component: <DesignerHeader />,
      };
  }
};

export default NavReducer;
