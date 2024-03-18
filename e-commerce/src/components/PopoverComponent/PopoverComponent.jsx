import React from "react";
import "./style.css";
const PopoverComponent = () => {
  return (
    <div className="popover_container" style={{ width: "100px" }}>
      <p className="popover_profile">Profile</p>
      <p className="popover_logout">LogOut</p>
    </div>
  );
};

export default PopoverComponent;
