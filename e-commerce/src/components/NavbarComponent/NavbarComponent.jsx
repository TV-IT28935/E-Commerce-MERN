import React from "react";
import {
  WrapperContent,
  WrapperLabelText,
  WrapperTextPrice,
  WrapperTextValue,
} from "./styles";
import { Checkbox, Col, Rate, Row } from "antd";

const NavbarComponent = () => {
  const renderContent = (type, options) => {
    const onChange = (checkedValues) => {
      console.log("checked = ", checkedValues);
    };
    switch (type) {
      case "text":
        return options.map((option) => {
          return <WrapperTextValue>{option}</WrapperTextValue>;
        });
      case "checkbox":
        return (
          <Checkbox.Group
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "12px",
            }}
            onChange={onChange}
          >
            {options.map((option) => {
              return (
                <Checkbox style={{ marginLeft: 0, fontSize: "12px" }} value="A">
                  {option.value}
                </Checkbox>
              );
            })}
          </Checkbox.Group>
        );
      case "star":
        return options.map((option) => {
          return (
            <div style={{ display: "flex", gap: "4px", fontSize: "12px" }}>
              <Rate
                disabled
                style={{ fontSize: "12px" }}
                defaultValue={option}
              />
              <span>{`Từ  ${option} sao`}</span>
            </div>
          );
        });
      case "price":
        return options.map((option) => {
          return <WrapperTextPrice>{option}</WrapperTextPrice>;
        });
      default:
        return {};
    }
  };
  return (
    <div style={{ backgroundColor: "#fff" }}>
      <WrapperLabelText>Label</WrapperLabelText>
      <WrapperContent>
        {renderContent("text", ["Tủ lạnh", "TVp", "Máy giặt", "Laptop"])}
      </WrapperContent>
      <WrapperContent>
        {renderContent("checkbox", [
          { value: "a", label: "A" },
          { value: "b", label: "B" },
          { value: "c", label: "C" },
        ])}
      </WrapperContent>
      <WrapperContent>{renderContent("star", [1, 2, 3, 4, 5])}</WrapperContent>
      <WrapperContent>
        {renderContent("price", ["dưới 50", "trên 50"])}
      </WrapperContent>
    </div>
  );
};

export default NavbarComponent;
