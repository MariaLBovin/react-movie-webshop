import { StyledCartButton } from './styled/StyledCartButton';
import { Cart } from './Cart';
import { useContext, useEffect, useState } from 'react';
import { OrderContext } from '../context/OrderContext';
import { StyledProductAmountNumber } from './styled/StyledProductAmountNumber';

export const CartSpan = () => {
  const [isToggled, setIsToggled] = useState(() => false);
  const { order } = useContext(OrderContext);
  const [productAmount, setProductAmount] = useState(0);

  const toggleCart = () => {
    setIsToggled(!isToggled);
  };

  useEffect(() => {
    let amount = 0;
    order.orderRows.forEach((row) => {
      amount += row.amount;
    });
    setProductAmount(amount);
  }, [order]);

  return (
    <>
      <StyledProductAmountNumber>{productAmount}</StyledProductAmountNumber>
      <StyledCartButton
        onClick={toggleCart}
        className="material-symbols-outlined"
      >
        shopping_cart
      </StyledCartButton>
      {isToggled ? <Cart /> : null}
    </>
  );
};
