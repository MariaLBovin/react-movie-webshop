import { Order } from '../models/Order';

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
      return;
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
