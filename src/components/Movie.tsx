import { useParams } from 'react-router-dom';
import { IMovie } from '../models/IMovie';
import { StyledMovieWrapper } from './styled/Wrappers';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';

export const Movie = () => {
  const { id } = useParams();
  const movies = JSON.parse(localStorage.getItem('movies') || '[]');

  const foundMovie = movies.find(
    (movie: IMovie) => JSON.stringify(movie.id) === id
  );

  //Replace image wrapping div with StyledImageWrapper

  return (
    <StyledMovieWrapper>
      <div>
        <img src={foundMovie.imageUrl} alt={foundMovie.title} />
      </div>
      <h2>{foundMovie.title}</h2>
      <p>{foundMovie.description}</p>
      <p>{foundMovie.price}kr</p>
      <StyledButtonPrimary>Buy</StyledButtonPrimary>
      <StyledButtonSecondary>Read more</StyledButtonSecondary>
    </StyledMovieWrapper>
  );
};
