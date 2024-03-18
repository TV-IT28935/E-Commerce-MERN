import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
  width: 1270px;
  height: 60px;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
  font-size: 30px;
  color: #fff;
  font-weight: bold;
  text-align: left;
`;
export const WrapperHeaderAccount = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  gap: 10px;
  font-size: 12px;
  cursor: pointer;
`;

export const WrapperTextSpanHeader = styled.span`
  font-size: 12px;
  color: #fff;
  white-space: nowrap;
`;
export const WrapperIconHeader = styled.div`
  font-size: 12px;
  color: #fff;
`;
