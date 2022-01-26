import React from "react";

const ToggleSwitchTwo = () => {
  return (
    <label htmlFor="toggle2" className="toggle-2">
      <input type="checkbox" id="toggle2" className="toggle-2__input" />
      <span className="toggle-2__button">Click me to activate</span>
    </label>
  );
};

export default ToggleSwitchTwo;
