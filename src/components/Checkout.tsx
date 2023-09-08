import { useContext } from "react";
import { FormData, OrderForm } from "./OrderForm";
import { StyledUL } from "./styled/StyledUL";
import { OrderContext } from "../context/OrderContext";
import { OrderList } from "./OrderList";
import { StyledCheckoutWrapper } from "./styled/Wrappers";
import { StyledH2 } from "./styled/StyledH2";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { ActionType } from "../reducers/OrderReducer";

export const Checkout = () => {
  const { dispatch, order } = useContext(OrderContext);

  const saveFormData = (formData: FormData) => {
    // handleBuy(formData);

    dispatch({
      type: ActionType.ADDED_CUSTOMER,
      payload: JSON.stringify(formData),
    });
  };

  // const handleBuy = (formData: FormData) => {
  //   console.log("formData: ", formData);
  //   // localStorage.removeItem('order')
  // };

  const handleReset = () => {
    console.log("rensa");
  };
  return (
    <>
      <StyledCheckoutWrapper>
        <StyledUL>
          {order.orderRows.map((row) => (
            <OrderList row={row} key={row.productId}></OrderList>
          ))}
        </StyledUL>
        <StyledH2>Total beställningssumma: {order.totalPrice} kr</StyledH2>
        <OrderForm saveFormData={saveFormData}></OrderForm>
        <StyledButtonSecondary onClick={handleReset}>
          Rensa
        </StyledButtonSecondary>
      </StyledCheckoutWrapper>
    </>
  );
};
