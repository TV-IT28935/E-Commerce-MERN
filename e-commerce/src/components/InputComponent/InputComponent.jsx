import { Input } from "antd";
import React from "react";

const InputComponent = (props) => {
  const {
    size,
    placeholder,
    bordered,
  } = props;
  return (
    <Input
      style={{ borderRadius: "0", backgroundColor: "#fff" }}
      size={size}
      bordered={bordered}
      placeholder={placeholder}
    />
  );
};

export default InputComponent;
