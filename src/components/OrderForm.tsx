import { css } from "styled-components";
import { StyledInput } from "./styled/StyledInput";
import { StyledLable } from "./styled/StyledLabel";
import { StyledH2 } from "./styled/StyledH2";
import { ChangeEvent, useState } from "react";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";

export class FormData {
  constructor(public createdBy: string, public paymentMethod: string) {}
}

interface IOrderFormProps {
  saveFormData: (data: FormData) => void;
}

export const OrderForm = ({ saveFormData }: IOrderFormProps) => {
  const [formState, setFormState] = useState({
    inputValue: "",
    paymentValue: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(formState.inputValue, formState.paymentValue);
    console.log("formData: ", formData);

    saveFormData(formData);
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
            checked={formState.paymentValue === "Paypal"}
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
