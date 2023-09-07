import { css } from "styled-components"
import { StyledInput } from "./styled/StyledInput"
import { StyledLable } from "./styled/StyledLabel"
import { StyledH2 } from "./styled/StyledH2"
import { useState } from "react"

const customStyle = css`
    width: 30%;
    &::placeholder {
    color: #ffffff; 
  }
`

export const OrderForm = () => {

  const [createdBy, setCreatedBy] = useState('');
  const [companyId, setCompanyId] = useState('')

  return (
    <>
    <StyledH2>Beställningsformulär</StyledH2>
    <StyledInput 
    placeholder="Namn" 
    customStyle={customStyle} 
    onChange={(e) => setCreatedBy(e.target.value)} 
    >
    </StyledInput>
    <StyledInput 
    placeholder="Företags-id" 
    customStyle={customStyle} 
    onChange = {(e) => setCompanyId(e.target.value)}
    >
    </StyledInput>
    <StyledH2>Betalningsalternativ</StyledH2>
    <StyledLable>
        <StyledInput type='radio' name='Paypal' value='Paypal'></StyledInput>
        Paypal
    </StyledLable>
    <StyledLable>
        <StyledInput type='radio' name='Paypal' value='Paypal'></StyledInput>
        Annat
    </StyledLable>
    </>
  )
}
