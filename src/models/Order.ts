import { OrderRow } from "./OrderRow";

export class Order {
  constructor(
<<<<<<< HEAD
    // public _id: number,
    public companyId: number | null,
    public created: string,
=======
>>>>>>> 07168ad7698978908276e7aed1c3c2f2d4f8c073
    public createdBy: string,
    public paymentMethod: string,
    public totalPrice: number,
    public orderRows: OrderRow[]
  ) {}
}
