import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'products/:category', component: ProductListComponent },
    { path: 'cart', component: CartComponent }

];
