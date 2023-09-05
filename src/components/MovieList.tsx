
import { IMovie } from "../models/IMovie"
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary"
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary"
import { StyledLi } from "./styled/StyledLi"

const fallbackImg = './src/assets/fallbackImg.png'

interface IMovieProps {
    movie: IMovie
}
export const MovieList = ({movie}: IMovieProps) => {
  const handleImageError = (event) => {
    event.target.src = fallbackImg;
  };


  return (
    <StyledLi>
        <img
          src={movie.imageUrl}
          width={250}
          alt={movie.name}
          onError={handleImageError} // Lägg till onError-händelse
        />
        <h3>{movie.name}</h3>
        <StyledButtonSecondary>Läs mer</StyledButtonSecondary>
        <StyledButtonPrimary>Köp</StyledButtonPrimary>
    </StyledLi>
  )
}
