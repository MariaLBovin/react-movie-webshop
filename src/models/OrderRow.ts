export class OrderRow {
  constructor(
    public productId: number,
    public product: string | null,
    public price: number,
    public amount: number,
  ) {}
}

// export class OrderRow {
//   constructor(
//     public id: number,
//     public name: string,
//     public price: number,
//     public amount: number,
//     public orderId: number
//   ) {}
// }
