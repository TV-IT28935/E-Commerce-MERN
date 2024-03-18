import { Button } from "antd";
import React from "react";

const ButtonComponent = ({
  size,
  textButton,
  backgroundColorButton,
  textColorButton,
  icon,
  styleButton,
  borderRadius = "0",
  disabled = false,
  ...rest
}) => {
  return (
    <Button
      disabled={disabled}
      style={{
        borderRadius: "0",
        border: "none",
        backgroundColor: disabled ? "#ccc" : backgroundColorButton,
        color: "#fff",
        borderRadius: borderRadius,
        ...styleButton,
      }}
      {...rest}
      size={size}
      icon={icon}
    >
      {textButton}
    </Button>
  );
};

export default ButtonComponent;
