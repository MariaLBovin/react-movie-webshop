import { InputHTMLAttributes } from "react";
import styled, { css } from "styled-components";

interface StyledInputProps extends InputHTMLAttributes<HTMLInputElement> {
  customStyle?: ReturnType<typeof css>;
}

export const StyledInput = styled.input<StyledInputProps>`
  padding-top: 16px;
  background: grey;
  color: #000000;
  width: 50%;
  ${(props) => props.customStyle};
`;

export default StyledInput;
