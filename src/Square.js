import React from "react";

const SquareBox = ({ colorValue, hexaValue, isDarkText }) => {
  return (
    <section
      className="squareBox"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "#000" : "#FFF",
      }}
    >
      <p>{colorValue ? colorValue : "Empty value"}</p>
      <p>{hexaValue ? hexaValue : null}</p>
    </section>
  );
};

SquareBox.defaultProps = {
  colorValue: "empty color value",
};

export default SquareBox;
