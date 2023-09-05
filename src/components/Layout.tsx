import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { StyledHeader } from "./styled/Wrappers";


export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
        <Outlet />
    </>
  );
};
