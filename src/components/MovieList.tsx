import { IMovie } from "../models/IMovie";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { StyledLi } from "./styled/StyledLi";
import { StyledImage } from "./styled/StyledImage";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
import { ActionType } from "../reducers/OrderReducer";
import { OrderRow } from "../models/OrderRow";

const fallbackImg = "./src/assets/fallbackImg.png";

interface IMovieProps {
  movie: IMovie;
}
export const MovieList = ({ movie }: IMovieProps) => {
  const { dispatch } = useContext(OrderContext);
  return (
    <StyledLi>
      <StyledImage
        src={movie.imageUrl}
        width={250}
        onError={(e) => {
          e.currentTarget.src = fallbackImg;
        }}
      ></StyledImage>
      <h3>{movie.name}</h3>
      <StyledButtonSecondary as="a" href={"./movie/" + movie.id}>
        Läs mer
      </StyledButtonSecondary>
      <div style={{ display: "flex", height: "60px" }}>
        <StyledButtonPrimary
          onClick={() =>
            dispatch({ type: ActionType.ADDED_ORDER_ROW, payload: movie })
          }
        >
          Köp
        </StyledButtonPrimary>
        <StyledButtonSecondary
          onClick={() =>
            dispatch({ type: ActionType.REMOVED_ORDER_ROW, payload: movie })
          }
        >
          Ta bort
        </StyledButtonSecondary>
      </div>
    </StyledLi>
  );
};
