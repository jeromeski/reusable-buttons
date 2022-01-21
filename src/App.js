import FbButtonDark from "./components/facebook/FbButtonDark";
import FbButtonLight from "./components/facebook/FbButtonLight";
import "./styles.scss";

export default function App() {
  return (
    <div className="container">
      <FbButtonDark>Button Dark</FbButtonDark>
      <FbButtonLight>Button Light</FbButtonLight>
    </div>
  );
}
