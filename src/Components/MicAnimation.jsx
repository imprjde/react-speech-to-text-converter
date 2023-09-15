import React from "react";
import { BsMicFill } from "react-icons/bs";
import "./MicAnimation.css";

const MicAnimation = () => {
  return (
    <div className=" pulsate">
      <div className="inner ">
        <BsMicFill className="mic" size={30} />
      </div>
    </div>
  );
};

export default MicAnimation;
