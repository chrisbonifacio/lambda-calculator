import React from "react";

const NumberButton = props => {
  return (
    <div className="numbers-button">
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button onclick={() => console.log(props)}>{props.number}</button>
    </div>
  );
};

export default NumberButton;
