import { useContext } from "react";
import { OrderForm } from "./OrderForm";
import { StyledLi } from "./styled/StyledLi";
import { StyledUL } from "./styled/StyledUL";
import { OrderContext } from "../context/OrderContext";
import { OrderList } from "./OrderList";
import { StyledCheckoutWrapper} from "./styled/Wrappers";
import { OrderRow } from "../models/OrderRow";
import { StyledH2 } from "./styled/StyledH2";

export const Checkout = () => {
  const {order} = useContext(OrderContext)
  return <>
    <StyledCheckoutWrapper>
    <StyledUL>
      {order.orderRows.map((row) => (
        <OrderList row={row} key={row.productId}></OrderList>
      ))}
    </StyledUL>
    <StyledH2>Total beställningssumma: {order.totalPrice} kr</StyledH2>
    <OrderForm></OrderForm>
    </StyledCheckoutWrapper>
  </>;
};
