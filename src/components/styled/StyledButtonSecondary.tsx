import styled from 'styled-components';
import { StyledButtonPrimary } from './StyledButtonPrimary';

export const StyledButtonSecondary = styled(StyledButtonPrimary)`
  background-color: #fff;
  border-radius: 5px;
  color: #000;
  padding: 0.75rem 2rem;
  width: 100px;
  margin: 5px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: black;
  }
`;
