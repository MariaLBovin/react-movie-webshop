import styled from 'styled-components';

export const StyledButtonPrimary = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border: 1px solid black;
  background-color: #55acf3;
  color: white;
  margin: 5px;
  width: 100px;
  height: 50px;
  cursor: pointer;

  &:hover {
    background-color: #96d0ff;
    color: black;
  }
`;
