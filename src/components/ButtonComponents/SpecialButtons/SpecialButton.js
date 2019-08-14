import React from "react";

const SpecialButton = props => {
  return (
    <div className="specials-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button>{props.special}</button>
    </div>
  );
};

export default SpecialButton;
