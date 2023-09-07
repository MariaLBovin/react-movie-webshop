import { createContext } from "react";
import { IMovie } from "../models/IMovie";
import { IMovieCategory } from "../models/IMovieCategory";

export interface IMovieContext {
  movies: IMovie[];
  categories: IMovieCategory[];
}

export const MoviesContext = createContext<IMovieContext>({
  movies: [],
  categories: [],
});
