import { IMovie } from '../models/IMovie';
import { Order } from '../models/Order';
import { OrderRow } from '../models/OrderRow';

export interface IOrderAction<T> {
  type: ActionType;
  payload: T;
}

export enum ActionType {
  ADDED_ORDER_ROW,
  REMOVED_ORDER_ROW,
  ADDED_CUSTOMER,
}

export const OrderReducer = <T>(order: Order, action: IOrderAction<T>) => {
  const MOVIE = action.payload as IMovie;
  // const ORDER = action.payload as Order;
  // const ORDER_ROW = action.payload as OrderRow;

  switch (action.type) {
    case ActionType.ADDED_ORDER_ROW: {
      return {
        ...order,
        totalPrice: order.totalPrice + MOVIE.price,
        orderRows: [
          ...order.orderRows,
          new OrderRow(MOVIE.id, MOVIE.name, MOVIE.price, 1, Math.random()),
        ],
      };
    }

    case ActionType.REMOVED_ORDER_ROW: {
      const indexToRemove = order.orderRows.findIndex(
        (row) => row.name === MOVIE.name
      );

      if (indexToRemove !== -1) {
        const updatedOrderRows = [...order.orderRows];
        const removedMovie = updatedOrderRows.splice(indexToRemove, 1)[0];

        return {
          ...order,
          totalPrice: order.totalPrice - removedMovie.price,
          orderRows: updatedOrderRows,
        };
      }

      return order;
    }

    case ActionType.ADDED_CUSTOMER: {
      return {
        ...order,
        createdBy: action.payload,
        paymentMethod: action.payload,
      };
    }

    default:
      break;
  }

  return order;
};
