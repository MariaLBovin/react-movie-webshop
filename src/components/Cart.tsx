import { IMovie } from "../models/IMovie";

export const Cart = () => {
  const cartMock = localStorage.getItem("movies");
  const cartContent = cartMock ? JSON.parse(cartMock) : [];
  const mockCart = cartContent.slice(0, 5);
  const amount = 3;
  const totalAmount = 400;

  return (
    <div>
      <p>Din kundvagn:</p>
      <ul>
        {mockCart.map((movie: IMovie) => (
          <li key={movie.id}>
            <img
              style={{ maxWidth: "50px" }}
              src={movie.imageUrl}
              alt={movie.name}
            />
            {movie.name} summa: {movie.price * amount}
          </li>
        ))}
        Totalsumma: {totalAmount}
      </ul>
    </div>
  );
};
