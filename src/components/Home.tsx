import { useCategorydata } from '../hooks/useCategoryData';
import { useMovieData } from '../hooks/useMovieData';
import { useLocalStorage } from '../hooks/useStorage';
import { IMovie } from '../models/IMovie';
import { getMoviesData } from '../services/DataService';
import { MovieList } from './MovieList';
import { StyledUL } from './styled/StyledUL';
import { StyledMain, StyledMoviesWrapper } from './styled/Wrappers';
import { IProductCategory } from '../models/IProductCategory';
import { getCategoriesData, getMoviesData } from '../services/DataService';


export const Home = () => {
  const [movies, setMovies] = useLocalStorage<IMovie[]>('movies', []);
  const [categories, setCategories] = useLocalStorage<IProductCategory[]>(
    'categories',
    []
  );

  const getData = async () => {
    const movieList = await getMoviesData();
    const categoriesList = await getCategoriesData();
    setMovies(movieList);
    setCategories(categoriesList);
  };

  useMovieData(movies, getData);
  useCategorydata(categories, getData);
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
      <h2>categories</h2>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </>
  );
};
