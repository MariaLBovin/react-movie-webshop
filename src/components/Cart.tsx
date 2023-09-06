import { IMovie } from "../models/IMovie";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";

export const Cart = () => {
  const cartMock = localStorage.getItem('cart');
  const cartContent = cartMock ? JSON.parse(cartMock) : [];

  return (
    <div>
      <p>Din kundvagn:</p>
      <ul>
        {cartContent.map((movie: IMovie) => (
          <li key={movie.id}>
            {movie.name} {movie.price}
          </li>
        ))}
      </ul>
            <StyledButtonPrimary>TILL KASSAN</StyledButtonPrimary>
      </div>
    );
  };