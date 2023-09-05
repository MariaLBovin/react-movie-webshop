import { IProductCategory } from '../models/IProductCategory';

export const useCategorydata = (
  movies: IProductCategory[],
  getCategoriesData: () => void
) => {
  if (movies.length === 0) {
    getCategoriesData();
  }
};
