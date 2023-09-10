export class OrderRow {
  constructor(
    public productId: number,
    public product: string,
    public price: number,
    public amount: number,
    public orderId: number
  ) {}
}
