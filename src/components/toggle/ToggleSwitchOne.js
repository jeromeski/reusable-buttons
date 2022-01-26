import React, { useState } from "react";

const ToggleSwitchOne = ({ isOn, setIsOn }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
    setIsOn((prev) => !prev);
  };
  return (
    <label htmlFor="toggle1" className="toggle-1">
      <input
        type="checkbox"
        id="toggle1"
        className="toggle-1__input"
        value={isOn}
        onChange={(e) => handleChange(e)}
      />
      <span className="toggle-1__button"></span>
    </label>
  );
};

export default ToggleSwitchOne;
