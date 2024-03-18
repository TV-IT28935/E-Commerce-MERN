import React, { useEffect, useState } from "react";
import {
  WrapperContainerLeft,
  WrapperContainerRight,
  WrapperInputFormComponent,
} from "./styles";
import InputFormComponent from "../InputFormComponent/InputFormComponent";
import ButtonComponent from "../ButtonComponent/ButtonComponent";
import { Image } from "antd";
import login from "../../assets/images/login.png";
import { Link, useNavigate } from "react-router-dom";
import { EyeInvisibleOutlined, EyeOutlined } from "@ant-design/icons";
import { getUserApi, loginUser } from "../../services/UserService";
import LoadingComponent from "../LoadingCOmponent/LoadingComponent";
import { jwtDecode } from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../redux/slides/userSlice";

const SignInComponent = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  var [data, setData] = useState([]);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleIsShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };
  const handleOnChangeEmail = (value) => {
    setEmail(value);
  };
  const handleOnChangePassword = (value) => {
    setPassword(value);
  };
  const handleOnClickSignIn = async () => {
    data = await loginUser({ email, password });
    if (data.status === "ERR") {
      alert("Lỗi rồi!");
      return;
    }
    // setIsLoading(true);
    localStorage.setItem("access_token", data.access_token);
    const decoded = jwtDecode(localStorage.getItem("access_token"));
    if (decoded?.payload?.id) {
      await handleGetUser(
        decoded?.payload?.id,
        localStorage.getItem("access_token")
      );
      navigate("/");
    }
  };

  const handleGetUser = async (id, access_token) => {
    const user = await getUserApi(id, access_token);
    dispatch(
      updateUser({
        ...user?.data,
        access_token: access_token,
      })
    );
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.2)",
        height: "100vh",
        userSelect: "none",
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
        }}
      >
        <WrapperContainerLeft>
          <div style={{ margin: "20px 0", color: "rgb(36, 36, 36)" }}>
            <h1 style={{ textAlign: "center" }}>Đăng nhập</h1>
            <p style={{ fontSize: "14px" }}>
              <strong>Xin chào bạn, </strong>hãy đăng nhập vào tài khoản{" "}
              <strong>VSTORE</strong>
            </p>
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
            placeholder="Tên đăng nhập"
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
              icon={true}
              handleOnChangeInput={handleOnChangePassword}
            />
          </div>
          <LoadingComponent isLoading={isLoading}>
            <ButtonComponent
              disabled={!email || !password}
              size={40}
              textButton="Đăng nhập"
              backgroundColorButton="rgb(255,57,69)"
              styleButton={{
                height: "48px",
                width: "100%",
                borderRadius: "4px",
                fontWeight: 700,
                marginBottom: "30px",
              }}
              onClick={handleOnClickSignIn}
            />
          </LoadingComponent>
          <div style={{ fontSize: "13px" }}>
            <span style={{ color: "rgb(13, 92, 182)" }}>Quên mật khẩu?</span>
            <div style={{ marginTop: "10px" }}>
              <span>Bạn chưa có tài khoản?</span>
              <Link
                style={{
                  color: "rgb(13, 92, 182)",
                  textDecoration: "none",
                  marginLeft: "10px",
                }}
                to={"/sign-up"}
              >
                Tạo tài khoản
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

export default SignInComponent;
