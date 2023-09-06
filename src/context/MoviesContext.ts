import { createContext } from 'react';
import { IMovie } from '../models/IMovie';
import { IProductCategory } from '../models/IProductCategory';

export interface IMovieContext {
  movies: IMovie[];
  categories: IProductCategory[];
}

export const MoviesContext = createContext<IMovieContext>({
  movies: [],
  categories: [],
});
