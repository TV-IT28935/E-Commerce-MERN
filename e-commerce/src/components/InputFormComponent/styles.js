import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputFormComponent = styled(Input)`
  &:focus {
    box-shadow: none;
    background-color: rgb(240, 248, 255);
  }
`;
