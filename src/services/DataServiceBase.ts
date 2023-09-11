<<<<<<< HEAD
import axios from "axios";
=======
import axios from 'axios';
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073

export const get = async <T>(url: string) => {
  try {
    const response = await axios.get<T>(`${url}`);
    return response.data;
  } catch (error) {
<<<<<<< HEAD
    console.error("lyckades inte hämta data", error);
=======
    console.error('lyckades inte hämta data', error);
    throw error;
  }
};

export const post = async <T>(url: string) => {
  try {
    const response = await axios.post<T>(`${url}`);
    return response.data;
  } catch (error) {
    console.error('lyckades inte skicka data', error);
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
    throw error;
  }
};
