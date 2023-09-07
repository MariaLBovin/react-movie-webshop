import { useEffect } from 'react';
import { IMovie } from '../models/IMovie';

export const useMovieData = (movies: IMovie[], getMoviesData: () => void) => {
  useEffect(() => {
    if (movies.length === 0) {
      getMoviesData();
    }
  });
};
