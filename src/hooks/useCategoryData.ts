import { useEffect } from 'react';
import { IProductCategory } from '../models/IProductCategory';

export const useCategorydata = (
  categories: IProductCategory[],
  getCategoriesData: () => void
) => {
  useEffect(() => {
    if (categories.length === 0) {
      getCategoriesData();
    }
  });
};
