import { useMovieData } from '../hooks/useMovieData';
import { useLocalStorage } from '../hooks/useStorage';
import { IMovie } from '../models/IMovie';
import { getMoviesData } from '../services/DataService';
import { MovieList } from './MovieList';
import { StyledUL } from './styled/StyledUL';
import { StyledMain, StyledMoviesWrapper } from './styled/Wrappers';

export const Home = () => {
  const [movies, setMovies] = useLocalStorage<IMovie[]>('movies', []);

  const getData = async () => {
    const response = await getMoviesData();
    setMovies(response);
  };

  useMovieData(movies, getData);
  return (
    <>
    <StyledMain>
      {/* Här kommer sidebar ligga */}
    <StyledMoviesWrapper>
    <StyledUL>
    {movies.map((movie) => (
        <MovieList movie={movie} key={movie.id}></MovieList>
      ))}
    </StyledUL>
    </StyledMoviesWrapper>
    </StyledMain>
    </>
  );
};
