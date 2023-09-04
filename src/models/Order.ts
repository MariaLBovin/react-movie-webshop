import { IOrderRows } from './IOrderRows';

export class Order {
  constructor(
    public id: number,
    public companyId: number,
    public created: string,
    public paymentMethod: string,
    public totalPrice: number,
    public status: number,
    public orderRows: IOrderRows[]
  ) {}
}
