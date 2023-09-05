
import { IMovie } from "../models/IMovie"
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary"
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary"
import { StyledLi } from "./styled/StyledLi"

interface IMovieProps {
    movie: IMovie
}
export const MovieList = ({movie}: IMovieProps) => {

  return (
    <StyledLi>
        <h3>{movie.name}</h3>
        <img src={movie.imageUrl} width={250}></img>
        <StyledButtonSecondary>Läs mer</StyledButtonSecondary>
        <StyledButtonPrimary>Köp</StyledButtonPrimary>
    </StyledLi>
  )
}
