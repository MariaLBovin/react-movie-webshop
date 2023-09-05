import { useContext } from 'react';
import { MoviesContext } from './context/MoviesContext';

export const Home = () => {
  const { movies, categories } = useContext(MoviesContext);

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
