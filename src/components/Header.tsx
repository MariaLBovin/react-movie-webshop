import { StyledImage } from "./styled/StyledImage";
import logo from '../assets/logo.png';
import { StyledSpan } from "./styled/StyledSpan";
import { useState } from "react";
import { Cart } from "./Cart";

export const Header = () => {
  const [isToggled, setIsToggled] = useState(() => false);

  const toggleCart = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <StyledImage src={logo} alt="Logo" />
      <StyledSpan onClick={toggleCart} className="material-symbols-outlined">
        shopping_cart
      </StyledSpan>
      {isToggled ? <Cart /> : null}
    </>
  );
};