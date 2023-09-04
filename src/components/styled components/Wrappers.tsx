import styled from "styled-components";

export const styledMain = styled.main`
    margin: 1em;
    display: flex;
    background-color: #f5f0e8;
    height: 100vh;
    width: 100vw;
`
export const styledHeader = styled.header `
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const styledSidebar = styled.div`
    display: flex;
    flex-direction: column;
    width: 20vw;
    height: 100vh;
`
export const styledMoviesWrapper = styled.div `
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 80vw;
    height: 100vh;
`
export const styledMovieWrapper = styled.div `
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
`