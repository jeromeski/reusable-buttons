import React from "react";

const FancySquareButton = ({ children, styles }) => {
  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
};

export default FancySquareButton;
