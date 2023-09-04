import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import {
  getCategorysData,
  getMovieByNameData,
  getMoviesData,
} from './services/DataService';

function App() {
  // const getMovies = async () => {
  //   const movies = await getMoviesData();
  //   console.log(movies);
  // };

  // const getMovieByName = async () => {
  //   const movie = await getMovieByNameData('dark');
  //   console.log(movie);
  // };

  // const getCategorys = async () => {
  //   const category = await getCategorysData();
  //   console.log(category);
  // };

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      {/* <button onClick={getMovies}>get movies</button>
      <button onClick={getMovieByName}>get by name</button>
      <button onClick={getCategorys}>get categorys</button> */}
    </>
  );
}

export default App;
