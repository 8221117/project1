import "./App.css";
import SquareBox from "./Square";
import InputBox from "./Input";
import { useState } from "react";

function App() {
  const [colorValue, setColorValue] = useState("");
  const [hexaValue, setHexaValue] = useState("");
  const [isDarkText, setIsDarkText] = useState(true);

  return (
    <div className="App">
      <SquareBox
        colorValue={colorValue}
        hexaValue={hexaValue}
        isDarkText={isDarkText}
      />
      <InputBox
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexaValue={setHexaValue}
        setIsDarkText={setIsDarkText}
        isDarkText={isDarkText}
      />
    </div>
  );
}

export default App;
