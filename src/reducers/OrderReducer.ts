import { IMovie } from '../models/IMovie';
import { Order } from '../models/Order';
import { OrderRow } from '../models/OrderRow';

export interface IOrderAction {
  type: ActionType;
  payload: IMovie;
}

export enum ActionType {
  ADDED_ORDER_ROW,
  REMOVED_ORDER_ROW,
  ADDED_CUSTOMER,
}

export const OrderReducer = (order: Order, action: IOrderAction) => {
  switch (action.type) {
    case ActionType.ADDED_ORDER_ROW: {
      return {
        ...order,
        totalPrice: order.totalPrice + action.payload.price,
        orderRows: [
          ...order.orderRows,
          new OrderRow(
            action.payload.id,
            action.payload.name,
            action.payload.price,
            1,
            Math.random()
          ),
        ],
      };
    }

    case ActionType.REMOVED_ORDER_ROW: {
      return {
        ...order,
        totalPrice: order.totalPrice - action.payload.price,
        orderRows: order.orderRows.filter(
          (orderRow) => orderRow.id !== action.payload.id
        ),
      };
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
