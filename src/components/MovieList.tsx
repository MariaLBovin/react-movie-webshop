
import { Link } from "react-router-dom"
import { IMovie } from "../models/IMovie"
import { StyledButtonPrimary } from "./styled/StyledButtonPrimary"
import { StyledButtonSecondary } from "./styled/StyledButtonSecondary"
import { StyledLi } from "./styled/StyledLi"
import { StyledImage } from "./styled/StyledImage"

interface IMovieProps {
    movie: IMovie
}
export const MovieList = ({movie}: IMovieProps) => {

  return (
    <StyledLi>
        <h3>{movie.name}</h3>
        <StyledImage src={movie.imageUrl} width={250}></StyledImage>
        <StyledButtonSecondary as='a' href={'./movie/' + movie.id}>Läs mer</StyledButtonSecondary>
        <StyledButtonPrimary>Köp</StyledButtonPrimary>
    </StyledLi>
  )
}
