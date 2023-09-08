import axios from "axios";
import { IMovie } from "../models/IMovie";
import { IProductCategory } from "../models/IProductCategory";
import { Order } from "../models/Order";
import { get } from "./DataServiceBase";

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

export const postOrder = async (order: Order) => {
  console.log(order);

  try {
    const response = await axios.post(`${BASE_URL}orders`, order);
    console.log(response.data);

    return response.data;
  } catch (error) {
    console.error("lyckades inte skicka data", error);
    throw error;
  }
};
