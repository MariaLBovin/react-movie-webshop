import { OrderContext } from '../context/OrderContext';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { useContext } from 'react';
import { StyledCart } from './styled/StyledCart';
import { OrderRow } from '../models/OrderRow';
import { ActionType } from '../models/ActionType';
import { Link } from 'react-router-dom';

export const Cart = () => {
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
      <p>Din kundvagn:</p>
      <ul>
        {order.orderRows.map((row, index) => (
          <div key={index}>
            {row.product}
            <p>
              antal: {row.amount}, pris: {row.price} kr
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
              Ta bort
            </StyledButtonPrimary>
          </div>
        ))}
        <p>Totalsumma: {order.totalPrice} kr</p>
      </ul>
      {order.orderRows.length !== 0 && (
        <StyledButtonPrimary>
          <Link to={'/checkout'}>TILL KASSAN</Link>
        </StyledButtonPrimary>
      )}
    </StyledCart>
  );
};
