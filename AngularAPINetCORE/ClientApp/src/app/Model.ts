export class Model {
  products;

  constructor() {
    this.products = [
      new Product(1,"iphone 5",1000,true),
      new Product(2,"iphone 6",2000,false),
      new Product(3,"iphone 7",3000,true),
      new Product(4,"iphone 8",4000,false),
      new Product(5,"iphone 11",5000,true)
    ];
  }
}

export class Product {
  id: number;
  name: string;
  price: number;
  isActive: boolean;

  constructor(id, name, price, isActive) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.isActive = isActive;
  }
}

