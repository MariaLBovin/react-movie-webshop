import { Outlet } from "react-router-dom";
import { Header } from "./Header";
import { StyledMain } from "./styled/Wrappers";

export const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <StyledMain>
        <Outlet />
      </StyledMain>
    </>
  );
};
