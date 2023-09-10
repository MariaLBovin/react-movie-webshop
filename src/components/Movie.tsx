import { useParams } from 'react-router-dom';
import { IMovie } from '../models/IMovie';
import { StyledMovieWrapper } from './styled/Wrappers';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { StyledImage } from './styled/StyledImage';
import { useContext } from 'react';
import { MoviesContext } from '../context/MoviesContext';
import { OrderContext } from '../context/OrderContext';
import { ActionType } from '../models/ActionType';
// import { OrderContext } from '../context/OrderContext';

export const Movie = () => {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  const { dispatch } = useContext(OrderContext);

  const foundMovie = movies.find(
    (movie: IMovie) => JSON.stringify(movie.id) === id
  ) as IMovie;

  //Replace image wrapping div with StyledImageWrapper

  return (
    <StyledMovieWrapper>
      <StyledImage src={foundMovie.imageUrl} alt={foundMovie.name} />
      <h2>{foundMovie.name}</h2>
      <p>{foundMovie.description}</p>
      <p>{foundMovie.price}kr</p>
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
    </StyledMovieWrapper>
  );
};
