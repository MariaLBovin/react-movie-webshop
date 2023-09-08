import { css } from "styled-components"
import { StyledInput } from "./styled/StyledInput"
import { StyledLable } from "./styled/StyledLabel"
import { StyledH2 } from "./styled/StyledH2"
import { ChangeEvent, useState } from "react"


export interface IFormData {
    createdBy: string,
    paymentMethod: string
}

interface IFormDataProps {
  saveFormData :(data:IFormData) => void
}

export const OrderForm = ({saveFormData} :IFormDataProps) => {
  const [inputValue, setInputValue] = useState('')
  const [paymentValue, setPaymentValue] = useState('')

  const handleSubmit = (e) => {
      setInputValue(e.target.value);
      setPaymentValue(paymentValue)

      const formData = {createdBy:inputValue, paymentMethod: paymentValue}

      saveFormData(formData)

  }

  return (
    <>
    <form onSubmit={handleSubmit}>
    <StyledH2>Beställningsformulär</StyledH2>
    <StyledInput 
    type='text'
    placeholder="Namn" 
    value={inputValue}
    onChange={handleInput} 
    >
    </StyledInput>
    <StyledH2>Betalningsalternativ</StyledH2>
    <StyledLable>
        <StyledInput 
        type='radio' 
        name='Paypal' 
        value='Paypal'
        checked = {paymentValue === 'Paypal'}
        onChange={handleInput}
        >
        </StyledInput>
        Paypal
    </StyledLable>
    <StyledLable>
        <StyledInput 
        type='radio' 
        name='Paypal' 
        value='Paypal'
        checked={paymentValue === null}
        onChange={handleInput}
        >
        </StyledInput>
        Annat
    </StyledLable>
    </form>
    </>
  )
}


