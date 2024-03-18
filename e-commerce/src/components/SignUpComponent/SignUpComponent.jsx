import { Image } from "antd";
import React, { useState } from "react";
import { WrapperContainerLeft, WrapperContainerRight } from "./styles";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import InputFormComponent from "../InputFormComponent/InputFormComponent";
import login from "../../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { createUser } from "../../services/UserService";
import LoadingComponent from "../LoadingCOmponent/LoadingComponent";
const SignUpComponent = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleOnChangeName = (value) => {
    setName(value);
  };
  const handleOnChangePhone = (value) => {
    setPhone(value);
  };
  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePassword = (value) => {
    setPassword(value);
  };
  const handleOnChangeConfirmPassword = (value) => {
    setConfirmPassword(value);
  };

  const handleIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleIsShowConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword);
  };

  const handleOnClickSignUp = async () => {
    if (validateInput()) {
      const result = await createUser({
        name,
        phone,
        email,
        password,
        confirmPassword,
      });
      setIsLoading(true);
      navigate("/sign-in");
    }
  };

  const validateInput = (name, phone, email, password, confirmPassword) => {
    if (!name || !phone || !email || !password || !confirmPassword) {
      return false;
    }
    return true;
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "800px",
          height: "445px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "20px",
          backgroundColor: "#fff",
          overflow: "hidden",
          userSelect: "none",
        }}
      >
        <WrapperContainerLeft>
          <div style={{ margin: "10px 0", color: "rgb(36, 36, 36)" }}>
            <h1 style={{ marginTop: "0", textAlign: "center" }}>
              Tạo tài khoản
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "space-between",
            }}
          >
            <InputFormComponent
              styleInputForm={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                outLine: "none",
                borderRadius: "0",
                padding: "7px 0",
                marginBottom: "15px",
                flex: 1,
              }}
              name="name"
              placeholder="Họ và tên"
              valueInput={name}
              handleOnChangeInput={handleOnChangeName}
            />
            <InputFormComponent
              styleInputForm={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                outLine: "none",
                borderRadius: "0",
                padding: "7px 0",
                marginBottom: "15px",
                flex: 1,
              }}
              name="phone"
              placeholder="Số điện thoại"
              valueInput={phone}
              handleOnChangeInput={handleOnChangePhone}
            />
          </div>
          <InputFormComponent
            styleInputForm={{
              borderTop: "none",
              borderRight: "none",
              borderLeft: "none",
              outLine: "none",
              borderRadius: "0",
              padding: "7px 0",
              marginBottom: "15px",
            }}
            name="email"
            placeholder="Tên đăng nhập (abc@gmail.com)"
            valueInput={email}
            handleOnChangeInput={handleOnChangeEmail}
          />
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "40%",
                right: "10px",
                transform: "translateY(-50%)",
                zIndex: "10",
                userSelect: "none",
              }}
              onClick={handleIsShowPassword}
            >
              {isShowPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
            </span>
            <InputFormComponent
              type={isShowPassword ? "text" : "password"}
              placeholder="Mật khẩu"
              styleInputForm={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                outLine: "none",
                borderRadius: "0",
                padding: "7px 0",
                marginBottom: "15px",
              }}
              name="password"
              isShowPassword={isShowPassword}
              icon={true}
              valueInput={password}
              handleOnChangeInput={handleOnChangePassword}
            />
          </div>
          <div style={{ position: "relative" }}>
            <span
              style={{
                position: "absolute",
                top: "40%",
                right: "10px",
                transform: "translateY(-50%)",
                zIndex: "10",
                userSelect: "none",
              }}
              onClick={handleIsShowConfirmPassword}
            >
              {isShowConfirmPassword ? (
                <EyeOutlined />
              ) : (
                <EyeInvisibleOutlined />
              )}
            </span>
            <InputFormComponent
              type={isShowConfirmPassword ? "text" : "password"}
              placeholder="Nhập lại mật khẩu"
              styleInputForm={{
                borderTop: "none",
                borderRight: "none",
                borderLeft: "none",
                outLine: "none",
                borderRadius: "0",
                padding: "7px 0",
                marginBottom: "15px",
              }}
              name="confirmPassword"
              isShowPassword={isShowPassword}
              icon={true}
              onClick={handleIsShowConfirmPassword}
              valueInput={confirmPassword}
              handleOnChangeInput={handleOnChangeConfirmPassword}
            />
          </div>
          <LoadingComponent isLoading={isLoading}>
            <ButtonComponent
              disabled={
                !name || !phone || !email || !password || !confirmPassword
              }
              size={40}
              textButton="Đăng nhập"
              backgroundColorButton="rgb(255,57,69)"
              styleButton={{
                height: "48px",
                width: "100%",
                borderRadius: "4px",
                fontWeight: 700,
                marginBottom: "20px",
              }}
              onClick={handleOnClickSignUp}
            />
          </LoadingComponent>
          <div style={{ fontSize: "13px" }}>
            <span style={{ color: "rgb(13, 92, 182)" }}>Quên mật khẩu?</span>
            <div style={{ marginTop: "10px" }}>
              <span>Bạn đã có tài khoản?</span>
              <Link
                style={{
                  color: "rgb(13, 92, 182)",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
                to={"/sign-in"}
              >
                Đăng nhập
              </Link>
            </div>
          </div>
        </WrapperContainerLeft>
        <WrapperContainerRight>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              preview={false}
              src={login}
              style={{ width: "203px", height: "203px", marginBottom: "30px" }}
            />
            <div
              style={{
                marginBottom: "5px",
                color: "rgb(11, 116, 229)",
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ marginBottom: "5px", fontWeight: 600 }}>
                Mua sắm tại VSTORE
              </span>
              <br />
              <span style={{ marginBottom: "5px", fontSize: "14px" }}>
                Siêu ưu đãi mỗi ngày
              </span>
            </div>
          </div>
        </WrapperContainerRight>
      </div>
    </div>
  );
};

export default SignUpComponent;
