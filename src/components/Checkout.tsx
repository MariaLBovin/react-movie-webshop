<<<<<<< HEAD
import { useContext } from "react";
import { FormData, OrderForm } from "./OrderForm";
import { StyledUL } from "./styled/StyledUL";
import { OrderContext } from "../context/OrderContext";
import { OrderList } from "./OrderList";
import { StyledCheckoutWrapper } from "./styled/Wrappers";
import { StyledH2 } from "./styled/StyledH2";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
=======
import { useContext } from 'react';
import { OrderForm } from './OrderForm';
import { StyledUL } from './styled/StyledUL';
import { OrderContext } from '../context/OrderContext';
// import { OrderList } from "./OrderList";
import { StyledCheckoutWrapper } from './styled/Wrappers';
import { StyledH2 } from './styled/StyledH2';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073

export const Checkout = () => {
  const { order } = useContext(OrderContext);

  const handleReset = () => {
<<<<<<< HEAD
    console.log("rensa");
=======
    console.log('rensa');
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
  };

  return (
    <>
      <StyledCheckoutWrapper>
        <StyledUL>
<<<<<<< HEAD
          {order.orderRows.map((row) => (
            <OrderList row={row} key={row.productId}></OrderList>
          ))}
=======
          {/* {order.orderRows.map((row) => (
            <OrderList row={row} key={row.productId}></OrderList>
          ))} */}
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
        </StyledUL>
        <StyledH2>Total beställningssumma: {order.totalPrice} kr</StyledH2>
        <OrderForm></OrderForm>
        <StyledButtonSecondary onClick={handleReset}>
          Rensa
        </StyledButtonSecondary>
      </StyledCheckoutWrapper>
    </>
  );
};
