import { useParams } from 'react-router-dom';
import { IMovie } from '../models/IMovie';
import { StyledMovieWrapper } from './styled/Wrappers';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { StyledImage } from './styled/StyledImage';
import { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';

export const Movie = () => {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);

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
      <StyledButtonPrimary>Buy</StyledButtonPrimary>
      <StyledButtonSecondary>Read more</StyledButtonSecondary>
    </StyledMovieWrapper>
  );
};
