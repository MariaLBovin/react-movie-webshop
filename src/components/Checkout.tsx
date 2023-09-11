import { useContext } from 'react';
import { OrderForm } from './OrderForm';
import { StyledUL } from './styled/StyledUL';
import { OrderContext } from '../context/OrderContext';
// import { OrderList } from "./OrderList";
import { StyledCheckoutWrapper } from './styled/Wrappers';
import { StyledH2 } from './styled/StyledH2';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { Link } from 'react-router-dom';
import { ActionType } from '../models/ActionType';

export const Checkout = () => {
  const { order, dispatch } = useContext(OrderContext);

  const handleReset = () => {
    localStorage.removeItem('order');

    dispatch({
      type: ActionType.CLEARED_ORDER,
      payload: '',
    });
  };

  return (
    <>
      <StyledCheckoutWrapper>
        <StyledUL>
          {/* {order.orderRows.map((row) => (
            <OrderList row={row} key={row.productId}></OrderList>
          ))} */}
        </StyledUL>
        <StyledH2>Total beställningssumma: {order.totalPrice} kr</StyledH2>
        <OrderForm></OrderForm>
        <Link to="/">
          <StyledButtonSecondary onClick={handleReset}>
            Rensa
          </StyledButtonSecondary>
        </Link>
      </StyledCheckoutWrapper>
    </>
  );
};
