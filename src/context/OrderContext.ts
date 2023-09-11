import { Dispatch, createContext } from "react";
import { Order } from "../models/Order";
import { IOrderAction } from "../reducers/OrderReducer";

export interface IOrderContext {
  order: Order;
  dispatch: Dispatch<IOrderAction>;
}

export const OrderContext = createContext<IOrderContext>({
<<<<<<< HEAD
  order: new Order(0, new Date().toISOString(), "", "", 0, 0, []),

=======
  order: new Order('', '', 0, []),
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
  dispatch: () => {
    return;
  },
});
