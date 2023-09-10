import { useEffect } from 'react';
import { IProductCategory } from '../models/IProductCategory';

export const useCategorydata = (
  categories: IProductCategory[],
  getData: () => void
) => {
  useEffect(() => {
    if (categories.length === 0) {
      getData();
    }
  }, [categories, getData]);
};
