import React from "react";

const FloatingDiv = ({ image, txt1, txt2 }) => {
  return (
    <div>
      <img src={image} alt="" />
      {txt1} {txt2}
    </div>
  );
};

export default FloatingDiv;
