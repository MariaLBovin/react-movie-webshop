import { useContext } from "react";
import { IFormData, OrderForm } from "./OrderForm";
import { StyledUL } from "./styled/StyledUL";
import { OrderContext } from "../context/OrderContext";
import { OrderList } from "./OrderList";
import { StyledCheckoutWrapper} from "./styled/Wrappers";
import { StyledH2 } from "./styled/StyledH2";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { ActionType } from "../reducers/OrderReducer";


export const Checkout = () => {
  const {dispatch, order} = useContext(OrderContext)

  const handleFormData = (formData :IFormData ) => {
    dispatch({type: ActionType.ADDED_CUSTOMER, payload: JSON.stringify(formData)})
    console.log(formData);
    
  }
  
  const handleBuy = () => {
    console.log('köp', order);
    // localStorage.removeItem('order')
    
}
  const handleReset = () => {
    console.log('rensa');
    
  }
  return <>
    <StyledCheckoutWrapper>
    <StyledUL>
      {order.orderRows.map((row) => (
        <OrderList row={row} key={row.productId}></OrderList>
      ))}
    </StyledUL>
    <StyledH2>Total beställningssumma: {order.totalPrice} kr</StyledH2>
    <OrderForm saveFormData={handleFormData}></OrderForm>
    <StyledButtonPrimary  onClick={handleBuy}>Köp</StyledButtonPrimary>
    <StyledButtonSecondary onClick={handleReset}>Rensa</StyledButtonSecondary>
    </StyledCheckoutWrapper>
  </>;
};


