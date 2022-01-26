import FbButtonDark from "./components/facebook/FbButtonDark";
import FbButtonLight from "./components/facebook/FbButtonLight";
import FancyCircleButton from "./components/fancy/FancyCircleButton";
import FancySquareButton from "./components/fancy/FancySquareButton";
import "./styles.scss";

export default function App() {
  const fancySquareButton = "btn-3d-1";
  const fancyCircleButton = "btn-3d-2";
  return (
    <div className="App">
      <div className="container">
        <div className="row mb-50">
          <div className="col d-flex justify-center">
            <FbButtonDark>Button Dark</FbButtonDark>
          </div>
          <div className="col d-flex justify-center">
            <FbButtonLight>Button Light</FbButtonLight>
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-center">
            <FancySquareButton styles={fancySquareButton}>
              Fancy 3D
            </FancySquareButton>
          </div>
          <div className="col d-flex justify-center">
            <FancyCircleButton styles={fancyCircleButton}>
              Circle
            </FancyCircleButton>
          </div>
        </div>
      </div>
    </div>
  );
}
