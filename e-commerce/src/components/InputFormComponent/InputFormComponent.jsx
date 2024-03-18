import { Input } from "antd";
import React from "react";
import { WrapperInputFormComponent } from "./styles";
const InputFormComponent = (props) => {
  const {
    placeholder = "Nhập text",
    valueInput,
    styleInputForm,
    type = "text",
    name,
    handleOnChangeInput,
  } = props;

  const handleOnChangeInputChildren = (e) => {
    handleOnChangeInput(e.target.value)
  };
  return (
    <WrapperInputFormComponent
      placeholder={placeholder}
      value={valueInput}
      style={{ ...styleInputForm, "user-select": "none" }}
      type={type}
      onChange={handleOnChangeInputChildren}
      name={name}
    />
  );
};

export default InputFormComponent;
