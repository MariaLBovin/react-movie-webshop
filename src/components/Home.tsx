import { useCategorydata } from '../hooks/useCategoryData';
import { useMovieData } from '../hooks/useMovieData';
import { useLocalStorage } from '../hooks/useStorage';
import { IMovie } from '../models/IMovie';
import { IProductCategory } from '../models/IProductCategory';
import { Order } from '../models/Order';
import { getCategoriesData, getMoviesData } from '../services/DataService';

export const Home = () => {
  const [movies, setMovies] = useLocalStorage<IMovie[]>('movies', []);
  const [categories, setCategories] = useLocalStorage<IProductCategory[]>(
    'categories',
    []
  );
  const [order, setOrder] = useLocalStorage<Order>(
    'order',
    new Order(0, null, '', '', 0, null, [])
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
      <h2>movies</h2>
      {movies.map((movie) => (
        <div key={movie.id}>{movie.name}</div>
      ))}
      <h2>categories</h2>
      {categories.map((category) => (
        <div key={category.id}>{category.name}</div>
      ))}
    </>
  );
};
