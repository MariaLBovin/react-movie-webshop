import {
  getCategorysData,
  getMovieByIdData,
  getMoviesData,
} from './services/DataService';

function App() {
  const getMovies = () => {
    const movies = getMoviesData();

    console.log(movies);
  };

  const getMovie = () => {
    const movie = getMovieByIdData('dark');

    console.log(movie);
  };

  const getCategorys = () => {
    const category = getCategorysData();

    console.log(category);
  };

  return (
    <>
      <button onClick={getMovies}>get movies</button>
      <button onClick={getMovie}>get by name</button>
      <button onClick={getCategorys}>get categorys</button>
    </>
  );
}

export default App;
