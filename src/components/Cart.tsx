import { OrderContext } from '../context/OrderContext';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { useContext } from 'react';
import { StyledCart } from './styled/StyledCart';
import { ActionType } from '../reducers/OrderReducer';
import { OrderRow } from '../models/OrderRow';

export const Cart = () => {
  const { order, dispatch } = useContext(OrderContext);

  const handleClick = (row: OrderRow) => {
    if (row.amount === 1) {
      dispatch({
        type: ActionType.REMOVED_ORDER_ROW,
        payload: JSON.stringify(row),
      });
    } else {
      dispatch({
        type: ActionType.DECREASED_AMOUNT,
        payload: JSON.stringify(row),
      });
    }
  };

  return (
    <StyledCart>
      <p>Din kundvagn:</p>
      <ul>
        {order.orderRows.map((row) => (
          <div key={row.id}>
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
      <StyledButtonPrimary disabled={order.orderRows.length === 0}>
        TILL KASSAN
      </StyledButtonPrimary>
    </StyledCart>
  );
};
