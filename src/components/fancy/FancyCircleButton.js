import React from "react";

const FancyCircleButton = ({ children, styles }) => {
  return (
    <button type="button" className={styles}>
      {children}
    </button>
  );
};

export default FancyCircleButton;
