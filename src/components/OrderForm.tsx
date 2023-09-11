import { StyledInput } from './styled/StyledInput';
import { StyledLable } from './styled/StyledLabel';
import { StyledH2 } from './styled/StyledH2';
import { ChangeEvent, useContext, useState } from 'react';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { ActionType } from '../models/ActionType';
import { OrderContext } from '../context/OrderContext';
import { postOrderData } from '../services/DataService';

export class FormData {
  constructor(public createdBy: string, public paymentMethod: string) {}
}

export const OrderForm = () => {
  const { dispatch, order } = useContext(OrderContext);
  const [formState, setFormState] = useState({
    inputValue: '',
    paymentValue: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formState.inputValue, formState.paymentValue);
    console.log('formData: ', formData);

    dispatch({
      type: ActionType.ADDED_CUSTOMER,
      payload: JSON.stringify(formData),
      
    });

  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, inputValue: e.target.value });
  };

  const handlePaymentValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, paymentValue: e.target.value });
  };
  const handlePost = () => {
    console.log(order);
    
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <StyledH2>Beställningsformulär</StyledH2>
        <StyledInput
          type="text"
          placeholder="Namn"
          value={formState.inputValue}
          onChange={handleInputValue}
        ></StyledInput>
        <StyledH2>Betalningsalternativ</StyledH2>
        <StyledLable>
          <StyledInput
            type="radio"
            name="Paypal"
            value="Paypal"
            checked={formState.paymentValue === 'Paypal'}
            onChange={handlePaymentValue}
          ></StyledInput>
          Paypal
        </StyledLable>
        {/* <StyledLable>
          <StyledInput
            type="radio"
            name="null"
            value="null"
            checked={formState.paymentValue === null}
            onChange={handlePaymentValue}
          ></StyledInput>
          Annat
        </StyledLable> */}
        <StyledButtonPrimary onClick={handlePost}>Köp</StyledButtonPrimary>
        {/* <StyledLable>
          <StyledInput
            type="radio"
            name="Paypal"
            value="Paypal"
            checked={paymentValue === null}
            onChange={}
          ></StyledInput>
          Annat
        </StyledLable> */}
      </form>
      
    </>
  );
};
