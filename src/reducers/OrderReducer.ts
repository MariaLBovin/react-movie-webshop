import { IMovie } from '../models/IMovie';
import { Order } from '../models/Order';
import { OrderRow } from '../models/OrderRow';

export interface IOrderAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_ORDER_ROW,
  REMOVED_ORDER_ROW,
  ADDED_CUSTOMER,
}

export const OrderReducer = (order: Order, action: IOrderAction) => {
  switch (action.type) {
    case ActionType.ADDED_ORDER_ROW: {
      const data = JSON.parse(action.payload) as {
        price: number;
        amount: number;
        id: number;
        name: string;
      };
      return {
        ...order,
        totalPrice: order.totalPrice + data.price,
        orderRows: [
          ...order.orderRows,
          new OrderRow(
            Math.random(),
            data.id,
            data.name,
            data.price,
            1,
            Math.random()
          ),
        ],
      };
    }
    case ActionType.REMOVED_ORDER_ROW: {
      const data = JSON.parse(action.payload) as IMovie;

      const updatedOrderRows = [...order.orderRows];

      const indexToRemove = updatedOrderRows.findIndex(
        (row) => row.productId === data.id
      );

      if (indexToRemove !== -1) {
        updatedOrderRows.splice(indexToRemove, 1);
      }

      return {
        ...order,
        totalPrice: order.totalPrice - data.price,
        orderRows: updatedOrderRows,
      };
    }
    case ActionType.ADDED_CUSTOMER: {
      const data = JSON.parse(action.payload) as {
        createdBy: string,
        paymentMethod: string,
      }
      return {
          ... order, 
          createdBy: data.createdBy,
          paymentMethod: data.paymentMethod

      }
    }
    default:
      return order;
  }
};
