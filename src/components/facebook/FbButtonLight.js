import React from "react";

const FbButtonLight = ({ children }) => {
  return (
    <button
      type="button"
      name="button"
      className="facebook-style-btn facebook-style-light"
    >
      {children}
    </button>
  );
};

export default FbButtonLight;
