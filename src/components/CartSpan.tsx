import { StyledSpan } from "./styled/StyledSpan";
import { Cart } from "./Cart";
import { useState } from "react";

export const CartSpan = () => {
  const [isToggled, setIsToggled] = useState(false);

  const toggleCart = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <StyledSpan onClick={toggleCart} className="material-symbols-outlined">
        shopping_cart
      </StyledSpan>
      {isToggled ? <Cart toggleCart={toggleCart} /> : null}
    </>
  );
};
