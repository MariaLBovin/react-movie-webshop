import { css } from 'styled-components';
import { StyledInput } from './styled/StyledInput';
import { StyledCheckoutWrapper } from './styled/Wrappers';
import { StyledLable } from './styled/StyledLabel';
import { StyledH2 } from './styled/StyledH2';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';

const customStyle = css`
  width: 30%;
  &::placeholder {
    color: #ffffff;
  }
`;

export const OrderForm = () => {
  const handleBuy = () => {
    console.log('köp');
    // localStorage.removeItem('order')
  };

  return (
    <>
      <StyledCheckoutWrapper>
        <StyledH2>Beställningsformulär</StyledH2>
        <StyledInput placeholder='Namn' customStyle={customStyle}></StyledInput>
        <StyledInput
          placeholder='Företags-id'
          customStyle={customStyle}
        ></StyledInput>
        <StyledH2>Betalningsalternativ</StyledH2>
        <StyledLable>
          <StyledInput type='radio' name='Paypal' value='Paypal'></StyledInput>
          Paypal
        </StyledLable>
        <StyledLable>
          <StyledInput type='radio' name='Paypal' value='Paypal'></StyledInput>
          Annat
        </StyledLable>
        <StyledButtonPrimary as='a' href={'./confirmation'} onClick={handleBuy}>
          Köp
        </StyledButtonPrimary>
        <StyledButtonSecondary>Rensa</StyledButtonSecondary>
      </StyledCheckoutWrapper>
    </>
  );
};
