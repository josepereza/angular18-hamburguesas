import { Injectable, computed, signal } from '@angular/core';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = signal<Product[]>([
    { id: 1, name: 'Hamburguesa Clásica', price: 8.99, category: 'hamburguesa', image: 'burguer3.jpg' },
    { id: 2, name: 'Refresco Cola', price: 2.50, category: 'bebida', image: 'cocacola.jpeg' },
    { id: 8, name: 'Refresco Fanta', price: 2.50, category: 'bebida', image: 'fanta.jpeg' },

    { id: 3, name: 'Helado de Vainilla', price: 3.99, category: 'postre', image: 'helado.jpg' },
    { id: 9, name: 'Tarta', price: 7.99, category: 'postre', image: 'tarta.jpg' },

    { id: 4, name: 'Ensalada César', price: 6.99, category: 'ensalada', image: 'cesar.jpg' },
    { id: 10, name: 'Ensalada 1', price: 6.99, category: 'ensalada', image: 'ensalada1.jpg' },
    { id: 11, name: 'Ensalada 2', price: 2.99, category: 'ensalada', image: 'cesar.jpg' },


    { id: 5, name: 'Hamburguesa Clásica2', price: 8.99, category: 'hamburguesa', image: 'burguer4.jpg' },
    { id: 6, name: 'Hamburguesa Clásica3', price: 9.99, category: 'hamburguesa', image: 'burguer3.jpg'  },
    { id: 7, name: 'Hamburguesa Clásica4', price: 12.99, category: 'hamburguesa', image: 'burguer4.jpg' },


    // Añade más productos aquí
  ]);

  getProducts() {
    return this.products;
  }

  getProductsByCategory(category: string) {
    console.log('categoria en servicio', category)
    return signal( this.products().filter(product => product.category === category));
  }

 
}