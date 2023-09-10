import { useEffect } from 'react';
import { IMovie } from '../models/IMovie';

export const useMovieData = (movies: IMovie[], getData: () => void) => {
  useEffect(() => {
    if (movies.length === 0) {
      getData();
    }
  }, [movies, getData]);
};
