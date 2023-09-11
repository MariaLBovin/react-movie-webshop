import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router';
import { MoviesContext } from './context/MoviesContext';
import { useLocalStorage } from './hooks/useStorage';
import { useCategorydata } from './hooks/useCategoryData';
import { useMovieData } from './hooks/useMovieData';
import { IMovie } from './models/IMovie';
import { IProductCategory } from './models/IProductCategory';
import { Order } from './models/Order';
import { getMoviesData, getCategoriesData } from './services/DataService';
import { useReducer, useState } from 'react';
import { OrderReducer } from './reducers/OrderReducer';
import { OrderContext } from './context/OrderContext';
import { useGetOrder } from './hooks/useGetOrder';

function App() {
  const [storedOrder, setStoredOrder] = useLocalStorage<Order>(
    'order',
    new Order('', '', 0, [])
  );
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [categories, setCategories] = useState<IProductCategory[]>([]);
  const [order, dispatch] = useReducer(OrderReducer, storedOrder);

  const getData = async () => {
    setMovies(await getMoviesData());
    setCategories(await getCategoriesData());
  };

  useMovieData(movies, getData);
  useCategorydata(categories, getData);
  useGetOrder(order, setStoredOrder);

  return (
    <>
      <OrderContext.Provider value={{ order, dispatch }}>
        <MoviesContext.Provider value={{ movies, categories }}>
          <RouterProvider router={router}></RouterProvider>
        </MoviesContext.Provider>
      </OrderContext.Provider>
    </>
  );
}

export default App;
