import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { StyledHeader } from "./styled/Wrappers";

import { CartSpan } from "./CartSpan";
import { StyledSpan } from "./styled/StyledSpan";


export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledSpan>
        <CartSpan/>
      </StyledSpan>
      
        <Outlet />
    </>
  );
};
