import { Product } from './../../models/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input() products: Product[];
  @Output() productSelected: EventEmitter<Product>;

  currentProduct: Product;

  constructor() {
    this.productSelected = new EventEmitter();
  }

  clicked(p: Product) {
    this.currentProduct = p;
    this.productSelected.emit(p);
  }

  isSelected(product: Product) {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }

  ngOnInit() {
  }

}
