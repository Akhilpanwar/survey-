import { Provider } from "react-redux";
import "./App.css";
import store from "./component/Redux/Store";
import Routing from "./component/mainComponent/Routing";
import { StyledDiv } from "./component/mainComponent/Styles";
import Rating from "./component/Designer/DesignerLeftComponent/Rating";
// import RadioGroup from './component/Designer/DesignerLeftComponent/RadioGroup';
function App() {
  return (
    <StyledDiv BG="whiteSmoke" style={{ overflowY: "none" }}>
      <Provider store={store}>
<Routing/>
      </Provider>
    </StyledDiv>
  );
}

export default App;
