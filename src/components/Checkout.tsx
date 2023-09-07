import { useContext } from "react";
import { OrderForm } from "./OrderForm";
import { StyledUL } from "./styled/StyledUL";
import { OrderContext } from "../context/OrderContext";
import { OrderList } from "./OrderList";
import { StyledCheckoutWrapper} from "./styled/Wrappers";
import { StyledH2 } from "./styled/StyledH2";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";


export const Checkout = () => {
  const {order} = useContext(OrderContext)
  
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
    <OrderForm></OrderForm>
    <StyledButtonPrimary  onClick={handleBuy}>Köp</StyledButtonPrimary>
    <StyledButtonSecondary onClick={handleReset}>Rensa</StyledButtonSecondary>
    </StyledCheckoutWrapper>
  </>;
};
