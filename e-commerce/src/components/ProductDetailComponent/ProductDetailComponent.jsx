import { Col, Image, InputNumber, Rate, Row } from "antd";
import React from "react";
import test from "../../assets/images/test.webp";
import test2 from "../../assets/images/test2.webp";
import {
  WrapperAddressProduct,
  WrapperBtnQualityProduct,
  WrapperInputNumber,
  WrapperPriceProduct,
  WrapperPriceTextProduct,
  WrapperQualityProduct,
  WrapperStyleColImage,
  WrapperStyleImageSmall,
  WrapperStyleNameProduct,
  WrapperStyleText,
} from "./styles";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

const ProductDetailComponent = () => {
  const onChange = () => {};
  return (
    <Row style={{ padding: "16px", backgroundColor: "#fff" }}>
      <Col
        span={8}
        style={{ borderRight: "1px solid #e5e5e5", paddingRight: "10px" }}
      >
        <Image src={test} alt="Image product" preview={false} />
        <Row
          style={{
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <WrapperStyleColImage
            span={4}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <WrapperStyleImageSmall
              style={{
                height: "64px",
                width: "64px",
              }}
              src={test2}
              alt="Image product small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              style={{ height: "64px", width: "64px" }}
              src={test2}
              alt="Image product small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              style={{ height: "64px", width: "64px" }}
              src={test2}
              alt="Image product small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              style={{ height: "64px", width: "64px" }}
              src={test2}
              alt="Image product small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              style={{ height: "64px", width: "64px" }}
              src={test2}
              alt="Image product small"
              preview={false}
            />
          </WrapperStyleColImage>
          <WrapperStyleColImage span={4}>
            <WrapperStyleImageSmall
              style={{ height: "64px", width: "64px" }}
              src={test2}
              alt="Image product small"
              preview={false}
            />
          </WrapperStyleColImage>
        </Row>
      </Col>
      <Col span={16} style={{ paddingLeft: "40px" }}>
        <WrapperStyleNameProduct>
          Điện thoại Xiaomi Redmi Note 12 (8GB/128GB) - Hàng chính hãng
        </WrapperStyleNameProduct>

        <div>
          <Rate disabled style={{ fontSize: "12px" }} defaultValue={5} />
          <WrapperStyleText> | Đã bán 999+</WrapperStyleText>
        </div>

        <WrapperPriceProduct>
          <WrapperPriceTextProduct>200.000đ</WrapperPriceTextProduct>
        </WrapperPriceProduct>

        <WrapperAddressProduct>
          <span>Giao đến </span>
          <span className="address">Hà Khê, Vân Hà, Đông Anh, Hà Nội</span> -
          <span className="change-address"> Đổi địa chỉ</span>
        </WrapperAddressProduct>

        <div
          style={{
            margin: "10px 0 20px 0",
            borderTop: "1px solid #ccc",
            borderBottom: "1px solid #e5e5e5",
            padding: "10px 0",
          }}
        >
          <div style={{ marginBottom: "10px" }}>Số lượng</div>
          <WrapperQualityProduct>
            <WrapperBtnQualityProduct
              style={{ color: "#000", fontSize: "20px" }}
            >
              <MinusOutlined />
            </WrapperBtnQualityProduct>
            <WrapperInputNumber
              size="small"
              defaultValue={3}
              onChange={onChange}
              controls={false}
            />
            <WrapperBtnQualityProduct
              style={{ color: "#000", fontSize: "20px" }}
            >
              <PlusOutlined />
            </WrapperBtnQualityProduct>
          </WrapperQualityProduct>
        </div>
        <div>
          <ButtonComponent
            size={40}
            textButton="Chọn mua"
            backgroundColorButton="rgb(255,57,69)"
            styleButton={{
              height: "48px",
              width: "220px",
              borderRadius: "4px",
              fontWeight: 700,
            }}
          />
          <ButtonComponent
            size={40}
            textButton={`Mua trước trả sau`}
            backgroundColorButton="#fff"
            styleButton={{
              height: "48px",
              width: "220px",
              borderRadius: "4px",
              marginLeft: "10px",
              color: "rgb(13,92,182)",
              border: "1px solid rgb(13,92,182)",
              fontWeight: 700,
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default ProductDetailComponent;
