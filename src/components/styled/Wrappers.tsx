import styled from "styled-components";

export const StyledMain = styled.main`
  margin: 1em;
  display: flex;
  background-color: #f5f0e8;
  min-height: 100vh;
  width: 100vw;
`;
export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const StyledSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 100vh;
  border-right: 1px solid black;
  position: fixed;
  background-color: #ffffff;
`;
export const StyledMoviesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 80vw;
  min-height: 100vh;
  margin-left: 20vw;
`;
export const StyledMovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;
