import { IMovie } from "../models/IMovie";
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary";
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary";
import { StyledLi } from "./styled/StyledLi";
import { StyledImage } from "./styled/StyledImage";
import { useContext } from "react";
import { OrderContext } from "../context/OrderContext";
<<<<<<< HEAD
import { ActionType } from "../reducers/OrderReducer";
=======
import { StyledButtonWrapper } from "./styled/Wrappers";
import { StyledMovieCardBottomSection } from "./styled/StyledMovieCardBottomSection";
import { ActionType } from "../models/ActionType";
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073

const fallbackImg = "./src/assets/fallbackImg.png";

interface IMovieProps {
  movie: IMovie;
}
export const MovieList = ({ movie }: IMovieProps) => {
  const { dispatch } = useContext(OrderContext);

  return (
    <StyledLi>
<<<<<<< HEAD
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
      <StyledButtonPrimary
        onClick={() =>
          dispatch({
            type: ActionType.ADDED_ORDER_ROW,
            payload: JSON.stringify(movie),
          })
        }
      >
        Köp
      </StyledButtonPrimary>
      <StyledButtonPrimary
        disabled={order.orderRows.length === 0}
        onClick={() =>
          dispatch({
            type: ActionType.REMOVED_ORDER_ROW,
            payload: JSON.stringify(movie),
          })
        }
      >
        Ta bort
      </StyledButtonPrimary>
=======
      <div>
        <StyledImage
          src={movie.imageUrl}
          width={250}
          onError={(e) => {
            e.currentTarget.src = fallbackImg;
          }}
        ></StyledImage>
      </div>
      <StyledMovieCardBottomSection>
        <h3>{movie.name}</h3>
        <StyledButtonSecondary as="a" href={"./movie/" + movie.id}>
          Läs mer
        </StyledButtonSecondary>
        <StyledButtonWrapper>
          <StyledButtonPrimary
            onClick={() =>
              dispatch({
                type: ActionType.ADDED_ORDER_ROW,
                payload: JSON.stringify(movie),
              })
            }
          >
            Köp
          </StyledButtonPrimary>
          <StyledButtonSecondary
            onClick={() =>
              dispatch({
                type: ActionType.REMOVED_ORDER_ROW,
                payload: JSON.stringify(movie),
              })
            }
          >
            Ta bort
          </StyledButtonSecondary>
        </StyledButtonWrapper>
      </StyledMovieCardBottomSection>
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
    </StyledLi>
  );
};
