import { OrderContext } from '../context/OrderContext';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { useContext } from 'react';
import { StyledCart } from './styled/StyledCart';

export const Cart = () => {
  const { order } = useContext(OrderContext);

  return (
    <StyledCart>
      <p>Din kundvagn:</p>
      <ul>
        {order.orderRows.map((row) => (
          <div key={row.id}>{row.product}</div>
        ))}
        <p>Totalsumma: {order.totalPrice}</p>
      </ul>
      <StyledButtonPrimary>TILL KASSAN</StyledButtonPrimary>
    </StyledCart>
  );
};
