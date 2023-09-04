import axios from 'axios';
import { Order } from '../models/Order';

export const get = async <T>(url: string) => {
  try {
    const response = await axios.get<T>(`${url}`);
    return response.data;
  } catch (error) {
    console.error('lyckades inte hämta data', error);
    throw error;
  }
};

export const post = async <T>(url: Order) => {
  try {
    const response = await axios.post<T>(`${url}`);
    return response.data;
  } catch (error) {
    console.error('lyckades inte skicka data', error);
    throw error;
  }
};
