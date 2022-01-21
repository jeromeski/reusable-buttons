import React from "react";

const FbButtonDark = ({ children }) => {
  return (
    <button
      type="button"
      name="button"
      className="facebook-style-btn facebook-style-dark"
    >
      {children}
    </button>
  );
};

export default FbButtonDark;
