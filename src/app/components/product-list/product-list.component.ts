import { Component, inject, signal } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { Product } from '../../interfaces/product';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { ProductService } from '../../services/product.service';
import { ProductItemComponent } from '../product-item/product-item.component';
import { JsonPipe,  TitleCasePipe } from '@angular/common';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [MatGridListModule, ProductItemComponent, TitleCasePipe,JsonPipe],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  categoryName = '';
  filteredProducts = signal<Product[]>([]);

  products = this.productService.getProducts();

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.categoryName = params['category'];
      this.filteredProducts.set(this.productService.getProductsByCategory(this.categoryName)());
    });
  }

  addToCart(product: Product) {
    this.cartService.addToCart({ product, quantity: 1 });
  }
}
