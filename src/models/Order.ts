import { OrderRow } from './OrderRow';

export class Order {
  constructor(
    public createdBy: string,
    public paymentMethod: string,
    public totalPrice: number,
    public orderRows: OrderRow[]
  ) {}
}
