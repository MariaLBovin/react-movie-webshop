import { OrderRow } from './OrderRow';

export class Order {
  constructor(
    public id: number,
    public companyId: number | null,
    public created: Date,
    public createdBy: string,
    public paymentMethod: string,
    public totalPrice: number,
    public status: number | null,
    public orderRows: OrderRow[]
  ) {}
}
