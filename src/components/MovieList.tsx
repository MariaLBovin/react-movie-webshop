import { IMovie } from '../models/IMovie';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { StyledLi } from './styled/StyledLi';

interface IMovieProps {
  movie: IMovie;
}
export const MovieList = ({ movie }: IMovieProps) => {
  return (
    <StyledLi>
      <img
        src={movie.imageUrl}
        width={250}
        alt={movie.name}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = './src/assets/fallbackImg.png';
          currentTarget.loading = 'lazy';
        }}
      />
      <h3>{movie.name}</h3>
      <StyledButtonSecondary>Läs mer</StyledButtonSecondary>
      <StyledButtonPrimary>Köp</StyledButtonPrimary>
    </StyledLi>
  );
};
