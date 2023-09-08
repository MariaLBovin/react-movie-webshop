import { OrderContext } from "../context/OrderContext";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { useContext } from "react";
import { StyledCart } from "./styled/StyledCart";
import { Link } from "react-router-dom";

interface ICartProps {
  toggleCart: () => void;
}

export const Cart = ({ toggleCart }: ICartProps) => {
  const { order } = useContext(OrderContext);

  return (
    <StyledCart>
      <p>Din kundvagn:</p>
      <ul>
        {order.orderRows.map((row) => (
          <div key={row.productId}>{row.product}</div>
        ))}
        <p>Totalsumma: {order.totalPrice}</p>
      </ul>
      <StyledButtonPrimary onClick={toggleCart}>
        <Link to={"/checkout"}>TILL KASSAN</Link>
      </StyledButtonPrimary>
    </StyledCart>
  );
};
