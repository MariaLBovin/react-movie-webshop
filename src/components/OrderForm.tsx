<<<<<<< HEAD
import { StyledInput } from "./styled/StyledInput";
import { StyledLable } from "./styled/StyledLabel";
import { StyledH2 } from "./styled/StyledH2";
import { ChangeEvent, useContext, useState } from "react";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { ActionType } from "../reducers/OrderReducer";
import { OrderContext } from "../context/OrderContext";
import { postOrder } from "../services/DataService";
=======
import { StyledInput } from './styled/StyledInput';
import { StyledLable } from './styled/StyledLabel';
import { StyledH2 } from './styled/StyledH2';
import { ChangeEvent, useContext, useState } from 'react';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { ActionType } from '../models/ActionType';
import { OrderContext } from '../context/OrderContext';
import { postOrderData } from '../services/DataService';
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073

export class FormData {
  constructor(public createdBy: string, public paymentMethod: string) {}
}

export const OrderForm = () => {
  const { dispatch, order } = useContext(OrderContext);
  const [formState, setFormState] = useState({
<<<<<<< HEAD
    inputValue: "",
    paymentValue: "",
=======
    inputValue: '',
    paymentValue: '',
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formState.inputValue, formState.paymentValue);
<<<<<<< HEAD
    console.log("formData: ", formData);
=======
    console.log('formData: ', formData);
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073

    dispatch({
      type: ActionType.ADDED_CUSTOMER,
      payload: JSON.stringify(formData),
    });

    console.log(order);

<<<<<<< HEAD
    postOrder(order);
    localStorage.removeItem("order");
=======
    postOrderData(order);
    localStorage.removeItem('order');
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
  };

  const handleInputValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, inputValue: e.target.value });
  };

  const handlePaymentValue = (e: ChangeEvent<HTMLInputElement>) => {
    setFormState({ ...formState, paymentValue: e.target.value });
  };

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
<<<<<<< HEAD
            checked={formState.paymentValue === "Paypal"}
=======
            checked={formState.paymentValue === 'Paypal'}
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
            onChange={handlePaymentValue}
          ></StyledInput>
          Paypal
        </StyledLable>
        <StyledButtonPrimary>Köp</StyledButtonPrimary>
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
