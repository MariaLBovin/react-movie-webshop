import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { StyledHeader } from './styled/Wrappers';
import { CartSpan } from './CartSpan';
import { StyledCartButton } from './styled/StyledSpan';

export const Layout = () => {
  return (
    <>
      <StyledHeader>
        <Header />
      </StyledHeader>
      <StyledCartButton></StyledCartButton>
      <CartSpan />
      <Outlet />
    </>
  );
};
