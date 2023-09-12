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
        <StyledH2>Thank you for your purchase {order.createdBy}!</StyledH2>
        <StyledButtonPrimary
          as="a"
          href="/"
          onClick={() => localStorage.removeItem('order')}
        >
          Back
        </StyledButtonPrimary>
      </StyledCheckoutWrapper>
    </>
  );
};
