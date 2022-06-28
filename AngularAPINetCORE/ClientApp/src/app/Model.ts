export class Model {
  categoryName;
  products;

  constructor() {
    this.categoryName = "Telefon";
    this.products = [
      { id: 1, name: "İphone 5", price: 700, isActive: true },
      { id: 2, name: "İphone 6", price: 1100, isActive: false },
      { id: 3, name: "İphone 7", price: 2150, isActive: true },
      { id: 4, name: "İphone 8", price: 3500, isActive: false }
    ];


  }
}


