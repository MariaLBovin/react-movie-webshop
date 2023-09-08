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

  const [formData, setFormData] = useState({
    createdBy: '',
    paymentMethod: ''
  })

  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const {name ,value} = e.target;
    setFormData({...formData, [name]: value})

    saveFormData(formData)
  }

  return (
    <>
    <StyledH2>Beställningsformulär</StyledH2>
    <StyledInput 
    type='text'
    placeholder="Namn" 
    value={formData.createdBy}
    onChange={handleInput} 
    >
    </StyledInput>
    <StyledH2>Betalningsalternativ</StyledH2>
    <StyledLable>
        <StyledInput 
        type='radio' 
        name='Paypal' 
        value='Paypal'
        checked = {formData.paymentMethod === 'Paypal'}
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
        checked={formData.paymentMethod === null}
        onChange={handleInput}
        >
        </StyledInput>
        Annat
    </StyledLable>
    </>
  )
}


