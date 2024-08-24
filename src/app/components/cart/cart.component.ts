import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CurrencyPipe } from '@angular/common';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule,MatListModule, MatIconModule, CurrencyPipe],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
  private cartService = inject(CartService);

  cartItems = this.cartService.getCartItems;
  totalPrice = this.cartService.getTotalPrice;

  removeItem(productId: number) {
    this.cartService.removeFromCart(productId);
  }

  checkout() {
    // Implementar lógica de pago
    console.log('Procesando pago...');
    this.cartService.clearCart();
  }

}
