import { useEffect } from 'react';
import { Order } from '../models/Order';

export const useGetOrder = (
  order: Order,
  setStoredOrder: (order: Order) => void
) => {
  useEffect(() => {
    if (order) {
      setStoredOrder(order);
    }
  });
};
