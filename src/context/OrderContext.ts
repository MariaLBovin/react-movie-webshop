import { Dispatch, createContext } from 'react';
import { Order } from '../models/Order';
import { IOrderAction } from '../reducers/OrderReducer';

export interface IOrderContext {
  order: Order;
  dispatch: Dispatch<IOrderAction>;
}

export const OrderContext = createContext<IOrderContext>({
  order: new Order(
    Math.random(),
    0,
    new Date().toISOString(),
    '',
    '',
    0,
    0,
    []
  ),

  dispatch: () => {
    return;
  },
});
