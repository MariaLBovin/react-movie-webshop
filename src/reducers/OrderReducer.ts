import { Order } from '../models/Order';
import { OrderRow } from '../models/OrderRow';

export interface IOrderAction {
  type: ActionType;
  payload: string;
}

export enum ActionType {
  ADDED_ORDER_ROW,
  REMOVED_ORDER_ROW,
  INCREASED_AMOUNT,
  DECREASED_AMOUNT,
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

      const existingRow = order.orderRows.find(
        (row) => row.product === data.name
      );

      if (existingRow) {
        const updatedRow = order.orderRows.map((row) => {
          if (row.product === data.name) {
            return { ...row, amount: row.amount + 1 };
          }
          return row;
        });
        return {
          ...order,
          totalPrice: order.totalPrice + data.price,
          orderRows: updatedRow,
        };
      } else {
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
    }

    case ActionType.REMOVED_ORDER_ROW: {
      const data = JSON.parse(action.payload) as OrderRow;

      return {
        ...order,
        totalPrice: order.totalPrice - data.price * data.amount,
        orderRows: [...order.orderRows.filter((row) => row.id !== data.id)],
      };
    }

    default:
      return order;
  }
};
