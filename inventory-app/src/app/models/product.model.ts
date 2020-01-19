export class Product {
  constructor(
    public sku: string,
    public name: string,
    public price: number,
    public department: string[],
    public imageUrl: string
  ) {}
}
