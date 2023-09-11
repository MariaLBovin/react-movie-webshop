<<<<<<< HEAD
import { StyledSpan } from "./styled/StyledSpan";
import { Cart } from "./Cart";
import { useState } from "react";

export const CartSpan = () => {
  const [isToggled, setIsToggled] = useState(false);
=======
import { StyledCartButton } from './styled/StyledSpan';
import { Cart } from './Cart';
import { useState } from 'react';

export const CartSpan = () => {
  const [isToggled, setIsToggled] = useState(() => false);
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073

  const toggleCart = () => {
    setIsToggled(!isToggled);
  };

  return (
    <>
<<<<<<< HEAD
      <StyledSpan onClick={toggleCart} className="material-symbols-outlined">
        shopping_cart
      </StyledSpan>
      {isToggled ? <Cart toggleCart={toggleCart} /> : null}
=======
      <StyledCartButton
        onClick={toggleCart}
        className='material-symbols-outlined'
      >
        shopping_cart
      </StyledCartButton>
      {isToggled ? <Cart /> : null}
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
    </>
  );
};
