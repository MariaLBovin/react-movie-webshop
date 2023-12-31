import { useParams } from 'react-router-dom';
import { IMovie } from '../models/IMovie';
import { StyledMovieWrapper } from './styled/Wrappers';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { OrderContext } from '../context/OrderContext';
import { ActionType } from '../models/ActionType';
import { StyledMovieImage } from './styled/StyledMovieImage';
import { StyledMovie } from './styled/StyledMovie';
// import { OrderContext } from '../context/OrderContext';

export const Movie = () => {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  const { dispatch } = useContext(OrderContext);

  const foundMovie = movies.find((movie: IMovie) => JSON.stringify(movie.id) === id) as IMovie || {};

  return (
    <StyledMovieWrapper>
      <StyledMovieImage src={foundMovie.imageUrl} alt={foundMovie.name} />
      <StyledMovie>
        <h2>{foundMovie.name}</h2>
        <p>{foundMovie.description}</p>
        <div>
          <span>{foundMovie.price}kr</span>
          <StyledButtonPrimary
            onClick={() =>
              dispatch({
                type: ActionType.ADDED_ORDER_ROW,
                payload: JSON.stringify(foundMovie),
              })
            }
          >
            Buy
          </StyledButtonPrimary>
          <StyledButtonSecondary as='a' href='/'>
            Take me back
          </StyledButtonSecondary>
        </div>
      </StyledMovie>
    </StyledMovieWrapper>
  );
};
