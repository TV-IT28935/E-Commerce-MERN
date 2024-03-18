import { Button, Input } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../InputComponent/InputComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
const ButtonInputSearch = (props) => {
  const { size, placeholder, textButton, bordered, backgroundColor } = props;
  return (
    <div style={{ display: "flex", backgroundColor: backgroundColor }}>
      <InputComponent
        style={{ borderRadius: "0", backgroundColor: "#fff" }}
        size={size}
        bordered={bordered}
        placeholder={placeholder}
      />
      <ButtonComponent
        size={size}
        icon={<SearchOutlined />}
        textButton={textButton}
        backgroundColorButton="rgb(13,92,192)"
      />
    </div>
  );
};

export default ButtonInputSearch;
