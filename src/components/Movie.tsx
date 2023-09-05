import { useParams } from "react-router-dom";
import { IMovie } from "../models/IMovie";

export const Movie = () => {
  const { id } = useParams();
  const movies = JSON.parse(localStorage.getItem("movies") || "[]");

  const foundMovie = movies.find(
    (movie: IMovie) => JSON.stringify(movie.id) === id
  );

  return <>{foundMovie.name}</>;
};
