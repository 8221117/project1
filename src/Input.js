import React from "react";
/* import { colorNames } from "colornames"; */
/* import colorConvert from "color-convert";
import colorNameList from "color-name-list"; */
import tinycolor from "tinycolor2";

const InputBox = ({
  colorValue,
  setColorValue,
  setHexaValue,
  setIsDarkText,
  isDarkText,
}) => {
  const convertColorNameToHex = (colorName) => {
    const normalizedColorName = colorName.toLowerCase();
    /* const color = tinycolor(colorName); */
    const color = tinycolor(normalizedColorName);

    if (color.isValid()) {
      return color.toHexString();
    } else {
      return ""; // Return empty string for unsupported color names
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label>Add Color Name :</label>
      <input
        type="text"
        autoFocus
        placeholder="Enter Color name"
        value={colorValue}
        required
        onChange={(e) => {
          setColorValue(e.target.value);
          setHexaValue(convertColorNameToHex(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        Toggle Text Color
      </button>
    </form>
  );
};

export default InputBox;
