export class Model {
  products: Array<Product>;

  constructor() {
    this.products = [
      new Product(1, "İphone 5", 700, true),
      new Product(2, "İphone 6", 1100, false),
      new Product(3, "İphone 7", 2150, false),
      new Product(4, "İphone 8", 3500, true),
      new Product(5, "İphone 11", 13300, true)
    ];
  }
}

export class Product {
  id: number;
  name: string;
  price: number;
  isActive: boolean;

  constructor(id: number, name: string, price: number, isActive: boolean) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}

