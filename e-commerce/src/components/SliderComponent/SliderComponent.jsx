import { Image } from "antd";
import React from "react";
import Slider from "react-slick";
import { WrapperSliderStyle } from "./styles";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

const SliderComponent = ({ arrImages }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <WrapperSliderStyle {...settings}>
      {arrImages.map((item) => {
        return (
          <Image
            src={item}
            alt="slider"
            preview={false}
            width={"100%"}
            height={"274px"}
          />
        );
      })}
    </WrapperSliderStyle>
  );
};

export default SliderComponent;
