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
  UPDATED_TOTAL_PRICE,
}

export const OrderReducer = (order: Order, action: IOrderAction) => {
  switch (action.type) {
    case ActionType.ADDED_ORDER_ROW: {
      return {
        ...order,
        orderRows: [
          ...order.orderRows,
          new OrderRow(0, 2, action.payload, 1, 1),
        ],
      };
    }

    case ActionType.REMOVED_ORDER_ROW: {
      return;
    }

    case ActionType.UPDATED_TOTAL_PRICE: {
      return;
    }

    case ActionType.ADDED_CUSTOMER: {
      return;
    }

    default:
      break;
  }

  return order;
};
