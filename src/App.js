import { useState } from "react";
import AnimatedButtonOne from "./components/animated/AnimatedButtonOne";
import AnimatedButtonTwo from "./components/animated/AnimatedButtonTwo";
import FbButtonDark from "./components/facebook/FbButtonDark";
import FbButtonLight from "./components/facebook/FbButtonLight";
import FancyCircleButton from "./components/fancy/FancyCircleButton";
import FancySquareButton from "./components/fancy/FancySquareButton";
import GradientButtonOne from "./components/gradient/GradientButtonOne";
import GradientButtonTwo from "./components/gradient/GradientButtonTwo";
import ToggleSwitchOne from "./components/toggle-switch/ToggleSwitchOne";
import ToggleSwitchTwo from "./components/toggle-switch/ToggleSwitchTwo";
import "./styles.scss";

export default function App() {
  const [isOn, setIsOn] = useState(false);

  const fancySquareButton = "btn-3d-1";
  const fancyCircleButton = "btn-3d-2";
  const gradientButtonOne = "gradient-button-1";
  const gradientButtonTwo = "gradient-button-2";
  const animatedButtonOne = "animated-button-1";
  const animatedButtonTwo = "animated-button-2";

  return (
    <div className="App">
      <div className="container">
        <div className="row mb-50">
          <div className="col d-flex flex-end">
            <FbButtonDark>Button Dark</FbButtonDark>
          </div>
          <div className="col d-flex flex-start">
            <FbButtonLight>Button Light</FbButtonLight>
          </div>
        </div>
        <div className="row mb-50">
          <div className="col d-flex flex-end">
            <FancySquareButton styles={fancySquareButton}>
              Fancy 3D
            </FancySquareButton>
          </div>
          <div className="col d-flex flex-start">
            <FancyCircleButton styles={fancyCircleButton}>
              Circle
            </FancyCircleButton>
          </div>
        </div>
        <div className="row mb-50">
          <div className="col d-flex flex-end">
            <GradientButtonOne styles={gradientButtonOne}>
              Button One
            </GradientButtonOne>
          </div>
          <div className="col d-flex flex-start">
            <GradientButtonTwo styles={gradientButtonTwo}>
              Button Two
            </GradientButtonTwo>
          </div>
        </div>
        <div className="row mb-50">
          <div className="col d-flex flex-end">
            <AnimatedButtonOne styles={animatedButtonOne}>
              Button One
            </AnimatedButtonOne>
          </div>
          <div className="col d-flex flex-start">
            <AnimatedButtonTwo styles={animatedButtonTwo}>
              Button Two
            </AnimatedButtonTwo>
          </div>
        </div>
        <div className="row mb-50">
          <div className="col d-flex flex-end">
            <ToggleSwitchOne isOn={isOn} setIsOn={setIsOn} />
          </div>
          <div className="col d-flex flex-start">
            <ToggleSwitchTwo value={isOn} setIsOn={setIsOn} />
          </div>
        </div>
      </div>
    </div>
  );
}
