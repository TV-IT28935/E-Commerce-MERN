import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";

const LoadingComponent = ({ children, isLoading, deplay = 200 }) => {
  return (
    <Spin
      delay={deplay}
      spinning={isLoading}
      indicator={
        <LoadingOutlined
          style={{
            fontSize: 24,
          }}
          spin
        />
      }
    >
      {children}
    </Spin>
  );
};

export default LoadingComponent;
