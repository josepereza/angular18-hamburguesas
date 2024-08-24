import { Injectable, signal, computed } from '@angular/core';
import { CartItem } from '../interfaces/cart-item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems = signal<CartItem[]>([]);

  getCartItems = computed(() => this.cartItems());

  getTotalItems = computed(() => this.cartItems().reduce((total, item) => total + item.quantity, 0));

  getTotalPrice = computed(() => this.cartItems().reduce((total, item) => total + (item.product.price * item.quantity), 0));
  
  getNumItems= computed(()=>this.cartItems().length )
  
  addToCart(item: CartItem) {
    this.cartItems.update(items => {
      const existingItem = items.find(i => i.product.id === item.product.id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
        return [...items];
      } else {
        return [...items, item];
      }
    });
  }

  removeFromCart(productId: number) {
    this.cartItems.update(items => items.filter(item => item.product.id !== productId));
  }

  clearCart() {
    this.cartItems.set([]);
  }
}