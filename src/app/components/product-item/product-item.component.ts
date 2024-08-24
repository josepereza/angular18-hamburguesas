import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';
import {MatCardModule} from '@angular/material/card';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [MatCardModule, CurrencyPipe],
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.css'
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter<Product>();

  onAddToCart() {
    this.addToCart.emit(this.product);
  }

}
