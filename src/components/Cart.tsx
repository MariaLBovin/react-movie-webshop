import { OrderContext } from '../context/OrderContext';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { useContext } from 'react';
import { StyledCart } from './styled/StyledCart';
import { OrderRow } from '../models/OrderRow';
import { ActionType } from '../models/ActionType';
import { Link } from 'react-router-dom';

interface ICartProps {
  toggleCart: () => void;
}

export const Cart = ({ toggleCart }: ICartProps) => {
  const { order, dispatch } = useContext(OrderContext);

  const handleClick = (row: OrderRow) => {
    {
      row.amount === 1
        ? dispatch({
            type: ActionType.REMOVED_ORDER_ROW,
            payload: JSON.stringify(row),
          })
        : dispatch({
            type: ActionType.DECREASED_AMOUNT,
            payload: JSON.stringify(row),
          });
    }
  };

  return (
    <StyledCart>
      <p>Your order:</p>
      <ul>
        {order.orderRows.map((row, index) => (
          <div key={index}>
            {row.product}
            <p>
              amount: {row.amount}, price: {row.price} kr
            </p>
            <button onClick={() => handleClick(row)}>-</button>
            <button
              onClick={() =>
                dispatch({
                  type: ActionType.INCREASED_AMOUNT,
                  payload: JSON.stringify(row),
                })
              }
            >
              +
            </button>
            <StyledButtonPrimary
              disabled={order.orderRows.length === 0}
              onClick={() =>
                dispatch({
                  type: ActionType.REMOVED_ORDER_ROW,
                  payload: JSON.stringify(row),
                })
              }
            >
              Remove
            </StyledButtonPrimary>
          </div>
        ))}
        <p>Total price: {order.totalPrice} kr</p>
      </ul>
      {order.orderRows.length !== 0 && (
        <StyledButtonPrimary>
          <Link to={'/checkout'} onClick={toggleCart}>
            Checkout
          </Link>
        </StyledButtonPrimary>
      )}
    </StyledCart>
  );
};
