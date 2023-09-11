import styled from 'styled-components';
import { StyledButtonPrimary } from './StyledButtonPrimary';

export const StyledButtonSecondary = styled(StyledButtonPrimary)`
  background-color: #fff;
  color: #000;

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: black;
  }
`;
