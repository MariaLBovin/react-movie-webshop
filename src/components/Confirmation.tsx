import { useContext } from 'react';
import { StyledH2 } from './styled/StyledH2';
import { StyledCheckoutWrapper } from './styled/Wrappers';
import { OrderContext } from '../context/OrderContext';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';

export const Confirmation = () => {
  const { order } = useContext(OrderContext);

  return (
    <>
      <StyledCheckoutWrapper>
        <StyledH2>Tack för ditt köp {order.createdBy}!</StyledH2>
        <h3>Här är din order</h3>
        {order.orderRows.map((object, index) => (
          <div key={index} className="movie-checkout">
            <h4>Vara: {object.product}</h4>
            <p>Antal: {object.amount}</p>
            <p> Pris: {object.price} kr</p>
          </div>
        ))}
        <p>Betalningsmetod: {order.paymentMethod}</p>
        <p>Summa: {order.totalPrice} kr</p>
        <StyledButtonPrimary as="a" href="/">
          Tillbaka
        </StyledButtonPrimary>
      </StyledCheckoutWrapper>
    </>
  );
};
