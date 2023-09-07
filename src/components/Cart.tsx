import { OrderContext } from '../context/OrderContext';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { useContext } from 'react';
import { StyledCart } from './styled/StyledCart';
import { ActionType } from '../reducers/OrderReducer';

export const Cart = () => {
  const { order, dispatch } = useContext(OrderContext);

  return (
    <StyledCart>
      <p>Din kundvagn:</p>
      <ul>
        {order.orderRows.map((row) => (
          <div key={row.id}>
            {row.product}
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
        <p>Totalsumma: {order.totalPrice}</p>
      </ul>
      <StyledButtonPrimary>TILL KASSAN</StyledButtonPrimary>
    </StyledCart>
  );
};
