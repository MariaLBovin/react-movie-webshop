import { IMovie } from '../models/IMovie';

export const useMovieData = (movies: IMovie[], getMoviesData: () => void) => {
  if (movies.length === 0) {
    getMoviesData();
  }
  return movies;
};
