export class OrderRow {
  constructor(
    public id: number,
    public productId: number,
    public product: string,
    public amount: number,
    public orderId: number
  ) {}
}
