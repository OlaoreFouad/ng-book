import { Product } from './../../models/product.model';
import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.scss']
})
export class ProductRowComponent implements OnInit {

  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'selected';

  constructor() {
  }

  ngOnInit() {

  }

}
