import { Badge, Button, Col, Image, Popover } from "antd";
import React from "react";
import {
  WrapperHeader,
  WrapperHeaderAccount,
  WrapperTextHeader,
  WrapperTextSpanHeader,
} from "./style";
import {
  UserOutlined,
  CaretDownOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import ButtonInputSearch from "../ButtonInputSearch/ButtonInputSearch";
import logo from "../../assets/images/logo.png";

import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PopoverComponent from "../PopoverComponent/PopoverComponent";
const HeaderComponent = () => {
  const navigate = useNavigate();
  const handleNavigateLogin = () => {
    navigate("/sign-in");
  };

  const user = useSelector((state) => state.user);
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "rgb(26, 148, 255)",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <WrapperHeader>
        <Link
          to={"/"}
          style={{ display: "flex", alignItems: "center" }}
          span={4}
        >
          <Image
            preview={false}
            style={{ height: "50px", width: "50px" }}
            src={logo}
          />
          <WrapperTextHeader>VSTORE</WrapperTextHeader>
        </Link>
        <Col span={14}>
          <ButtonInputSearch
            size="large"
            placeholder="Tìm kiếm sản phẩm ..."
            textButton="Tìm kiếm"
            bordered={false}
            backgroundColor="#fff"
          />
        </Col>
        <Col style={{ display: "flex", gap: "20px" }}>
          <WrapperHeaderAccount>
            <div>
              <UserOutlined style={{ fontSize: "30px" }} />
            </div>
            {user?.name ? (
              <Popover placement="bottomLeft" content={<PopoverComponent />}>
                <span>{user.name}</span>
              </Popover>
            ) : (
              <div onClick={handleNavigateLogin}>
                <WrapperTextSpanHeader>Đăng nhập/Đăng ký</WrapperTextSpanHeader>
                <div>
                  <WrapperTextSpanHeader> Tài khoản </WrapperTextSpanHeader>
                  <CaretDownOutlined />
                </div>
              </div>
            )}
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size="small">
              <ShoppingCartOutlined
                style={{ fontSize: "30px", color: "#fff" }}
              />
            </Badge>
            <WrapperTextSpanHeader>Giỏ hàng</WrapperTextSpanHeader>
          </div>
        </Col>
      </WrapperHeader>
    </div>
  );
};

export default HeaderComponent;
