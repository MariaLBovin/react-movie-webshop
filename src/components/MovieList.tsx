
import { Link } from "react-router-dom"
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
        <Link to={'./movie/' + movie.id}>
        <StyledButtonSecondary>Läs mer</StyledButtonSecondary>
        </Link>
        <StyledButtonPrimary>Köp</StyledButtonPrimary>
    </StyledLi>
  )
}
