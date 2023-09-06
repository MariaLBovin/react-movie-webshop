import { IMovie } from '../models/IMovie';
import { StyledButtonPrimary } from './styled/StyledButtonPrimary';
import { StyledButtonSecondary } from './styled/StyledButtonSecondary';
import { StyledLi } from './styled/StyledLi';
import { StyledImage } from './styled/StyledImage';

const fallbackImg = './src/assets/fallbackImg.png';

interface IMovieProps {
  movie: IMovie;
}
export const MovieList = ({ movie }: IMovieProps) => {
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
      <StyledButtonSecondary as='a' href={'./movie/' + movie.id}>
        Läs mer
      </StyledButtonSecondary>
      <StyledButtonPrimary>Köp</StyledButtonPrimary>
    </StyledLi>
  );
};
