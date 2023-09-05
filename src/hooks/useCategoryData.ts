import { IProductCategory } from '../models/IProductCategory';

export const useCategorydata = (
  categories: IProductCategory[],
  getCategoriesData: () => void
) => {
  if (categories.length === 0) {
    getCategoriesData();
  }
  return categories;
};
