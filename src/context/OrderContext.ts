import { Dispatch, createContext } from 'react';
import { Order } from '../models/Order';
import { IOrderAction } from '../reducers/OrderReducer';

export interface IOrderContext {
  order: Order;
  dispatch: Dispatch<IOrderAction>;
}

export const OrderContext = createContext<IOrderContext>({
  order: new Order(0, null, '', '', 0, null, []),
  dispatch: () => {
    return;
  },
});
