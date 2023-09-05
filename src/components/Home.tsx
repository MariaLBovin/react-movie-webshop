import { useMovieData } from '../hooks/useMovieData';
import { useLocalStorage } from '../hooks/useStorage';
import { IMovie } from '../models/IMovie';
import { getMoviesData } from '../services/DataService';

export const Home = () => {
  const [movies, setMovies] = useLocalStorage<IMovie[]>('movies', []);

  const getData = async () => {
    const response = await getMoviesData();
    setMovies(response);
  };

  useMovieData(movies, getData);
  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
    </>
  );
};
