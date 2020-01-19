import { Product } from './models/product.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'inventory-app';
  productsList: Product[];

  constructor() {
    this.productsList = [
      new Product('18934', 'Blue Shirt', 234.13, ['Female', 'Accessories', 'Watches'], '../assets/images/black.jpg'),
      new Product('18934', 'Complete Business Outfit', 234.13, ['Male', 'Jackets', 'Leather Jackets'], '../assets/images/business.jpg'),
      new Product('18934', 'Shoes with Shirt', 234.13, ['Men', 'Shoes', 'Brown Shoes'], '../assets/images/clothes.jpg')
    ];
  }

  productWasSelected($event) {
    console.dir($event);
  }

}
