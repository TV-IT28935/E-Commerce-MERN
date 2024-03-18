import { Card } from "antd";
import React from "react";
import {
  StyldeNameProduct,
  WrapperCardStyle,
  WrapperDiscountText,
  WrapperPriceText,
  WrapperReportText,
} from "./styles";
import { StarFilled } from "@ant-design/icons";
import { WrapperStyleText } from "../ProductDetailComponent/styles";

const CardComponent = () => {
  return (
    <WrapperCardStyle
      hoverable
      headStyle={{ width: "200px", height: "200px" }}
      style={{ width: 200 }}
      bodyStyle={{ padding: "10px" }}
      cover={
        <img
          alt="example"
          src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
        />
      }
    >
      <StyldeNameProduct>Item</StyldeNameProduct>
      <WrapperReportText>
        <span style={{ marginRight: "4px" }}>
          <span>4.96 </span>
          <StarFilled style={{ fontSize: "10px", color: "yellow" }} />
        </span>
        <WrapperStyleText> | Đã bán 1000+</WrapperStyleText>
      </WrapperReportText>
      <WrapperPriceText>
        1.000.000đ
        <WrapperDiscountText>6%</WrapperDiscountText>
      </WrapperPriceText>
    </WrapperCardStyle>
  );
};

export default CardComponent;
