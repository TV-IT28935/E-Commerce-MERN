import React from "react";
import TypeProduct from "../../components/TypeProduct/TypeProduct";
import {
  WrapperButtonMore,
  WrapperProducts,
  WrapperTypeProduct,
} from "./styles";
import SliderComponent from "../../components/SliderComponent/SliderComponent";
import slider1 from "../../assets/images/slider1.png";
import slider2 from "../../assets/images/slider2.png";
import slider3 from "../../assets/images/slider3.png";
import slider4 from "../../assets/images/slider4.png";
import CardComponent from "../../components/CardComponent/CardComponent";
import NavbarComponent from "../../components/NavbarComponent/NavbarComponent";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const HomePage = () => {
  const arr = ["TV", "Tủ lạnh", "Laptop"];
  return (
    <>
      <div style={{ width: "1270px", margin: "0 auto" }}>
        <WrapperTypeProduct>
          {arr.map((item) => {
            return <TypeProduct name={item} key={item} />;
          })}
        </WrapperTypeProduct>
      </div>
      <div style={{
            backgroundColor: "#efefef",
            width: "100%"
          }}>
        <div
          id="container"
          style={{
            width: "1270px", margin: "0 auto" ,
            height: "1000px",
          }}
        >
          <SliderComponent arrImages={[slider1, slider2, slider3, slider4]} />
          <WrapperProducts>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
          </WrapperProducts>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "10px",
            }}
          >
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: "1px solid rgb(11,116,229",
                color: "rgb(11,116,229)",
                width: "240px",
                height: "38px",
                "font-weight": "700",
              }}
              borderRadius="4px"
            />
          </div>
          <div>
            <NavbarComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
