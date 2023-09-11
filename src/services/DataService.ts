
import { IMovie } from "../models/IMovie";
import { IProductCategory } from "../models/IProductCategory";
import { Order } from "../models/Order";
import { get, post } from "./DataServiceBase";

const BASE_URL = "https://medieinstitutet-wie-products.azurewebsites.net/api/";

export const getMoviesData = async (): Promise<IMovie[]> => {
  return await get<IMovie[]>(`${BASE_URL}products`);
};

export const getMovieByNameData = async (url: string): Promise<IMovie> => {
  return await get<IMovie>(`${BASE_URL}search?searchtext=${url}`);
};

export const getCategoriesData = async (): Promise<IProductCategory[]> => {
  return await get<IProductCategory[]>(`${BASE_URL}categories/`);
};

export const postOrderData = async (order: Order): Promise<Order> => {
  return await post<Order>(`${BASE_URL}/orders/${order}`);
};
