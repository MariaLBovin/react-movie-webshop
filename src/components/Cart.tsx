import { OrderContext } from "../context/OrderContext";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { useContext } from "react"
import { MoviesContext } from "../context/MoviesContext";
import { ActionType } from "../reducers/OrderReducer";
import { StyledCart } from "./styled/StyledCart";

export const Cart = () => {
  const {movies} = useContext(MoviesContext)
  const {order, dispatch} = useContext(OrderContext)
        
  return (
    <StyledCart>
      <p>Din kundvagn:</p>
      <ul>
        {order.orderRows.map((row) => 
          <div key={row.id}>{row.name}</div>)}
      <p>Totalsumma: { order.totalPrice }</p>
      </ul>
      <StyledButtonPrimary>TILL KASSAN</StyledButtonPrimary>
      </StyledCart>
    );
  };